import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}