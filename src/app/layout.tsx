import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from 'next/head';
import ReduxProvider from "@/Providers/ReduxProvider";

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Restoran",
  description: "Acıktıysan, bir tık uzağındayız!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <div>
        <ReduxProvider>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </ReduxProvider>
        </div>
      </body>
    </html>
  );
}