import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function SaasboxNav() {
    return(
        <div className="navbar-nav navbar-nav-scroll">
            <Link to="/home" style={{padding: "20px"}}>Home</Link>
            <Link to="/portfolio" style={{ padding: "20px" }}>Portfolio</Link>
            <Link to="/blog" style={{ padding: "20px" }}>Blog</Link>
            <Link to="/service-standard" style={{ padding: "20px" }}>About me</Link>
            <Link to="/team" style={{ padding: "20px" }}>Team</Link>
            <Link to="/contact" style={{ padding: "20px" }}>Contact</Link>
            <Link to="/reviews" style={{ padding: "20px" }}>Reviews</Link>
        </div>
    )
}