import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                        <Link to={'/#footer'} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginBottom: '20px' }}>
                                    <img src="../images/logo.png" alt="alternative" style={{ width: '150px', height: 'auto' }} />
                                </Link>

                        </div>
                        <div className="col-md-4">
                            <div className="text-container about">
                                
                                <h4>Follow us</h4>
                                <ul className="list-unstyled white">
                                    <li>
                                        Facebook: <a href="tel:1234567890" className="white">Example</a>
                                    </li>
                                    <li>
                                        Line ID: <a href="mailto:info@example.com" className="white">@example</a>
                                    </li>
                                    <li>
                                        Instagram: <span className="white">@example</span>
                                    </li>
                                </ul>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}

                        <div className="col-md-2 ml-auto">
                            <div className="text-container">
                                <h4>Links</h4>
                                <ul className="list-unstyled li-space-lg white">
                                    <li>
                                        <a className="white" href="#your-link">startupguide.com</a>
                                    </li>
                                    <li>
                                        <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a className="white" href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}

                        <div className="col-md-2">
                            <div className="text-container">
                                <h4>Contact</h4>
                                <ul className="list-unstyled white">
                                    <li>
                                        Phone: <a href="tel:1234567890" className="white">123-456-7890</a>
                                    </li>
                                    <li>
                                        Email: <a href="mailto:info@example.com" className="white">info@example.com</a>
                                    </li>
                                    <li>
                                        ที่อยู่: <span className="white">123 Main Street, Springfield, IL 62701, USA</span>
                                    </li>
                                </ul>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}

                        <div className="col-md-2">
                            <div className="text-container">
                                <h4>Partners</h4>
                                <ul className="list-unstyled li-space-lg">
                                    <li>
                                        <a className="white" href="#your-link">unicorns.com</a>
                                    </li>
                                    <li>
                                        <a className="white" href="#your-link">staffmanager.com</a>
                                    </li>
                                    <li>
                                        <a className="white" href="#your-link">association.gov</a>
                                    </li>
                                </ul>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}

                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of footer */}
            {/* end of footer */}
            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">Template by Inovatik</a></p>
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of copyright */}
            {/* end of copyright */}
        </footer>
    );
}

export default Footer;
