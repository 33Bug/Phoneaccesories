const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5>Phone Accesories</h5>
            <p className="small">
              Bring you the best accesories that we can find
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/getaccesories" className="text-light text-decoration-none">Accesories</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="small mb-1">Email: support@phoneaccesories.com</p>
            <p className="small mb-1">Phone: +254712345678</p>
            <p className="small">Location: Nairobi</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary text-center py-2">
        <small>© {new Date().getFullYear()} PhoneAccesories. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;