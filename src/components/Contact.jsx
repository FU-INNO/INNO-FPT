import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const ContactUs = () => {
  return (
    <div
      className="widget bg-secondary border-0 wow fadeIn"
      data-wow-delay="100ms"
    >
      <div className="section-title mb-3">
        <span className="bg-white text-primary p-1">
          {" "}
          Liên hệ FPT Education
        </span>
      </div>
      <div className="widget-info">
        <ul className="list-unstyled mb-0 p-0">
          <li className="mb-2">
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            daihocfpt@fpt.edu.vn
          </li>
          <li className="mb-2">
            <span role="img" aria-label="phone">
              ☏
            </span>{" "}
            (024)/(028) 73001866 - (0236)/(0292) 7301866
          </li>
        </ul>
        <ul className="social-icons flex space-x-4 mt-4">
          <li>
            <a href="#!" className="text-white text-lg">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#!" className="text-white text-lg">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#!" className="text-white text-lg">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#!" className="text-white text-lg">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4 mt-4">
        <Link
          to="https://www.facebook.com/educationfpt/"
          className="bg-[#e8efed] p-2 rounded-full "
        >
          <FaFacebookF />
        </Link>
        <Link
          to="https://www.facebook.com/educationfpt/"
          className="bg-[#e8efed] p-2 rounded-full"
        >
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
