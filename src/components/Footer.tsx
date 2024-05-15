import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-companyPurple mx-auto w-full  p-4 text-white md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/"
          className="mb-4 flex items-center space-x-3 self-center whitespace-nowrap text-2xl font-semibold sm:mb-0 rtl:space-x-reverse"
        >
          The Company
        </Link>
        <div className="mb-6 flex flex-wrap items-center text-sm font-medium">
          <Link href="#" className="me-4 hover:underline md:me-6">
            About
          </Link>
          <Link href="#" className="me-4 hover:underline md:me-6">
            Privacy Policy
          </Link>
          <Link href="#" className="me-4 hover:underline md:me-6">
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
