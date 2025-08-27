"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function ContactFormSection(){
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-5 bg-light" style={{height:"10%"}} data-aos="fade-up">
      <div className="container">
        {/* Scrolling Logos Carousel */}
    
        <div className="overflow-hidden mb-4">
          <div className="logo-carousel d-flex align-items-center">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block"
              >
                <img
                  src={`/logo-${num}.webp`}
                  alt={`Logo ${num}`}
                  className="logo-img mx-3"
                />
              </a>
            ))}
          </div>
        </div>
    
       {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded shadow-lg"
            >
              <div className="row align-items-center g-3">
                <div className="col-md-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg fw-bold"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg fw-bold"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control form-control-lg fw-bold"
                    placeholder="Phone"
                    required
                    pattern="[0-9()#&+*-=.]+"
                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3 d-grid">
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    <i className="bi bi-send-fill me-2"></i> Let's Start
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Inline CSS for Carousel */}
      <style jsx global>{`
        .logo-carousel {
          display: inline-flex;
          animation: scroll-left 30s linear infinite;
          white-space: nowrap;
        }

        .logo-carousel:hover {
          animation-play-state: paused;
        }

        .logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logo-img:hover {
          transform: scale(1.1);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 30px;
            margin-left: 1rem !important;
            margin-right: 1rem !important;
          }

          .form-control-lg {
            font-size: 1rem;
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
