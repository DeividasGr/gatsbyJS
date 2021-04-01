import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with
        &nbsp;
        <a href="https://www.gatsbyjs.com/">Gatbsy</a>
      </p>
    </footer>
  );
}

export default Footer;
