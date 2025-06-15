import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auth Page",
  description: "Auth Page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}