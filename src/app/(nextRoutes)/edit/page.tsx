'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero1 from "@/app/Sub_hero1/page"

const BookEditingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);



    const services = [
    {
      title: 'Self-Publish Review',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/ebook-self-publishing-300x180-1.png',
      description:
        'Get your book reviewed and get feedback from our team regarding actions to take to get better results on your already published book.',
    },
    {
      title: 'Developmental Editing',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/line-edit-300x180.jpg.webp',
      description:
        'Get detailed editorial reports and editing at the points where the book needs major changes, including those in the structure, flow and character development.',
    },
    {
      title: 'Line Editing',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/editors-room-line-editing-300x200-1.jpg',
      description:
        'Get your book reviewed line by line by a professional editor. Line editing ensures there are no mistakes in grammar, punctuation, or spelling to refine your book.',
    },
    {
      title: 'Manuscript Assessment',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/hand-writing-in-book-300x169.jpg.webp',
      description:
        'Get your entire book reviewed by an expert editor and receive a report with in-depth analysis. Ideal for both fiction and non-fiction.',
    },
    {
      title: 'Opening Section Review',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/woman-writing-over-shoulder-300x198.jpg.webp',
      description:
        'Get the first 20,000 words of your book reviewed with detailed feedback on your novel’s beginning.',
    },
    {
      title: 'Agent Submission Pack Review',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/agent-submission-pack-1-300x200.jpg.webp',
      description:
        'We’ll review your query letter, synopsis, and first 10,000 words. Great for both fiction and non-fiction.',
    },
    {
      title: 'Copy Editing',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/self-editing-debi-alper-pt-one-prod-thumb-300x200.jpg.webp',
      description:
        'Manuscript copy-edited by experts. Ideal for self-publishers or those writing in a second language.',
    },
    {
      title: 'Picture Book Assessment',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/picture-book-services-prod-thumb-1-300x200.jpg.webp',
      description:
        'Have your children’s picture book reviewed and get a professional editorial report.',
    },
    {
      title: 'Short Story Review',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/Homepage-image-group-community-1-300x200-1.jpg',
      description:
        'Editorial review for your short stories or collection, from experts across domains.',
    },
    {
      title: 'Poetry Review',
      image: 'https://londonbookpublishers.com/wp-content/uploads/2024/12/feature-143-poetry-tips-300x200-1.jpg',
      description:
        'Get your poetry analysed by experienced editors. Includes an in-depth report and suggested next steps.',
    },
  ];

  // editing and all

  const editingSteps = [
    {
      title: "Analysis of the Manuscript",
      description:
        "The first step is to get the manuscript reviewed for errors, and a report is created to offer an overview of the errors and changes needed.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/1.webp",
    },
    {
      title: "Decision of the Editing Approach",
      description:
        "Finalize the type of editing that is expected, whether it is line, developmental or copy, based on the suggested approach and how it aligns with the author’s vision.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/2.webp",
    },
    {
      title: "Editing and Revisions",
      description:
        "Editing and sending of the manuscripts in drafts for reviews until the final book is compiled.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/3.webp",
    },
    {
      title: "Formatting and Typesetting",
      description:
        "Last step is to format the edited book and ensure it is ready to be sent to the publisher. A final approval from the author is required before this step.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/4.webp",
    },
  ];

  const qualities = [
    {
      title: "High-Quality Print",
      description:
        "We don’t compromise on the quality. Every page printed is a testament to our top-tier service.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c1.png",
    },
    {
      title: "A Solid Bind",
      description:
        "We ensure every book is well-bound and durable, with no loose pages or wear over time.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c2.png",
    },
    {
      title: "Customization to the Core",
      description:
        "We print in all sizes and styles. Our packages are fully customizable to your exact needs.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c3.png",
    },
    {
      title: "Low Prices",
      description:
        "We provide top-notch service at competitive rates, helping you stay on budget without sacrificing quality.",
      image: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c4.png",
    },
  ];


  return (
    <>
    <section
      className="py-5"
      style={{
        fontFamily: `'Segoe UI', Roboto, sans-serif`,
        backgroundColor: '#e9ecef', // Gray background
      }}
    >
      <div className="container">
        <div className="d-flex flex-column-reverse flex-lg-row align-items-stretch gap-4">
          {/* Left Column */}
          <div
            className="col-lg-6 d-flex flex-column justify-content-center rounded p-4"
            data-aos="fade-right"
          >
            <h6 className="fw-bold text-secondary">
              Ensure the Presence of Your Words Everywhere
            </h6>
            <h1 className="text-dark fw-bold mb-3" style={{ fontSize: '2.4rem' }}>
              Give Your Book a Professional Look by Utilizing Our Book Editing Services
            </h1>
            <p
              className="text-muted"
              style={{ fontSize: '1.1rem', fontWeight: '500', lineHeight: '1.8' }}
            >
              The world has changed drastically, and today, if you make a mistake, your content is buried
              deep where no one sees it. Utilize the skills of our editing team and refine your book to
              ensure it is free of any errors.
            </p>

            {/* Logos */}
            <div
              className="d-flex justify-content-between align-items-center my-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/11/goodfirms-bookmarketeers.png"
                alt="GoodFirms"
                width={120}
                height={70}
                className="img-fluid"
              />
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/11/bark-bookmarketeers.png"
                alt="Bark"
                width={120}
                height={70}
                className="img-fluid"
              />
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/11/clutch-bookmarketeers.png"
                alt="Clutch"
                width={120}
                height={70}
                className="img-fluid"
              />
            </div>

            {/* Buttons */}
            <div
              className="d-flex gap-3 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link href="/contact-us" className="btn btn-primary fw-semibold px-4">
                Get A Quote
              </Link>
              <a href="tel:+442030984500" className="btn btn-outline-secondary fw-semibold px-4">
                <i className="bi bi-telephone-fill me-2"></i> +44 20 3098 4500
              </a>
            </div>
          </div>

          {/* Right Column – Video */}
          <div
            className="col-lg-6 d-flex align-items-center p-3"
            data-aos="zoom-in-left"
            data-aos-delay="200"
          >
            <div className="ratio ratio-16x9 w-100" style={{ height: '100%' }}>
              <video
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/185096-874643413_tiny.mp4"
                autoPlay
                muted
                playsInline
                controlsList="nodownload"
                className="w-100 h-100 rounded object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

<Hero1/>

<section className="py-5" style={{ backgroundColor: '#f8f9fa', fontFamily: `'Segoe UI', Roboto, sans-serif` }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Professional Book Editing</h2>
          <p className="text-muted">
            We bring the steering of your manuscript to you! Whether you expect an analysis or are ready to get your book edited,
            our team is ready to make it happen. Explore our editing services below.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold text-dark">{service.title}</h5>
                  <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


     <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">How We Bring Success To Your Project</h2>
        <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Looking for a platform to get your book edited? Look no further because The London Book
          Publishers got you. Our team of editors has the attention to detail your project expects, and we are
          more than ready to deliver customer satisfaction.
        </p>
      </div>

      <div className="row g-4 mb-5">
        {editingSteps.map((step, index) => (
          <div className="col-md-6 col-lg-3 border-end border-gray border-2 pe-3"  key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={step.image} className="card-img-top" alt={step.title} style={{width:"40%"}} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{step.title}</h5>
                <p className="card-text text-muted small">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
        <h2 className="fw-bold">What Makes Us the Best?</h2>
      </div>

      <div className="row g-4">
        {qualities.map((quality, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow-lg border-0">
              <img
                src={quality.image}
                className="card-img-top"
                style={{ objectFit: "contain", height: "100px" }}
                alt={quality.title}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{quality.title}</h5>
                <p className="card-text text-justify text-muted small">{quality.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


</>
  );
};

export default BookEditingSection;
