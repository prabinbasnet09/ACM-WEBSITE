import React from "react";

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop: "100px"}}>
      <div className="footer-container">
        <span>
          <b>ACM Student Chapter</b>
        </span>
        <p className="footer-description">
          Association for Computing Machinery (ACM) at The University of
          Louisiana at Monroe is a student organization that promotes student
          involvement in the computing field. We host events throughout the year
          to help students learn more about the computing field and to help them
          network with other students and professionals in the field. We also
          host events to help students learn more about the ACM organization and
          how they can get involved.
        </p>
      </div>
      <div className="footer-container">
        <span>
          <b>About Us</b>
        </span>
        <p className="footer-description">Careers</p>
		<p className="footer-description">Our Team</p>
		<p className="footer-description">Our Partners</p>
		<p className="footer-description">Our Sponsors</p>
		<p className="footer-description">Our History</p>
		<p className="footer-description">Our Mission</p>
      </div>
      <div className="footer-container">
        <span>
          <b>Contact Us</b>
        </span>
        <p className="footer-description">
          College of Business and Social Sciences, Hemphill Hall
        </p>
		<p className="footer-description">University of Louisiana at Monroe</p>
		<p className="footer-description">700 University Avenue</p>
		<p className="footer-description">Monroe, LA 71209</p>
		<p className="footer-description">Phone: (318) 342-1540</p>
		<p className="footer-description">Fax: (318) 342-1541</p>
      </div>
    </footer>
  );
};

export default Footer;
