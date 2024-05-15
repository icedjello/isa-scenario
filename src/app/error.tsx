"use client";
import { useRouter } from "next/navigation";
import Button from "~/components/Button";
type Props = {
  error: Error;
};
export default function ErrorBoundary({ error }: Props) {
  const router = useRouter();
  return (
    <main>
      <h1 className="text-red-300">An error has occurred</h1>
      <h2 className="text-red-500">{error.message}</h2>
      <Button
        onClick={(event) => {
          event.preventDefault();
          router.replace("/");
        }}
      >
        Back to home
      </Button>
    </main>
  );
}
