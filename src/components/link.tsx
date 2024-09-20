import { FC, PropsWithChildren } from "react";
import NextLink from "next/link";

type LinkProps = {
  variant?: "filled" | "outline";
  href: string;
};

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  variant = "filled",
  href,
  children,
}) => {
  const variantClasses: Record<NonNullable<LinkProps["variant"]>, string> = {
    filled: "bg-foreground text-background hover:brightness-90",
    outline:
      "border border-solid border-white/[.145] hover:bg-[#1a1a1a] hover:border-transparent",
  };

  return (
    <NextLink
      href={href}
      className={`rounded-full transition-colors gap-2 px-6 py-3 outline-none focus:ring ${variantClasses[variant]}`}
    >
      {children}
    </NextLink>
  );
};
