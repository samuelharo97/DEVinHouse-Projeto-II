import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to={'/'}> Inicio </Link>
      </li>
      <li>
        <Link to={'/devices'}> Dispositivos </Link>
      </li>
      <li>
        <Link to={'/profile'}> Perfil </Link>
      </li>
    </ul>
  );
};
