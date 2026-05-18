import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#05070a] transition-all duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-2 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/assets/images/navlogo.jpg"
                alt="PetHub Logo"
                width={56}
                height={56}
                className="rounded-full w-14 h-14 object-cover border border-black/10 dark:border-white/10"
              />

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                PetHub
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 max-w-xs">
              Connecting loving families with adorable pets and helping every
              animal find a safe and caring home.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/4 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-pink-500 hover:to-cyan-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/4 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-pink-500 hover:to-cyan-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={14} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/4 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-pink-500 hover:to-cyan-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-5">
              Platform
            </h3>

            <ul className="space-y-3 text-sm">
              {["All Pets", "Add a Pet", "Adoption Request", "My Listings"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Success Stories",
                "Pet Care Tips",
                "Why Adopt?",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500">📍</span>

                <p>
                  123 Paw Street,
                  <br />
                  Usa City
                </p>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-500">📞</span>
                <a
                  href="tel:+15551234567"
                  className="hover:text-cyan-500 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-500">✉️</span>

                <a
                  href="mailto:hello@petnest.com"
                  className="hover:text-cyan-500 transition-colors"
                >
                  hello@petHub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© 2026 PetHub. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cyan-500 transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-cyan-500 transition-colors">
              Terms of Service
            </a>
          </div>

          <p className="flex items-center gap-1">
            Made with
            <span className="text-red-500">❤️</span>
            Md Shakibul Islam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
