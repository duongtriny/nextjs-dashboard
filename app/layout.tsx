import '@/app/ui/global.css';
import { teko } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${teko.className}`}>{children}</body>
    </html>
  );
}
