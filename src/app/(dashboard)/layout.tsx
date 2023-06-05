import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex flex-col mb-10 gap-x-4 w-1/6">
        <Link href="/">Home page</Link>
        <Link href="/sub-route">Sub page 1</Link>
        <Link href="/sub-route-2">Sub page 2</Link>
        <Link href="/sub-route-3">Sub page 3</Link>
      </div>

      <div>{children}</div>
    </div>
  );
}
