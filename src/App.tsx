import { useState, useEffect } from 'react';

// ============================================================
// PaulCreativity - Premium Printing & Graphic Design Portfolio
// Color Palette: Black (#000), White (#fff), Gold (#D4AF37)
// ============================================================

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* ==================== HEADER / NAVIGATION ==================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex items-center"
            >
              <img
                src="https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/db49a2a1-d96e-4dad-8bfe-e294c4f93d86.jpg"
                alt="PaulCreativity Logo"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                  className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/2348080952478"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e6c54b] transition-colors duration-200"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/95 backdrop-blur-md rounded-lg p-4 mb-4 space-y-3">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                  className="block text-gray-300 hover:text-[#D4AF37] transition-colors py-2 text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/2348080952478"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4AF37] text-black text-center px-5 py-2 rounded-full text-sm font-semibold mt-3"
              >
                Get Quote
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          {/* Decorative gold accent lines */}
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 border border-[#D4AF37]/40 rounded-full text-[#D4AF37] text-xs uppercase tracking-widest mb-6">
              Premium Printing Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Premium Printing &</span>
            <br />
            <span className="text-[#D4AF37]">Graphic Design</span>
            <br />
            <span className="text-white">Solutions.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From custom gift bags to corporate branding—we bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/2348080952478"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-full text-base font-bold hover:bg-[#e6c54b] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
              className="border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-[#D4AF37]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-20 md:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-medium">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We deliver top-notch printing and design solutions tailored to your brand's unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1: Custom Gift Bags */}
            <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Gift Bags</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Elegant, custom-designed gift bags for weddings, birthdays, corporate events, and special occasions.
              </p>
            </div>

            {/* Service 2: Corporate Notebooks */}
            <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Corporate Notebooks & Diaries</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium branded notebooks and diaries perfect for corporate gifting and professional use.
              </p>
            </div>

            {/* Service 3: Flyers & Banners */}
            <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flyers & Banners</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Eye-catching flyers and large-format banners for events, promotions, and brand visibility.
              </p>
            </div>

            {/* Service 4: Business Cards */}
            <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Cards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional business cards with premium finishes—matte, glossy, embossed, and gold foil options.
              </p>
            </div>

            {/* Service 5: Event Branding */}
            <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Event Branding</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complete event branding packages including signage, programs, invitations, and promotional materials.
              </p>
            </div>

            {/* Service 6: Graphic Design */}
            <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Graphic Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creative graphic design services for logos, brand identity, social media, and marketing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO GALLERY ==================== */}
      <section id="portfolio" className="py-20 md:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-medium">Our Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Portfolio Gallery</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A showcase of our recent printing and design projects. Quality you can see and feel.
            </p>
          </div>

          {/* Portfolio Grid */}
          {/* ============================================================
              REPLACE PLACEHOLDER IMAGES:
              Replace the src URLs below with actual project photos.
              Recommended size: 600x400px or similar aspect ratio.
              ============================================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio Item 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* REPLACE: Change src to actual photo URL */}
                <img
                  src="https://placehold.co/600x450/1a1a1a/D4AF37?text=Gift+Bag+Design"
                  alt="Custom Gift Bag Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">Luxury Gift Bag Collection</h3>
                <p className="text-gray-500 text-sm mt-1">Custom Wedding Favors</p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* REPLACE: Change src to actual photo URL */}
                <img
                  src="https://placehold.co/600x450/1a1a1a/D4AF37?text=Notebook+Design"
                  alt="Corporate Notebook Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">Corporate Notebook Series</h3>
                <p className="text-gray-500 text-sm mt-1">Branded Diaries for XYZ Corp</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* REPLACE: Change src to actual photo URL */}
                <img
                  src="https://placehold.co/600x450/1a1a1a/D4AF37?text=Banner+Design"
                  alt="Event Banner Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">Event Banner Collection</h3>
                <p className="text-gray-500 text-sm mt-1">Annual Conference Branding</p>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* REPLACE: Change src to actual photo URL */}
                <img
                  src="https://placehold.co/600x450/1a1a1a/D4AF37?text=Business+Cards"
                  alt="Business Card Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">Premium Business Cards</h3>
                <p className="text-gray-500 text-sm mt-1">Gold Foil & Matte Finish</p>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* REPLACE: Change src to actual photo URL */}
                <img
                  src="https://placehold.co/600x450/1a1a1a/D4AF37?text=Flyer+Design"
                  alt="Flyer Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">Promotional Flyers</h3>
                <p className="text-gray-500 text-sm mt-1">Product Launch Campaign</p>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* REPLACE: Change src to actual photo URL */}
                <img
                  src="https://placehold.co/600x450/1a1a1a/D4AF37?text=Event+Branding"
                  alt="Event Branding Package"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">Complete Event Branding</h3>
                <p className="text-gray-500 text-sm mt-1">Birthday Celebration Package</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/2348080952478"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              View More Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / WHY CHOOSE US ==================== */}
      <section className="py-20 md:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-medium">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                Quality That Speaks <span className="text-[#D4AF37]">Loud</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At PaulCreativity, we don't just print—we craft visual experiences. Every project is handled with
                precision, creativity, and an unwavering commitment to excellence. Your brand deserves nothing less.
              </p>

              {/* Features List */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">High Quality Output</h4>
                    <p className="text-gray-400 text-sm">Premium materials and cutting-edge printing technology for stunning results every time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fast Turnaround</h4>
                    <p className="text-gray-400 text-sm">We understand deadlines. Quick delivery without compromising on quality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Designs</h4>
                    <p className="text-gray-400 text-sm">Unique, tailor-made designs that perfectly capture your brand's identity and vision.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Motto Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#D4AF37]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                    "THINK IT<br />
                    <span className="text-[#D4AF37]">LET'S MAKE IT</span><br />
                    POSSIBLE"
                  </blockquote>
                  <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">— PaulCreativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT / CTA SECTION ==================== */}
      <section id="contact" className="py-20 md:py-28 bg-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-medium">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Ready to Start Your <span className="text-[#D4AF37]">Project?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's bring your vision to life. Whether it's a small order or a large-scale branding project,
            we're here to help. Reach out to us on WhatsApp for a quick response.
          </p>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/2348080952478"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>

          {/* Additional contact info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+234 808 095 2478</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div>
              <img
                src="https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/db49a2a1-d96e-4dad-8bfe-e294c4f93d86.jpg"
                alt="PaulCreativity Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center">
              © 2026 PaulCreativity. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://wa.me/2348080952478" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
