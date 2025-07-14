import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import '../../styles/header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="Logo TrainMate" className="header__logo" />
        <span className="header__title">TrainMate</span>
      </div>

      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/login">Se connecter</Link>
      </nav>
    </header>
  );
}
