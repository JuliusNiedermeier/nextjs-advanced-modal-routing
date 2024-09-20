import { Link } from "@/components/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="h-full bg-neutral-900 grid place-content-center">
        <Link href="/" variant="outline">
          Back home
        </Link>
      </div>
      <div className="grid place-content-center h-full">{children}</div>
    </div>
  );
}
