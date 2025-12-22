import { DocsSidebar } from "@/components/docs-sidebar";
import { htmlSource } from "@/lib/source";
import { SidebarProvider } from "@/registry/default/ui/sidebar";
import FlyonuiScript from "./FlyonuiScript";
import { Inter, Plus_Jakarta_Sans, DM_Sans, Outfit } from "next/font/google";

import "@/styles/flyoui.css";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Available fonts configuration
// Set active: true to enable a font
export const fonts = {
  inter: { name: "Inter", variable: "--font-inter", active: false },
  jakarta: { name: "Plus Jakarta Sans", variable: "--font-jakarta", active: false },
  dm: { name: "DM Sans", variable: "--font-dm", active: true },
  outfit: { name: "Outfit", variable: "--font-outfit", active: false },
};

export default function HtmlDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = `${inter.variable} ${plusJakarta.variable} ${dmSans.variable} ${outfit.variable}`;
  
  // Change font-family here to use different font:
  // var(--font-inter) | var(--font-jakarta) | var(--font-dm) | var(--font-outfit)
  const activeFont = "var(--font-inter)";
  
  return (
    <div className={fontClasses} style={{ fontFamily: activeFont }}>
      <main className="flex flex-1 flex-col">
        <SidebarProvider className="container min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
          <DocsSidebar tree={htmlSource.pageTree} framework="html" />
          <div className="h-full w-full">{children}</div>
        </SidebarProvider>
      </main>
      <FlyonuiScript />
    </div>
  );
}
