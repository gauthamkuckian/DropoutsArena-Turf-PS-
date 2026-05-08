/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  MapPin, 
  Clock, 
  Zap, 
  Monitor, 
  Trophy, 
  Dribbble as Soccer,
  Activity,
  CheckCircle2,
  Tv,
  Volume2,
  Users,
  Image as ImageIcon,
  ChevronRight,
  Menu,
  X,
  Phone,
  Instagram,
  Mail,
  ArrowUpToLine,
  Maximize,
  ArrowRight
} from 'lucide-react';

// Pricing data
const ps5Pricing = [
  { type: 'Solo Player', standard: 99, launch: 89, postMatch: 79 },
  { type: 'Multiplayer (2 Players)', standard: 149, launch: 129, postMatch: 109 },
  { type: 'Pro Mode (3 Players)', standard: 199, launch: 169, postMatch: 139 },
  { type: 'Squad Mode (4 Players)', standard: 249, launch: 209, postMatch: 159 },
];

const games = [
  { name: 'EA Sports FC 26', image: 'https://images.unsplash.com/photo-1540747913346-19e3adbc4ebb?q=80&w=400' },
  { name: 'WWE 2k25', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400' },
  { name: 'Mortal Kombat 11', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400' },
  { name: 'Tekken 7', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400' },
  { name: 'Spider-Man: Miles Morales', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400' },
  { name: 'The Last of Us Part II', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400' },
];

const galleryItems = [
  { type: 'video', src: '/images/gallery-1.mp4' },
  { type: 'image', src: '/images/gallery-2.png' },
  { type: 'image', src: '/images/gallery-3.png' },
  { type: 'image', src: '/images/gallery-4.png' },
  { type: 'image', src: '/images/gallery-5.png' },
  { type: 'image', src: '/images/gallery-6.png' },
  { type: 'image', src: '/images/gallery-7.png' },
  { type: 'image', src: '/images/gallery-8.png' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const [currentPS5Card, setCurrentPS5Card] = useState(0);
  const [currentComingNext, setCurrentComingNext] = useState(0);

  const ps5Features = [
    {
      title: "Display Excellence",
      icon: <Tv className="text-emerald-400 mb-6" size={40} />,
      items: ["4K QLED Display", "144Hz Motion Clarity Pro", "AiPQ Processor", "Dolby Vision Support"]
    },
    {
      title: "Trending Games",
      icon: <Zap className="text-emerald-400 mb-6" size={40} />,
      items: ["EA SPORTS FC 26", "MORTAL KOMBAT 11", "WWE 2K25", "SPIDER-MAN", "AND MORE..."]
    },
    {
      title: "Immersive Vibe",
      icon: <Volume2 className="text-emerald-400 mb-6" size={40} />,
      items: ["35W Premium Audio", "Dolby Atmos Surround", "Fully Air-Conditioned", "Ergonomic Seating"]
    }
  ];

  const comingSoonItems = [
    { title: '2 Cricket Nets', desc: 'Professional practice nets with bowling machines.', colorClass: 'bg-emerald-500/10', iconClass: 'text-emerald-500' },
    { title: 'Ice Bath', desc: 'Elite recovery for athletes. Professional grade cold plunge therapy.', colorClass: 'bg-blue-500/10', iconClass: 'text-blue-500' },
    { title: 'Pickle Ball Court', desc: 'Join the fastest growing sport on premium courts.', colorClass: 'bg-amber-500/10', iconClass: 'text-amber-500' }
  ];

  React.useEffect(() => {
    const ps5Timer = setInterval(() => {
      setCurrentPS5Card((prev) => (prev + 1) % ps5Features.length);
    }, 3500);

    const comingNextTimer = setInterval(() => {
      setCurrentComingNext((prev) => (prev + 1) % comingSoonItems.length);
    }, 3000);

    return () => {
      clearInterval(ps5Timer);
      clearInterval(comingNextTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 sm:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Dropouts Arena Logo" 
                className="relative h-24 sm:h-32 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
              />
            </div>
            <span className="text-xl sm:text-4xl font-black tracking-tighter hidden xs:block leading-none">
              DROPOUTS<span className="text-emerald-500">ARENA</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#turf" className="hover:text-emerald-400 transition-colors">Turf</a>
            <a href="#ps5" className="hover:text-emerald-400 transition-colors">PS5 Lounge</a>
            <button onClick={() => setShowFullGallery(true)} className="hover:text-emerald-400 transition-colors">Gallery</button>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-lg shadow-emerald-500/20">
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-neutral-400 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-neutral-950 pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              <a href="#turf" onClick={() => setIsMenuOpen(false)}>Turf</a>
              <a href="#ps5" onClick={() => setIsMenuOpen(false)}>PS5 Lounge</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-emerald-500 text-black py-4 rounded-xl text-lg font-bold">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-70 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-10 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 md:mb-6 leading-[0.9]">
                MORE GAME<br/>
                LESS INJURIES<br/>
                <span className="text-emerald-500">PURE TURF</span>
              </h1>
              <p className="text-base md:text-xl text-neutral-400 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience the finest multi-sport arena in Vasai. 
                Engineered for elite performance and recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                  Book Your Slot
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="turf" className="py-6 md:py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
                src="/images/arena.png"
                className="w-full h-full object-cover opacity-90 brightness-110 contrast-110"
                alt="Real Night Turf"
             />
             <div className="absolute inset-0 bg-neutral-950/10" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Arena</span>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">World-Class Multi-Sport Turf</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-xl">
                        <Soccer className="text-emerald-500" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">FIFA Certified Grass</h4>
                        <p className="text-neutral-400 text-sm">World-class quality for the best game.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-xl">
                        <Activity className="text-emerald-500" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Less Injuries</h4>
                        <p className="text-neutral-400 text-sm">Advanced shock-absorption for player safety.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-xl">
                        <Maximize className="text-emerald-500" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">7000 Sq Ft Area</h4>
                        <p className="text-neutral-400 text-sm">Spacious play area for every game.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-xl">
                        <ArrowUpToLine className="text-emerald-500" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">30 Feet Height</h4>
                        <p className="text-neutral-400 text-sm">High ceiling for unrestricted play.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-500 rounded-3xl p-8 text-black">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black italic">LIMITED TIME OFFER</h3>
                    <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">Offer!</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase opacity-60">Weekdays / hr</p>
                      <p className="text-3xl font-black">₹700</p>
                    </div>
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase opacity-60">Weekends / hr</p>
                      <p className="text-3xl font-black">₹800</p>
                    </div>
                  </div>
                  <p className="text-center font-bold text-sm tracking-tight">Valid Till 31st May Only</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-[4/3] md:aspect-[3/2] bg-emerald-950 rounded-2xl border border-emerald-800/50 overflow-hidden shadow-2xl">
                  {/* Soccer Field Diagram */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grass.png')]" />
                  <div className="absolute inset-[5%] border-2 border-white/10" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/10 rounded-full" />
                  <div className="absolute top-[30%] bottom-[30%] left-0 w-24 border-r-2 border-t-2 border-b-2 border-white/10" />
                  <div className="absolute top-[30%] bottom-[30%] right-0 w-24 border-l-2 border-t-2 border-b-2 border-white/10" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 bg-black/10 backdrop-blur-[2px] rounded-2xl border border-white/0 max-w-[80%]">
                      <p className="text-emerald-400 font-black text-2xl md:text-3xl mb-2">PURE TURF EXPERIENCE</p>
                      <p className="text-neutral-400 text-sm md:text-base">Experience the crunch of FIFA certified grass under your boots.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PS5 LOUNGE SECTION - NEW & IMPROVED */}
        <section id="ps5" className="py-12 md:py-32 px-6 relative overflow-hidden">
          {/* Background Image Rotation/Enhancement Simulation */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-20" />
             <motion.img 
                src="/images/ps5-bg.png"
                className="w-full h-full object-cover opacity-40 brightness-75 contrast-125"
                style={{ scale: 1.1 }}
                alt="Gaming Experience"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  e.currentTarget.src = "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2000";
                  e.currentTarget.className += " grayscale opacity-20";
                }}
             />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-8xl font-black mb-2 tracking-tighter italic uppercase text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]">Dropouts PS5</h2>
              <h3 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase">Gaming Lounge</h3>
            </div>

            {/* Horizontal Slider for Cards - Replaced with Timed Carousel */}
            <div className="relative mb-12 md:mb-20 py-4 h-[320px] md:h-[350px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPS5Card}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full max-w-[320px] md:max-w-[450px] flex-shrink-0 bg-neutral-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors shadow-2xl"
                >
                  {ps5Features[currentPS5Card].icon}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{ps5Features[currentPS5Card].title}</h3>
                  <ul className="space-y-3 text-neutral-400">
                    {ps5Features[currentPS5Card].items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                {ps5Features.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentPS5Card === i ? 'w-6 bg-emerald-500' : 'w-1.5 bg-neutral-800'}`}
                  />
                ))}
              </div>
            </div>

            {/* Minimized Price Card */}
            <div className="bg-neutral-900/50 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden mb-16 shadow-2xl max-w-2xl mx-auto text-xs md:text-sm">
              <div className="bg-neutral-950 px-5 py-4 border-b border-white/5 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                <div className="flex items-center">
                  <h3 className="font-black italic uppercase tracking-tight text-base md:text-lg">Gaming <span className="text-emerald-500">Rate Card</span></h3>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md">
                   <Clock size={10} className="text-emerald-500" />
                   <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Hourly</span>
                </div>
              </div>
              <div className="divide-y divide-white/5">
                {ps5Pricing.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 px-5 md:px-8 gap-3 hover:bg-white/5 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-base font-black italic mb-0.5">{item.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <div className="bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-white/5 flex flex-col items-end min-w-[70px] md:min-w-[80px] opacity-60">
                        <span className="text-[8px] text-neutral-500 font-black uppercase leading-none mb-1">Standard</span>
                        <span className="text-sm md:text-lg font-black text-neutral-500 leading-none line-through">₹{item.standard}</span>
                      </div>
                      <div className="bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/10 flex flex-col items-end min-w-[80px] md:min-w-[100px]">
                        <span className="text-[8px] text-blue-400 font-black uppercase leading-none mb-1 text-right">Launch Price</span>
                        <span className="text-lg md:text-xl font-black text-blue-400 leading-none">₹{item.launch}</span>
                      </div>
                      <div className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/10 flex flex-col items-end min-w-[80px] md:min-w-[100px]">
                        <span className="text-[8px] text-emerald-400 font-black uppercase leading-none mb-1 text-right">Post-Turf</span>
                        <span className="text-lg md:text-xl font-black text-emerald-400 leading-none">₹{item.postMatch}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl md:rounded-3xl mb-16">
              <div className="flex items-start gap-3 md:gap-4 text-left">
                <Trophy className="text-emerald-500 mt-1 flex-shrink-0" size={16} />
                <div>
                  <h4 className="text-xs md:text-xl font-black italic text-emerald-100 leading-none mb-1 uppercase tracking-tight">Squad Celebration Discount</h4>
                  <p className="text-[10px] md:text-sm text-neutral-400 leading-tight">
                    Finished your turf match? Get an exclusive <span className="text-emerald-400 font-bold">post turf offer</span> on gaming sessions. Valid same-day for all players.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 md:py-32 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 italic">Gallery</h2>
                <p className="text-sm md:text-base text-neutral-400">Capturing the intensity of Dropouts Arena</p>
              </div>
              <button 
                onClick={() => setShowFullGallery(true)}
                className="group flex items-center gap-2 bg-neutral-800 hover:bg-emerald-500 hover:text-black px-6 py-3 rounded-full transition-all font-bold text-sm md:text-base"
              >
                View Full Gallery
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {galleryItems.slice(0, 4).map((item, i) => (
                <div 
                  key={i} 
                  className="aspect-square md:aspect-[4/5] bg-neutral-800 rounded-2xl md:rounded-3xl overflow-hidden group relative cursor-pointer" 
                  onClick={() => setShowFullGallery(true)}
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) video.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
                >
                   <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/0 transition-colors" />
                   {item.type === 'video' ? (
                    <video 
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                    />
                   ) : (
                    <img 
                      src={item.src}
                      alt="Gallery item"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Gallery Modal/Overlay */}
        <AnimatePresence>
          {showFullGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-neutral-950 overflow-y-auto"
            >
              <div className="sticky top-0 z-20 bg-neutral-950/80 backdrop-blur-md p-6 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-black italic">ARENA MEDIA</h3>
                    <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest">Full Collection</p>
                  </div>
                  <button 
                    onClick={() => setShowFullGallery(false)}
                    className="bg-neutral-800 hover:bg-neutral-700 p-4 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                  {galleryItems.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="break-inside-avoid relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 group"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) video.play().catch(() => {});
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      {item.type === 'video' ? (
                        <video 
                          src={item.src} 
                          className="w-full h-auto cursor-pointer" 
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img 
                          src={item.src} 
                          alt="Gallery item" 
                          className="w-full h-auto group-hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-bold bg-emerald-500 text-black px-2 py-1 rounded-md inline-block uppercase tracking-tighter">
                          {item.type}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section id="contact" className="py-12 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-emerald-500 rounded-[32px] md:rounded-[40px] p-6 md:p-16 text-black relative overflow-hidden shadow-2xl shadow-emerald-500/20">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">Ready to Play?</h2>
                <p className="text-lg md:text-xl font-bold mb-8 md:mb-12 text-black/70">Book your slot today and experience the future of sports and gaming in Vasai.</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+919022400165" className="bg-black text-white px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-neutral-900 transition-all flex items-center justify-center gap-3 active:scale-95">
                    <Phone size={20} />
                    +91 90224 00165
                  </a>
                  <a href="https://www.instagram.com/dropouts.turf" target="_blank" rel="noopener noreferrer" className="bg-black/10 text-black px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-black/20 transition-all flex items-center justify-center gap-3">
                    <Instagram size={20} />
                    dropouts.turf
                  </a>
                </div>
                <a 
                  href="https://maps.app.goo.gl/B5nQGQrYKKxk2k7w6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black/60 font-bold uppercase tracking-widest text-xs md:text-sm hover:text-black transition-colors"
                >
                  <MapPin size={16} />
                  Vasai, Palghar
                </a>
              </div>
              {/* Abstract Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-32 -mb-32" />
            </div>

            <a 
              href="https://maps.app.goo.gl/B5nQGQrYKKxk2k7w6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-neutral-900 rounded-[40px] border border-neutral-800 hover:border-emerald-500/50 transition-all group overflow-hidden"
            >
              <div className="relative h-full w-full rounded-[30px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" 
                  alt="Location map" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-neutral-950/40 flex items-center justify-center p-8">
                   <div className="text-center group-hover:scale-110 transition-all transform">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="text-black" size={32} />
                      </div>
                      <p className="text-white font-black text-xl tracking-tight">OPEN IN GOOGLE MAPS</p>
                      <p className="text-neutral-400 text-sm">Vasai, Palghar</p>
                   </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Feedback Section - Compact & Integrated */}
        <section className="py-8 md:py-20 px-6 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-900/30 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-[32px] p-5 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div>
                  <div className="flex items-center mb-2 md:mb-4">
                    <h2 className="text-xl md:text-4xl font-black italic tracking-tight uppercase">Send a <span className="text-emerald-500">Message</span></h2>
                  </div>
                  <p className="text-[11px] md:text-base text-neutral-400 mb-5 md:mb-8 leading-relaxed">
                    Have questions or feedback? Type your message below and we'll get back to you immediately.
                  </p>
                  <div className="flex items-center gap-3 text-neutral-300 font-bold">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Mail size={14} className="text-emerald-500 md:hidden" />
                      <Mail size={18} className="text-emerald-500 hidden md:block" />
                    </div>
                    <span className="text-xs md:text-base">Dropoutsturf@gmail.com</span>
                  </div>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const msg = formData.get('message');
                    const email = formData.get('email') || 'Not provided';
                    const phone = formData.get('phone') || 'Not provided';
                    const body = `Message: ${msg}\n\nContact Details:\nEmail: ${email}\nPhone: ${phone}`;
                    window.location.href = `mailto:Dropoutsturf@gmail.com?subject=Inquiry from Website&body=${encodeURIComponent(body)}`;
                  }}
                  className="space-y-3 md:space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <input 
                      type="email"
                      name="email"
                      placeholder="Email ID (Optional)"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg md:rounded-xl p-3 md:p-4 text-neutral-100 focus:outline-none focus:border-emerald-500/50 transition-all text-xs md:text-sm"
                    />
                    <input 
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg md:rounded-xl p-3 md:p-4 text-neutral-100 focus:outline-none focus:border-emerald-500/50 transition-all text-xs md:text-sm"
                    />
                  </div>
                  <textarea 
                    name="message"
                    required
                    placeholder="Type your message here..."
                    className="w-full h-24 md:h-32 bg-neutral-950 border border-neutral-800 rounded-lg md:rounded-2xl p-3 md:p-4 text-neutral-100 focus:outline-none focus:border-emerald-500/50 transition-all resize-none text-xs md:text-sm"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/20 text-xs md:text-base"
                  >
                    SEND MESSAGE
                    <ChevronRight size={16} className="md:hidden" />
                    <ChevronRight size={20} className="hidden md:block" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Next Section - Moved to End */}
        <section className="py-16 md:py-24 px-6 border-t border-neutral-900 bg-neutral-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
              <div>
                <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Future Proof</span>
                <h2 className="text-3xl md:text-5xl font-black italic uppercase">Coming Next</h2>
              </div>
              <p className="text-neutral-400 max-w-md text-base md:text-lg">We're constantly expanding to bring the most elite sports and recovery facilities to Vasai.</p>
            </div>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {comingSoonItems.map((item, i) => (
                <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-8 md:p-10 rounded-[24px] md:rounded-[32px] flex flex-col justify-between group hover:border-neutral-700 transition-all hover:-translate-y-1 shadow-xl">
                  <div>
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-6 md:mb-8 flex items-center justify-center ${item.colorClass}`}>
                      <ArrowRight className={`${item.iconClass} group-hover:translate-x-1 transition-transform`} size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 italic uppercase tracking-tight">{item.title}</h3>
                    <p className="text-sm md:text-lg text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-30">Status</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500/60">Arriving Soon</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative h-[320px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentComingNext}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-[24px] flex flex-col justify-between w-full max-w-[300px] h-full shadow-xl"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center ${comingSoonItems[currentComingNext].colorClass}`}>
                      <ArrowRight className={`${comingSoonItems[currentComingNext].iconClass}`} size={24} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 italic uppercase tracking-tight">{comingSoonItems[currentComingNext].title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{comingSoonItems[currentComingNext].desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Status</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Arriving Soon</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex gap-2">
                {comingSoonItems.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-300 ${currentComingNext === i ? 'w-4 bg-emerald-500' : 'w-1 bg-neutral-800'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-neutral-200">DROPOUTS<span className="text-emerald-500">ARENA</span></span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors underline decoration-neutral-800">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors underline decoration-neutral-800">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-emerald-500" />
            Vasai, Palghar, Maharashtra
          </div>
        </div>
      </footer>
    </div>
  );
}
