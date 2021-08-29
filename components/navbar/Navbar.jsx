import Link from "next/link";
import { useRouter } from "next/router";
import { NavContainer, ListContainer, ListItem } from "./Navbar.styles";

const Navbar = () => {
  const router = useRouter();

  return (
    <NavContainer>
      <ListContainer>
        <ListItem active={router.pathname === "/"}>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem active={router.pathname === "/pokemons"}>
          <Link href="/pokemons">Pokemons</Link>
        </ListItem>
        <ListItem active={router.pathname === "/my-pokemons"}>
          <Link href="/my-pokemons">My Pokemons</Link>
        </ListItem>
      </ListContainer>
    </NavContainer>
  );
};

export default Navbar;
