import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';

export default function FooterCopywrite(props) {
    const {footerNavTwo} = props;

    const copywriteNavArr = footerNavTwo;
    const footerNavItems = copywriteNavArr.map((list, i) =>
        <li key={i}>
            <Link to={list.url}>{list.title}</Link>
        </li>
    )

    return(
        <div className="container">
            <div className="copywrite-wrapper mt-5 rounded d-lg-flex align-items-lg-center justify-content-lg-between">
                {/* Copywrite Text */}
                <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0 me-lg-4">
                    <p className="mb-0">
                        {new Date().getFullYear()} © All rights reserved by Dr.Amanda Tumusiime
                    </p>
                </div>

                {/* Footer Nav */}
                <div className="footer-nav mb-3 mb-lg-0 me-lg-4">
                    <ul className="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
                        {footerNavItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}