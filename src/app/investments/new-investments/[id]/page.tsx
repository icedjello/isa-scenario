"use client";
import { type InferSelectModel } from "drizzle-orm";
import React, { useEffect, useState, useCallback, type FormEvent } from "react";
import Card from "~/components/Card";
import { type products } from "~/server/db/schema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Button from "~/components/Button";
import { API_URL } from "~/app/consts";

const newInvestmentSchema = z.object({
  amount: z.number(),
});

type Props = {
  params: { id: number };
};

type Product = InferSelectModel<typeof products>;

export default function Page({ params }: Props) {
  const [productDetails, setProductDetails] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const getProductData = useCallback(async () => {
    try {
      const productRes = await fetch(`${API_URL}/products?id=${params.id}`, {
        cache: "no-store",
      });
      const productDetails = (await productRes.json()) as Product;
      setProductDetails(productDetails);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    void getProductData();
  }, [getProductData]);

  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(undefined);

    const formData = new FormData(event.currentTarget);
    const investmentAmount = formData.get("investmentAmount");

    const validatedInvestmentField = newInvestmentSchema.safeParse({
      amount: Number(investmentAmount),
    });

    if (validatedInvestmentField.error) {
      setError(validatedInvestmentField.error.issues[0]?.message);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/investments`, {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
          product_id: Number(params.id),
          value: validatedInvestmentField.data.amount,
        }),
      });
      if (!response.ok) {
        setError(response.statusText);
      } else {
        router.replace("/investments");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Your new ISA</h1>
      {!loading && productDetails && (
        <Card outer>
          <h2>{productDetails.name}</h2>
          <h3>Interest per Year: {productDetails.ipa}%</h3>
          <p>{productDetails.description}</p>
          <div>
            <form className="m-4" onSubmit={onSubmit}>
              <label
                htmlFor="investmentAmount"
                className="mb-2 block text-sm font-medium"
              >
                Enter the amount in pounds you would like to invest
              </label>
              <input
                required
                type="number"
                name="investmentAmount"
                className="mb-2 block w-1/3 rounded-lg border  border-companyPurple p-2.5 text-sm focus:border-companyBlue"
                placeholder="1500"
              />
              {error && <div style={{ color: "red" }}>{error}</div>}
              <Button type="submit">Add investment</Button>
            </form>
          </div>
        </Card>
      )}
    </main>
  );
}
