import "../App.css";
import Main from "../layouts/main";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/contacts/get-all-contact")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error (e.g., show error message to user)
      });
  }, []);

  return (
    <Main>
      {/* Header */}
      <header className="header-hero">
        <div className="header-hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>
                    Contact <span id="js-rotating">Us</span>
                  </h1>
                  <p>
                    <Link
                      to={"/#header"}
                      style={{
                        color: "rgb(20, 191, 152)",
                        textDecoration: "none",
                      }}
                    >
                      Home
                    </Link>
                    <span style={{ color: "white" }}> / contact</span>
                  </p>
                </div>
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of header-content */}
      </header>{" "}
      {/* end of header */}
      {/* end of header */}
      <div className="container-xxl contact py-5">
        <div className="container">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          ></div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-8">
              <div className="row g-5">
                <div
                  className="col-md-4 text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="btn-square mx-auto mb-3">
                    <i className="fas fa-envelope fa-2x text-white"></i>
                  </div>
                  <p className="mb-2">smilesmartcenter@gmail.com</p>
                  <p className="mb-0"></p>
                </div>
                <div
                  className="col-md-4 text-center wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="btn-square mx-auto mb-3">
                    <i className="fas fa-phone fa-2x text-white"></i>
                  </div>
                  <p className="mb-2">tel : 0-7567-3122-3</p>
                  <p className="mb-0">Intercom : 3122-3</p>
                </div>
                <div
                  className="col-md-4 text-center wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="btn-square mx-auto mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-white"></i>
                  </div>
                  <p className="mb-2">Thaiburi building</p>
                </div>
              </div>
              <br></br>
              <div style={{ width: "auto", padding: 20 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.292854252533!2d99.89734277853255!3d8.645427781161436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3053a09ebee6c259%3A0x326ae05ccc3228db!2z4Lit4Liy4LiE4Liy4Lij4LmE4LiX4Lii4Lia4Li44Lij4Li1IOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC4p-C4peC4seC4ouC4peC4seC4geC4qeC4k-C5jA!5e0!3m2!1sth!2sth!4v1710052699085!5m2!1sth!2sth"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%", borderRadius: 5 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "25px",
          }}
        >
          Developers
        </h1>

        <div
          className="container"
          id="contacts"
          style={{ paddingBottom: "50px" }}
        >
          {contacts.map((contact) => (
            <div
              key={contact.id}
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5 style={{ marginBottom: "10px" }}>ชื่อ {contact.name}</h5>
              <h6 style={{ marginBottom: "10px" }}>
                รหัสนักศึกษา: {contact.number}
              </h6>

              <Link
                to={`/updatecontact/${contact.id}`}
                className="btn btn-primary"
                style={{
                  textDecoration: "none",
                  justifyContent: "end",
                  color: "#fff",
                  backgroundColor: " #14bf98",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                แก้ไข
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default Contact;
