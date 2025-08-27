'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsCheckCircle } from "react-icons/bs";


// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const logos = [
  'logo-publishers-weekly_3x_1.png',
  'WashPostStacked_New_600x-400x265-1.png',
  'inc-magazine-logo@3x.png',
  'Forbes-Ghostwrirting-Services-e1598300532500.png',
  'fox-news-logo.jpg',
  'fast-company-logo-vector.svg',
  '1280px-New_York_Times_logo_variation-bestselling-ghostwriting-ghostwriters-400x320-1.jpg',
];

 

const services = [
  {
    title: "Book Proofreading Services",
    desc: "Turn your book into a masterpiece with our word-to-word proofreading services, the best in the UK. We redefine your narrative and enhance your voice to ensure a story that shines.",
    img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/book-editing-services.webp"
  },
  {
    title: "Business Document Review",
    desc: "Give life to your business documents, reports and presentations with our book proofreading services, and put your word with confidence.",
    img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/business-doc-review.webp"
  },
  {
    title: "Publishing Assistance",
    desc: "Once you are done with the final checks, let us handle the publishing for you. From getting you a publishing account to getting your files up and putting the best price for your goals.",
    img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/publishing-assistance.webp"
  }
];

const features = [
  {
    title: "Qualified Personnel",
    desc: "Everyone in the editing and proofreading department is from a reputable university in the UK and holds at least a Masters Degree.",
    icon: "https://londonbookpublishers.com/wp-content/uploads/2024/12/secure-confidential.webp"
  },
  {
    title: "Consistency",
    desc: "Our proofreaders ensure consistency with your tone of writing and deliver the best version to your audience.",
    icon: "https://londonbookpublishers.com/wp-content/uploads/2024/12/consistency.webp"
  },
  {
    title: "Subject-Matter Experts",
    desc: "We assign the best professionals for academic projects. They understand your objectives and deliver accordingly.",
    icon: "https://londonbookpublishers.com/wp-content/uploads/2024/12/subject-experts.webp"
  },
  {
    title: "Scalability",
    desc: "No matter if we are doing ten or hundreds of papers, we have a system that ensures every word is reviewed efficiently.",
    icon: "https://londonbookpublishers.com/wp-content/uploads/2024/12/scalability.webp"
  },
  {
    title: "Confidential and Secure",
    desc: "Only assigned proofreaders and managers access your manuscript. Data is erased within 21 days post-completion.",
    icon: "https://londonbookpublishers.com/wp-content/uploads/2024/12/secure.webp"
  },
  {
    title: "A Trusted Reputation",
    desc: "With thousands of clients served over the past decade, we’re known for excellence in proofreading across the UK.",
    icon: "https://londonbookpublishers.com/wp-content/uploads/2024/12/trusted-reputation.webp"
  }
];


  const items = [
    "Authors, Writers, Self-Publishers",
    "Copywriters, Website Designers",
    "Students, Marketers, SEO Specialists",
    "Professionals writing reports",
    "Job seekers needing resume/application help",
    "From websites to legal docs—we help polish everything.",
  ];


const ProofreadingSection = () => {
  return (
    <section>
      {/* Overlay for fade */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
        }}
        className="container-fluid"
      >
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
            <h1 className="fw-bold display-5">Professional Book Proofreading Services in the UK</h1>
            <p className="lead tet-muted mt-4">
              Our editing team is trained to enhance your writing to perfection. Whether it's academic work or a
              novel, we ensure your text is polished, flowing, and impactful.
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

        {/* Carousel Section */}
        <div
          id="logoCarousel"
          className="carousel slide mt-5"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            {logos.map((src, idx) => (
              <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                <div className="d-flex justify-content-center">
                  <img
                    src={`https://londonbookpublishers.com/wp-content/uploads/2024/12/${src}`}
                    alt={`logo-${idx}`}
                    className="rounded-circle shadow-sm bg-white p-2"
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#logoCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#logoCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </section>



<div className="container m-5">
        {/* Form and Text */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold m-3 fs-6">Professional Proofreading and Editing Services for Everyone</h2>
            <p className="text-muted fs-5 m-3">
              Our dedicated team of proofreaders knows what an author expects and is well-versed in the skill.
              Your project (could be a thesis, dissertation, essay, or novel) is analysed down to its last
              detail, and services like proofreading, typesetting and plagiarism reports are provided. Most
              importantly, each of the editors are members of the SFEB and hold a Master’s Degree.
            </p>
          </div>
          <div className="col-md-6">
            <form className="bg-white p-4 rounded-4 shadow-lg">
              <div className="mb-4">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  pattern="[0-9()#&+*=.-]+"
                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                  required
                />
              </div>
              <div className="mb-4">
                <textarea className="form-control" rows="4" placeholder="Message" />
              </div>
              <div className="mb-4">
                <small className="text-muted">By submitting, you consent to receive SMS from us.</small>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
</div>


<div className="container-fluid" style={{
    background: "linear-gradient(to bottom, #f1f1f1, #e6e6e6)",
    fontFamily: "Segoe UI, sans-serif",
  }}>
  
  <div className="container">
        {/* Final Image & Text Section */}
        <div className="row align-items-center">

      <h1 className='fw-bold m-5 text-center'>A Look at our Comprehensive Proofreading Services</h1>


          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://londonbookpublishers.com/wp-content/uploads/2024/12/academic-proofreading.webp"
              alt="Academic Proofreading"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Academic Proofreading</h2>
            <p className="text-muted">
              Push your academic work to the next level with our book proofreading services, ensuring
              precision in your statements and a more professional overall representation.
            </p>
          </div>
        </div>
</div>



 <div className="container py-5">
      {services.map((item, idx) => (
        <div className="row align-items-center" key={idx}>
          <div className={`col-md-6 ${idx % 2 === 1 ? '' : 'order-md-2'}`}>
            <img src={item.img} alt={item.title} className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6">
            <h2 className='fs-5'>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}

      <div className="text-center my-5">
        <h2>Why Choose London Book Publishers for Proofreading?</h2>
      </div>

      <div className="row g-4">
        {features.map((feature, idx) => (
          <div className="col-sm-6 col-lg-4" key={idx}>
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <img src={feature.icon} alt={feature.title} className="mx-auto mb-3" style={{ width: '40px' }} />
              <h5 className="card-title">{feature.title}</h5>
              <p className="card-text small text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

</div>
      </div>

 <section className="bg-light py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Track to Move Your Book From Raw to Professional</h2>
        </div>

        <Row className="mb-5" data-aos="fade-up">
          {[
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/secure-confidential.webp",
              title: "Fastest Delivery System",
              desc: "Want to get your content proofread in a jiff? Our expert team aligns the orders based on urgency and delivers before time."
            },
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/consistency.webp",
              title: "Native English Writers",
              desc: "Our experts are proficient in all English versions: American, Australian, Canadian. We get your tone right."
            },
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/subject-experts.webp",
              title: "Professional Proofreaders",
              desc: "Based in London, our team serves globally. We polish books for Ireland, Wales, Scotland and beyond."
            }
          ].map((item, i) => (
            <Col key={i} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src={item.img} className="img-fluid p-3" style={{ maxHeight: '100px', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-5" data-aos="fade-up">
          {[
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/secure.webp",
              title: "Privacy is Integral",
              desc: "We prioritize confidentiality with NDAs and client security at the core."
            },
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/trusted-reputation.webp",
              title: "Supreme Quality",
              desc: "Final product is accurate in language and facts—handled by domain experts."
            }
          ].map((item, i) => (
            <Col key={i} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src={item.img} className="img-fluid p-3" style={{ maxHeight: '100px', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

   <section className="bg-white py-5">
      <div className="container">
        <div
          className="mb-4"
          data-aos="fade-left"
        >
          <h2 className="fw-bold mb-3 text-center">
            Who Exactly Might Need Proofreading Services?
          </h2>
          <p className="lead mb-4">
            Our proofreading services are ideal for:
          </p>
          <ul className="list-unstyled ps-1">
            {items.map((item, index) => (
              <li
                className="d-flex align-items-start mb-3"
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
<BsCheckCircle className="text-primary me-2 mt-1" size={20} />
                <span className="fs-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">How Do We Operate?</h2>
          <p className="text-muted">Our editing process is straightforward—submit in under 10 minutes.</p>
        </div>

        <Row className="text-center" data-aos="fade-up">
          {[
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/submit-icon.webp",
              title: "Submit your document",
              desc: "Fill out the form and submit your document."
            },
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/proofread-icon.webp",
              title: "We Begin Proofreading",
              desc: "Once payment is processed, a professional begins your project."
            },
            {
              img: "https://londonbookpublishers.com/wp-content/uploads/2024/12/return-icon.webp",
              title: "Returning of Document",
              desc: "We return 2 versions: one with suggestions and one finalized."
            }
          ].map((item, i) => (
            <Col key={i} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src={item.img} className="img-fluid p-3" style={{ maxHeight: '120px', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
       
    </section>
  );
};

export default ProofreadingSection;
