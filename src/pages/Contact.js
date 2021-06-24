import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactLinks from '../components/ContactLinks';
import ContactVector from '../components/ContactVector';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


export default function Contact () {
    return (
        <div>
            <PageHeader />
            <ContactLinks />
            <ContactVector />
            <ContactForm />
            <Footer />
        </div>
    );
}
