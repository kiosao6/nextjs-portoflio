import localFont from 'next/font/local'
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = localFont({
  src: 'InterVariable.woff2',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Gabriel Maestre | Front-End Developer',
  description: 'I develop front-end websites using React and Next.js with meticulous attention to detail. Passionate about frontend technologies and seamless user interfaces. Available for work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.className} antialiased max-w-8xl`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  );
}
