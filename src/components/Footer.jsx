import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Reveal } from '../hooks/Reveal';


function Footer () {


    return (
        <Reveal>
            <div className="footer-wrapper">
                <div className="footer-inner">
                    <div className="footer-columns one">
                        <h1>Address</h1>
                        <p>BWC HOTEL <br />
                            Ahmadu Bello Way Lagos.
                        </p>
                    </div>
                    <div className="footer-columns two">
                        <h1>Our Contact</h1>
                            <p>info@thefranchisechurch.com<br />
                                +123-456-789
                            </p>
                        </div>
                    <div className="footer-columns three">
                        <FaYoutube />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

export default Footer;