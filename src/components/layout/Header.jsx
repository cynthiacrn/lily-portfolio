import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="text-sm flex gap-6 mx-auto items-center justify-center py-6">
      <NavLink
        to="/"
        className="header__link"
      >
        P R O J E C T S
      </NavLink>
      <NavLink
        to="/about"
        className="header__link"
      >
        A B O U T
      </NavLink>
    </div>
  )
}

export default Header
