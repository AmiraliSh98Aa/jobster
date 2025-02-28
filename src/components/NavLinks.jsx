import { NavLink } from "react-router-dom"
import links from "../utils/links"

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link
        return <NavLink to={path} key={id} className={({ isActive }) => {
          return isActive ? 'nav-link active' : 'nav-link'
        }} onClick={toggleSidebar} end>
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      })}
    </div>
  )
}
export default NavLinks