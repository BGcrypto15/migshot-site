import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Migshot Auto Solutions. All rights reserved.</p>
        <p>2701 E Butler St, Philadelphia, PA 19137 · 215-833-1530</p>
      </div>
    </footer>
  );
}

export default Footer;
