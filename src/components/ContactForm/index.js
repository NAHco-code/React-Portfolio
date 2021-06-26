import React from 'react';
import './index.css';

export default function ContactForm () {
    return (
        <div>
            <form action='mailto:kathrynxwilk@gmail.com' method='post' enctype='text/plain'>
                <label>Name
                    <input type="text" name='name' placeholder=""></input>
                  </label>
                    <label>Email
                    <input type="text" name='mail' placeholder=""></input>
                  </label>
                <label>
                    Message
                <input type='text' name='comment' className='email-message' placeholder=""></input>
                </label>
                <input type="submit" className="button button-send-email" value="Submit"></input>
            </form>
        </div>
    );
}
