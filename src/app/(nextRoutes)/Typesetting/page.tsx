import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import Scroll from "@/app/Sub_hero1/page"

const BookPrintingSection = () => {
  return (
    <div className="page-content py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Text Content */}
          <Col
            lg={6}
            data-aos="fade-left"
            className="mb-4 mb-lg-0"
          >
            <h3 className="fw-bold">
              Stunning Book Printing Service Based in London
            </h3>
            <h3 className="fw-bold mt-3">
              Book Printing Company In UK That Helps You Earn A Place On The Bestseller’s Shelf
            </h3>
            <p className="lead mt-3 fs-6">
              The Book Printing is your dream spot for online book printing services in UK. After writing, editing, and formatting, book printing is the last step that completes your journey of becoming a successful author.
            </p>

            <ul className="list-inline mt-4">
              <li className="list-inline-item me-4">
                <BsCheckCircle className="text-success me-2" /> Quality Book/Novel Printing
              </li>
              <li className="list-inline-item me-4">
                <BsCheckCircle className="text-success me-2" /> 10+ Years of Experience
              </li>
              <li className="list-inline-item">
                <BsCheckCircle className="text-success me-2" /> Dedicated Account Manager
              </li>
            </ul>

            <div className="mt-4">
              <Image
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/client-rating.webp"
                width={207}
                height={72}
                alt="Client Rating"
                fluid
              />
            </div>
          </Col>

          {/* Right Image */}
          <Col
            lg={6}
            data-aos="fade-right"
          >
            <Image
              src="https://londonbookpublishers.com/wp-content/uploads/2024/12/the-fundamentals-of-typesetting.jpg"
              alt="Typesetting"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>

      <Scroll/>

       <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold">Custom Size Book Printing</h2>
              <p>
                We offer custom size book printing, so you can make your books truly unique.
                This is perfect for printing square shaped books.
              </p>
              <p>
                We do this by cutting a standard paper size down to fit the desired dimensions
                of your book. So when you place your order, choose a standard paper size that
                the height and width of your book design would fit inside.
              </p>
              <p>
                When you upload your artwork, make sure that it is sized to print at your
                custom size. Then contact our customer services team, quoting your order number.
              </p>
              <p>
                If you cannot fit your custom book size within the standard paper sizes on our
                website, please contact us and we will endeavor to get you a bespoke quote and
                get your job into production.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/Reedsy-Typesetting-Examples-min.jpg"
                alt="Custom Book Example"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
  <div className="container">
    <h2 className="fw-bold text-center mb-4">Typesetting Services</h2>
    <p className="lead text-center mb-5">
      We typeset text-heavy novels to complex 1000+ page academic textbooks, formatting
      text and content to ensure accuracy and consistency using industry-leading software like
      Adobe, Quark, and Microsoft Office. We quickly grasp document structure and design principles.
    </p>

    <h3 className="fw-semibold mb-4"><i className="bi bi-tools me-2"></i>We Do</h3>
    <div className="row">
      <div className="col-md-6 mb-4">
        <ul className="list-unstyled">
          <li className="mb-3">
            <i className="bi bi-calculator-fill text-primary me-2"></i>
            Mathematical, chemical and scientific equations
          </li>
          <li className="mb-3">
            <i className="bi bi-arrow-repeat text-primary me-2"></i>
            Reformat QuarkXPress files into Adobe InDesign or MS Word
          </li>
          <li className="mb-3">
            <i className="bi bi-fonts text-primary me-2"></i>
            Expert typographic and typeface selection advice
          </li>
          <li className="mb-3">
            <i className="bi bi-quote text-primary me-2"></i>
            Footnotes, endnotes, quotations
          </li>
          <li className="mb-3">
            <i className="bi bi-sliders2 text-primary me-2"></i>
            Micro-typography: justification, kerning, leading, tracking, etc.
          </li>
        </ul>
      </div>

      <div className="col-md-6 mb-4">
        <ul className="list-unstyled">
          <li className="mb-3">
            <i className="bi bi-cursor-text text-success me-2"></i>
            Fix widow/orphan words and text rags
          </li>
          <li className="mb-3">
            <i className="bi bi-check2-circle text-success me-2"></i>
            Prepress preflight: remove unused fonts, swatches, etc.
          </li>
          <li className="mb-3">
            <i className="bi bi-printer text-success me-2"></i>
            Setup to printer specs: bleed, crop marks, PDF preparation
          </li>
          <li className="mb-3">
            <i className="bi bi-table text-success me-2"></i>
            Tables with decimal alignment
          </li>
          <li className="mb-3">
            <i className="bi bi-code-slash text-success me-2"></i>
            XML tagging and export
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What Makes Us Special?</h2>
          <div className="row text-center">
            {[
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c1.png",
                title: "Quality Printing",
                desc: "As the UK’s professional book printing service, we don’t compromise on quality. No ink bleeding or flimsy cover. We ensure that each page of every project is evidence of our high-quality printing service. Partner with us, and you'll get a high-quality printed book for every order."
              },
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c2.png",
                title: "Supreme Binding",
                desc: "Pages shedding off from a book for no apparent reason can be a big put-off for your book. You don't want that. To avoid this problem for good, it's best to partner with a book printing services UK that offers saddle stitch and wire-o binding. Luckily, you can get any binding type from here."
              },
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c3.png",
                title: "100% Customization",
                desc: "Books come in all shapes, sizes, and covers. As professional book printers UK, we ensure that you don't have to worry about these things. We provide 100% customisation with our service, which offers you more control over the project's outlook. You dream it, we deliver it."
              },
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/c4.png",
                title: "Low Prices",
                desc: "With Wright Book Associates, you don't have to worry about going over your budget. With a high-quality print, we offer an affordable service to ease the burden on your wallet. This way, you can save up money that you can use elsewhere."
              }
            ].map((feature, idx) => (
              <div key={idx} className="col-md-3 mb-4">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="img-fluid mb-3"
                  width="150"
                />
                <h5 className="text-start">{feature.title}</h5>
                <p className="text-muted text-start">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">The Steps That Lead You To Success</h2>
          <p className="mb-5 fs-6 text-muted">
            Are you seeking a platform to bring your ideas to fruition? Look no further than TheGhostWriting.co.uk Our proficient UK ghostwriter for hire possesses the skill to captivate audiences by sharing distinct ideas and stories. Renowned for crafting well-structured, imaginative, and top-tier content, we prioritize delivering customer satisfaction.
          </p>
          <div className="row">
            {[
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/1.webp",
                title: "Analyzing and Crafting an Outline",
                desc: "We dedicate ourselves to comprehending your concept and requirements through research. This groundwork allows us to formulate a comprehensive plot plan that aligns seamlessly with your vision"
              },
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/2.webp",
                title: "Genuine Content Reflecting Your Perspective",
                desc: "Upon your approval of the plot plan, the ghostwriter will create authentic content that remains true to your unique concept and viewpoint."
              },
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/3.webp",
                title: "Thorough Review, Editing, and Proofreading",
                desc: "Our ghostwriters meticulously revise the draft to align it with your specifications while our editors conduct a comprehensive review to ensure its quality and coherence."
              },
              {
                img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/4.webp",
                title: "Crafting, Formatting, and Typesetting",
                desc: "As the book undergoes the stages of writing, editing, and proofreading, the final version is designed, formatted, and typeset. This refined version is then presented to the client for approval before printing."
              }
            ].map((step, index) => (
              <div key={index} className="col-md-3 mb-4 border-end border-gray border-2 pe-3">
                <img src={step.img} alt={step.title} className="img-fluid mb-3" width="150" />
                <h6 className="fw-bold">{step.title}</h6>
                <p className="text-center fs-6 p-4 text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPrintingSection;
