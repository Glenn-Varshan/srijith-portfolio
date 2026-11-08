
"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <motion.div
      key={pathname}
      initial={
        isContactPage
          ? { y: -45 }
          : { opacity: 0 }
      }
      animate={
        isContactPage
          ? { y: 0 }
          : { opacity: 1 }
      }
      transition={{
        duration: isContactPage ? 0.65 : 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
