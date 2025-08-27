"use client";
import Script from "next/script";
import React, { useEffect } from "react";


export default function Page() {
  useEffect(() => {
  if (typeof window !== "undefined") {
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

    // Initialize dropdowns
    for (let i = 0; i < dropdownToggles.length; i++) {
      const toggle = dropdownToggles[i];
      new bootstrap.Dropdown(toggle);
    }

    // Handle click on dropdown items (mobile)
    for (let i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener("click", function (this: HTMLElement, _event: Event) {
        const parentDropdown = this.closest(".dropdown");
        const toggle = parentDropdown?.querySelector(".dropdown-toggle");

        if (toggle && window.innerWidth < 992) {
          const instance = bootstrap.Dropdown.getInstance(toggle);
          if (instance) {
            instance.hide();
          }
        }
      });
    }

    // Toggle menu/cancel icon
    const toggler = document.querySelector(".navbar-toggler");
    const menuIcon = document.getElementById("menu-icon");

    toggler?.addEventListener("click", () => {
      if (menuIcon?.classList.contains("bi bi-list")) {
        menuIcon.classList.remove("bi bi-list");
        menuIcon.classList.add("bi-x-lg");
      } else {
        menuIcon?.classList.remove("bi bi-x-lg");
        menuIcon?.classList.add("bi bi-list");
      }
    });
  }
}, []);


  return (
    <div>
      <style jsx global>{`
      .collapse {
  transition: height 0.6s ease, visibility 0.9s ease-in-out;
}

        @media (min-width: 992px) {
          .navbar .dropdown:hover > .dropdown-menu {
            display: block;
            animation: fadeSlide 0.9s ease-in-out;
          }

          .navbar .dropdown {
            position: relative;
          }

          .navbar .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            display: none;
            margin-top: 0;
            z-index: 1000;
          }
        }

        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-menu {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          background-color: white;
        }

        .dropdown-item {
          padding: 0.5rem 1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `}</style>

      <header>
        {/* Contact Section */}
        <section className="container py-3" >
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-8 mb-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center gap-3" data-aos="fade-left">
              <a
                href="tel:+442030984500"
                className="text-decoration-none text-dark d-flex align-items-center fw-bold"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="bi bi-telephone-fill fs-5 me-1"></i>
                <span>+44 20 3098 4500</span>
              </a>
              <a
                href="mailto:support@londonbookpublishers.co.uk"
                className="text-decoration-none text-dark d-flex align-items-center fw-bold"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="bi bi-envelope-fill fs-5 me-1"></i>
                <span>support@londonbookpublishers.co.uk</span>
              </a>
            </div>
            <div className="col-md-4 mb-3 text-center text-md-start" data-aos="fade-right">
              <a
                href="https://www.google.co.uk/maps/place/London+Book+Publishers+UK/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark d-flex align-items-center justify-content-center justify-content-md-start fw-bold"
                style={{
                  fontSize: "0.85rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                <i className="bi bi-geo-alt-fill fs-5 me-1"></i>
                <span className="text-truncate">
                  16 Northolt Rd, South Harrow, Harrow HA2 0ER, UK
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top py-3" style={{height:"20vh"}} data-aos="fade-up">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="https://londonbookpublishers.com">
              London Book Publishers
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>

                {/* Book Publishing */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Book Publishing
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/edit">Editing</a></li>
                    <li><a className="dropdown-item" href="/Formatting">Formatting</a></li>
                    <li><a className="dropdown-item" href="/proofreading">Proofreading</a></li>
                    <li><a className="dropdown-item" href="/Typesetting">Typesetting</a></li>
                    <li><a className="dropdown-item" href="/Print_on_Demand">Print on Demand</a></li>
                    <li><a className="dropdown-item" href="/Book_Printing">Book Printing</a></li>
                  </ul>
                </li>

                {/* Book Design */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Book Design
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Book Cover Design</a></li>
                    <li><a className="dropdown-item" href="#">Book Illustrations</a></li>
                    <li><a className="dropdown-item" href="#">Book Layout Design</a></li>
                  </ul>
                </li>

                {/* AudioBook */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    AudioBook
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">AudioBook Recording</a></li>
                    <li><a className="dropdown-item" href="#">AudioBook Production</a></li>
                  </ul>
                </li>

                {/* Marketing */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marketing
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Video Book Trailer</a></li>
                    <li><a className="dropdown-item" href="#">Display Ads For Author</a></li>
                    <li><a className="dropdown-item" href="#">Facebook Ads For Author</a></li>
                    <li><a className="dropdown-item" href="#">Author Website Design</a></li>
                    <li><a className="dropdown-item" href="#">Book Launch Marketing</a></li>
                    <li><a className="dropdown-item" href="#">Book To Screenplay</a></li>
                  </ul>
                </li>

                {/* Writing */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Writing
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Ghost Writing Services</a></li>
                    <li><a className="dropdown-item" href="#">Partial Rewriting Editing</a></li>
                    <li><a className="dropdown-item" href="#">SEO Content Writing</a></li>
                    <li><a className="dropdown-item" href="#">Screen Writing</a></li>
                    <li><a className="dropdown-item" href="#">Script Writers</a></li>
                    <li><a className="dropdown-item" href="#">Biography Writers</a></li>
                  </ul>
                </li>

                {/* Static Links */}
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


    
    </div>
  );
}
