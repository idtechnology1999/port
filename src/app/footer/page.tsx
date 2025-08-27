"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
  <footer
  className="d-flex flex-column justify-content-between"
  style={{
    backgroundColor: "#edf2f7",
    fontFamily: "'Poppins', sans-serif",
    padding: "3rem 2rem",
  }} data-aos="fade-up"
>

      <div className="container">
        <div className="row text-dark">
          {/* Logo and Description */}
          <div className="col-md-3 mb-4">
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2024/11/LBP-LOGO-03.png"
              alt="London Book Publishers"
              style={{ width: "200px", marginBottom: "1.5rem" }}
            />
            <p className="fs-6 text-muted">
              We are the best publishing and book marketing company in the UK.
              We believe in the dreams of the authors and have made it our
              mission to keep bringing them forward.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-2 flex-wrap">
              {[
                { icon: "facebook", url: "https://facebook.com/londonbookpublisherofficial" },
                { icon: "instagram", url: "https://instagram.com/london_book_publishers_" },
                { icon: "tiktok", url: "https://www.tiktok.com/@londonbookpublishers" },
                { icon: "linkedin", url: "https://linkedin.com/company/london-book-publishers/" },
                { icon: "x", url: "https://x.com/London_book_" },
                { icon: "youtube", url: "https://www.youtube.com/@LondonbookPublishers-v4z" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  className="text-dark fs-5"
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <i className={`bi bi-${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-2 mt-5">
            <h5 className="fw-bold mb-4 fw-bold">Company</h5>
            <ul className="list-unstyled">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us/" },
                { label: "Contact Us", href: "/contact-us/" },
                {
                  label: "Reviews",
                  href: "https://www.reviews.io/company-reviews/store/www.londonbookpublishers.co.uk",
                },
                { label: "Privacy Policy", href: "/privacy-policy/" },
                { label: "Terms And Conditions", href: "/terms-and-conditions/" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-dark d-block py-2 fs-6 fw-bold text-muted"
                    style={{
                      borderBottom: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2024/11/6425651c97e0b1158e3920a8_reviewsio-logo.png"
              alt="Reviews"
              className="img-fluid mt-2"
              style={{ width: "100px" }}
            />
          </div>

        {/* Services */}
<div className="col-md-3 mt-5">
  <h5 className="fw-bold mb-3">Services</h5>
  <ul className="list-unstyled">
    {[
      { name: "Book Publishing", href: "/book-publishing/" },
      { name: "Marketing", href: "/marketing/" },
      { name: "Book Launch Marketing", href: "/book-launch-marketing/" },
      { name: "Ghost Writing Services", href: "/ghost-writing-services/" },
      { name: "Author Website Design", href: "/author-website-design/" },
      { name: "Book Design", href: "/book-design/" },
    ].map((service, idx) => (
      <li
        key={idx}
        className="py-2 fw-bold text-muted"
        style={{
          borderBottom: "1px solid #ddd",
          fontSize: "14px",
        }}
      >
        <a
          href={service.href}
          className="text-muted text-decoration-none"
        >
          {service.name}
        </a>
      </li>
    ))}
  </ul>
  <img
    src="https://londonbookpublishers.com/wp-content/uploads/2024/11/Trustpilot-Logo-removebg-preview-e1733934662913.png"
    alt="Trustpilot"
    className="img-fluid mt-2"
    style={{ width: "120px" }}
  />
</div>


          {/* Contact */}
          <div className="col-md-4 mb-4">
            <div
              className="bg-white p-4 rounded-5 shadow-lg"
              style={{
                border: "1px solid #ddd"
               
              }}
            >
              <h5 className="fw-bold mb-4 text-center fs-3 ">Contact</h5>
              <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                <li className="mb-4">
                  <i className="bi bi-telephone-fill me-2 text-dark fs-5 fw-bold text-muted"></i>
                  +44 20 3098 4500
                </li>
                <li className="mb-4">
                  <i className="bi bi-envelope-fill me-2 text-dark fs-5 fw-bold text-muted"></i>
                  info@londonbookpublishers.com
                </li>
                <li className="mb-4">
                  <i className="bi bi-geo-alt-fill me-2 text-dark fs-5 fw-bold text-muted"></i>
                  16 Northolt Rd, South Harrow, Harrow HA2 0ER, United Kingdom
                </li>
              </ul>
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/11/amazon-kindle.png"
                alt="Amazon Kindle"
                className="img-fluid"
                style={{ width: "140px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-3 border-top mt-auto" style={{ fontSize: "13px" }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <span>© 2024 London Book Publishers. All Rights Reserved</span>
          <span>Company Registration No: 14565496</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
