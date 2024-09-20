import Image from "next/image";
import { Link } from "@/components/link";
import NextLink from "next/link";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="fixed w-full top-0 p-12 gap-4 flex items-center">
        <NextLink href="/" className="mr-auto">
          <Image
            className="invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </NextLink>
        <Link href="/signup">Signup</Link>
        <Link href="/pricing" variant="outline">
          Pricing
        </Link>
      </header>
      {children}
    </>
  );
}
