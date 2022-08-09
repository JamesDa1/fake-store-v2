import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../contextAPI/context"

const Navbar = () => {
  const { total, amount } = useGlobalContext()
  return (
    <nav className="myNav">
      <h3 className="siteTitle">FakeStore</h3>
      <div className="nav-links">
        <StyledNavLink to="/">Store</StyledNavLink>
        <StyledNavLink to="/CartPage">ShoppingCart</StyledNavLink>
      </div>
      <div className="cartInfo">
        <h4>
          Cart: {amount} items | Price: ${total}
        </h4>
      </div>
    </nav>
  )
}

export default Navbar

const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  color: #62fbd7;
  border: 4px solid #62fbd7;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`
