import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Explore",
    items: [
      { name: "Menu", path: "/menu" },
      { name: "Private Dining", path: "#" },
      { name: "Gift Vouchers", path: "#" },
      { name: "Events", path: "#" },
    ],
  },
  {
    title: "Information",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Sustainability", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" },
    ],
  },
  {
    title: "Contact",
    items: [
      "+91 123 456 7890",
      "+91 902 480 1284",
      "bookatelysium@elysium.com",
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/bhxvyansh.j?igsh=MWlnam9rYXh6anJj&utm_source=qr",
    icon: <FaInstagram size={18} />,
  },
  { href: "https://x.com/SxgeDzns", icon: <FaTwitter size={18} /> },
  { href: "https://github.com/Bhavyansh19", icon: <FaGithub size={18} /> },
  {
    href: "https://www.linkedin.com/in/bhavyansh19/",
    icon: <FaLinkedin size={18} />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-serif text-3xl text-gold-400">ELYSIUM</h2>
            </Link>
            <p className="text-white/60 mb-6 max-w-xs">
              The pinnacle of fine dining, where culinary artistry meets
              unparalleled luxury in an atmosphere of refined elegance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold-400 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {LINKS.map(({ title, items }) => (
            <div key={title}>
              <h3 className="font-serif text-gold-400 text-lg mb-6">{title}</h3>
              <ul className="space-y-3">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {typeof item === "string" ? (
                      <span className="text-white/60">{item}</span>
                    ) : (
                      <Link
                        to={item.path}
                        className="text-white/60 hover:text-gold-400 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Elysium. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/40 hover:text-gold-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-gold-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-gold-400 text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
