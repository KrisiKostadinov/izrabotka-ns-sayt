import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";
import ToastProvider from "./providers/toaster-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="dark" suppressHydrationWarning>
      <body>
        <GoogleAnalytics gaId="G-7Z0THRT08Y"  />
        <ToastProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
