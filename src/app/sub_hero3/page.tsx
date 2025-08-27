"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaAmazon,
  FaBook,
  FaBullhorn,
  FaEdit,
  FaPaintBrush,
  FaHeadphones,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    title: "Amazon Publishing",
    description:
      "Our publishers know Amazon in and out and can facilitate you with the entire self-publishing or, best, do it for you.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s1.webp",
    icon: <FaAmazon className="text-primary" />,
  },
  {
    title: "Book Publishing",
    description:
      "Let us review your manuscript, finalise it for publishing and ensure it meets the requirements of numerous publishing platforms out in the market.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s2.webp",
    icon: <FaBook className="text-success" />,
  },
  {
    title: "Book Marketing",
    description:
      "Our marketers create the perfect strategy for your book and ensure it reaches the right hand.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s3.webp",
    icon: <FaBullhorn className="text-danger" />,
  },
  {
    title: "Editing & Proofreading",
    description:
      "Our editing team consists of proofreaders, editors and ghostwriters for every genre and with experience in a wide variety of topics.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s4.webp",
    icon: <FaEdit className="text-warning" />,
  },
  {
    title: "Book Cover Design",
    description:
      "Our designers create covers that leave a mark and get your book the attention of its target audience.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s5.webp",
    icon: <FaPaintBrush className="text-info" />,
  },
  {
    title: "Digital Illustrations",
    description:
      "Our expert illustrators bring your content to life with beautifully crafted illustrations and allow your audience to explore their imagination to the best.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s6.webp",
    icon: <FaPaintBrush className="text-secondary" />,
  },
  {
    title: "Audiobook",
    description:
      "We have a large number of audiobook narrators to give you the choice of the one that fits your book’s genre and writing.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s7.webp",
    icon: <FaHeadphones className="text-dark" />,
  },
  {
    title: "Author Website",
    description:
      "An author website seems to lay the foundation for the marketing and promotion of the book, and the author and our team understand it well.",
    image: "https://londonbookpublishers.com/wp-content/uploads/2024/10/s8.webp",
    icon: <FaGlobe className="text-primary" />,
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">We Are Here For Every Individual Goal of Yours</h2>
        <p className="text-muted w-75 mx-auto">
          Our expert team comprises editors, proofreaders, ghostwriters, designers, illustrators,
          audiobook narrators, publishers and marketers. We have everyone you might need to get
          your book out in any of the formats: eBook, paperback, hardcover or audiobook.
        </p>
      </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            data-aos="fade-up"
          >
            <div className="card h-100 shadow rounded-4 text-center p-3 d-flex flex-column justify-content-between service-card">
              <div className="card-body">
                <div className="fs-3 mb-2 icon-wrapper">{service.icon}</div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text small text-muted">{service.description}</p>
              </div>
             <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded mx-auto mt-3 flippable-img"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                    />

            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
  .service-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .service-card:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  .icon-wrapper {
    transition: transform 0.3s ease;
  }
  .service-card:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
  }
  .flippable-img {
    transition: transform 0.6s ease;
  }
  @media (max-width: 768px) {
    .service-card:hover .flippable-img {
      transform: scaleX(-1);
    }
  }
`}</style>

    </section>
  );
};

export default ServicesSection;