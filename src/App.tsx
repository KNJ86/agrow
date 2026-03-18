/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Search, 
  ArrowDown, 
  Play, 
  ArrowRight, 
  Heart, 
  ArrowUpRight,
  Menu,
  X,
  Database,
  Zap,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Global', href: '#global' },
    { name: 'News', href: '#news' },
  ];

  return (
    <nav className="relative z-20 w-full px-6 py-8 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2 text-white">
        <img src="https://raw.githubusercontent.com/KNJ86/Agrow/refs/heads/main/src/Agrow_BI.png" alt="Agrow Logo" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
      </div>
      
      <div className="hidden md:flex items-center gap-3">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="px-5 py-2.5 text-base text-white border border-transparent hover:border-white/30 rounded-full transition-all backdrop-blur-sm">
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="w-11 h-11 flex items-center justify-center text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
          <Search className="w-5 h-5" />
        </button>
        <a href="#contact" className="hidden md:block px-6 py-2.5 text-base text-[#0f251a] bg-white rounded-full font-medium transition-colors">Contact Us</a>
        <button 
          className="md:hidden w-11 h-11 flex items-center justify-center text-white border border-white/30 rounded-full backdrop-blur-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-[#0f251a] rounded-3xl border border-white/10 md:hidden z-50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white/70 text-lg hover:text-white transition-colors">{link.name}</a>
              ))}
              <hr className="border-white/10" />
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium">Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="p-4 md:p-6 lg:p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col justify-between"
      >
        {/* Background Video/Image with Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop" 
          alt="Smart Farming" 
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-6 py-2 border border-white/30 rounded-full backdrop-blur-md text-white/90 text-sm font-medium mb-6"
          >
            기술로 지속가능한 농업을 설계하는 솔루션기업, AGROW
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[10vw] md:text-[8vw] font-bold text-white leading-tight tracking-tighter mb-8 uppercase"
          >
            Grow What Matters
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            농업의 본질을 기술로 재설계하여 지속 가능한 식량 시스템을 구축합니다.
          </motion.p>
        </div>

        {/* Hero Bottom Stats/Action */}
        <div className="relative z-10 px-6 md:px-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 text-left">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">🌱 Mission</p>
              <p className="text-white text-base md:text-lg font-medium max-w-xs">기술과 데이터로 농업의 본질을 재설계하여 지속가능한 식량 시스템 구축</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">🌍 Core Value</p>
              <p className="text-white text-base md:text-lg font-medium max-w-xs">농업에 대한 이해와 Ag-Tech 도입으로, 지속가능한 농업 성장을 실현</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/10 transition-colors">
              <ArrowDown className="w-6 h-6" />
            </button>
            <button className="bg-white text-[#0f251a] px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors whitespace-nowrap uppercase tracking-tight">
              Explore Solutions
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#0f251a]/60 text-sm font-bold uppercase tracking-widest mb-4">About Agrow</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Agriculture <br />+ Grow
          </h2>
          <div className="space-y-6 text-xl text-neutral-600 leading-relaxed max-w-xl mb-12">
            <p className="font-bold text-[#0f251a]">
              "우리는 기후변화라는 가장 근본적인 위기에 맞서 <br />농업의 본질을 기술로 재설계합니다.″
            </p>
            <p>
              Agrow는 Agriculture와 Grow의 결합입니다. <br />
              그러나 우리가 키우는 것은 단지 식물이 아닙니다. <br />
              우리는 기후 회복력 있는 식량 시스템, <br />
              농민이 함께 살아가는 지속 가능한 방식, <br />
              그리고 더 나은 지구를 위한 기술 기반의 성장을 키웁니다.
            </p>
            <p>
              우리는 불확실한 환경을 분석하고, <br />
              그 안에서 지속 가능한 기회를 설계합니다. <br />
              지속 가능한 내일을 위해 오늘의 농업을 다시 그립니다.
            </p>
            <p className="text-right font-bold text-[#0f251a]">Grow what matters. Agrow</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: '현장 중심', desc: '농업에 대한 이해와 현장경험' },
              { title: '데이터 기반', desc: 'Ag-Tech 기반 의사결정 시스템' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-[4rem] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Agtech Innovation"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0f251a]/10"></div>
          <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/90 backdrop-blur-md rounded-3xl">
            <p className="text-[#0f251a] text-2xl font-medium leading-tight italic">
              "농업의 본질을 기술로 재설계하여 식량 시스템의 미래를 만듭니다."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Service = () => {
  const services = [
    {
      title: "Value Chain Optimization",
      desc: "종자부터 유통까지 전체 밸류체인을 개선하여 최적의 효율을 달성합니다.",
      tags: ["종자/육묘", "재배관리", "수확/가공", "유통/판매"]
    },
    {
      title: "현장분석 기반 적정기술 도입",
      desc: "현장 분석을 통해 가장 적절한 Ag-Tech를 접목시켜 농업의 효율을 증대시킵니다.",
      tags: ["농작업 대행", "데이터 의사결정", "현장 관리"]
    },
    {
      title: "Smart Farming",
      desc: "IoT와 데이터를 결합한 첨단 스마트팜 구축 솔루션을 제공합니다.",
      tags: ["스마트팜 구축", "IoT 데이터", "정밀 농업"]
    }
  ];

  return (
    <section id="service" className="py-24 bg-[#0f251a] text-white">
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">Our Services</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">Total Solution</h2>
          </div>
          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            Agrow는 문제 해결 방식 중심의 구조로 설계된 통합 농업 솔루션을 통해 가치를 창출합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-[#0f251a] transition-all">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Global = () => {
  return (
    <section id="global" className="py-24 bg-[#0f251a] text-white overflow-hidden">
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">Global Presence</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">Indonesia <br />& Beyond</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-xl">
              Agrow는 인도네시아를 시작으로 글로벌 농업 시장에 진출하고 있습니다. 
              현지 기후와 토양에 최적화된 솔루션을 통해 글로벌 식량 안보에 기여합니다.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">01</div>
                <div>
                  <h4 className="font-bold text-lg">인도네시아 거점 구축</h4>
                  <p className="text-sm text-white/50">동남아시아 시장 진출을 위한 전략적 요충지</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">02</div>
                <div>
                  <h4 className="font-bold text-lg">글로벌 확장 로드맵</h4>
                  <p className="text-sm text-white/50">데이터 기반의 표준화된 솔루션으로 전 세계 확산</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video lg:aspect-square rounded-[4rem] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Global Agriculture"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const News = () => {
  const news = [
    {
      date: "2024.03.15",
      title: "Agrow, 인도네시아 스마트팜 시범 사업 착수",
      category: "Global"
    },
    {
      date: "2024.02.28",
      title: "데이터 기반 농작업 대행 솔루션 FaaS 2.0 출시",
      category: "Tech"
    },
    {
      date: "2024.01.10",
      title: "시리즈 A 투자 유치 성공, 글로벌 확장 가속화",
      category: "Business"
    }
  ];

  return (
    <section id="news" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="text-[#0f251a]/60 text-sm font-bold uppercase tracking-widest mb-4">Latest Updates</p>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">News</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 px-8 py-4 border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="divide-y divide-neutral-200">
        {news.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer"
          >
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <span className="text-neutral-400 font-mono">{item.date}</span>
              <span className="px-4 py-1 bg-neutral-100 rounded-full text-xs font-bold uppercase tracking-wider">{item.category}</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
            <div className="hidden md:flex w-12 h-12 rounded-full border border-neutral-200 items-center justify-center group-hover:bg-[#0f251a] group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
      <div className="bg-[#f0f4ef] rounded-[4rem] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">Let's Grow <br />Together</h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-md">
            Agrow와 함께 농업의 미래를 설계할 파트너를 찾습니다. 
            솔루션 도입 문의 및 협업 제안을 기다립니다.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">contact@agrow.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">+82 02-1234-5678</p>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-white p-10 rounded-[3rem] shadow-xl border border-neutral-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0f251a] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Email</label>
              <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0f251a] transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Message</label>
            <textarea rows={4} placeholder="How can we help?" className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0f251a] transition-all resize-none"></textarea>
          </div>
          <button className="w-full py-5 bg-[#0f251a] text-white rounded-2xl font-bold text-lg hover:bg-[#1a3a2f] transition-all">Send Message</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="mt-24 p-4 md:p-6 lg:p-8 pb-0">
      <div className="relative rounded-t-[3rem] overflow-hidden bg-[#0f251a] pt-24 pb-12 px-6 md:px-12">
        <div className="relative z-10 max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div>
              <div className="flex items-center gap-2 text-white mb-8">
                <img src="Agrow_BI.png" alt="Agrow Logo" className="h-10 object-contain brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8 leading-tight">
                Grow What Matters. <br />Join the Future of Agriculture.
              </h2>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Twitter"].map(s => (
                  <a key={s} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                    <span className="sr-only">{s}</span>
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-4 text-white/70">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Milestones</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Service</h4>
                <ul className="space-y-4 text-white/70">
                  <li><a href="#service" className="hover:text-white transition-colors">Total Solution</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Value Chain</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FaaS</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Smart Farming</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
                <ul className="space-y-4 text-white/70">
                  <li><a href="#contact" className="hover:text-white transition-colors">Inquiry</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-sm">© 2024 Agrow Inc. All Rights Reserved.</p>
            <div className="flex gap-8 text-white/30 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans antialiased text-[#0f251a] bg-[#e6ebe5] selection:bg-[#0f251a] selection:text-white break-keep scroll-smooth">
      <Hero />
      <About />
      <Service />
      <Global />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
