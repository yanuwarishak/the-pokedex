import Link from "next/link";
import navbarStyles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pokemons">Pokemons</Link>
        </li>
        <li>
          <Link href="/my-pokemons">My Pokemons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
