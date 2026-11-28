import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Official press kit for Srijith Poosarla: biography, photographs, resume and booking details.",
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}