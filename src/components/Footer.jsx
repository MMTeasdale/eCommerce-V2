import React from "react";
import './Footer.css';


function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Otaku 2022
            <ul>
    <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="instagram"><i class="fab fa-instagram"></i></a></li>
    <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="linkedin"><i class="fab fa-linkedin"></i></a></li>
    <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="facebook"><i class="fab fa-facebook-square"></i></a></li>
    </ul>
          </p>
        </div>
      </footer>
     </div>
  );
}

export default Footer;