import { DocsSidebar } from "@/components/docs-sidebar";
import { htmlSource } from "@/lib/source";
import { SidebarProvider } from "@/registry/default/ui/sidebar";
import FlyonuiScript from "./FlyonuiScript";
import { Inter, Plus_Jakarta_Sans, DM_Sans, Outfit } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/flyoui.css";

// Google Fonts
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

// Local Fonts
const avenir = localFont({
  src: [
    { path: "../../../public/fonts/Aveni/AvenirRegular.otf", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Aveni/AvenirProIt.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-avenir",
  display: "swap",
});

const pangram = localFont({
  src: [
    { path: "../../../public/fonts/Pangram-ExtraLight.otf", weight: "200" },
    { path: "../../../public/fonts/Pangram-Light.otf", weight: "300" },
    { path: "../../../public/fonts/Pangram-Regular.otf", weight: "400" },
    { path: "../../../public/fonts/Pangram-Medium.otf", weight: "500" },
    { path: "../../../public/fonts/Pangram-Bold.otf", weight: "700" },
    { path: "../../../public/fonts/Pangram-ExtraBold.otf", weight: "800" },
    { path: "../../../public/fonts/Pangram-Black.otf", weight: "900" },
  ],
  variable: "--font-pangram",
  display: "swap",
});

// Available fonts configuration
// Set active: true to enable a font
export const fonts = {
  inter: { name: "Inter", variable: "--font-inter", active: false },
  jakarta: { name: "Plus Jakarta Sans", variable: "--font-jakarta", active: false },
  dm: { name: "DM Sans", variable: "--font-dm", active: false },
  outfit: { name: "Outfit", variable: "--font-outfit", active: false },
  avenir: { name: "Avenir", variable: "--font-avenir", active: false },
  pangram: { name: "Pangram", variable: "--font-pangram", active: true },
};

export default function HtmlDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = `${inter.variable} ${plusJakarta.variable} ${dmSans.variable} ${outfit.variable} ${avenir.variable} ${pangram.variable}`;
  
  // Change font-family here to use different font:
  // var(--font-inter) | var(--font-jakarta) | var(--font-dm) | var(--font-outfit) | var(--font-avenir) | var(--font-pangram)
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
