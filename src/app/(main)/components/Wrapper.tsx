import { ReactNode } from 'react';

export default function Wrapper({
  id,
  children
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex h-screen w-screen flex-col justify-center gap-y-8 px-20 py-14"
    >
      {children}
    </section>
  );
}
