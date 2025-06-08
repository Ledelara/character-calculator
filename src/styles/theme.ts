export const lightTheme = {
  bodyBg: "var(--neutral-0)",
  textColor: "var(--neutral-800)",
  paragraphColor: "var(--neutral-800)",
  headerBg: "var(--neutral-0)",
  typographyBorder: "var(--neutral-200)",
  toggleBg: "var(--neutral-200)",

  letterDistance: "var(--purple-400)",
};

export const darkTheme = {
  bodyBg: "var(--neutral-600)",
  textColor: "var(--neutral-0)",
  paragraphColor: "var(--neutral-0)",
  headerBg: "var(--neutral-600)",
  typographyBorder: "var(--neutral-200)",
  toggleBg: "var(--neutral-700)",

  letterDistance: "var(--purple-500)",
};


export type ThemeType = typeof lightTheme;