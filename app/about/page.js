import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Laxmi Mobile Shop | Our Story & Commitment to Quality',
  description: 'Learn about Laxmi Mobile Shop\'s 25+ year journey in providing certified quality mobile phones and accessories. Meet our team and discover why customers trust us for their mobile needs.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            About <span className="text-amber-400">Laxmi Mobile Shop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A legacy of trust, quality, and exceptional service spanning over two decades
          </p>
        </div>
      </section>

      {/* The Leader's Journey Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Owner Photo - 40% width on desktop */}
            <div className="lg:col-span-2">
  <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src="/owner.jpg"
      alt="Shashikant Kachhiya - Founder"
      fill
      className="object-cover"
    />
  </div>

  {/* Caption below image */}
  <div className="mt-4 text-center">
    <p className="text-lg font-bold text-slate-900">
      Shashikant Kachhiya
    </p>
    <p className="text-sm text-amber-700 font-semibold">
      Founder
    </p>
  </div>
</div>


            {/* Story Content - 60% width on desktop */}
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  Est. 1998
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                Our Journey Through the Years
              </h2>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          

                <p>
              In 1998, Laxmi Mobile Shop began with a to sell cassette,DVD,CD.As the technology evolve we also evolve to provide feature phones Nokia and mobile recharge. </p>
                <p>
                  As the year by year passed, we expanded our offerings to include the latest smartphones from top brands, along with a wide range of accessories to complement your mobile experience.
                </p>
                <p>
                  Over <span className="font-bold text-slate-900">25 years later</span>, we continue to uphold the same values that established our reputation: <span className="text-amber-600 font-semibold">authenticity, reliability, and a genuine passion</span> for helping customers find the perfect mobile solution for their needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center space-x-3 bg-amber-50 px-5 py-3 rounded-xl border border-amber-200">
                  <svg className="w-7 h-7 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-slate-900">25+ Years</span>
                </div>

                <div className="flex items-center space-x-3 bg-blue-50 px-5 py-3 rounded-xl border border-blue-200">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-bold text-slate-900">1000+ Customers</span>
                </div>

                <div className="flex items-center space-x-3 bg-green-50 px-5 py-3 rounded-xl border border-green-200">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-slate-900">Certified Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Hub */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Get in Touch or Visit Us Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you find your perfect device. Connect with us through your preferred channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp Card - Large Touch Target */}
            <a 
              href="https://wa.me/919879185435"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-green-500"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4 text-lg">Chat with us directly for any inquiries</p>
                  <span className="inline-flex items-center text-green-600 font-bold text-lg group-hover:underline">
                    Start Chat
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Instagram Card - Large Touch Target */}
            <a 
              href="https://instagram.com/laxmimobile_dabhoi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-purple-500"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Instagram</h3>
                  <p className="text-gray-600 mb-4 text-lg">Follow us for latest arrivals and deals</p>
                  <span className="inline-flex items-center text-purple-600 font-bold text-lg group-hover:underline">
                    Follow Us
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Map Embed Section - Lazy Loaded */}
      <section className="h-96 relative bg-gray-100">
        <iframe
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=laxmi%20mobile%20shop%20dabhoi&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>

      {/* Physical Address Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-black mb-4">Visit Our Store</h3>
          <p className="text-xl text-gray-300 mb-2">
            Laxmi Mobile Shop
          </p>
          <p className="text-lg text-gray-400">
            G-31/32,Jethwani Super Market,Dabhoi,Vadodara-391110
          </p>
        </div>
      </section>
    </div>
  )
}
