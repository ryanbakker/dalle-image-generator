import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "DALL•E Image Generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* PromptInput */}

        {children}
      </body>
    </html>
  );
}
