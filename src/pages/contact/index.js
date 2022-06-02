import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {

  return (
    <HelmetProvider>
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="reverse row mb-5 mt-3">
          <div className="col col-lg-8">
            <h1 className="display-4 mb-4">ارتباط با من</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </div>
        </div>
        <div className="sec_sp">

          <div className="end col col-lg-5 mb-5">
            <h3 className="color_sec py-4">: اطلاعات</h3>

          </div>
          <div className="m">
            <p className="p">
                    <strong>Email:</strong> {contactConfig.YOUR_EMAIL}
                  </p>
                  <p className="p">
                    <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
              <p className="p">
                    <strong>Instagram:</strong> @Afrahimself
              </p>
              <p className="p">
                    <strong>Telegram:</strong> @Afrainjast
              </p>
          </div>
        </div>
        <div><p className="endp">{contactConfig.description}</p></div>
 
      </div>
    </HelmetProvider>
  );
};

