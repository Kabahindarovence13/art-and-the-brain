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
                mapSource="https://www.google.com/maps/place/Protea+Hotel+by+Marriott+Kampala/@0.3296293,32.5869594,17.7z/data=!4m8!3m7!1s0x177d86d12b8d12eb:0xf702e15d47576e84!5m2!4m1!1i2!8m2!3d0.3287646!4d32.5879678"
            />

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle=""
            />
        </div>
    )
}
