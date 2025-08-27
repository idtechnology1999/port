"use client";

import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./carousel.css";
type Testimonial = {
  name: string;
  date: string;
  text: string;
};

const testimonials = [
  {
    name: "Oliver Bennett",
    date: "March 17, 2025",
    text:
      "London Book Publishers' book cover design was the perfect complement to my story, capturing its essence with stunning creativity. Adam Smith attention to detail and commitment to excellence ensured that my book stood out on both shelves and screens. I couldn't be happier with the result!",
  },
  {
    name: "Ethan Brooks",
    date: "March 13, 2025",
    text:
      "The journey with London book publishers was transformative. Their commitment to quality, creativity, and unwavering dedication to excellence set a new standard in the industry. I am deeply grateful to Trevor James for his invaluable role in bringing my book to life.",
  },
  {
    name: "Charlotte Moore",
    date: "September 18, 2024",
    text:
      "from beginning to end, london book publisher was fantastic. they listened to all my calls and helped me with the marketing stuff as well which increased the awareness of my book. i wish the company and his success. God bless you.",
  },
  {
    name: "Emma Taylor",
    date: "November 06, 2024",
    text:
      "if you're looking for a reliable publisher to handle both publishing and marketing, this is the company to go with. they made the entire process satisfying.",
  },
  {
    name: "Ethan Clark",
    date: "September 25, 2024",
    text:
      "tom was on the chat line and he told that they had a 50% off sale on there services. he took care of me he walk me through the whole process explain every detail because this is new territory for me. I knew nothing about publishing and marketing but they have a highly experienced publisher and marketer in the team and i am much happy that.",
  },
  {
    name: "Alexander Wilson",
    date: "September 11, 2024",
    text:
      "i'm grateful for the dedication and hard work the publishing and marketing team put into my book. the final result is a book i'm proud to share with readers.",
  },
  {
    name: "Jacob Brown",
    date: "October 24, 2024",
    text:
      "Truly outstanding! their publishing and marketing services i received were truly outstanding. the team's attention to detail and creative approach led to the success of my book and i am so happy to refer this company to all my friends.",
  },
  {
    name: "Benjamin Martinez",
    date: "August 21, 2024",
    text:
      "Skill and professionalism. im ecstatic about the outstanding service i got from this company. they managed my book's promotion and publication with skill and professionalism.",
  },
    {
    name: "Ethan Clark",
    date: "September 25, 2024",
    text:
      "tom was on the chat line and he told that they had a 50% off sale on there services. he took care of me he walk me through the whole process explain every detail because this is new territory for me. I knew nothing about publishing and marketing but they have a highly experienced publisher and marketer in the team and i am much happy that.",
  }
];

// Function to group testimonials based on screen size
const chunkArray = (arr: Testimonial[], chunkSize: number): Testimonial[][] => {
  if (!arr || !chunkSize) return [];
  const result: Testimonial[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function TestimonialsCarousel() {
  const [chunkSize, setChunkSize] = useState<number>(3);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateChunk = () => {
      const width = window.innerWidth;
      if (width < 576) setChunkSize(1);
      else if (width < 768) setChunkSize(2);
      else setChunkSize(3);
    };

    updateChunk();
    window.addEventListener("resize", updateChunk);
    return () => window.removeEventListener("resize", updateChunk);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextBtn = carouselRef.current?.querySelector<HTMLButtonElement>(".carousel-control-next");
      if (nextBtn) nextBtn.click();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonialGroups = chunkArray(testimonials, chunkSize);

  return (
    <div className="container-fluid my-5 bg-light">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Reviews by Authors for London Book Publishers</h1>
        <p className="text-muted m-3">
          The reviews reflect the experience of the authors with the brand,
          <br />
          showcasing their experience and services they admired.
        </p>
      </div>

      <div
        id="carouselExample"
        className="carousel slide m-5"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          {testimonialGroups.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row g-4">
                {group.map((item, i) => (
                  <div className="col-12 col-sm-6 col-lg-4" key={i}>
                    <div className="card h-100 shadow-lg">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-1">{item.name}</h5>
                          <span className="text-warning">★★★★★</span>
                        </div>
                        <small className="text-muted mb-2 d-block">{item.date}</small>
                        <i className="bi bi-quote-right fs-3 text-primary mb-2 d-block"></i>
                        <hr />
                        <p className="card-text text-justify text-muted fs-6">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
