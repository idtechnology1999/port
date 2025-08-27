"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* Text Column */}
          <div
            className="col-md-6 mt-4 mt-md-0 text-md-start text-center"
            data-aos="fade-right"
          >
            <h1 className="fw-bold display-5 text-white mb-5">
              Welcome to London Book Publishers
            </h1>

            <div className="bg-white p-4 rounded shadow-sm">
              <p className="fw-bold text-dark mb-0">
                Are you an author looking to get your work published? Is it your dream
                to see your book shining on the high street or online bookshops? Cheers!
                You have made it to the right place. We, at London Book Publishers, break
                down publishing into easy, understandable steps for our authors and stand
                by them every step of the way. With our team of expert publishers and
                friendly customer service, we ensure your work reaches where you expect
                it to be…
              </p>
            </div>

            <p className="fw-bold text-white mt-3">Rating (4.9/5)</p>
            <div
              className="text-warning fs-5"
              role="img"
              aria-label="Rated 5 out of 5"
            >
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            {/* Moved Button Row inside the left column */}
            <div className="row mt-4">
              <div className="col-12 col-sm-6 mb-2">
                <a
                  href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjY5MTciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                  className="btn btn-primary w-100"
                >
                  <i className="bi bi-pencil-square me-2"></i> Get A Quote
                </a>
              </div>
              <div className="col-12 col-sm-6">
                <a href="tel:+44 20 3098 4500" className="btn btn-outline-light w-100">
                  <i className="bi bi-telephone-fill me-2"></i> +44 20 3098 4500
                </a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2024/10/image-1022x1024.webp"
              alt="Book"
              width="800"
              height="802"
              className="img-fluid rounded bounce-book"
            />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background: url("/heroImage.jfif") no-repeat center center;
          background-size: cover;
          min-height: 100vh;
        }

        .bounce-book {
          animation: bounceUpDown 2.5s ease-in-out infinite;
        }

        @keyframes bounceUpDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @media (max-width: 767px) {
          h2 {
            font-size: 1.75rem !important;
          }

          .hero-section {
            background-position: top center;
          }
        }
      `}</style>
    </div>
  );
}
