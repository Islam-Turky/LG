import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_4v30bii', 'template_ba4i7zv', form.current, 'lc81kEqoticGcMDeW')
        .then(
        () => {
            alert('تم الإرسال');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
    return(
        <>
        <section className="ftco-section" >
            <div className="container">
                <div className="row justify-content-center">
                </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                            <div className="row no-gutters mb-5">
                            <div className="col-md-7">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4">Contact Us</h3>
                            <div id="form-message-warning" className="mb-4"></div>
                            <div id="form-message-success" className="mb-4">
                            Your message was sent, thank you!
                            </div>
                            <form id="contactForm" name="contactForm" className="contactForm" ref={form} onSubmit={sendEmail}>
                            <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                            <label className="label" htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" name="user_name" id="name" placeholder="Name"/>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                            <label className="label" htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="user_email" id="email" placeholder="Email"/>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="#">Message</label>
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary" />
                            <div className="submitting"></div>
                            </div>
                            </div>
                            </div>
                            </form>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iconContact">
                <a href="tel:01558730809">
                    <img src="/We_logo.svg" alt="" />
                </a>
                <a href="tel:01200718934">
                    <img src="/Orange_logo.svg" alt="" />
                </a>
                <a href="tel:01284111059">
                    <img src="/Orange_logo.svg" alt="" />
                </a>
            </div>
        </section>
        </>
    )
}
export default Contact;