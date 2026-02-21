import { useState, useEffect } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Zap, 
  Lightbulb, 
  ClipboardCheck, 
  Power, 
  Cpu, 
  Star,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Quick, tidy, and explained everything clearly. Will definitely call again.",
      image: "/testimonial-1.jpg"
    },
    {
      name: "James K.",
      text: "Professional from quote to finish. The certification was handled same day.",
      image: "/testimonial-2.jpg"
    },
    {
      name: "Linda T.",
      text: "Fixed a fault others couldn't find. Honest pricing and polite service.",
      image: "/testimonial-3.jpg"
    }
  ]

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emergency Electrical Repairs",
      description: "Fast response for electrical faults, power outages, and urgent safety issues.",
      benefits: ["Same-day service", "Fault diagnosis", "Safe repairs"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Full & Partial Rewiring",
      description: "Complete or selective rewiring for homes, flats, and commercial properties.",
      benefits: ["Minimal disruption", "Up to 6-year guarantee", "BS 7671 compliant"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fuse Box Upgrades",
      description: "Modern consumer unit installations with RCD protection and circuit breakers.",
      benefits: ["Enhanced safety", "Certificate provided", "Insurance approved"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Lighting Installation",
      description: "Indoor and outdoor lighting solutions, from spotlights to security systems.",
      benefits: ["LED upgrades", "Dimmer switches", "Outdoor lighting"]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Electrical Testing & EICRs",
      description: "Comprehensive electrical inspections and certification for landlords and homeowners.",
      benefits: ["EICR reports", "Landlord certificates", "Periodic inspections"]
    },
    {
      icon: <Power className="w-8 h-8" />,
      title: "Socket & Switch Installation",
      description: "Additional sockets, USB outlets, and smart switch installations.",
      benefits: ["USB charging points", "Smart home ready", "Clean finish"]
    }
  ]

  const faqs = [
    {
      question: "Are you NICEIC registered?",
      answer: "Yes, we are fully NICEIC registered and comply with all current BS 7671 wiring regulations. All work is certified and backed by our workmanship guarantee."
    },
    {
      question: "Do you offer emergency callouts?",
      answer: "Yes, we offer emergency electrical services. For urgent issues like power outages, electrical faults, or safety concerns, call us directly at 07897 026569."
    },
    {
      question: "What is an EICR certificate?",
      answer: "An Electrical Installation Condition Report (EICR) is a comprehensive safety check of your property's electrical systems. It's required for landlords and recommended every 5-10 years for homeowners."
    },
    {
      question: "How much does a full rewire cost?",
      answer: "Full rewiring typically ranges from £3,000 to £6,000 depending on property size and complexity. We provide free, detailed quotes with no obligation."
    },
    {
      question: "What guarantees do you offer?",
      answer: "We provide a minimum 6-year workmanship guarantee on all installations. All work is fully insured and complies with current regulations."
    },
    {
      question: "What areas do you cover?",
      answer: "We're based in SE24 (Herne Hill) and cover surrounding areas including Brixton, Clapham, Streatham, Dulwich, West Norwood, Tulse Hill, Balham, Tooting, and Camberwell."
    }
  ]

  const areas = ["Brixton", "Clapham", "Streatham", "Dulwich", "Herne Hill", "West Norwood", "Tulse Hill", "Balham", "Tooting", "Camberwell"]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowQuoteForm(false)
      setFormSubmitted(false)
    }, 3000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber" />
              <span className="font-sora font-bold text-white text-sm sm:text-base lg:text-lg">
                W F Express Electricians
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-sm">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors text-sm">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors text-sm">Reviews</button>
              <button onClick={() => scrollToSection('areas')} className="text-white/80 hover:text-white transition-colors text-sm">Coverage</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors text-sm">Contact</button>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:07897026569" 
                className="hidden sm:flex btn-primary items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <button 
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-left py-2">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors text-left py-2">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors text-left py-2">Reviews</button>
              <button onClick={() => scrollToSection('areas')} className="text-white/80 hover:text-white transition-colors text-left py-2">Coverage</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors text-left py-2">Contact</button>
              <a href="tel:07897026569" className="btn-primary flex items-center justify-center gap-2 mt-4">
                <Phone className="w-4 h-4" />
                <span>Call 07897 026569</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="font-sora font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
                  W F Express Electricians Herne Hill
                </h1>
                <div className="w-24 h-1.5 bg-amber rounded-full" />
                <p className="text-white/70 text-base lg:text-lg max-w-xl leading-relaxed">
                  Professional electrical work in Herne Hill and across SE24. Repairs, installs, and certification—done neatly and on time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:07897026569" className="btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now for Free Quote</span>
                </a>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <span>View Our Services</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-amber">
                  <Star className="w-5 h-5 fill-amber" />
                  <span className="text-white text-sm font-medium">5★ Google Rated</span>
                </div>
                <span className="text-white/30 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber" />
                  <span className="text-white/70 text-sm font-mono">SE24</span>
                </div>
                <span className="text-white/30 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber" />
                  <span className="text-white/70 text-sm">Emergency Service Available</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="card-rounded shadow-card overflow-hidden">
                  <img 
                    src="/hero-electrician.jpg" 
                    alt="Professional electrician working on consumer unit" 
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-amber text-navy px-4 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold text-sm">Fully Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 lg:py-16 bg-navy border-y border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <p className="text-center text-white/60 text-sm mb-8 font-mono uppercase tracking-wider">
            Certified, insured and trusted locally in SE24
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { icon: <Shield className="w-6 h-6" />, text: "Fully Insured" },
              { icon: <Award className="w-6 h-6" />, text: "Work Guaranteed" },
              { icon: <AlertCircle className="w-6 h-6" />, text: "Emergency Service" },
              { icon: <Star className="w-6 h-6" />, text: "5★ Rated" },
              { icon: <CheckCircle2 className="w-6 h-6" />, text: "No Call-Out Fee" },
              { icon: <Sparkles className="w-6 h-6" />, text: "Free Quotes" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber">
                  {item.icon}
                </div>
                <span className="text-white text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-navy">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-12 lg:mb-16">
            <h2 className="font-sora font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
              Electrician Services in Herne Hill (SE24)
            </h2>
            <p className="text-white/60 max-w-2xl">
              Comprehensive electrical solutions for homes and businesses. All work certified and guaranteed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-28 p-6 lg:p-8 border border-white/10 hover:border-amber/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-navy transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:07897026569" 
                  className="inline-flex items-center gap-2 text-amber text-sm font-medium hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-offwhite">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-sora font-bold text-navy text-2xl sm:text-3xl lg:text-4xl">
                About W F Express Electricians Herne Hill
              </h2>
              <div className="w-20 h-1.5 bg-amber rounded-full" />
              
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Serving SE24 and nearby areas for 10+ years, W F Express Electricians has built a reputation on quality workmanship and customer satisfaction.
                </p>
                <p>
                  Our mission is simple: provide honest, reliable electrical services at fair prices. No shortcuts, no surprises—just professional work done right the first time.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "7+ happy customers — 5★ Google rating",
                  "Fully certified & insured",
                  "Free, no-obligation quotes",
                  "Local & reliable (SE24 based)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                    <span className="text-navy/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a href="tel:07897026569" className="btn-primary inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Call for Free Quote</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="card-rounded shadow-service overflow-hidden">
                <img 
                  src="/why-team.jpg" 
                  alt="Electrician van in Herne Hill" 
                  className="w-full h-[300px] lg:h-[450px] object-cover"
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-navy text-white p-4 rounded-2xl text-center">
                  <div className="font-sora font-bold text-2xl lg:text-3xl text-amber">10+</div>
                  <div className="text-white/60 text-xs mt-1">Years in trade</div>
                </div>
                <div className="bg-navy text-white p-4 rounded-2xl text-center">
                  <div className="font-sora font-bold text-2xl lg:text-3xl text-amber">7+</div>
                  <div className="text-white/60 text-xs mt-1">Happy customers</div>
                </div>
                <div className="bg-navy text-white p-4 rounded-2xl text-center">
                  <div className="font-sora font-bold text-2xl lg:text-3xl text-amber font-mono">SE24</div>
                  <div className="text-white/60 text-xs mt-1">Local coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-navy">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-sora font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
              5★ Reviews From Local Customers
            </h2>
            <p className="text-white/60">Rated 5★ on Google (7+ reviews)</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Card */}
            <div className="relative">
              <div className="card-rounded shadow-card overflow-hidden">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-[350px] lg:h-[500px] object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
                  <p className="text-white font-medium text-lg">"{testimonials[activeTestimonial].text}"</p>
                  <p className="text-amber font-semibold mt-2">— {testimonials[activeTestimonial].name}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber text-amber" />
                  ))}
                  <span className="text-white font-bold ml-2 text-lg">5.0</span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <p className="text-amber font-semibold mt-4">— {testimonials[activeTestimonial].name}</p>
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === index ? 'bg-amber w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section id="areas" className="py-16 lg:py-24 bg-offwhite">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="font-mono text-amber text-6xl lg:text-8xl font-bold">SE24</div>
              <h2 className="font-sora font-bold text-navy text-2xl sm:text-3xl lg:text-4xl">
                Local Electrician in Herne Hill
              </h2>
              <div className="w-20 h-1.5 bg-amber rounded-full" />
              
              <p className="text-navy/70 leading-relaxed">
                Same-week appointments across SE24 and nearby postcodes. We arrive on time, protect your floors, and leave the work area tidy.
              </p>

              <div className="pt-4">
                <a href="tel:07897026569" className="btn-primary inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Check Availability</span>
                </a>
              </div>

              <p className="text-navy/60 text-sm pt-4">
                Not sure if we cover your area? <a href="tel:07897026569" className="text-amber hover:underline">Call now</a>.
              </p>
            </div>

            <div>
              <h3 className="font-sora font-semibold text-navy text-lg mb-6">Areas We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {areas.map((area, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      area === "Herne Hill" 
                        ? 'bg-amber text-navy' 
                        : 'bg-navy/10 text-navy/80 hover:bg-navy/20 transition-colors'
                    }`}
                  >
                    {area}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-navy rounded-28 text-white">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Our Location</p>
                    <p className="text-white/70 text-sm">1 Danecroft Rd, London SE24 9PA, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-sora font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/60">Everything you need to know about our services</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/5 rounded-2xl border border-white/10 px-6 data-[state=open]:border-amber/50"
                >
                  <AccordionTrigger className="text-white text-left hover:no-underline py-5">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-offwhite">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-sora font-bold text-navy text-2xl sm:text-3xl lg:text-4xl mb-4">
                  Get Your Free Quote Today
                </h2>
                <p className="text-navy/70 leading-relaxed">
                  Tell us what you need. We'll reply within one business day with next steps and pricing.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="tel:07897026569" 
                  className="flex items-center gap-4 p-4 bg-navy rounded-2xl text-white hover:bg-navy-light transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center group-hover:bg-amber transition-colors">
                    <Phone className="w-5 h-5 text-amber group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <p className="font-semibold text-lg">07897 026569</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@wfexpresselectricianshernehill.co.uk" 
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl text-navy border border-navy/10 hover:border-amber transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-navy/60 text-sm">Email us</p>
                    <p className="font-semibold text-sm break-all">info@wfexpresselectricianshernehill.co.uk</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl text-navy border border-navy/10">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-navy/60 text-sm">Visit us</p>
                    <p className="font-semibold text-sm">1 Danecroft Rd, London SE24 9PA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl text-navy border border-navy/10">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-navy/60 text-sm">Opening hours</p>
                    <p className="font-semibold text-sm">Mon–Fri 8am–6pm • Sat 9am–4pm</p>
                    <p className="text-amber text-xs">Sun: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-28 p-6 lg:p-8 shadow-service">
              <h3 className="font-sora font-semibold text-navy text-xl mb-6">Request Free Quote</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-navy/70 text-sm mb-2">Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-navy/70 text-sm mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-navy/70 text-sm mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label className="block text-navy/70 text-sm mb-2">Postcode</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy"
                    placeholder="SE24"
                  />
                </div>
                
                <div>
                  <label className="block text-navy/70 text-sm mb-2">Service needed</label>
                  <select className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy bg-white">
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="rewire">Full/Partial Rewire</option>
                    <option value="fusebox">Fuse Box Upgrade</option>
                    <option value="lighting">Lighting Installation</option>
                    <option value="eicr">EICR Certificate</option>
                    <option value="sockets">Sockets/Switches</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-navy/70 text-sm mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn-primary py-4 text-center justify-center"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/10 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-amber" />
                <span className="font-sora font-bold text-white text-lg">
                  W F Express Electricians
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Professional electrician services in Herne Hill (SE24). Fully certified, insured, and trusted by local homeowners and businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-white/60 hover:text-amber transition-colors text-sm">Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-white/60 hover:text-amber transition-colors text-sm">About Us</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-white/60 hover:text-amber transition-colors text-sm">Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/60 hover:text-amber transition-colors text-sm">Contact</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:07897026569" className="flex items-center gap-2 text-white/60 hover:text-amber transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    <span>07897 026569</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@wfexpresselectricianshernehill.co.uk" className="flex items-center gap-2 text-white/60 hover:text-amber transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    <span className="break-all">info@wfexpresselectricianshernehill.co.uk</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>1 Danecroft Rd, London SE24 9PA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} W F Express Electricians Herne Hill
            </p>
            <p className="text-white/40 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Fully insured • Certified • Free quotes</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-navy/98 backdrop-blur-md border-t border-white/10 z-50 lg:hidden">
        <div className="flex items-center">
          <a 
            href="tel:07897026569" 
            className="flex-1 flex items-center justify-center gap-2 bg-amber text-navy py-4 font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <button 
            onClick={() => setShowQuoteForm(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-4 font-semibold border-l border-white/10"
          >
            <Sparkles className="w-5 h-5" />
            <span>Get Quote</span>
          </button>
        </div>
      </div>

      {/* Quote Form Dialog */}
      <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
        <DialogContent className="sm:max-w-md bg-white rounded-28">
          <DialogHeader>
            <DialogTitle className="font-sora font-semibold text-navy text-xl">Get Your Free Quote</DialogTitle>
            <DialogDescription className="text-navy/60">
              Fill in your details and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          
          {formSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-navy text-lg mb-2">Thank you!</h4>
              <p className="text-navy/60">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
              <input 
                type="text" 
                required
                placeholder="Your name *"
                className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy"
              />
              <input 
                type="tel" 
                required
                placeholder="Phone number *"
                className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy"
              />
              <select className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy bg-white">
                <option value="">Select service</option>
                <option value="emergency">Emergency Repair</option>
                <option value="rewire">Rewiring</option>
                <option value="fusebox">Fuse Box</option>
                <option value="lighting">Lighting</option>
                <option value="eicr">EICR</option>
                <option value="other">Other</option>
              </select>
              <textarea 
                rows={3}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-2xl border border-navy/10 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-navy resize-none"
              />
              <button type="submit" className="w-full btn-primary py-3">
                Request Quote
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
