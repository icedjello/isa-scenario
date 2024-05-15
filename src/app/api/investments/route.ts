import type { NextRequest } from "next/server";
import { db } from "~/server/db";
import { investments } from "~/server/db/schema";
import { z } from "zod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const investmentId = searchParams.get("id");

  if (investmentId) {
    const investment = await db.query.investments.findFirst({
      where: (investment, { eq }) => eq(investment.id, Number(investmentId)),
    });

    if (investment) {
      return Response.json(investment);
    } else {
      return Response.json(null, {
        status: 404,
      });
    }
  } else {
    const investments = await db.query.investments.findMany();
    return Response.json(investments);
  }
}

const newInvestmentSchema = z.object({
  product_id: z.number(),
  value: z
    .number()
    .gte(50, { message: "The minimum you can invest is 50" })
    .lte(20000, { message: "the maximum you can invest is 20000" }),
});

export async function POST(request: NextRequest) {
  const reqJson = (await request.json()) as unknown;
  const zodResult = newInvestmentSchema.safeParse(reqJson);

  if (zodResult.success) {
    const investment = await db.insert(investments).values({
      product_id: zodResult.data.product_id,
      value: zodResult.data.value,
    });

    return Response.json(investment);
  } else {
    return Response.json(null, {
      status: 418,
      statusText: zodResult.error.errors[0]?.message,
    });
  }
}
