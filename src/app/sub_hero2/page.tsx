"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 overflow-hidden position-relative">
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.05)",
          zIndex: 0,
        }}
      />

      {/* Keyframes for Bounce */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .bounce {
          animation: bounce 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Image First on Mobile */}
          <div
            className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0"
            data-aos="zoom-in"
          >
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2024/10/why-does-e1730293882326.webp"
              alt="Why Choose London Book Publishers"
              className="img-fluid rounded bounce"
              style={{ maxHeight: "600px", objectFit: "contain" }}
            />
          </div>

          {/* Text Content */}
          <div
            className="col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
          >
            <h1 className="fw-bold mb-3">
              Why Choose London Book Publishers Among Hundreds of Others?
            </h1>
            <p className="fs-6 text-bold" style={{ fontFamily: "Georgia, serif" }}>
We believe in the power of the word and are out to ensure every idea gets out and meets the
 eyes of the world. Our book publishing company is unique because of its author-centric 
 approach towards projects. Instead of restricting authors to unnecessary complications,
  we offer personalized care andsolve their problems. Take a look at how our team of experts ensure service that is far
  beyond expectations            </p>

            <ul className="list-unstyled fs-6 text-bold" style={{ fontFamily: "Georgia, serif" }}>
              {[
                ["Author-Centric Approach", "Helping authors throughout the publishing process and ensuring their ideas stay at the front."],
                ["Problem Solving", "Offering solutions regarding manuscript finalization, publishing and marketing."],
                ["Known for Success", "Converting ideas into powerful market-ready words."],
                ["Clear Communication", "Transparent communication throughout the journey."],
                ["Dedicated Team", "Each author gets expert guidance."],
              ].map(([title, desc], index) => (
                <li className="d-flex align-items-start mb-2" key={index}>
                  <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span>
                    <strong>{title}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row gap-3">
              <a
                href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjY5MTciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                className="btn btn-primary"
              >
                Get A Quote
              </a>
              <a href="tel:+44 20 3098 4500" className="btn btn-outline-primary">
                +44 20 3098 4500
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
