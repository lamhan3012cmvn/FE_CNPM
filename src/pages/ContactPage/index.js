import React from "react"
import Breadcrumb from "../../common/components/Breadcrumb"

const ContactPage = () => {
  return (
    <>
      <Breadcrumb namePage="Contact" preLink={{ name: "Home" }} />
      <section class="contact-section padding_top">
        <div class="container">
          <div class="d-none d-sm-block mb-5 pb-4">
            <div id="map" style={{ height: "480px" }}>
              React google npm
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form
                class="form-contact contact_form"
                method="post"
                id="contactForm"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <a href="#" class="btn_3 button-contactForm">
                    Send Message
                  </a>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-home"></i>
                </span>
                <div class="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-tablet"></i>
                </span>
                <div class="media-body">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-email"></i>
                </span>
                <div class="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
