import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PublishingProcess = () => {
  const steps = [
    {
      step: '01',
      title: 'Submission',
      description:
        'First things first – submission. We request for the complete manuscript and task our editors with going through it and coming up with an explanation of the tasks in hand. We then decide the goals and our approach toward the book.',
    },
    {
      step: '02',
      title: 'Proofreading & Editing',
      description:
        'Our editors then give the manuscript a thorough review and do the editing and proofreading where required to meet the publishing standards.',
    },
    {
      step: '03',
      title: 'Typesetting Images, Illustrations',
      description:
        'Once we are done with the written content, we work on the images. The typesetting of images, illustrations and book covers is done as the final step before publishing.',
    },
    {
      step: '04',
      title: 'Publishing & Distribution',
      description:
        'Once all these steps are completed, the manuscript is submitted for publishing at platforms promised and in formats that our authors want, assuring 100% compliance.',
    },
    {
      step: '05',
      title: 'Book Cover Design',
      description:
        'After the book is out, based on its sales statistics, we recommend marketing services to give them a boost if needed.',
    },
  ];

  return (
    <section className="py-5 bg-light" style={{ fontFamily: "'Segoe UI', sans-serif" }} data-aos="fade-right">
      <div className="container">
        <div
          className="text-center mb-5 p-4 rounded"
          style={{ background: '#f8f9fa' }}  data-aos="fade-left"
        >
          <h2 className="fw-bold display-5">Top-Tier Team – At Your Command</h2>
          <h3 className="fw-bold mt-3">How to Get a Book Published with Us?</h3>
          <p
            className="text-muted mt-3 fs-5"
            style={{
              maxWidth: '750px',
              margin: '0 auto',
              textAlign: 'center',
              fontSize: '1.05rem',
            }}
          >
            Our process is solely created to ensure comfort for the author while maintaining transparency.
            We ask for continuous approvals and provide updates at every step. This lets you take charge and get
            your book treated in a way you would.
          </p>
        </div>

        <div className="row g-3"  data-aos="fade-up">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-lg h-100 p-3">
                <div className="card-body">
                  <h1 className="text-primary fw-bold">{step.step}</h1>
                  <h1 className="fw-bold fs-5 fw-bold">{step.title}</h1>
                  <p className="text-muted" style={{ textAlign: 'justify', fontSize: '0.96rem' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

        {/* className="text-center mb-5 p-4 text-white"
        style={{ background: "linear-gradient(135deg, #2c3e50, #3498db)" }}
        data-aos="fade-down"
      > */}

      <div className="container-fluid mt-5 d-flex justify-content-center"  style={{ background: "linear-gradient(135deg, #2c3e50, #3498db)", height:"50vh" }}>
          <div className="text-center mt-5 py-5 rounded">
          <h1 className="fw-bold mb-4 text-white">Want to know more about London Book Publishers?</h1>
          <a href="/about-us/" className="btn btn-warning px-4 py-2">
            <i className="bi bi-info-circle me-2"></i> Learn More
          </a>
        </div>
      </div>

    </section>
  );
};

export default PublishingProcess;
