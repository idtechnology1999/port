"use client";

import React from "react";
import { BsCheckCircleFill, BsTruck, BsLayersFill, BsPrinterFill, BsBookFill, BsBookHalf, BsFileText, BsImages} from "react-icons/bs";
import { Container, Row, Col, Card } from "react-bootstrap";

function page() {
  return (
    <div>

  <section
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        position: 'relative',
        color: '#fff',
      }}
      className="d-flex align-items-center"
    >
      {/* Fade Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'rgba(0, 0, 0, 0.79)',
          zIndex: 1,
        }}
      />

      <div className="container position-relative z-2 text-white">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold display-5">Publish. Print. Prosper.</h1>
            <p className="lead tet-muted mt-4">
              Publish, print, and sell your books internationally with our Print-On-Demand network while eliminating the risk and hassle of inventory and fulfillment
            </p>
          </div>

          {/* Image Section */}
          {/* <div className="col-md-6 d-none d-md-block">
            <img
              src="https://images.unsplash.com/photo-1581093588401-5b9d7bb1d2f6?auto=format&fit=crop&w=800&q=80"
              className="img-fluid rounded-4 shadow-lg"
              alt="Proofreading Team"
            />
          </div> */}
        </div>

       
      </div>
    </section>

  <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Book Printing Services In The UK</h2>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p>
              We work with both publishers and self-publishers across the UK to create high quality printed books. Our website also includes an innovative online ordering process so you can order your books or booklets as quickly and efficiently as possible.
            </p>
            <p>
              We’ve invested in the latest digital and litho printing technology which runs alongside our fully equipped crafts bindery. This allows us to offer both softback and hardback books in long and short runs to an exceptional high standard.
            </p>
            <p>
              Our binding services include saddle stitched, wire-o bound, case bound and perfect binding.
            </p>
            <p>
              Order black and white or colour book printing in portrait, landscape or square. Front and back covers can be printed on one or both sides with soft touch, matt or gloss lamination as required. Special finishes including foil blocking and spot UV are also available.
            </p>
            <p>
              Please contact us on +44 20 3098 4500 or e-mail us for more information about our book printing services.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2025/04/modern-manufacturing-equipment-futuristic-factory-generated-by-ai-1-1024x585.jpg"
              alt="Book Printing"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <h2 className="fw-bold text-center mb-4">Benefits of Self-Publishing with London Book Publishers</h2>
        <p className="text-center mb-5">
          London Book Publishers uses the most advanced print-on-demand technology to offer self-publishers quality books in a wide variety of print options for an affordable price.
        </p>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsCheckCircleFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Cutting-Edge Quality and Durability</Card.Title>
                <Card.Text>
                  Indistinguishable from traditionally published books: inside and out.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsLayersFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Binding & Paper Options</Card.Title>
                <Card.Text>
                  Perfect bound and case laminate bindings; crème or white 74 gsm and 104 gsm paper options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsPrinterFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Color Printing or Black-and-White</Card.Title>
                <Card.Text>
                  Advanced color printing for stunning visuals and crisp text.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsBookFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Easily Update Files</Card.Title>
                <Card.Text>
                  Easily update print-on-demand files; new prints reflect changes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsBookFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Book Trim Sizes Galore</Card.Title>
                <Card.Text>
                  Choose the perfect trim size that suits your story.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsBookFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Hardcover or Paperback</Card.Title>
                <Card.Text>
                  Choose jacketed, glossy, textured, or matte finishing options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsTruck className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Fast & Efficient Shipping Worldwide</Card.Title>
                <Card.Text>
                  Global print facilities ensure rapid and reliable delivery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsCheckCircleFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">Never Out of Stock</Card.Title>
                <Card.Text>
                  Print on demand ensures availability whenever needed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BsLayersFill className="text-primary mb-3" size={32} />
                <Card.Title className="fw-bold">No Need to Store Unsold Copies</Card.Title>
                <Card.Text>
                  Books are printed when ordered, saving storage costs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

 {/* Section 1: Intro with image */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={9}>
              <h2 className="fw-bold mb-3">Colour Book Printing</h2>
              <h2 className="fw-bold mb-3">Print on Demand (POD)</h2>
              <p>
                Typically single copy production printed digitally. The books are
                not printed until an order has been received which allows books
                to be printed literally one a time.
              </p>
              <p>
                This is a very popular route for self-publishing authors as it
                means that large quantities of books do not need to be kept in
                stock, reducing storage costs and space. However, the per-unit
                cost is typically greater than with a larger print run.
              </p>
              <p>
                Book printing on demand can also be an ideal route to bring an
                out-of-print title back into print.
              </p>
              <p>
                Bookprinting.co.uk are currently setting up a unit for print to
                demand books. Please contact us for further details.
              </p>
            </Col>
            <Col md={3}>
              <img
                src="https://londonbookpublishers.com/wp-content/uploads/2024/12/shutterstock_510222586-e1504794437315-400x400.jpg.webp"
                alt="Colour Book"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Trim Sizes */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            Which industry-standard trim sizes are available for POD?
          </h2>
          <Row className="text-center g-4">
            <Col md={4}>
              <BsBookHalf size={40} className="mb-2 text-primary" />
              <h5>Digest</h5>
              <p className="mb-0">5.5" x 8.5"</p>
              <p className="text-muted">HARD & SOFT COVER</p>
              <p>
                Digest trim size is commonly used for digest publications such
                as the TV Guide, and Reader's Digest, but also poetry books.
              </p>
            </Col>
            <Col md={4}>
              <BsImages size={40} className="mb-2 text-primary" />
              <h5>Landscape</h5>
              <p className="mb-0">9" x 7"</p>
              <p className="text-muted">HARD & SOFT COVER</p>
              <p>
                Landscape books make beautiful art & photography table top
                books and children’s books.
              </p>
            </Col>
            <Col md={4}>
              <BsFileText size={40} className="mb-2 text-primary" />
              <h5>Square</h5>
              <p className="mb-0">8.5" x 8.5"</p>
              <p className="text-muted">HARD & SOFT COVER</p>
              <p>
                A modern and stylish option for cookbooks, photo books and more.
              </p>
            </Col>
          </Row>

          <Row className="text-center g-4 mt-4">
            <Col md={4}>
              <BsFileText size={40} className="mb-2 text-primary" />
              <h5>US Letter</h5>
              <p className="mb-0">8.5" x 11"</p>
              <p className="text-muted">HARD & SOFT COVER</p>
              <p>
                US Letter is common for training manuals, photography books and
                standard reports.
              </p>
            </Col>
            <Col md={4}>
              <BsBookHalf size={40} className="mb-2 text-primary" />
              <h5>US Trade</h5>
              <p className="mb-0">6" x 9"</p>
              <p className="text-muted">HARD & SOFT COVER</p>
              <p>
                Popular choice for sporting books and non-fiction titles.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 bg-light">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">
            You do the writing, we'll take care of the rest.
          </h2>
          <p className="mb-4">
            Getting your book published and printed with us is easy! To get a
            quote, simply choose the service you want and complete the online
            form. Once you’ve submitted your quote, we’ll be in touch within 24
            hours.
          </p>
          <img
            src="https://londonbookpublishers.com/wp-content/uploads/2024/12/5fb9a6610662593b33b8148d_gang-removebg-preview.png"
            alt="Publishing Help"
            className="img-fluid mt-3"
            style={{ maxWidth: "300px" }}
          />
        </Container>
      </section>

    </div>
  )
};

export default page;