import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt } from "react-icons/fa";

const PublishingSection = () => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column: Text content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">
              Comprehensive Book Publishing and Marketing Services
            </h2>

            <p className="fs-6 text-muted" style={{ fontFamily: "Georgia, serif" }}>
              Our publishing services cover everything from self-publishing on Amazon to launching on various platforms. With a team that understands the process inside out, we guide you through every step or handle it entirely, ensuring a seamless experience.
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: "Georgia, serif" }}>
              Marketing is key to a book’s success, and our experts develop tailored strategies to boost visibility and reach the right audience. From digital campaigns to promotional efforts, we help maximise your book’s potential.
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: "Georgia, serif" }}>
              Our editors and proofreaders refine your manuscript to meet professional standards. With expertise across genres, they enhance clarity, correct errors, and polish every detail to perfection.
            </p>
            <p className="fs-6 text-muted" style={{ fontFamily: "Georgia, serif" }}>
              A strong visual appeal makes a difference, and our designers craft compelling book covers, while our illustrators bring stories to life. We also offer audiobook services with narrators suited to your book’s tone and style.
            </p >
            <p className="fs-6 text-muted" style={{ fontFamily: "Georgia, serif" }}>
              To strengthen your online presence, we create professional author websites that serve as a marketing hub. From publishing to promotion, our complete services ensure your book gets the attention it deserves.
            </p>

            <div className="row g-2 mt-4">
              <div className="col-6">
                <a
                  href="#elementor-action:action=popup:open&settings={%22id%22:%226917%22,%22toggle%22:false}"
                  className="btn btn-primary w-100"
                >
                  Get A Quote
                </a>
              </div>
              <div className="col-6">
                <a href="tel:+442030984500" className="btn btn-outline-secondary w-100">
                  <FaPhoneAlt className="me-2" /> +44 20 3098 4500
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2025/04/marketing-ideas-share-research-planning-concept-1-1024x1024.jpg"
              alt="Marketing Ideas"
              className="img-fluid rounded shadow-sm flip-on-mobile" data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* Custom CSS for image flip on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flip-on-mobile {
            transform: scaleX(-1);
            transition: transform 0.4s ease;
          }
        }
      `}</style>
    </section>
  );
};

export default PublishingSection;
