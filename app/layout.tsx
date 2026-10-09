import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'A blank Next.js + Postgres app.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full antialiased">{children}</body>
    </html>
  );
}
