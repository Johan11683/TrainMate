import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />

      {/* Contenu spécifique à chaque page */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
