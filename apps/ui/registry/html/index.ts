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
import buttonColors from "./button/button-colors";
import buttonSizes from "./button/button-sizes";
import buttonSoft from "./button/button-soft";
import buttonText from "./button/button-text";
import buttonGradient from "./button/button-gradient";
import buttonActive from "./button/button-active";
import buttonWide from "./button/button-wide";
import buttonBlock from "./button/button-block";
import buttonShapes from "./button/button-shapes";
import buttonIcon from "./button/button-icon";
import buttonLoading from "./button/button-loading";

export const HtmlIndex: Record<string, HtmlExample> = {
  // Button examples
  [buttonColors.name]: buttonColors,
  [buttonDefault.name]: buttonDefault,
  [buttonPrimary.name]: buttonPrimary,
  [buttonSecondary.name]: buttonSecondary,
  [buttonOutline.name]: buttonOutline,
  [buttonGhost.name]: buttonGhost,
  [buttonDestructive.name]: buttonDestructive,
  [buttonSm.name]: buttonSm,
  [buttonLg.name]: buttonLg,
  [buttonDisabled.name]: buttonDisabled,
  [buttonSizes.name]: buttonSizes,
  [buttonSoft.name]: buttonSoft,
  [buttonText.name]: buttonText,
  [buttonGradient.name]: buttonGradient,
  [buttonActive.name]: buttonActive,
  [buttonWide.name]: buttonWide,
  [buttonBlock.name]: buttonBlock,
  [buttonShapes.name]: buttonShapes,
  [buttonIcon.name]: buttonIcon,
  [buttonLoading.name]: buttonLoading,
};
