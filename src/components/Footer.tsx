const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Yummy! Bites. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
