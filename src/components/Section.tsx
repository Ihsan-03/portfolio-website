import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
};

export function Section({ id, title, children, muted = false }: SectionProps) {
  return (
    <section id={id} className={muted ? 'bg-slate-100 py-20 dark:bg-slate-900/70' : 'py-20'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
