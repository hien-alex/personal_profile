import { Link } from "react-router-dom";

function NavItem({ Item, PageURL }) {
  const style = {
    color: "white",
  };

  return (
    <Link to={PageURL} style={style}>
      <li>{Item}</li>
    </Link>
  );
}

export default NavItem;
