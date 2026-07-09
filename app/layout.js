export const metadata = {
  title: "Gorgona One",
  description: "Gorgona One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
