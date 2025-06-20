import './globals.css';
import { FilesProvider } from '@/context/FilesContext';

export const metadata = {
  title: "Gestor de archivos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FilesProvider>
          {children}
        </FilesProvider>
      </body>
    </html>
  );
}
