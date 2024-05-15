"use client";
import { useRouter } from "next/navigation";
import Button from "~/components/Button";

export default function NotFound() {
  const router = useRouter();
  return (
    <main>
      <h1>Sorry, that page does not exist.</h1>
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          router.replace("/");
        }}
      >
        Back to homepage
      </Button>
    </main>
  );
}
