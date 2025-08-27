'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactForm = () => {
  return (
    <section

      style={{
    backgroundImage: 'url("/form12.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '6rem 1rem 2rem',
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    textAlign: 'center',
  }} data-aos="fade-up"
>
  {/* 🔥 Black Fade Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.84), rgba(0, 0, 0, 0.88))',
      zIndex: 0,
    }}
  />

      {/* Hero Text */}
        <div className="container mb-4" style={{ position: 'relative', zIndex: 2 }}>
    <h2 className="fw-bold mb-3">
      <i className="bi bi-chat-left-dots-fill me-2"></i>
      Connect with Us – Your Voice Matters
    </h2>
    <p className="lead" style={{ color: '#f1f1f1' }}>
      Please fill out your details, and our team will contact you soon.
    </p>
  </div>

      {/* Form Section */}
      <div
        className="container bg-white p-4 shadow-lg rounded"
        style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}
      >
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control fs-5"
                placeholder="Name"
                name="name"
              />
            </div>

            <div className="col-md-6">
              <input
                type="tel"
                 className="form-control fs-5"
                placeholder="Phone"
                name="phone"
                required
                pattern="[0-9()#&+*-=.]+" 
                title="Only numbers and phone characters (#, -, *, etc) are accepted."
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                 className="form-control fs-5"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            <div className="col-md-6">
              <select className="form-select fs-5" name="service" required>
                <option value="">Select Services</option>
                <option value="Book Writing">Book Writing</option>
                <option value="Book Marketing">Book Marketing</option>
                <option value="Book Cover Design">Book Cover Design</option>
                <option value="Proofreading & Editing">Book Proofreading & Editing</option>
                <option value="Publishing">Book Publishing</option>
                <option value="E-Book Writing">E-Book Writing & Publishing</option>
              </select>
            </div>

            <div className="col-12">
              <textarea
                 className="form-control fs-5"
                placeholder="Message"
                rows={5}
                name="message"
              ></textarea>
            </div>

            <div className="col-12">
            
            
            </div>

            <div className="col-12 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsCheck"
                required
              />
              <label className="form-check-label text-dark" htmlFor="termsCheck">
                By checking the box, you agree to our{' '}
                <a href="#">Conditions of Use</a>. By providing your phone number, you consent
                to receiving calls or messages from us.
              </label>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
