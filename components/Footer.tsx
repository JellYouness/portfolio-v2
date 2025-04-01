import React from 'react';

const Footer = () => {
    // get the current year
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <div className="container mx-auto py-4">
          <p className="text-center text-sm">
            © {currentYear}{" "}
            <span className="text-primary-main">Youness JELLOULI</span>. All
            rights reserved.
          </p>
        </div>
      </footer>
    );
};

export default Footer;
