import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function SaasboxNav() {
    return(
        <div className="navbar-nav navbar-nav-scroll">
            <Link to="/saas-landing">Home</Link>
            <Link to="/portfolio-full-width">Portfolio</Link>
            <Link to="/blog-1">Blog</Link>
            <Link to="/service-standard">About me</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/reviews">Reviews</Link>
        </div>
    )
}