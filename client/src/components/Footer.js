function Footer() {
  return (
    <div className="footer">
      <h3>Connect with me</h3>

      <div className="icons">
        {/* Instagram */}
        <a href="https://instagram.com/im_shurey._" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/917010687130" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>

        {/* Letterboxd */}
        <a href="https://boxd.it/gXaev" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-film"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;