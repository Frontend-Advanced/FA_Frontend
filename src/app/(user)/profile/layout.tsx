import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Advanced user profile",
  description: "View user profile, achievements, badges and certifications",
};

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>;
}
