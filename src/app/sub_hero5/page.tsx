"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Book Formatting",
      description:
      "Want to give your book a professional look? We got you…! Our team of formatters work on every page, line and section of your book and ensure it is per the publishing standards. A formatted book also looks appealing to the reader and provides a better reading experience.",
      img: "https://londonbookpublishers.com/wp-content/uploads/2024/10/download-1.webp",
    },
    {
      title: "Fiction Writing",
      description:
      "Our fiction writing service allows authors to unleash their creativity and helps them bring their imagination to words that leave an impact. Partner with us and, using our fiction writing service give life to your exciting ideas.",
      img: "https://londonbookpublishers.com/wp-content/uploads/2024/10/download-4.webp",
    },
    {
      title: "Children's Book Editing",
      description:
      "Using our children’s book editing service, you can ensure that your children’s book is captivating for the young audience. We review the sentence structuring and vocabulary and polish it to make it fluent so the kids understand it and love it as well.",
      img: "https://londonbookpublishers.com/wp-content/uploads/2024/10/download-5.webp",
    },
    {
      title: "Script Writing",
      description:
      "We provide our authors with the best scriptwriting services and help them in creating state-of-the-art narratives. Our script writers create scripts that convey the scene at its best and allow smooth and accurate translation into a movie or video.",
      img: "https://londonbookpublishers.com/wp-content/uploads/2024/10/download-5.webp",
    },
    {
      title: "Autobiography Writing",
      description:
      "Getting an autobiography right can be a bit tricky, but with our autobiography writing services, authors can sit back and relax. Share your story with us and we will make sure it looks and reads amazing for your audience. We understand the expectations of the reader of the genre and can come up with a book that engages and inspires.",
      img: "https://londonbookpublishers.com/wp-content/uploads/2024/10/download-1.webp",
    },
    {
      title: "Historical Writing",
      description:
      "Have an amazing historical story and want to get it out in the market? Get our historical writing services and let us handle the rest: the proofreading, formatting, and publishing, all in a single place and from the experts only.",
      img: "https://londonbookpublishers.com/wp-content/uploads/2024/10/download-4.webp",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div
        className="text-center mb-5 p-4 text-white"
        style={{ background: "linear-gradient(135deg, #2c3e50, #3498db)" }}
        data-aos="fade-down"
      >
        <h2 className="fw-bold">
          We Provide Solutions to Every Publishing Problem
        </h2>
      </div>
      <div className="row g-4" style={{
    backgroundImage: `url('/page.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '3rem 1rem',
    color: '#fff'
  }}>
        {services.map((service, index) => (
          <div
            key={index}
            className="col-md-4 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card shadow-sm border-0 h-100 text-center">
              <img
                src={service.img}
                alt={service.title}
                className="card-img-top mx-auto p-3"
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p
                  className="card-text text-muted fs-6"
                  style={{ fontSize: "0.9rem", textAlign: "justify" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row align-items-center mt-5" data-aos="fade-up">
        <div className="col-md-6">
          <h2 className="fw-bold">eBooks: Where Imagination Knows No Boundaries</h2>
          <p className="mt-3">
            Dive into the sea of eBooks, the latest innovation to get your thoughts out! Give your
            readers a chance to view your story on their screens and at a cost much less than a
            traditional book.
          </p>
          <div className="d-flex gap-3 mt-3">
            <a href="#" className="btn btn-primary">
              <i className="bi bi-chat-right-quote"></i> Get A Quote
            </a>
            <a href="tel:+442030984500" className="btn btn-outline-secondary">
              <i className="bi bi-telephone"></i> +44 20 3098 4500
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://londonbookpublishers.com/wp-content/uploads/2025/04/non-fiction-removebg-preview-1-1024x768.png"
            alt="eBook"
            className="img-fluid"
            // style={{ maxWidth: "120px" }} 
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
}
