import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="subtitle">FAQ</h5>
          <h2 className="title">
            Quick <span>Answers</span> You Need
          </h2>
        </div>

        <div className="accordion" id="faqAccordion">
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"     
              >
               What cities or locations do you operate in?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
              We currently provide event planning and management services across Indore, Bhopal, Jabalpur, Gwalior, Ujjain, and surrounding areas.

              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can you customize events based on our theme or preferences?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
             Absolutely! We specialize in theme-based events tailored to your vision, from decor and lighting to artist selection and stage design.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              > What’s the booking process with GNVIndia?

              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Simply contact us via phone, email, or the contact form. After a brief consultation, we’ll share a custom proposal and take it forward from there.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
               
               Do you handle permissions, licenses, and vendor coordination?

              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
             Yes, we take care of all legal permissions, vendor bookings, logistics, and backend coordination so you can enjoy a stress-free event.
              </div>
            </div>
          </div>
         <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"     
              >How early should we contact you to plan an event?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
              
                   For best results, we recommend contacting us at least 2-4 weeks in advance. However, we do accept urgent bookings depending on availability.

              </div>
            </div>
          </div>


          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"     
              >
               Do you provide on-site event coordination and support?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
             Yes, our experienced team is present on-site throughout the event to manage operations and ensure everything runs smoothly.

              </div>
            </div>
          </div>



          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"     
              >
              Can I visit past event galleries or client testimonials?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
            Yes, you can explore our portfolio and testimonials on the website or request a presentation from our team.

              </div>
            </div>
          </div>


          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"     
              >
             Do you offer all-inclusive packages or customizable services?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
              We offer both! Choose a complete event package or select services like artist booking, stage setup, or venue coordination individually.

              </div>
            </div>
          </div>


        </div>





        <div className="text-center mt-4">
          <Link to="/services" className="btn explore-btn">
            Explore More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
