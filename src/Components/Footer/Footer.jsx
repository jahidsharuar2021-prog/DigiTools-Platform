import React from 'react';

const Footer = () => {
    return (
      <div className="bg-[#101727] text-white p-10">
        <footer className="footer sm:footer-horizontal ">
          <nav>
            <h1 className="font-extrabold text-3xl">DigiTools</h1>
            <p>
              Premium digital tools for creators,
              <br /> professionals, and businesses. Work smarter <br /> with our
              suite of powerful tools.
            </p>
          </nav>

          <nav>
            <h6 className="footer-title"> Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>

          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>

          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.75-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z"></path>
                </svg>
              </a>

              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>

              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>

        <hr className="border-[#45484f] m-4" />

        <div className=" flex justify-between">
          <p> © 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-3 ">
            <a href="">Privacy Policy </a>
            <a href=""> Terms of Service </a>
            <a href=""> Cookies</a>
          </div>
        </div>
      </div>
    );
};

export default Footer;