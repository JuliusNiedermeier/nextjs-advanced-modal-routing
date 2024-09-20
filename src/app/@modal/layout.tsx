"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";

export default ({ children }: PropsWithChildren): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { back } = useRouter();

  useEffect(() => dialogRef.current?.showModal(), []);

  return (
    <dialog
      ref={dialogRef}
      onClose={back}
      className="p-8 rounded-3xl backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-neutral-900"
    >
      {children}
    </dialog>
  );
};
