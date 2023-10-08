import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'


function Footer () {


    return (
        <>
            <div className="footer-wrapper">
                <p className="footer-title">
                    “Daily fellowship and devotion helps you draw from him what is needed for the day “
                    <img src="/assets/images/signature.png" alt="signature" />
                </p>
                <div className="footer-inner">
                    <div className="footer-columns one">
                        <h1>Address</h1>
                        <h3>BWC HOTEL <br />
                            Ahmadu Bello Way Lagos.
                        </h3>
                    </div>
                    <div className="footer-columns two">
                        <h1>Our Contact</h1>
                            <h3>info@thefranchisechurch.com<br />
                                +123-456-789
                            </h3>
                        </div>
                    <div className="footer-columns three">
                        <FaYoutube />
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;