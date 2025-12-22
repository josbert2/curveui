// HTML Component Registry for flyoui
// Uses Tailwind CSS classes

export interface HtmlExample {
  name: string;
  html: string;
  description?: string;
}

// Import all button examples
import buttonDefault from "./button/button-default";
import buttonPrimary from "./button/button-primary";
import buttonSecondary from "./button/button-secondary";
import buttonOutline from "./button/button-outline";
import buttonGhost from "./button/button-ghost";
import buttonDestructive from "./button/button-destructive";
import buttonSm from "./button/button-sm";
import buttonLg from "./button/button-lg";
import buttonDisabled from "./button/button-disabled";

export const HtmlIndex: Record<string, HtmlExample> = {
  // Button examples
  [buttonDefault.name]: buttonDefault,
  [buttonPrimary.name]: buttonPrimary,
  [buttonSecondary.name]: buttonSecondary,
  [buttonOutline.name]: buttonOutline,
  [buttonGhost.name]: buttonGhost,
  [buttonDestructive.name]: buttonDestructive,
  [buttonSm.name]: buttonSm,
  [buttonLg.name]: buttonLg,
  [buttonDisabled.name]: buttonDisabled,
};
