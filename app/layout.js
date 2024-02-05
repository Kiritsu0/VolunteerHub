import "./globals.css";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "VolunteerHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-400">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
