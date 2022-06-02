import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <div className="container About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="reverse row mb-5 mt-3">
          <div className="col-lg-8">
            <h1 className="display-4 mb-4"> پورتفولیو </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </div>
        </div>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>مشاهده</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
};
