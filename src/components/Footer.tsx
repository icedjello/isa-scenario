import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full bg-companyPurple p-4 text-white md:py-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 self-center whitespace-nowrap text-2xl font-semibold sm:mb-0 rtl:space-x-reverse"
        >
          The Company
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Licensing
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <span className="block text-center text-sm">
        © 2024{" "}
        <a href="#" className="hover:underline">
          The Company™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
