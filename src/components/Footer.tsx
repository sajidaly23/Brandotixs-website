export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-4 text-[#FAFAFA]">BRANDOTIXS</h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
              An independent brand identity and creative studio crafting digital excellence and unforgettable visual stories.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#FAFAFA] mb-6">Navigation</h4>
            <ul className="space-y-3 font-light text-neutral-400">
              <li><a href="#home" className="hover:text-[#D4A373] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4A373] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4A373] transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-[#D4A373] transition-colors">Selected Work</a></li>
              <li><a href="#process" className="hover:text-[#D4A373] transition-colors">Our Process</a></li>
              <li><a href="#faq" className="hover:text-[#D4A373] transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#FAFAFA] mb-6">Services</h4>
            <ul className="space-y-3 font-light text-neutral-400">
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Brand Identity Design</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Brand Strategy</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Packaging Design</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Web & Digital Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#FAFAFA] mb-6">Connect</h4>
            <ul className="space-y-3 font-light text-neutral-400 mb-8">
              <li><a href="mailto:hello@brandotixs.com" className="hover:text-[#D4A373] transition-colors">hello@brandotixs.com</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">+1 (555) 123-4567</a></li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#0A0A0C] transition-colors">
                <span className="sr-only">Instagram</span>
                In
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#0A0A0C] transition-colors">
                <span className="sr-only">Behance</span>
                Be
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#0A0A0C] transition-colors">
                <span className="sr-only">LinkedIn</span>
                Li
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-light">
          <p>Copyright &copy; 2026 Brandotixs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
