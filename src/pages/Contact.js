import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ContactLinks from '../components/ContactLinks';
import ContactVector from '../images/baby-vector.jpg'


export default function Contact () {
    return (
        <div>
            <div class="contact-page padding" id='contact-page'>
                <div class="row position">
                    <h2>contact.</h2>
                    <h3>How would you know the difference between the dream world and real world?</h3>
                    <ContactLinks />
                    <img alt='' className='contact-baby' src={ContactVector}/>
                    <h3>Send me an email</h3>
                </div>
                <div className="row">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
