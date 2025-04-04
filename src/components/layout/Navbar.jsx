import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'headroom.js';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const togglerRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    // Initialize Headroom on the navbar element
    if (navRef.current) {
      const headroom = new Headroom(navRef.current, {
        offset: { up: 100, down: 50 },
        tolerance: { up: 5, down: 0 },
        // Remove the "initial" property so no empty token is added.
        classes: {
          pinned: 'headroom--pinned',
          unpinned: 'headroom--unpinned',
          top: 'headroom--top',
          notTop: 'headroom--not-top',
          bottom: 'headroom--bottom',
          notBottom: 'headroom--not-bottom',
          frozen: 'headroom--frozen',
        },
      });
      headroom.init();

      // Set HTML padding-top equal to navbar height to avoid content overlap.
      const htmlEl = document.querySelector('html');
      if (htmlEl) {
        const navHeight = navRef.current.offsetHeight;
        htmlEl.style.scrollPaddingTop = navHeight + 'px';
      }
    }

    // For small viewports (<= 991px), collapse the navbar on scroll if it's open.
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    const handleScroll = () => {
      if (togglerRef.current && collapseRef.current) {
        const scrollY = window.scrollY;
        if (
          togglerRef.current.getAttribute('aria-expanded') === 'true' &&
          scrollY > 0
        ) {
          collapseRef.current.classList.remove('show');
          togglerRef.current.setAttribute('aria-expanded', 'false');
          setIsOpen(false);
        }
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg fixed-top bg-hover-scroll on-over"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>

        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <div className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div
          ref={collapseRef}
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarContent"
        >
          <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
            <ul className="navbar-nav gap-lg-2 gap-xl-5">
              <li className="nav-item dropdown">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#section-about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tools">
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/login" className="btn btn-outline-primary">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
