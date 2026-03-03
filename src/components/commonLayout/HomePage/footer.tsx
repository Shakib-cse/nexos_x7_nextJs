import Link from "next/link";
import SvgIcon from "./Logo";
import { Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Homes", href: "/#homes" },
  { name: "Games", href: "/#games" },
  { name: "Team", href: "/#team" },
  { name: "Resources", href: "/resources" },
  { name: "Career", href: "/career" },
];

const games = [
  { name: "All Games", href: "/become-a-teacher" },
  { name: "Featured", href: "/privacy-policy" },
  { name: "New Releases", href: "/new_releases" },
];

const connect = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: Twitter, // Lucide uses Twitter icon for X
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <section className="container mx-auto px-4 pt-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12 text-center md:text-left">
          {/* Logo + Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <SvgIcon />

            <p className="text-sm text-ring leading-relaxed w-full">
              Creating immersive gaming experiences that push the boundaries of
              interactive entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-ring hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* for teacher */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Games</h3>
            <ul className="flex flex-col gap-3">
              {games.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-ring hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="flex flex-col gap-3">
              {connect.map(({ name, href, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    target="_blank"
                    className="flex items-center gap-4 group transition-all"
                  >
                    {/* Purple Circular Icon */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary shadow-lg group-hover:scale-105 transition-transform">
                      <Icon size={20} className="text-background" />
                    </div>

                    {/* Text */}
                    <span className="text-base text-background transition-colors">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Info */}
      <div className="border-t border-muted-foreground">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 py-4 px-4 text-center sm:text-left">
          {/* Left: Copyright */}
          <p className="text-xs sm:text-sm font-semibold text-ring">
            © {new Date().getFullYear()} NexusStudio. All Rights reserved.
          </p>

          {/* Right: Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#"
              className="text-sm font-semibold text-background/70 hover:text-background transition-colors"
            >
              Terms & conditions
            </Link>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <Link
              href="#"
              className="text-sm font-semibold text-background/70 hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
