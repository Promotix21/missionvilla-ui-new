import type { Metadata } from 'next';
import { Lora, Poppins, Allura } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mission Villa Senior Living | Memory Care & Respite Care in Daly City, CA',
  description:
    'Compassionate Memory Care and short-term Respite Care in a welcoming, homelike community at 995 East Market Street, Daly City, CA 94014. Call (650) 756-1995.',
  openGraph: {
    title: 'Mission Villa Senior Living | The Honor They Deserve, The Care You’ll Love',
    description:
      'Compassionate Memory Care and short-term Respite Care in a welcoming, homelike community at 995 East Market Street, Daly City, CA 94014.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Villa Senior Living | Daly City, CA',
    description:
      'Compassionate Memory Care and short-term Respite Care in a welcoming, homelike community at 995 East Market Street, Daly City, CA 94014.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable} ${allura.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-[#F7F4ED] text-[#29272B] selection:bg-[#3B2348] selection:text-[#F7F4ED] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
