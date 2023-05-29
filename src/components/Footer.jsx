import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="copywrite">
        <span>This app is created by <b>&copy; Shehla Eliyeva</b></span>
        {/* <span>You can visit my profile via social media links</span> */}
      </div>
      <div className="media-links">
        <a href=" https://github.com/ShahlaAliyeva" target="blank_">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/%C5%9F%C9%99hla-%C9%99liyeva?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQGPfWx%2FAS8a48reusMJjfw%3D%3D" target="blank_">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://www.facebook.com/shahlalieva/" target="blank_">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
