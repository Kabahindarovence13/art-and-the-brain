import Accordion from 'react-bootstrap/Accordion';

export default function FAQOne(props) {
    const {heading, image} = props;

    return(
        <div className="faq--area">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-md-7 col-lg-6">
                        <div className="faq-content">
                            <h2 className="mb-5">{heading}</h2>

                            <Accordion className="faq--accordian" defaultActiveKey="0">
                                {/* Accordion Item */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="card border-0 mb-1">
                                        How to donate?
                                    </Accordion.Header>
                                      <Accordion.Body>
                                    You can send in your donations to the phone numbers below all in names of Amanda Tumusiime
                                    </Accordion.Body>
                                    <Accordion.Body>
                                     Mtn: 0782 884420 <b>OR</b> Airtel: 0759 907007
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                                {/* Accordion Item */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="card border-0 mb-1">
                                        Why should I participate?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      To help us cover the cost of one child or more, so as to raise a healthy future generaion and free our children of Spinabifida.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                                {/* Accordion Item */}
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="card border-0">
                                       When is the auction event?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                       The auction shall start on 31st March, 2022 at Protea hotel by Marriot,Acacia Avenue, Kampala, Uganda from 2:00 PM - 5:00 PM. However the donation can continue event after the event date has ended.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-5 col-lg-6">
                        {/* FAQ Thumbnail */}
                        <div className="faq--thumbnail ms-xl-5">
                            <img src={`${process.env.PUBLIC_URL}/${image}`} alt={heading} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}