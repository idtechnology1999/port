'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FaqAccordion = () => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                >
                  <i className={`bi ${item.icon} me-2`}></i> {item.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: 'What services does London Book Publishers offer?',
    answer: `At London Book Publishers, we provide a full suite of publishing services designed to guide you through every step of your book’s journey. Our offerings include professional manuscript evaluation, comprehensive editing (proofreading, copyediting, and formatting), custom book cover design, and both digital and print-on-demand publishing. We also offer extensive marketing and distribution support, helping your book reach a global audience across major platforms like Amazon, Apple Books, and Barnes & Noble. Our goal is to provide tailored solutions that meet the unique needs of each author, ensuring your book stands out in a competitive market..`,
    icon: 'bi-question-circle',
  },
  {
    question: 'How do I get started with publishing my book?',
    answer: `To begin the publishing process, we invite you to submit your manuscript via our Contact Page for an initial evaluation. Following a review of your manuscript, we will arrange a one-on-one consultation where we’ll discuss your publishing goals, timelines, and any specific requirements. This allows us to create a customised plan that aligns with your vision and ensures your book is positioned for success.`,
    icon: 'bi-pencil-square',
  },
  {
    question: 'How long does the publishing process take?',
    answer: (
      <ul>
        <li>The timeline for publishing can vary depending on the specific services required, but typically:</li>
        <li>Editing and Proofreading: 3–6 weeks</li>
        <li>Book Design: 2–4 weeks (cover and interior formatting)</li>
        <li>Digital and Print Distribution: 1–2 weeks after final approval</li>
        <li>
          We pride ourselves on delivering quality results in a timely manner, and we work closely with you to ensure
          your book is ready for release as quickly as possible while maintaining the highest standards.
        </li>
      </ul>
    ),
    icon: 'bi-clock-history',
  },
  {
    question: 'What is the cost of publishing a book?',
    answer: `The cost of publishing depends on the scope of services you choose. We offer flexible packages tailored to both first-time authors and experienced writers. Our basic self-publishing packages start from £500, which includes manuscript review and ebook formatting, while comprehensive publishing services, including editing, design, and marketing, start at £1,500. We also provide custom packages to fit your specific needs and budget. To receive a detailed quote, please reach out to us for a consultation.`,
    icon: 'bi-currency-pound',
  },
  {
    question: 'Do I retain full rights to my book?',
    answer: `Absolutely. As the author, you retain full ownership and copyright of your book. At London Book Publishers, we believe that authors should maintain control of their intellectual property, and we operate on a non-exclusive basis. Our role is to assist with the publishing, design, and marketing process, ensuring that your book is professionally presented and reaches the right audience.`,
    icon: 'bi-shield-check',
  },
  {
    question: 'Will you help me distribute my book to bookstores?',
    answer: `Yes, we provide both online and offline distribution services to ensure that your book is available in the most prominent outlets. For online distribution, we partner with major platforms such as Amazon, Barnes & Noble, and Apple Books. For offline distribution, we assist in placing your book in bookstores and libraries both nationally and internationally, ensuring that your book reaches readers across multiple channels.`,
    icon: 'bi-book',
  },
  {
    question: 'What happens if my book is rejected?',
    answer: `If your manuscript is not accepted, we provide constructive feedback and guidance on how to improve your work. Whether it’s a matter of editing, structure, or overall presentation, we aim to help you make necessary revisions. We also offer professional editing and proofreading services to refine your manuscript before resubmitting or exploring alternative publishing routes`,
    icon: 'bi-exclamation-triangle',
  },
  {
    question: 'How do I receive royalties?',
    answer: `Royalties are paid based on the sales of your book, and payments are made directly to you. The percentage of royalties varies depending on the distribution platform and the publishing agreement. After your book is distributed and sold, we provide regular royalty payments, typically on a monthly or quarterly basis, depending on the platform.`,
    icon: 'bi-cash-coin',
  },
];

export default FaqAccordion;
