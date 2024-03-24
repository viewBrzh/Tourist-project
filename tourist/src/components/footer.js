import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      {/* Footer */}
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-container about">
                        <h4>Few Words About Aria</h4>
                        <p className="white">We're passionate about delivering the best business growth services for companies just starting out as startups or industry players that have established their market position a long tima ago.</p>
                    </div> {/* end of text-container */}
                </div> {/* end of col */}
                <div className="col-md-2">
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
                        <h4>Tools</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li>
                                <a className="white" href="#your-link">businessgrowth.com</a>
                            </li>
                            <li>
                               <a className="white" href="#your-link">influencers.com</a>
                            </li>
                            <li className="media">
                                <a className="white" href="#your-link">optimizer.net</a>
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
            </div> {/* enf of row */}
        </div> {/* end of container */}
    </div> {/* end of copyright */} 
    {/* end of copyright */}
    </footer>
  );
}

export default Footer;
