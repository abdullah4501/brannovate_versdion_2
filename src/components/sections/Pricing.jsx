import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section className="py-10 py-lg-15" id="pricing">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-10">
            <div className="text-center">
              <p className="color-topheading" data-aos="fade-up-sm" data-aos-delay="50">
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
              <h3 className="text-primary fw-medium mb-0">AI Starter</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$1</h1>
              <p className="lead fw-normal mt-4 mb-0">
                <span style={{color:'#ff0000'}}>Perfect for: </span> Busy professionals dipping toes into personal branding
              </p>
              <a
                href="https://ai.brannovate.com/sign-up"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Choose AI Starter
              </a>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li><i className='fa fa-check'></i><span><b>AI Generated Content:</b> 2 polished LinkedIn posts/week + 1 carousel.</span></li>
                <li><i className='fa fa-check'></i><span><b>Trend Integration:</b> Auto- aligned with industry news.</span></li>
                <li><i className='fa fa-check'></i><span><b>Basic Analytics:</b> Track engagement & growth.</span></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="100">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <h3 className="text-primary fw-medium mb-0">Premium Accelerate</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$250</h1>
              <p className="lead fw-normal mt-4 mb-0">
              <span style={{color:'#ff0000'}}>Perfect for: </span> Leaders ready to stand out with hybrid AI + human brilliance
              </p>
              <Link
                to="/contact"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Go Premium
              </Link>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Expert-Crafted Content:</b> 2 team-written posts + 1 carousel.
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Custom Request:</b> 1 tailored post/month (client-specified topic).
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Cross-Platform Power:</b> 2 Twitter/X threads
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Comment Management:</b> Proactive engagement & sentiment monitoring.
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Audience Targeting:</b> Strategic connection growth.
                  </span>
                </li>
              </ul>

            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="150">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <span className="badge text-bg-red px-4 py-2 rounded-end-0">Most Popular</span>
              <h3 className="text-primary fw-medium mb-0">Icon Suite</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$1,500</h1>
              <p className="lead fw-normal mt-4 mb-0">
              <span style={{color:'#ff0000'}}>Perfect for: </span> Visionaries cementing their legacy as industry icons.
              </p>
              <Link
                to="/contact"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Claim Icon Suite
              </Link>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>All-Inclusive Legacy:</b> Everything in Premium Accelerate
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>LinkedIn Polls & Q&amp;A:</b> 2 interactive polls/week + monthly AMA sessions.
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Video Content:</b> 1 long-form video/month
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Long-Form Articles:</b> 1 ghostwritten article/month
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Website Building:</b> Sleek, SEO-optimized personal site.
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Expert-Led Podcast Management:</b> Quarterly episodes where you share your expertise &amp; vision, published &amp; promoted across platforms
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <b>Book/Bio Writing:</b> Ghostwrite your memoir, ebook, or biography.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
