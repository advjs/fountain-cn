import type { Theme } from "vitepress";
import { VPTheme } from "vitepress-theme-you";
import "./styles/index.scss";

// https://github.com/antfu/unocss
import "uno.css";

const theme: Theme = {
  ...VPTheme,
  // enhanceApp({app}) => {}
}

export default theme
