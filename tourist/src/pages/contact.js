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
      <div className="container" id="contacts" style={{ marginTop: "150px" }}>
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
            <h3 style={{ marginBottom: "10px" }}>ID: {contact.id}</h3>
            <h3 style={{ marginBottom: "10px" }}>Name: {contact.name}</h3>
            <Link
              to={`/edit-contact/${contact.id}`}
              className="btn btn-primary"
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#007bff",
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
    </Main>
  );
}

export default Contact;
