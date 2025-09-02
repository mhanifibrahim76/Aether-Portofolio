import Image from "next/image";
import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer ref={ref} id="contact" className="bg-[#0a1f6a] text-white px-6 py-10 md:px-20">
      {/* Logo Section */}
      <div className="max-w-screen-xl mx-auto">
      <div className="w-32 h-auto mb-6 md:mb-0">
        <Image
          src="/logo.png"
          alt="Aether Logo"
          width={130}
          height={40}
          priority
        />
      </div>
        {/* Garis Pemisah */}
        <div className="border-t border-white mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:justify-items-center">
          {/* Link Terkait */}
          <div>
            <h3 className="font-semibold mb-4">Link Terkait</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-semibold mb-4">Office</h3>
            <p className="text-sm leading-relaxed">
              Jl. K.H.M. Yusuf Raya, Mekar Jaya, Kec. Sukmajaya, Kota Depok,
              <br />
              Jawa Barat 16411
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm">021 (7976221)</p>
            <p className="text-sm">cs@gethome.id</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram">
                <Image
                  src="/icon/footerInstagram.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="TikTok">
                <Image src="/icon/footerTiktok.png" alt="TikTok" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image
                  src="/icon/footerLinkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <Image
                  src="/icon/footerYoutube.png"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-10" />
      </div>

      {/* Copyright */}
      <div className="mt-5 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        © 2025 by Gethome. All Rights Reserved.
      </div>
    </footer>
  );
})

Footer.displayName = "Footer";

export default Footer;
