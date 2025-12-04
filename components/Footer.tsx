import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-heading font-extrabold mb-4">SWAPO</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The Swapo Party is a mass-based political party born and steeled in the crucible of the popular and heroic liberation struggle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-swapo-blue transition"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-swapo-blue transition"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-swapo-blue transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-swapo-yellow">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition">History & Constitution</Link></li>
              <li><Link href="/wings" className="hover:text-white transition">Party Wings</Link></li>
              <li><Link href="/manifesto" className="hover:text-white transition">Election Manifesto</Link></li>
              <li><Link href="/join" className="hover:text-white transition">Membership Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-swapo-yellow">Contact HQ</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-swapo-red mt-1" />
                <span>Unam Road, Katutura,<br/>Windhoek, Namibia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-swapo-red" />
                <span>+264 61 238 364</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-swapo-red" />
                <span>info@swapo1960.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-swapo-yellow">Stay Updated</h3>
            <p className="text-gray-400 text-xs mb-4">Receive official party statements directly.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 p-3 rounded text-sm text-white focus:outline-none focus:border-swapo-red"
              />
              <button className="bg-swapo-red text-white py-2 rounded font-bold text-sm hover:bg-red-700 transition">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 SWAPO Party. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}