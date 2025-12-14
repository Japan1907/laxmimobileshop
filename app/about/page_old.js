import Image from 'next/image'

export const metadata = {
  title: 'About Us - Laxmi Mobile Shop | Our Story & Commitment to Quality',
  description: 'Learn about Laxmi Mobile Shop\'s 25+ year journey in providing certified quality mobile phones and accessories. Meet our team and discover why customers trust us for their mobile needs.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f19] to-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-500/10 to-purple-800/10 animate-gradient"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEI0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent animate-gradient">Laxmi Mobile Shop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A legacy of <span className="text-cyan-400 font-semibold">trust</span>, <span className="text-purple-400 font-semibold">quality</span>, and <span className="text-amber-400 font-semibold">exceptional service</span> spanning over two decades
          </p>
        </div>
      </section>

      {/* Owner's Story Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f19]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/app/IMG-20250417-WA0008(1).jpg"
                  alt="Shop Owner"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl -z-10 blur-xl opacity-50"></div>
            </div>

            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  Our Founder
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">The Journey</span> of Excellence
              </h2>

              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in <span className="text-amber-400 font-semibold">1998</span>, Laxmi Mobile Shop began with a simple vision: to provide customers with authentic, high-quality mobile phones and accessories backed by exceptional service and expertise.
                </p>

                <p>
                  What started as a small retail shop has grown into a <span className="text-cyan-400 font-semibold">trusted destination</span> for mobile technology enthusiasts. Our founder's commitment to quality and customer satisfaction has been the cornerstone of our success.
                </p>

                <p>
                  Over <span className="text-purple-400 font-semibold">25 years</span> later, we continue to uphold the same values that established our reputation: authenticity, reliability, and a genuine passion for helping customers find the perfect mobile solution for their needs.
                </p>

                <div className="glass-effect-strong rounded-2xl p-6 border border-amber-500/30 glow-gold">
                  <p className="font-bold text-amber-400 italic text-xl">
                    "Our customers aren't just transactions; they're relationships we cherish and nurture over time."
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-3 glass-effect px-5 py-3 rounded-xl border border-white/10 group hover:glass-effect-strong transition-all">
                  <svg className="w-7 h-7 text-amber-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-white">25+ Years</span>
                </div>

                <div className="flex items-center space-x-3 glass-effect px-5 py-3 rounded-xl border border-white/10 group hover:glass-effect-strong transition-all">
                  <svg className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-bold text-white">200+ Customers</span>
                </div>

                <div className="flex items-center space-x-3 glass-effect px-5 py-3 rounded-xl border border-white/10 group hover:glass-effect-strong transition-all">
                  <svg className="w-7 h-7 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-white">Certified Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f19] to-[#0a0a0f]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that <span className="text-purple-400">guide everything</span> we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group glass-effect-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 gradient-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform glow-cyan">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-5">Authenticity</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We guarantee <span className="text-cyan-400 font-semibold">100% genuine</span> products from authorized dealers. Every device comes with proper warranty and certification.
                </p>
              </div>
            </div>

            <div className="group glass-effect-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 gradient-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform glow-gold">
                  <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-5">Customer First</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Your satisfaction is our <span className="text-amber-400 font-semibold">priority</span>. We provide personalized service and support to ensure you make the right choice.
                </p>
              </div>
            </div>

            <div className="group glass-effect-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 gradient-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform glow-purple">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-5">Innovation</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We stay updated with the latest mobile technology trends to offer you <span className="text-purple-400 font-semibold">cutting-edge</span> products and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-cyan-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEI0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Get in Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visit us or connect with us online. We're here to help you find your <span className="text-amber-400 font-semibold">perfect device</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919879185435"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 border border-white/20 hover:border-green-400/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity\"></div>
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-3">WhatsApp</h3>
                  <p className="text-gray-300 mb-6 text-lg">Chat with us instantly</p>
                  <span className="inline-flex items-center text-green-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Start Chat
                    <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/laxmimobile_dabhoi"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 border border-white/20 hover:border-purple-400/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-3">Instagram</h3>
                  <p className="text-gray-300 mb-6 text-lg">Follow our latest updates</p>
                  <span className="inline-flex items-center text-purple-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Follow Us
                    <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Google Maps */}
            <a 
              href="https://maps.app.goo.gl/Rx59yzmFyVHHHLDs9"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 border border-white/20 hover:border-red-400/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-3">Visit Us</h3>
                  <p className="text-gray-300 mb-6 text-lg">Find our location</p>
                  <span className="inline-flex items-center text-red-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Get Directions
                    <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-96 relative border-t border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.738!2d73.4111612!3d22.1331312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fe10b38f4c07b%3A0xdf21402d488cc2d4!2zMjPCsDAwJzA1LjAiTiA3M8KwMjAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890
"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[0.8] hover:grayscale-0 transition-all duration-700 brightness-90"
        ></iframe>
      </section>
    </div>
  )
}
