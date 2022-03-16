export default function ContactForm() {
    return(
        <div className="contact-form">
            <form onSubmit={e => { e.preventDefault(); }} >
                <div className="row">
                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="name">Full Name:</label>
                        <input className="form-control mb-30" id="name" type="text" placeholder="Enter full name" name="name" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="email">Email Address:</label>
                        <input className="form-control mb-30" id="email" type="email" placeholder="example@gmail.com" name="email" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="subject">Subject:</label>
                        <input className="form-control mb-30" id="topics" type="text" placeholder="Title for the message" name="topics" />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea className="form-control mb-30" id="message" name="message" placeholder="Enter message" defaultValue={""} />
                    </div>
                    
                    {/* Form Control */}
                    <div className="col-12 text-center">
                        <button className="btn btn-primary w-100" type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}