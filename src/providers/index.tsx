import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "blue", "purple", "tweakcn-light", "tweakcn-dark", "perpetuity-light", "perpetuity-dark"]}
    >
      <HeaderThemeProvider>{children}</HeaderThemeProvider>
    </ThemeProvider>
  )
}
