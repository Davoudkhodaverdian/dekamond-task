import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Dashboard Page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}