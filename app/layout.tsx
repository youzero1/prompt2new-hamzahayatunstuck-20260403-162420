import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PharmaCare - Your Trusted Pharmacy',
  description: 'Your one-stop pharmacy store for all your health and wellness needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
