import React from 'react';
import styles from "../../styles/footer.module.scss"
import Image from "next/image";
import emailIcon from '../../../assets/icons/email-footer.svg'
import facebookIcon from '../../../assets/icons/facebook.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'

const Index = () => {
    return (
        <div className={`${styles.footerContainer}`}>
            <div className={styles.contentContainer}>
                <div className={styles.aboutUs}>
                    <h5>About us:</h5>
                    <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for
                        a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can
                        be confident in knowing you're getting the best deal!</p>
                </div>
                <div className={styles.quickLinks}>
                    <h5>Quick links:</h5>
                    <ul>
                        <li>Price</li>
                        <li>ComparisonChrome</li>
                        <li>ExtensionSafari</li>
                        <li>ExtensionFirefox</li>
                        <li>ExtensionHowIt</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <div>
                        <h5>Contact:</h5>
                        <p>+40742589552</p>
                    </div>
                    <div>
                        <h5>Social Media:</h5>
                        <div className={styles.socialMedia}>
                            <div className={styles.item}><Image height={15} src={emailIcon}/></div>
                            <div className={styles.item}><Image height={15} src={facebookIcon}/></div>
                            <div className={styles.item}><Image height={15} src={instagramIcon}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>© 2023 Ratepunk. All Rights Reserved. Privacy Policy</div>
        </div>
    );
};

export default Index;
