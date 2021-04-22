import React from "react"
import { Link } from "react-router-dom"
const AppFooter = () => {
  return (
    <footer className="footer_part">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Top Products</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Managed Website</Link>
                </li>
                <li>
                  <Link to="">Manage Reputation</Link>
                </li>
                <li>
                  <Link to="">Power Tools</Link>
                </li>
                <li>
                  <Link to="">Marketing Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Jobs</Link>
                </li>
                <li>
                  <Link to="">Brand Assets</Link>
                </li>
                <li>
                  <Link to="">Investor Relations</Link>
                </li>
                <li>
                  <Link to="">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Features</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Jobs</Link>
                </li>
                <li>
                  <Link to="">Brand Assets</Link>
                </li>
                <li>
                  <Link to="">Investor Relations</Link>
                </li>
                <li>
                  <Link to="">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Resources</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Guides</Link>
                </li>
                <li>
                  <Link to="">Research</Link>
                </li>
                <li>
                  <Link to="">Experts</Link>
                </li>
                <li>
                  <Link to="">Agencies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="single_footer_part">
              <h4>Newsletter</h4>
              <p>
                Heaven fruitful doesn't over lesser in days. Appear creeping
              </p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="subscribe_form relative mail_part"
                >
                  <input
                    type="email"
                    name="email"
                    id="newsletter-form-email"
                    placeholder="Email Address"
                    className="placeholder hide-on-focus"
                    // onfocus="this.placeholder = ''"
                    // onblur="this.placeholder = ' Email Address '"
                  />
                  <button
                    type="submit"
                    name="submit"
                    id="newsletter-submit"
                    className="email_icon newsletter-submit button-contactForm"
                  >
                    subscribe
                  </button>
                  <div className="mt-10 info"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="copyright_text">
                <p>KenZy</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_icon social_icon">
                <ul className="list-unstyled">
                  <li>
                    <Link to="" href="#" className="single_social_icon">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="#" className="single_social_icon">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="#" className="single_social_icon">
                      <i className="fas fa-globe"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="#" className="single_social_icon">
                      <i className="fab fa-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
