// 'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BookFormatting = () => {
  return (
    <>
    <div className="container py-5">
      {/* Logo Carousel */}
      {/* <div className="text-center mb-5">
        <div id="logoCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner d-flex justify-content-center align-items-center">
            {[1, 2, 3, 4, 5].map((id, index) => (
              <div
                key={id}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img
                  src={`https://londonbookpublishers.com/wp-content/uploads/2024/10/logo-${id}.webp`}
                  alt={`logo-${id}`}
                  className="d-block mx-auto img-fluid"
                  style={{ maxHeight: '100px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Section 1 - Text and Image */}
      <div className="row align-items-center mb-5"  data-aos="fade-in" data-aos-easing="ease-in-out">
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">High-Quality Book Formatting Services</h1>
          <p className="mb-2">
            Get on with your publishing journey with experts from London Book Publishers
          </p>
          <p className='fs-6'>
           Are you looking to get your not-so-good-looking text into a professionally formatted book? If yes, then London Book Publishers is all in to serve. Our team of formatters have a way with these texts and turns them into a book that fits the requirements of publishing platforms. The end product is always a book that looks appealing to the reader and enhances their reader experience
          </p>
          <ul className="ps-4 ps-6">
            <li>Share with us the manuscript to be reviewed by our team, and we will share a format or more that fits your book’s genre and length.</li>
            <li>We will send you a quote and as soon as the payment is processed, we will proceed with the formatting as per the agreed terms.</li>
            <li>The book will be formatted thoroughly, and it will be ensured that it is according to the selected publishing platform and our agreed format.</li>
            <li>We will send the file to you for review, and once finalized, we can publish it for you, or you can self-publish.</li>
          </ul>
          <div className="d-flex gap-3 mt-5">
            <a href="/contact-us/" className="btn btn-primary btn-lg">
              Get A Quote
            </a>
            <a href="tel:+44 20 3098 4500" className="btn btn-outline-secondary btn-lg">
              +44 20 3098 4500
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://londonbookpublishers.com/wp-content/uploads/2024/12/Formatting_TrueEditors.png"
            alt="Formatting"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Section 2 - Pricing Packages */}
      <div className="text-center mb-4 mt-5">
        <h2 className="fw-bold">UK’s Most Economical Book Formatting Packages</h2>
        <p className="text-muted">
          Every customer is different and so is our approach. Choose a package that suits your
          project and budget.
        </p>
      </div>
  </div>
<div className="container-fluid"  style={{
    background: "linear-gradient(to bottom, #f1f1f1, #e6e6e6)",
    fontFamily: "Segoe UI, sans-serif",
  }}>
    <div className="container">
        <div className="row g-4 px-4 py-5" >
  {[
    { bg: "#007b9e", text: "white", btnBg: "white", btnText: "#000" },  // Blue
    { bg: "#111", text: "white", btnBg: "white", btnText: "#000" },     // Black
    { bg: "#f5c518", text: "#000", btnBg: "white", btnText: "#000" },   // Yellow
  ].map((style, idx) => (
    <div className="col-md-4" data-aos="fade-in" key={idx}>
      <div
        className="p-5 rounded-4 shadow-lg h-100"
        style={{
          backgroundColor: style.bg,
          color: style.text,
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div
          className="px-3 py-2 fw-bold rounded shadow-lg mb-4 d-inline-block"
          style={{
            backgroundColor: style.btnBg,
            color: style.btnText,
            fontSize: "1.1rem",
          }}
        >
          Get Online Presence
        </div>

        <ul className="list-unstyled">
          {[
            "Author Website",
            "Complimentary Domain",
            "2 Press Release Writing",
            "Dedicated Project Manager",
            "3 Months Social Media Marketing",
            "Standard Hosting for the website",
            "Free Consultancy with senior marketing strategists",
          ].map((item, i) => (
            <li key={i} className="py-2 fw-bold">
              <i className="bi bi-check2 me-2" style={{ color: style.btnBg }}></i>
              {item}
            </li>
          ))}
        </ul>

        <div className="text-center mt-4">
          <a
            href="/contact-us/"
            className="btn rounded-pill px-4 py-2"
            style={{
              backgroundColor: style.btnBg,
              color: style.btnText,
              fontWeight: "bold",
            }}
          >
            Book A Free Call
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    
</div>

 <section className="container py-5 mt-5" data-aos="fade-up">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-lg-6 mb-4">
          <h2 className="fw-bold mb-3">Book Formatting</h2>
          <p className="mb-3 fs-6">
            The book formatting service is also available as a standalone service and does not have to be combined with any other package if not required.
          </p>
          <p>
            Get in touch and let us format your books to stand out. Enhancing reading experience and readiness for publishing are at the core of our service.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a href="/contact-us/" className="btn btn-primary rounded-pill px-4">
              Get A Quote
            </a>
            <a href="tel:+44%2020%203098%204500" className="btn btn-outline-secondary rounded-pill px-4">
              +44 20 3098 4500
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-6" >
          <img
            src="https://londonbookpublishers.com/wp-content/uploads/2025/04/female-web-designer-office-with-notebook-1-1024x683.jpg"
            alt="Book Formatting Designer"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
</section>
    <div className="container-fluid" style={{
    background: "linear-gradient(to bottom, #f0f0f0, #e5e5e5)",
    fontFamily: "Segoe UI, sans-serif",
  }}>
<div className="container py-5 px-3"
  
>
  {/* Section: Hire Top Formatters */}
  <div className="text-center mb-5">
    <h2 className="fw-bold">Hire Top Formatters and Designers in the UK</h2>
  </div>

  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-4 justify-content-center">
    {[
      { title: "Memoir", img: "memoir.webp" },
      { title: "Thriller", img: "thriller.webp" },
      { title: "Comics", img: "comics.webp" },
      { title: "Fiction", img: "fiction.webp" },
      { title: "Non Fiction", img: "non-fiction.webp" },
      { title: "12+ Genres!", img: "12-genres.webp" }, // Fix the filename
    ].map(({ title, img }, idx) => (
      <div className="col text-center" key={idx} data-aos="fade-up">
        <div className="bg-white shadow-lg rounded-3 py-4 px-2 h-100 d-flex flex-column align-items-center justify-content-center">
          <img
            src={`https://londonbookpublishers.com/wp-content/uploads/2024/12/${img}`}
            alt={title}
            width={47}
            height={53}
            className="mb-2"
          />
          <h6 className="fw-semibold">{title}</h6>
        </div>
      </div>
    ))}
  </div>


   {/* Layout Impact Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold">Let our layouts and formats change the way your story looks!</h2>
      </div>

</div>

    </div>

     

      {/* Services Icons Section */}
      <div className="row text-center mt-5 g-4" data-aos="fade-up">
        <p className='mt-5 fs-2 fw-bold'>Formatting Services All The Way</p>
        {[ 
          { title: 'Get Your Book Formatted', description: 'Get your book formatted in whatever style and layout you prefer; our team got you covered.' },
          { title: 'Publish Your Book', description: 'Publish your book on your own with our complete self-publishing package, or let us do it for you.' },
          { title: 'Print Your Book', description: 'Get your book printed in clean paperback and hardcover trim sizes with quality paper, binding and finishing.' },
          { title: 'Sell Your Book', description: 'Sell your book in the local bookstore in your city or on online platforms like Amazon.' }
        ].map((item, idx) => (
          <div className="col-md-3" key={idx}>
            <div className="border rounded-4 p-4 h-100 shadow-sm">
              <div className="mb-3">
                <i className="bi bi-journal-text fs-1 text-primary"></i>
              </div>
              <h5 className="fw-bold mb-2">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
   
  

    </>
  );
};

export default BookFormatting;
