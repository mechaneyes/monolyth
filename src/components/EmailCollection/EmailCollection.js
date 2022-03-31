// https://www.nts.live/shows/omar-s/episodes/omar-s-24th-december-2021

import { useEffect } from "react";

import ReactGA from "react-ga";
// import Header from "../Header/Header";
import MailchimpForm from "../MailchimpForm/MailchimpForm";
import BloomScaling02 from "../IdlePage/BloomScaling02";

import "./EmailCollection.scss";

let EmailCollection = () => {

  const analytics = () => {
    ReactGA.event({
      category: "Email Collect Page",
      action: "landed",
      label: "floppys",
    });
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    analytics()

    return () => {
      // isRunning = false;
    };
  });

  return (
    <>
      {/* <Header /> */}
      <main className="email">
        <section className="email__words">
          <h1>Welcome to Monolyth</h1>
          <h3>
            We're making it easy to discover and collect local and international
            art and artists.
          </h3>
          {/* <p>
            This is our beta release of the Monolyth experience. We look forward
            to scattering more Monolyths around Sacramento and beyond.
          </p> */}
          <p>
            Add your email to follow Monolyth's development and to find out how
            to get involved.
          </p>
          <MailchimpForm />
          <div className="email__links">
            <a href="https://www.instagram.com/monolythglobal/">
              <p>@MonolythGlobal</p>
            </a>
          </div>
        </section>
      </main>
      <BloomScaling02 />
    </>
  );
};

export default EmailCollection;
