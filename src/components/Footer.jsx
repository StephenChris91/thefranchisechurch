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
                    <div className="footer-columns one">Our Address</div>
                    <div className="footer-columns two">Our Contact</div>
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