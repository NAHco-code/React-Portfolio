import React from 'react';
import './index.css';

export default function Footer () {
    return (
        <div>
            <footer>
                <div class="footer-wrapper-1">
                <div class="copyright footer-text">
                    &copy; K WILKINSON 2021
                </div>
                <div class="term-of-use">
                        <a href='' class="footer-text" target='_blank' rel='noreferrer'>TERMS OF USE</a>
                </div>
                <div class="privacy-policy">
                        <a href='' class="footer-text" target='_blank' rel='noreferrer'>PRIVACY POLICY</a>
                </div>
                <div class="download-resume">
                        <a href='' class="footer-text" target='_blank' rel='noreferrer'>RESUME</a>
                </div>
                <div class="contact">
                        <a href='' class="footer-text" target='_blank' rel='noreferrer'>CONTACT</a>
                </div>
                </div>
            </footer>
        </div>
    );
}
