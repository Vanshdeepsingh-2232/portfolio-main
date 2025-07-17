
import BackgroundPaths from "./BackgroundPaths";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BackgroundPaths>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
          {children}
        </main>
        <Footer />
      </div>
    </BackgroundPaths>
  );
}
