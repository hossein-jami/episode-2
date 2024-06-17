import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link> |<Link to={"/about"}>About</Link> |
      <Link to={"/contact"}>Contact me</Link> |
      <Link to={"/profile"}>Profile</Link> |<Link to={"/fetch"}>Fetchdata</Link>
    </nav>
  );
};
