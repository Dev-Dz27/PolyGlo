"use client";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    {children}
    <Analytics />
  </ThemeProvider>
);

export default Providers;
