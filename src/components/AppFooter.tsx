// import logo from "../assets/images/vite.svg";
import logo from "../assets/images/logo.png";
const AppFooter = () => {
  return (
    <div className="w-100vw bg-black">
      <div className="container d-flex flex-column fs-12 app-footer-container pb-3 pt-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap md-align-items-center pt-3">
          <div className="d-flex flex-column justify-content-center align-items-start md-align-items-center footer-content">
            <div className="d-flex justify-content-center align-items-center">
              <a href="/">
                <div className="w-200px">
                  <img src={logo} className="img-fluid" alt="" />
                </div>
              </a>
            </div>
            <p className="section-text">
              We have the best experts to elevate your business to the next
              level. Try us and you will see!
            </p>
          </div>
          <div className="d-flex footer-social justify-content-center md-align-items-center md-w-100">
            <a
              className="color-white rounded-pill"
              href="https://www.linkedin.com"
            >
              Linkedin
            </a>
            <a
              className="color-white rounded-pill"
              href="https://www.twitter.com"
            >
              Twitter
            </a>
            <a
              className="color-white rounded-pill"
              href="https://www.facebook.com"
            >
              Facebook
            </a>
            <a
              className="color-white rounded-pill"
              href="https://www.instagram.com"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-copyright pt-1 mt-3">
          <p className="text-center">
            &copy; Copyright 2022 DKingSolution. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default AppFooter;
