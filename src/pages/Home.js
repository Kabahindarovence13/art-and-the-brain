import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import FeatureTwo from "../components/features/FeatureTwo";
import HeroThree from "../components/hero/HeroThree";
// import PartnerTwo from "../components/partner/PartnerTwo";
import Divider from "../components/divider/Divider";
import AboutThree from "../components/about/AboutThree";
import FAQOne from "../components/faq/FaqOne";
// import PriceTableThree from "../components/pricing/PricingThree";
import BlogTwo from "../components/blog/BlogTwo";
import CtaTwo from "../components/cta/CtaTwo";
import SEO from "../components/common/SEO";

export default function Home() {
    return(
        <div className="home-wrap">
            <SEO title="Home" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning"
            />

            <HeroThree />

            {/* <PartnerTwo /> */}

            <Divider />

            <AboutThree 
                iconColor= "bg-warning"
                iconName= "bi-lightbulb"
                title = "The Cure hospital has delivered free surgeries overtime."
                para = "These are offered to vulnerable cildren with hydrocephalus and brain tumors. The hospital gave 1,520 surgeries in 2020, 1687 surgeries in 2021, and we estimate 1700 surgeries in 2022"
                image = "assets/img/illustrator/hero-8.png"
                videoID="Cjs2QjJme20"
              
            />

            <Divider />

            {/* <FeatureTwo />

            <Divider /> */}

            <FAQOne 
                heading="Questions & Answers" 
                image="assets/img/illustrator/5.png" 
            />

            <Divider />

            {/* <PriceTableThree />

            <Divider /> */}

            <BlogTwo />

            <Divider />

            <CtaTwo 
                title="Come and participate in the art auction" 
                subtitle="You can buy an art piece or make a donation to help the future generation of children with spinal cord conditions and brain tumors.  " 
                btnText="Proceed to art pieces" 
                btnUrl="/portfolio" 
                imageGroup={[
                    "assets/img/bg-img/5.jpg",
                    "assets/img/bg-img/13.jpg",
                    "assets/img/bg-img/14.jpg"
                ]}
            />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle="footer-2" 
            />
        </div>
    )
}