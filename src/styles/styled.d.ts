import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bodyBg: string;
    textColor: string;
    paragraphColor: string;
    headerBg: string;
    typographyBorder: string;
    letterDistance: string;
    toggleBg: string;
  }
}