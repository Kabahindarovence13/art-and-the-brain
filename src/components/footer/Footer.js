import FooterWidgetOne from "./FooterWidgetOne";
import FooterWidgetNav from "./FooterWidgetNav";
import FooterWidgetContact from "./FooterWidgetContact";
import FooterCopywrite from "./FooterCopywrite";

export default function Footer(props) {
    const {footerLogo, footerStyle} = props;

    return(
        <footer className={`footer-area ${footerStyle} pt-120 pb-120`}>
            <div className="container">
                <div className="row g-4 g-lg-5">
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetOne */}
                    <FooterWidgetOne
                        footerLogo={footerLogo} 
                        footerText="This is a fundraising for children's surgeries at the Cure hospital, Mbale district by auctioning Dr.Amanda Tumusiime's(PhD) painting prints" newsletterPlaceholderText="Enter email" 
                    />

                    
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetNav */}
                    <FooterWidgetNav
                        heading="Pages" 
                        footerNav={[
                            {
                                title: "Home", 
                                url: "/home"
                            },
                            {
                                title: "Portfolio", 
                                url: "/portfolio-full-width"
                            },
                            {
                                title: "Blog", 
                                url: "/blog-1"
                            },
                            {
                                title: "Team", 
                                url: "/team"
                            }
                        ]}
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetNav */}
                    <FooterWidgetNav
                        heading="" 
                        footerNav={[
                            {
                                title: "Services", 
                                url: "/ABout_me"
                            },
                            {
                                title: "Contact", 
                                url: "/contact"
                            },
                            {
                                title: "Reviews", 
                                url: "/reviews"
                            }
                        ]}
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetContact */}
                    <FooterWidgetContact
                        heading="Event location" 
                        address="Elgon terrace, 9421 John Babiha (Acacia) Ave, Kampala-Uganda" 
                        phone="Call: +256 785 810196" 
                        email="Email:info@amandatumusiime.com" 
                        social={[
                            {
                                url: "https://www.facebook.com/Art-and-The-Brain-112807407997528", 
                                tootipPosition: "top", 
                                title: "Facebook", 
                                iconName: "bi-facebook"
                            },
                            {
                                url: "https://mobile.twitter.com/Artandthebrain2", 
                                tootipPosition: "top", 
                                title: "Twitter", 
                                iconName: "bi-twitter"
                            },
                            {
                                url: "https://www.instagram.com/invites/contact/?i=155h0mi3xeh58&utm_content=nvpvul7", 
                                tootipPosition: "top", 
                                title: "Instagram", 
                                iconName: "bi-instagram"
                            },
                            {
                                url: "https://linkedin.com", 
                                tootipPosition: "top", 
                                title: "Linkedin", 
                                iconName: "bi-linkedin"
                            },
                            {
                                url: "https://youtu.be/Cjs2QjJme20", 
                                tootipPosition: "top", 
                                title: "YouTube", 
                                iconName: "bi-youtube"
                            }
                        ]}
                    />

                </div>
            </div>

            {/* Footer Copywrite: src > components > footer > FooterCopywrite */}
            <FooterCopywrite 
                footerNavTwo={[
                    {
                        title: "Privacy Policy", 
                        url: "#"
                    },
                    {
                        title: "Terms & Conditions", 
                        url: "#"
                    },
                    {
                        title: "Get Support", 
                        url: "/contact"
                    }
                ]}
            />

        </footer>
    );
}