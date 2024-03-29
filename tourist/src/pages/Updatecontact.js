import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../App.css";
import Main from "../layouts/main";

function Updatecontact() {

  const { id } = useParams();
  const [contact, setContact] = useState({
    id: '',
    name: ''
  });

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          const response = await fetch(`http://localhost:8080/contacts/get-contact/${id}`);
          const data = await response.json();
          setContact(data[0]);
        } catch (error) {
          console.error('Error fetching contact:', error);
          // Handle error, show error message, etc.
        }
      };

      fetchContact();
    }
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/contacts/update-contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        alert('Contact updated successfully');
        // Redirect or show a success message
      } else {
        console.error('Failed to update contact');
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <Main>
      {/* Header */}
      <header className="header-hero">
        <div className="header-hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>Editing id <span id="js-rotating">{id}</span></h1>
                  <p>
                    <Link to={'/#header'} style={{ color: "rgb(20, 191, 152)", textDecoration: "none" }}>
                      Home
                    </Link>
                    <span style={{ color: "white" }}> / edit contact</span>
                  </p>
                </div>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of header-content */}
      </header> {/* end of header */}

      <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <form className="form" onSubmit={handleSubmit}>
          <h2 className='title'>Enter new data</h2>
          <label>
            <input required placeholder="" type="text" className="input" name="id" value={contact.id} onChange={handleChange} />
            <span>ID</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="name" value={contact.name} onChange={handleChange} />
            <span>Name</span>
          </label>

          <button className="submit" type="submit">
            <span className="top-key"></span>
            <span className="text">Submit</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>
      </div>
    </Main>
  );
}

export default Updatecontact;
