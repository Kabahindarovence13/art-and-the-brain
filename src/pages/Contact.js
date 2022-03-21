import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import ContactSideInfo from "../components/contact/ContactSideInfo";
import ContactForm from "../components/contact/ContactForm";
import GoogleMaps from "../components/contact/GoogleMaps";
import SEO from "../components/common/SEO";

export default function Contact() {
    return(
        <div>
            <SEO title="Contact" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Contact" 
            />

            <Divider />

            <div className="saasbox-contact-us-area">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-12 col-lg-5 col-xl-4">
                            <ContactSideInfo />
                        </div>

                        {/* Contact Form*/}
                        <div className="col-12 col-lg-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <GoogleMaps 
                mapSource="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.752292322534!2d32.5869594!3d0.3296293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d86d12b8d12eb%3A0xf702e15d47576e84!2sProtea%20Hotel%20by%20Marriott%20Kampala!5e0!3m2!1sen!2sug!4v1647878288345!5m2!1sen!2sug"
            />

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle=""
            />
        </div>
    )
}
