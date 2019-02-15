import React from "react";
//import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            &copy; 2019 Matouš Janda. This website runs on{" "}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GatsbyJS
            </a>
            ,{" "}
            <a
              href="https://www.netlifycms.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify CMS
            </a>{" "}
            and{" "}
            <a
              href="https://bulma.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulma
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
