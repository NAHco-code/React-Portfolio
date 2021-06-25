import React from 'react';
// import PageHeader from '../components/PageHeader';
import ContactVector from '../components/ContactVector';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ContactLinks from '../components/ContactLinks';


export default function Contact () {
    return (
        <div>
            <h1 className='page-header'>contact.</h1>
            <p className='sub-header'>How would you know the difference between the dream world and real world?</p>

            <ContactLinks />
            <ContactVector />
            <ContactForm />
            <Footer />
        </div>
    );
}
