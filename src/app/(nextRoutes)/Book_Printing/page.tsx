import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import Hero from "@/app/Sub_hero1/page"

const BookPrinting = () => {
  return (
    <>
      {/* Section: Exceptional Book Printing Services */}
      <section className="py-5 m-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-3">Exceptional Book Printing Services</h2>
              <h2 className="fw-bold mb-3">
                Work with the Best Book Printing Company in the Country and Make
                Your Book A Bestseller
              </h2>
              <p>
                London Book Publishers acts as the bridge between a dream and
                reality of book printing for authors. Once you are done with the
                writing, editing and formatting, get to printing to wind the
                project and make a name for yourself as an author.
              </p>
              <ul className="list-unstyled d-flex flex-wrap gap-4 my-4">
                <li className="d-flex align-items-center">
                  <BsCheckCircleFill className="text-success me-2" />
                  <span>Quality Book/Novel Printing</span>
                </li>
                <li className="d-flex align-items-center">
                  <BsCheckCircleFill className="text-success me-2" />
                  <span>10+ Years of Experience</span>
                </li>
                <li className="d-flex align-items-center">
                  <BsCheckCircleFill className="text-success me-2" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/client-rating.webp"
                alt="Client Rating"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </Col>
            <Col md={6}>
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/my-project.webp"
                alt="Book Publishing"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

   <Hero/>


      {/* Section: Custom Size Book Printing */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-3">Custom Size Book Printing</h2>
              <p className="fs-6 m-2">
                We give full authority to authors to choose their book size based on the format and type. They can
                expect a book of any size, layout, color and finish they want as long as it is par publishing standards and we got them.
              </p>
              <p className="fs-6 mt-5">
                We make this happen by working closely with the authors and following their preferences. Papers cutting,
                cover designing and finishing are done exactly based on the final approval. All you gotta do is
                let us know about the size and paper type to use in the book. The rest of the things are shown and
                approval is taken accordingly.
              </p>
              <p className="fs-6 mt-5">
                In order to know if a certain manuscript can be printed in your desired size, do the research or book a
                consultation with our expert team. Once past that phase, you can order our services.
              </p>
              <p className="fs-6 mt-5 mb-5">
                In case of need formatting to fit the printing size, contact our team, and we will give you a quote for
                that, too. Work starts as soon as the payment is processed.
              </p>
              <div className="d-flex gap-3 mt-5">
                <Button href="/contact-us/" variant="dark">Get A Quote</Button>
                <Button href="tel:+442030984500" variant="outline-dark">+44 20 3098 4500</Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/custom_sizes.png"
                alt="Custom Size Book"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

<section className="py-5 bg-light">
  <Container>
    <h2 className="fw-bold text-center mb-5">What Makes Us Special?</h2>
    <Row className="text-center g-4">
      <Col md={3}>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/c1.png"
          alt="Quality Printing"
          className="img-fluid mb-3"
        />
        <h4 className="fw-bold">Quality Printing</h4>
        <p>
          As the UK’s professional book printing service, we don’t compromise on quality. No ink bleeding or flimsy cover.
          We ensure that each page of every project is evidence of our high-quality printing service.
        </p>
      </Col>
      <Col md={3}>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/c2.png"
          alt="Supreme Binding"
          className="img-fluid mb-3"
        />
        <h4 className="fw-bold">Supreme Binding</h4>
        <p>
          Pages shedding off from a book for no apparent reason can be a big put-off for your book.
          We offer saddle stitch, wire-o binding and more to prevent that.
        </p>
      </Col>
      <Col md={3}>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/c3.png"
          alt="100% Customization"
          className="img-fluid mb-3"
        />
        <h4 className="fw-bold">100% Customization</h4>
        <p>
          We ensure you don't have to worry about sizes, covers, or finishes. We offer full customisation for your vision.
        </p>
      </Col>
      <Col md={3}>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/c4.png"
          alt="Low Prices"
          className="img-fluid mb-3"
        />
        <h4 className="fw-bold">Low Prices</h4>
        <p>
          High-quality printing without breaking the bank. Affordable prices for independent authors and publishers.
        </p>
      </Col>
    </Row>
  </Container>
</section>

<section className="py-5">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="mb-4 mb-md-0">
        <h2 className="fw-bold">We Offer the Best Book Printing Services in the UK</h2>
        <p>
          If you are an independent author, we understand the struggles out there for you.
          One search on the internet and there comes a million options, each almost unreliable and difficult to work with.
        </p>
      </Col>
      <Col md={6}></Col>
    </Row>
  </Container>
</section>

<section className="py-5 bg-light">
  <Container>
    <h2 className="fw-bold text-center mb-4">Get Your Book Printed</h2>
    <h4 className="text-center mb-5">A Process Created to Facilitate Authors</h4>
    <Row className="text-center g-4">
      <Col md={4}>
        <h5 className="fw-bold">1. Place The Order</h5>
        <p>
          Leave a text for our team to respond, discuss the project, select the services required and receive a quote from our end.
        </p>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/upload-text-pdf.webp"
          alt="Place Order"
          className="img-fluid"
        />
      </Col>
      <Col md={4}>
        <h5 className="fw-bold">2. Share The Files</h5>
        <p>
          Process the payment and share the files for us to analyse and start working.
        </p>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/upload-create-cover.webp"
          alt="Share Files"
          className="img-fluid"
        />
      </Col>
      <Col md={4}>
        <h5 className="fw-bold">3. Get The Delivery</h5>
        <p>
          Once you approve the final files, we print the book and ship it to you.
        </p>
        <img
          src="https://londonbookpublishers.com/wp-content/uploads/2024/12/approve-proof.webp"
          alt="Get Delivery"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
</section>
    </>
  );
};

export default BookPrinting;
