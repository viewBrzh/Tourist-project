import '../App.css';
import Main from '../layouts/main';
import { Link } from "react-router-dom";

function PlaceDetail() {
  return (
    <Main>
      <header className="header-hero" >
        <div className="header-hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>Contact <span id="js-rotating">Us</span></h1>
                  <p>
                    <Link to={'/#header'} style={{ color: "rgb(20, 191, 152)", textDecoration: "none" }}>
                      Home
                    </Link>
                    <span style={{ color: "white" }}> / contact</span>
                  </p>
                </div>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of header-content */}
      </header> {/* end of header */}
    </Main>
  );
}

export default PlaceDetail;
