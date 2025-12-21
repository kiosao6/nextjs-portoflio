import localFont from 'next/font/local'
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = localFont({
  src: 'InterVariable.woff2',
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Gabriel Maestre | Web Developer',
  description: 'I create modern web applications focused on user experience and performance with meticulous attention to detail. Open to new opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Gabriel Maestre",
              "url": "https://gabrielmaestre.com"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased max-w-8xl`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
