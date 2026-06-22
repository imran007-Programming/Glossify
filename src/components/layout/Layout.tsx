import type { ReactNode } from 'react';
import Navbar from './Navbar';
import CategoryBar from './CategoryBar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
