import { twMerge } from "tailwind-merge";

type Props = {
  outer?: boolean;
  additionalStyles?: string;
  children: React.ReactNode;
};

export default function Card({
  outer = false,
  additionalStyles,
  children,
}: Props) {
  return (
    <div
      className={twMerge(
        "border-2",
        outer
          ? "border-companyPink mb-8 h-full w-full rounded-lg p-4 "
          : "border-companyPurple m-2 rounded-md p-2",
        additionalStyles,
      )}
    >
      {children}
    </div>
  );
}
