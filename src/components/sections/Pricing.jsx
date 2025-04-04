import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-10 py-lg-15" id="pricing">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-10">
            <div className="text-center">
              <p className="text-primary" data-aos="fade-up-sm" data-aos-delay="50">
                Pricing Plan
              </p>
              <h1 className="mb-5" data-aos="fade-up-sm" data-aos-delay="100">
                Ready to Get Started? <br />
                Don't Worry, We'll Keep You Under Budget
              </h1>
              <p className="mb-0" data-aos="fade-up-sm" data-aos-delay="150">
                Get started with a 5-day trial, Cancel anytime.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-6 pricing-table">
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="50">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <h3 className="text-primary fw-medium mb-0">Free</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$00</h1>
              <p className="lead fw-normal mt-4 mb-0">
                A 10X faster way to writing your professional copy
              </p>
              <a
                href="pricing-plan.html"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Start for Free
              </a>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li>Single seats</li>
                <li>10,000 words per month</li>
                <li>30+ AI writing tools</li>
                <li>60+ Copywriting tools</li>
                <li>10+ languages</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="100">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <h3 className="text-primary fw-medium mb-0">Starter</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$29</h1>
              <p className="lead fw-normal mt-4 mb-0">
                A 10X faster way to writing your professional copy
              </p>
              <a
                href="pricing-plan.html"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Choose Plan
              </a>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li>5 User seats</li>
                <li>
                  <strong className="fw-medium">50,000</strong> words per month
                </li>
                <li>
                  <strong className="fw-medium">70+</strong> AI writing tools
                </li>
                <li>
                  <strong className="fw-medium">100+</strong> Copywriting tools
                </li>
                <li>Blog post wizard tool</li>
                <li>25+ languages</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="150">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <span className="badge text-bg-red px-4 py-2 rounded-end-0">Most Popular</span>
              <h3 className="text-primary fw-medium mb-0">Enterprise</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$119</h1>
              <p className="lead fw-normal mt-4 mb-0">
                A 10X faster way to writing your professional copy
              </p>
              <a
                href="pricing-plan.html"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Choose Plan
              </a>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li>Unlimited seats</li>
                <li>
                  <strong className="fw-medium">100,000</strong> words per month
                </li>
                <li>
                  <strong className="fw-medium">100+</strong> AI writing tools
                </li>
                <li>
                  <strong className="fw-medium">200+</strong> Copywriting tools
                </li>
                <li>Blog post wizard tool</li>
                <li>25+ languages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
