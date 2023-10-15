function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
