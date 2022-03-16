export default function ContactSideInfo() {
    const TopData = [
        {
            title: "For more information about <br /> the auction event!",
            para: "Write to us or give us a call. We will reply to you as soon as possible. But yes, it can take up to 24 hours."
        }
    ]

    const CardData = [
        {
            iconName: "bi-envelope",
            text: "info@amandatumusiime.com"
        },
        {
            iconName: "bi-phone",
            text: "(+256) 785 810196"
        },
        {
            iconName: "bi-geo-alt",
            text: "Protea Hotel Kampala"
        },
          {
            iconName: "bi-calendar-date",
            text: "31st March, 2022"
        }
    ]

    return(
        <div className="contact-side-info mb-4 mb-md-0">
            <h1 className="mb-3" dangerouslySetInnerHTML={{__html: TopData[0].title}}></h1>
            <p className="mb-4" dangerouslySetInnerHTML={{__html: TopData[0].para}}></p>

            <div className="contact-mini-card-wrapper">
                {/* Contact Mini Card*/}
                {CardData.map((elem, index) => (
                    <div key={index} className="contact-mini-card">
                        <div className="contact-mini-card-icon">
                            <i className={`bi ${elem.iconName}`} />
                        </div>
                        <p>{elem.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}