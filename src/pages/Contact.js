import React from 'react';
// import PageHeader from '../components/PageHeader';
import ContactVector from '../components/ContactVector';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ContactLinks from '../components/ContactLinks';


export default function Contact () {
    return (
        <div>
            <div class="contact-page padding" id='contact-page'>
                <div class="row position">
                    <h2>contact.</h2>
                    <h3>How would you know the difference between the dream world and real world?</h3>
                    <ContactLinks />
                    <ContactVector />
                    <h3>Send me an email</h3>
                </div>
                <div className="row">
                    <ContactForm />
                </div>
                <Footer />
            </div>
        </div>
    );
}
