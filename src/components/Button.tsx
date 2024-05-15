import { twMerge } from "tailwind-merge";

type Props = {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  additionalStyles?: string;
  children: React.ReactNode;
};

export default function Button({
  onClick,
  children,
  type = "button",
  additionalStyles,
}: Props) {
  return (
    <button
      type={type}
      className={twMerge(
        "bg-companyPink mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:ring-2",
        additionalStyles,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
