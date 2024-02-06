export function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      {children}
    </div>
  );
}
