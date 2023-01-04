// These styles apply to every route in the application
import './globals.css';

// export default function RootLayout({ children }) {
//     return (
//       <html lang="en">
//         <head />
//         <body>{children}</body>
//       </html>
//     );
//   }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html>
        <head></head>
        <body>{children}</body>
      </html>
    );
  }
