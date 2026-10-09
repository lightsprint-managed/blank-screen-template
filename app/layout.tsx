import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'Start from an empty page and build whatever you like.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full antialiased">{children}</body>
    </html>
  );
}
