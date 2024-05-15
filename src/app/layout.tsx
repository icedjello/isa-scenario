import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

export const metadata = {
  title: "ISAs & Pensions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
