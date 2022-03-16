import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
// import CtaThree from "../components/cta/CtaThree";
import ServiceTwo from "../components/services/ServiceTwo";
import VideoCard from "../components/video/VideoCard";
import SEO from "../components/common/SEO";

export default function ServiceStandard() {
    return(
        <>
            <SEO title="About me" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="About me" 
                // homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Service" 
            />

            <div className="border" />

            <ServiceTwo />

            <VideoCard 
                bgImage="assets/img/bg-img/15.jpg" 
                videoId="Cjs2QjJme20" 
            />

     

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle=""
            />
        </>
    )
}