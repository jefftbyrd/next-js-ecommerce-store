import './globals.css';
import localFont from 'next/font/local';
import Link from 'next/link';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });
const groteskGras = localFont({
  src: './fonts/Grotesk-04Gras.woff',
  variable: '--font-grotesk-gras',
  weight: '900',
});
const groteskMince = localFont({
  src: './fonts/Grotesk-02Mince.woff',
  variable: '--font-grotesk-mince',
  weight: '900',
});

export const metadata = {
  title: {
    default: 'Home | Vector',
    template: '%s | Vector',
  },

  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${groteskGras.variable} ${groteskMince.variable}`}>
        <header>
          <div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/viruses">Viruses</Link>
              <Link href="/about">About</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}
