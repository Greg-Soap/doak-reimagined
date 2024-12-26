export default function TabSections({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <section className="w-full flex flex-col">
      <p className="text-primary font-semibold border-b border-border py-3 px-9">
        {name}
      </p>

      {children}
    </section>
  );
}
