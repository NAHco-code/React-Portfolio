import React from 'react';
import './index.css';

export default function ContactForm () {
    return (
        <div className="row">
            <label>Name
                <input type="text" placeholder=""/>
            </label>
            <label>Email
              <input type="text" placeholder=""/>
            </label>
            <label>
                Message
              <textarea placeholder=""></textarea>
            </label>
            <input type="submit" className="button button-send-email" value="Submit"/>
        </div>
    );
}
