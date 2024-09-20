import { FC } from "react";
import { Link } from "./link";

export const SignupForm: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="px-6 text-3xl font-medium text-neutral-100">Signup</span>
      <input
        className="mt-4 bg-neutral-800 rounded-full py-3 px-6 text-white outline-none focus:ring"
        placeholder="Email"
      />
      <Link href="/">Signup</Link>
    </div>
  );
};
