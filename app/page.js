import { getImageSize } from 'next/dist/server/image-optimizer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Laxmi Mobile Shop - Premium Phones & Accessories | 25+ Years Experience',
  description: 'Your trusted tech partner for over two decades. Certified quality across all major brands including iPhone, Samsung, Vivo, Realme, OnePlus, Mi, Nothing. Premium accessories from Gizmore, Boat, Lyne.',
  keywords: 'mobile shop, phone accessories, iPhone, Samsung, certified quality, 25 years experience, smartwatch, Gizmore, Boat, Lyne, trusted mobile partner',
}

export default function Home() {
  const stats = [
    { 
      value: '25+', 
      label: 'Years of Excellence',
      description: 'Trusted since 1998',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      value: '1000+', 
      label: 'Happy Customers',
      description: 'And growing',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      value: '100%', 
      label: 'Certified Quality',
      description: 'Guaranteed authentic',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]

const mobileBrands = [
    {  logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg',},
    {logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg', },
    { logo: 'https://brandslogos.com/wp-content/uploads/images/large/vivo-logo-1.png',  },
    {  logo: 'https://logowik.com/content/uploads/images/realme5985.logowik.com.webp',  },
    {  logo: 'https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo-2013.png',  },
    {  logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2021/04/xiaomi-logo-freelogovectors.net_.png',  },
    {  logo: 'https://cdn.vox-cdn.com/thumbor/2ZTYIGhDBCrE1WZp7DRT35Vb_84=/0x0:1500x1000/1820x1213/filters:focal(630x380:870x620):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68791507/Nothing_RGB_Signalweiss.0.jpg',}
  ]

  const accessoryBrands = [
    { name: '', logo: 'https://lyneoriginals.com/cdn/shop/files/page1.png?v=1671611882&width=250', color: 'from-cyan-400 to-cyan-600' },
    { name: '', logo: 'https://cdn.shopify.com/s/files/1/0549/4043/4563/files/GIZMORE_1200x1200.png?v=1658149726', color: 'from-purple-400 to-purple-600' },
    { name: '', logo: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_2.png?height=628&pad_color=fff&v=1574927888&width=1200', color: 'from-red-400 to-red-600' ,},
    { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg', color: 'from-blue-400 to-blue-600' },
    { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg', color: 'from-gray-300 to-gray-100' }
  ]
  return (
    <div className="bg-white">
      {/* Hero Section - Above the Fold */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-amber-500 text-slate-900">
                  ⭐ Trusted Since 1998
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Your Trusted <br />
                <span className="text-amber-400">Tech Partner</span><br />
                for Over Two Decades
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Welcome to Laxmi Mobile Shop. <span className="font-semibold text-white">Certified quality</span> across all major brands.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="#brands"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore Brands
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                <Link 
                  href="https://maps.app.goo.gl/Tj692pDFdkja6xpN7"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors"
                >
                  Find Our Store
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/Media.jpg"
                alt="Premium mobile phones display"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ticker - The Stats Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4"
              >
                <div className="flex-shrink-0 p-4 bg-white rounded-2xl shadow-md border border-gray-200">
                  <div className="text-amber-600">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold text-slate-700">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Mobile Devices Section */}
      <section id="brands" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Premium Mobile Devices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic smartphones from the world's leading manufacturers
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6">
            {mobileBrands.map((brand) => (
              <div 
                key={brand.name}
className="bg-white rounded-xl shadow-md p-6 lg:p-8 flex flex-col items-center justify-center border border-gray-100"

              >
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-3 ">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs lg:text-sm font-bold text-gray-700 text-center">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Accessories & Wearables Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Essential Accessories & Wearables
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete your mobile experience with premium accessories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {accessoryBrands.map((brand) => (
              <div 
                key={brand.name}
                className="bg-white rounded-xl shadow-md p-6 lg:p-8 flex flex-col items-center justify-center border border-gray-100"

              >
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 mb-4 ">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-gray-700 text-center">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - WhatsApp Integration */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Find Your Perfect Device?
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Visit us today or get in touch to experience the Laxmi Mobile Shop difference
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors"
            >
              Learn More About Us
            </Link>
            
            <a 
              href="https://wa.me/919879185435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
