import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <div className="container mx-auto py-6">
          <p className="text-center text-sm text-gray-500 mb-2">
            Based in Casablanca — working with clients globally.
          </p>
          <p className="text-center text-sm">
            © {currentYear}{" "}
            <a href="mailto:younessjellouli12@gmail.com" className="text-primary-main hover:underline">
              Youness JELLOULI
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    );
};

export default Footer;
