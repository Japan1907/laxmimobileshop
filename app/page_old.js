import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Laxmi Mobile Shop - Premium Phones & Accessories | 25+ Years Experience',
  description: 'Discover the best mobile phones from iPhone, Samsung, Vivo, Realme, OnePlus, Mi, Nothing. Premium smartwatches and accessories from Gizmore, Boat, Lyne. Certified quality with 25+ years of expertise.',
}

export default function Home() {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: '25+',
      label: 'Years of Experience',
      description: 'Trusted expertise in mobile retail'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: 'Certified',
      label: 'Quality Guarantee',
      description: 'All products 100% authentic'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: '200+',
      label: 'Happy Customers',
      description: 'Satisfied customers served'
    }
  ]

  const mobileBrands = [
    { name: 'iPhone', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg', color: 'from-gray-300 to-gray-100' },
    { name: 'Samsung', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg', color: 'from-blue-400 to-blue-600' },
    { name: 'Vivo', logo: '', color: 'from-blue-500 to-purple-500' },
    { name: 'Realme', logo: 'https://logowik.com/content/uploads/images/realme5985.logowik.com.webp', color: 'from-grey-400 to-grey-600' },
    { name: 'OnePlus', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oneplus.svg', color: 'from-red-500 to-red-700' },
    { name: 'Xiaomi', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/xiaomi.svg', color: 'from-orange-400 to-orange-600' },
    { name: 'Nothing', logo: 'https://brandfetch.com/nothing.tech?view=library&library=default&collection=logos&asset=idAyUOUAhA&utm_source=https%253A%252F%252Fbrandfetch.com%252Fnothing.tech&utm_medium=copyAction&utm_campaign=brandPageReferral', color: 'from-gray-200 to-gray-400' }
  ]

  const accessoryBrands = [
    { name: '', logo: 'https://img.icons8.com/fluency/96/smartwatch.png', color: 'from-cyan-400 to-cyan-600' },
    { name: '', logo: 'https://img.icons8.com/color/96/smartwatch.png', color: 'from-purple-400 to-purple-600' },
    { name: '', logo: 'https://img.icons8.com/color/96/headphones.png', color: 'from-red-400 to-red-600' },
    { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg', color: 'from-blue-400 to-blue-600' },
    { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg', color: 'from-gray-300 to-gray-100' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f19] to-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-500/10 to-purple-800/10 animate-gradient"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEI0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block animate-float">
                <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 glow-gold">
                  ⭐ Trusted Since 1998 • 25+ Years
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Welcome to</span><br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent animate-gradient">Laxmi Mobile</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Your premier destination for <span className="text-cyan-400 font-semibold">authentic mobile phones</span>, smartwatches, and accessories. Experience <span className="text-purple-400 font-semibold">unmatched quality</span> backed by over 25 years of excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 hover:from-amber-500 hover:to-amber-600 transition-all shadow-xl glow-gold hover:scale-105 transform"
                >
                  Explore Our Story
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <a 
                  href="https://wa.me/919879185435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl glass-effect-strong border-2 border-white/20 hover:border-cyan-400/50 text-white hover:glow-cyan transition-all hover:scale-105 transform"
                >
                  <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="relative lg:h-[550px] h-[450px] group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
                alt="Mobile phones display"
                fill
                className="object-cover rounded-3xl shadow-2xl border border-white/10 relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f19] to-[#0a0a0f]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Why Choose Us?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to <span className="text-cyan-400">excellence</span> sets us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group glass-effect-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 gradient-border relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative flex flex-col items-center text-center space-y-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform glow-cyan">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </div>
                    <div className="text-xl font-bold text-white mb-3">
                      {stat.label}
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Brands Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f19] to-[#0a0a0f]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Mobile Brands We Offer</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Premium smartphones from the world's <span className="text-purple-400">leading manufacturers</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {mobileBrands.map((brand, index) => (
              <div 
                key={brand.name}
                className="group glass-effect rounded-2xl p-6 hover:glass-effect-strong transition-all duration-500 hover:scale-110 border border-white/10 hover:border-cyan-500/50 relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={64}
                      height={64}
                      className="object-contain filter brightness-0 invert group-hover:scale-125 transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white text-center transition-colors">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories & Smartwatch Brands Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f19] to-[#0a0a0f]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">Accessories & Smartwatches</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete your mobile experience with <span className="text-amber-400">premium accessories</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {accessoryBrands.map((brand, index) => (
              <div 
                key={brand.name}
                className="group glass-effect-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 gradient-border relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20 transition-opacity blur-xl`}></div>
                
                <div className="relative flex flex-col items-center justify-center space-y-4">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={96}
                      height={96}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-200 group-hover:text-white text-center transition-colors">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-cyan-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEI0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50\"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect-strong rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent\">Ready to Find Your Perfect Device?</span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Visit us today or get in touch to experience the <span className="text-amber-400 font-semibold\">Laxmi Mobile Shop</span> difference
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/about"
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl glass-effect-strong border-2 border-white/30 hover:border-purple-400/50 text-white hover:glow-purple transition-all hover:scale-105 transform"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <a 
                href="https://wa.me/919879185435"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 hover:from-amber-500 hover:to-amber-600 transition-all shadow-2xl glow-gold hover:scale-105 transform"
              >
                <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
