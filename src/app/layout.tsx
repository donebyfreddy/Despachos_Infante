import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Despacho Infante | Abogados de Excelencia en Madrid",
  description: "Despacho Infante - Bufete de abogados con más de 30 años de experiencia. Especialistas en derecho penal, civil y mercantil. Defendemos sus derechos con excelencia.",
  keywords: "abogados madrid, derecho penal, derecho civil, bufete de abogados, despacho infante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-body bg-[#0a0a0a] text-[#e8e4dc] antialiased">
        {children}
      </body>
    </html>
  );
}
