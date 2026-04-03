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

const Navbar = ({ lang, setLang }: { lang: 'KOR' | 'ENG' | 'IDN', setLang: (l: 'KOR' | 'ENG' | 'IDN') => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: lang === 'KOR' ? 'About' : lang === 'ENG' ? 'About' : 'Tentang', href: '#about' },
    { name: lang === 'KOR' ? 'Service' : lang === 'ENG' ? 'Service' : 'Layanan', href: '#service' },
    { name: lang === 'KOR' ? 'Global' : lang === 'ENG' ? 'Global' : 'Global', href: '#global' },
    { name: lang === 'KOR' ? 'News' : lang === 'ENG' ? 'News' : 'Berita', href: '#news' },
  ];

  return (
    <nav className="relative z-20 w-full px-6 py-8 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2 text-white">
        <img src="https://raw.githubusercontent.com/KNJ86/agrow/refs/heads/img/Agrow_BI.png" alt="Agrow Logo" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
      </div>
      
      <div className="hidden md:flex items-center gap-3">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="px-5 py-2.5 text-base text-white border border-transparent hover:border-white/30 rounded-full transition-all backdrop-blur-sm">
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-1">
          <button 
            onClick={() => setLang('KOR')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'KOR' ? 'bg-white text-[#0f251a]' : 'text-white/60 hover:text-white'}`}
          >
            KOR
          </button>
          <button 
            onClick={() => setLang('ENG')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'ENG' ? 'bg-white text-[#0f251a]' : 'text-white/60 hover:text-white'}`}
          >
            ENG
          </button>
          <button 
            onClick={() => setLang('IDN')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'IDN' ? 'bg-white text-[#0f251a]' : 'text-white/60 hover:text-white'}`}
          >
            IDN
          </button>
        </div>
        <a href="#contact" className="hidden md:block px-6 py-2.5 text-base text-[#0f251a] bg-white rounded-full font-medium transition-colors">
          {lang === 'KOR' ? 'Contact Us' : lang === 'ENG' ? 'Contact Us' : 'Hubungi Kami'}
        </a>
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

const Hero = ({ lang, setLang }: { lang: 'KOR' | 'ENG' | 'IDN', setLang: (l: 'KOR' | 'ENG' | 'IDN') => void }) => {
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
          src="https://raw.githubusercontent.com/KNJ86/agrow/refs/heads/img/fields.jpg" 
          alt="Smart Farming" 
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0"></div>

        <Navbar lang={lang} setLang={setLang} />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-10 py-4 border border-white/30 rounded-full backdrop-blur-md text-white/90 text-base md:text-lg font-medium mb-8"
          >
            {lang === 'KOR' 
              ? "기술로 지속가능한 농업을 설계하는 솔루션기업, AGROW" 
              : lang === 'ENG'
              ? "AGROW, a solution company designing sustainable agriculture through technology"
              : "AGROW, perusahaan solusi yang merancang pertanian berkelanjutan melalui teknologi"}
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
            {lang === 'KOR'
              ? "농업의 본질을 기술로 재설계하여 지속 가능한 식량 시스템을 구축합니다."
              : lang === 'ENG'
              ? "Redesigning the essence of agriculture with technology to build a sustainable food system."
              : "Merancang ulang esensi pertanian dengan teknologi untuk membangun sistem pangan berkelanjutan."}
          </motion.p>
        </div>

        {/* Hero Bottom Stats/Action */}
        <div className="relative z-10 px-6 md:px-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 text-left">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">🌱 Mission</p>
              <p className="text-white text-base md:text-lg font-medium max-w-xs">
                {lang === 'KOR'
                  ? "기술과 데이터로 농업의 본질을 재설계하여 지속가능한 식량 시스템 구축"
                  : lang === 'ENG'
                  ? "Building a sustainable food system by redesigning the essence of agriculture with technology and data"
                  : "Membangun sistem pangan berkelanjutan dengan merancang ulang esensi pertanian dengan teknologi dan data"}
              </p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">🌍 Core Value</p>
              <p className="text-white text-base md:text-lg font-medium max-w-xs">
                {lang === 'KOR'
                  ? "농업에 대한 이해와 Ag-Tech 도입으로, 지속가능한 농업 성장을 실현"
                  : lang === 'ENG'
                  ? "Realizing sustainable agricultural growth through understanding agriculture and adopting Ag-Tech"
                  : "Mewujudkan pertumbuhan pertanian berkelanjutan melalui pemahaman pertanian dan penerapan Ag-Tech"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/10 transition-colors">
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = ({ lang }: { lang: 'KOR' | 'ENG' | 'IDN' }) => {
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
              {lang === 'KOR'
                ? "\"우리는 기후변화라는 가장 근본적인 위기에 맞서 농업의 본질을 기술로 재설계합니다.″"
                : lang === 'ENG'
                ? "\"We redesign the essence of agriculture with technology against the most fundamental crisis of climate change.\""
                : "\"Kami merancang ulang esensi pertanian dengan teknologi untuk menghadapi krisis perubahan iklim yang paling mendasar.\""}
            </p>
            <p>
              {lang === 'KOR' ? (
                <>
                  Agrow는 Agriculture와 Grow의 결합입니다. <br />
                  그러나 우리가 키우는 것은 단지 식물이 아닙니다. <br />
                  우리는 기후 회복력 있는 식량 시스템, <br />
                  농민이 함께 살아가는 지속 가능한 방식, <br />
                  그리고 더 나은 지구를 위한 기술 기반의 성장을 키웁니다.
                </>
              ) : lang === 'ENG' ? (
                <>
                  Agrow is a combination of Agriculture and Grow. <br />
                  But what we grow is not just plants. <br />
                  We grow climate-resilient food systems, <br />
                  sustainable ways for farmers to live together, <br />
                  and technology-based growth for a better planet.
                </>
              ) : (
                <>
                  Agrow adalah kombinasi dari Agriculture dan Grow. <br />
                  Namun yang kami tumbuhkan bukan sekadar tanaman. <br />
                  Kami menumbuhkan sistem pangan yang tahan iklim, <br />
                  cara berkelanjutan bagi petani untuk hidup bersama, <br />
                  dan pertumbuhan berbasis teknologi untuk planet yang lebih baik.
                </>
              )}
            </p>
            <p>
              {lang === 'KOR' ? (
                <>
                  우리는 불확실한 환경을 분석하고, <br />
                  그 안에서 지속 가능한 기회를 설계합니다. <br />
                  지속 가능한 내일을 위해 오늘의 농업을 다시 그립니다.
                </>
              ) : lang === 'ENG' ? (
                <>
                  We analyze uncertain environments and <br />
                  design sustainable opportunities within them. <br />
                  We redraw today's agriculture for a sustainable tomorrow.
                </>
              ) : (
                <>
                  Kami menganalisis lingkungan yang tidak pasti dan <br />
                  merancang peluang berkelanjutan di dalamnya. <br />
                  Kami menggambar ulang pertanian hari ini untuk hari esok yang berkelanjutan.
                </>
              )}
            </p>
            <p className="text-right font-bold text-[#0f251a]">Grow what matters. Agrow</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { 
                title: lang === 'KOR' ? '현장 중심' : lang === 'ENG' ? 'Field-centric' : 'Berorientasi Lapangan', 
                desc: lang === 'KOR' ? '농업에 대한 이해와 현장경험' : lang === 'ENG' ? 'Understanding of agriculture and field experience' : 'Pemahaman tentang pertanian dan pengalaman lapangan' 
              },
              { 
                title: lang === 'KOR' ? '데이터 기반' : lang === 'ENG' ? 'Data-driven' : 'Berbasis Data', 
                desc: lang === 'KOR' ? 'Ag-Tech 기반 의사결정 시스템' : lang === 'ENG' ? 'Ag-Tech based decision-making system' : 'Sistem pengambilan keputusan berbasis Ag-Tech' 
              }
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
            src="https://raw.githubusercontent.com/KNJ86/agrow/refs/heads/img/grain.JPG" 
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

const Service = ({ lang }: { lang: 'KOR' | 'ENG' | 'IDN' }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Value Chain Optimization",
      desc: lang === 'KOR' 
        ? "종자부터 유통까지 전체 밸류체인을 개선하여 최적의 효율을 달성합니다."
        : lang === 'ENG'
        ? "Improving the entire value chain from seeds to distribution to achieve optimal efficiency."
        : "Meningkatkan seluruh rantai nilai dari benih hingga distribusi untuk mencapai efisiensi optimal.",
      details: lang === 'KOR'
        ? "Agrow는 종자 선택, 육묘 관리, 재배, 수확, 가공, 그리고 최종 유통에 이르는 농업의 전 과정을 데이터로 연결합니다. 각 단계에서의 손실을 최소화하고 부가가치를 극대화하는 최적의 경로를 설계합니다."
        : lang === 'ENG'
        ? "Agrow connects the entire agricultural process from seed selection, seedling management, cultivation, harvest, processing, to final distribution with data. We design optimal paths that minimize losses and maximize added value at each stage."
        : "Agrow menghubungkan seluruh proses pertanian mulai dari pemilihan benih, manajemen bibit, budidaya, panen, pengolahan, hingga distribusi akhir dengan data. Kami merancang jalur optimal yang meminimalkan kerugian dan memaksimalkan nilai tambah di setiap tahap.",
      tags: lang === 'KOR' ? ["종자/육묘", "재배관리", "수확/가공", "유통/판매"] : lang === 'ENG' ? ["Seeds/Seedlings", "Cultivation", "Harvest/Processing", "Distribution"] : ["Benih/Bibit", "Budidaya", "Panen/Pengolahan", "Distribusi"],
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: lang === 'KOR' ? "현장분석 기반 적정기술 도입" : lang === 'ENG' ? "Field Analysis-based Appropriate Tech Adoption" : "Adopsi Teknologi Tepat Guna Berbasis Analisis Lapangan",
      desc: lang === 'KOR'
        ? "현장 분석을 통해 가장 적절한 Ag-Tech를 접목시켜 농업의 효율을 증대시킵니다."
        : lang === 'ENG'
        ? "Increases agricultural efficiency by integrating the most appropriate Ag-Tech through field analysis."
        : "Meningkatkan efisiensi pertanian dengan mengintegrasikan Ag-Tech yang paling tepat melalui analisis lapangan.",
      details: lang === 'KOR'
        ? "모든 농지는 다릅니다. Agrow는 토양, 기후, 작물 특성을 정밀 분석하여 해당 현장에 가장 적합한 기술(드론, 센서, 자동화 장비 등)을 선별하고 도입합니다. 과잉 투자를 방지하고 실질적인 생산성 향상을 이끌어냅니다."
        : lang === 'ENG'
        ? "Every farmland is different. Agrow precisely analyzes soil, climate, and crop characteristics to select and introduce the most suitable technologies (drones, sensors, automated equipment, etc.) for each site. We prevent over-investment and lead to practical productivity improvements."
        : "Setiap lahan pertanian berbeda. Agrow menganalisis karakteristik tanah, iklim, dan tanaman secara presisi untuk memilih dan memperkenalkan teknologi yang paling sesuai (drone, sensor, peralatan otomatis, dll.) untuk setiap lokasi. Kami mencegah investasi berlebih dan mendorong peningkatan produktivitas yang praktis.",
      tags: lang === 'KOR' ? ["농작업 대행", "데이터 의사결정", "현장 관리"] : lang === 'ENG' ? ["Farm Task Agency", "Data Decision", "Field Management"] : ["Agen Tugas Pertanian", "Keputusan Data", "Manajemen Lapangan"],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Smart Farming",
      desc: lang === 'KOR'
        ? "IoT와 데이터를 결합한 첨단 스마트팜 구축 솔루션을 제공합니다."
        : lang === 'ENG'
        ? "Provides advanced smart farm construction solutions combining IoT and data."
        : "Menyediakan solusi pembangunan pertanian cerdas tingkat lanjut yang menggabungkan IoT dan data.",
      details: lang === 'KOR'
        ? "IoT 센서 네트워크를 통해 온실이나 노지의 환경을 실시간으로 모니터링하고 제어합니다. 수집된 빅데이터를 AI가 분석하여 최적의 생육 조건을 유지하며, 노동력 절감과 품질 균일화를 동시에 실현합니다."
        : lang === 'ENG'
        ? "We monitor and control the environment of greenhouses or open fields in real-time through IoT sensor networks. AI analyzes the collected big data to maintain optimal growth conditions, realizing both labor reduction and quality uniformity."
        : "Kami memantau dan mengendalikan lingkungan rumah kaca atau lahan terbuka secara real-time melalui jaringan sensor IoT. AI menganalisis data besar yang dikumpulkan untuk menjaga kondisi pertumbuhan yang optimal, mewujudkan pengurangan tenaga kerja dan keseragaman kualitas.",
      tags: lang === 'KOR' ? ["스마트팜 구축", "IoT 데이터", "정밀 농업"] : lang === 'ENG' ? ["Smart Farm Build", "IoT Data", "Precision Ag"] : ["Bangun Pertanian Cerdas", "Data IoT", "Pertanian Presisi"],
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="service" className="py-24 bg-[#0f251a] text-white overflow-hidden">
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">Our Services</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">Total Solution</h2>
          </div>
          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            {lang === 'KOR'
              ? "Agrow는 문제 해결 방식 중심의 구조로 설계된 통합 농업 솔루션을 통해 가치를 창출합니다."
              : lang === 'ENG'
              ? "Agrow creates value through integrated agricultural solutions designed with a problem-solving approach."
              : "Agrow menciptakan nilai melalui solusi pertanian terintegrasi yang dirancang dengan pendekatan pemecahan masalah."}
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
              className="relative group h-[500px] rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img 
                src={s.image} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="relative h-full p-10 flex flex-col justify-end">
                <button 
                  onClick={() => setSelectedService(i)}
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 hover:bg-white hover:text-[#0f251a] transition-all cursor-pointer z-10"
                >
                  <ArrowUpRight className="w-8 h-8" />
                </button>
                <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-white/80 mb-8 leading-relaxed line-clamp-3">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PIP / Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#1a3a2f] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-[#0f251a] transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={services[selectedService].image} 
                  alt={services[selectedService].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a3a2f] hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2f] to-transparent md:hidden"></div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60">
                    {lang === 'KOR' ? '서비스 상세' : lang === 'ENG' ? 'Service Detail' : 'Detail Layanan'}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 leading-tight">
                  {services[selectedService].title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {services[selectedService].details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {services[selectedService].tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Global = ({ lang }: { lang: 'KOR' | 'ENG' | 'IDN' }) => {
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
              {lang === 'KOR'
                ? "Agrow는 인도네시아를 시작으로 글로벌 농업 시장에 진출하고 있습니다. 현지 기후와 토양에 최적화된 솔루션을 통해 글로벌 식량 안보에 기여합니다."
                : lang === 'ENG'
                ? "Starting with Indonesia, Agrow is expanding into the global agricultural market. We contribute to global food security through solutions optimized for local climate and soil."
                : "Dimulai dengan Indonesia, Agrow merambah ke pasar pertanian global. Kami berkontribusi pada ketahanan pangan global melalui solusi yang dioptimalkan untuk iklim dan tanah lokal."}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">01</div>
                <div>
                  <h4 className="font-bold text-lg">{lang === 'KOR' ? '인도네시아 거점 구축' : lang === 'ENG' ? 'Establishing Indonesia Base' : 'Membangun Basis Indonesia'}</h4>
                  <p className="text-sm text-white/50">{lang === 'KOR' ? '동남아시아 시장 진출을 위한 전략적 요충지' : lang === 'ENG' ? 'Strategic point for Southeast Asian market entry' : 'Titik strategis untuk masuk ke pasar Asia Tenggara'}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">02</div>
                <div>
                  <h4 className="font-bold text-lg">{lang === 'KOR' ? '글로벌 확장 로드맵' : lang === 'ENG' ? 'Global Expansion Roadmap' : 'Peta Jalan Ekspansi Global'}</h4>
                  <p className="text-sm text-white/50">{lang === 'KOR' ? '데이터 기반의 표준화된 솔루션으로 전 세계 확산' : lang === 'ENG' ? 'Spreading worldwide with data-based standardized solutions' : 'Menyebar ke seluruh dunia dengan solusi terstandarisasi berbasis data'}</p>
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
              src="https://raw.githubusercontent.com/KNJ86/agrow/refs/heads/img/Indoensia.jpg" 
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

const News = ({ lang }: { lang: 'KOR' | 'ENG' | 'IDN' }) => {
  const news = [
    {
      date: "2024.11.21",
      title: lang === 'KOR' ? '에이그로우 등 강원지역 공적개발원조 사업 진입 지원 프로그램 공모 선정' : lang === 'ENG' ? 'Selection for Open Call for Public Development Assistance (ODA) Project Entry Support Programs in Gangwon Region, Including Aigrow' : 'Selection for Open Call for Public Development Assistance (ODA) Project Entry Support Programs in Gangwon Region, Including Aigrow',
      category: "Global",
      link: "https://www.kado.net/news/articleView.html?idxno=2038424"
    },
    {
      date: "2024.11.15",
      title: lang === 'KOR' ? '강원특별자치도, "ODA 사업 진입 지원, 최종 3개 기업 선정"' : lang === 'ENG' ? 'Gangwon Special Self-Governing Province, "Support for Entry into ODA Projects, Final 3 Companies Selected"' : 'Gangwon Special Self-Governing Province, "Support for Entry into ODA Projects, Final 3 Companies Selected"',
      category: "Global",
      link: "https://www.gukjenews.com/news/articleView.html?idxno=3527010"
    }
  ];

  return (
    <section id="news" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="text-[#0f251a]/60 text-sm font-bold uppercase tracking-widest mb-4">Latest Updates</p>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">{lang === 'KOR' ? 'News' : lang === 'ENG' ? 'News' : 'Berita'}</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 px-8 py-4 border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 transition-all">
          {lang === 'KOR' ? 'View All' : lang === 'ENG' ? 'View All' : 'Lihat Semua'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="divide-y divide-neutral-200">
        {news.filter(item => item.link && item.link !== '#').map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => window.open(item.link, '_blank')}
            className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer"
          >
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <span className="text-neutral-400 font-mono">{item.date}</span>
              <span className="px-4 py-1 bg-neutral-100 rounded-full text-xs font-bold uppercase tracking-wider">{item.category}</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500">
              <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                {item.title}
              </a>
            </h3>
            <div className="hidden md:flex w-12 h-12 rounded-full border border-neutral-200 items-center justify-center group-hover:bg-[#0f251a] group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: 'KOR' | 'ENG' | 'IDN' }) => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
      <div className="bg-[#f0f4ef] rounded-[4rem] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            {lang === 'KOR' ? <>Let's Grow <br />Together</> : lang === 'ENG' ? <>Let's Grow <br />Together</> : <>Mari Tumbuh <br />Bersama</>}
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-md">
            {lang === 'KOR'
              ? "Agrow와 함께 농업의 미래를 설계할 파트너를 찾습니다. 솔루션 도입 문의 및 협업 제안을 기다립니다."
              : lang === 'ENG'
              ? "Looking for partners to design the future of agriculture with Agrow. We look forward to solution inquiries and collaboration proposals."
              : "Mencari mitra untuk merancang masa depan pertanian bersama Agrow. Kami menantikan pertanyaan solusi dan proposal kolaborasi."}
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">ceo@a-grow.kr</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">+82-33-910-0038</p>
            </div>
          </div>
        </div>

          <form 
          action="https://formspree.io/f/mzdkanyp" 
          method="POST"
          className="space-y-6 bg-white p-10 rounded-[3rem] shadow-xl border border-neutral-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                {lang === 'KOR' ? 'Name' : lang === 'ENG' ? 'Name' : 'Nama'}
              </label>
              <input 
                type="text" 
                name="name" 
                placeholder={lang === 'KOR' ? "이름" : lang === 'ENG' ? "Your Name" : "Nama Anda"} 
                className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0f251a] transition-all" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder={lang === 'KOR' ? "이메일" : lang === 'ENG' ? "Your Email" : "Email Anda"} 
                className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0f251a] transition-all" 
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              {lang === 'KOR' ? 'Message' : lang === 'ENG' ? 'Message' : 'Pesan'}
            </label>
            <textarea 
              rows={4} 
              name="message" 
              placeholder={lang === 'KOR' ? "문의 내용을 입력해주세요" : lang === 'ENG' ? "How can we help?" : "Bagaimana kami bisa membantu?"} 
              className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border-none focus:ring-2 focus:ring-[#0f251a] transition-all resize-none"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-5 bg-[#0f251a] text-white rounded-2xl font-bold text-lg hover:bg-[#1a3a2f] transition-all"
          >
            {lang === 'KOR' ? '메시지 보내기' : lang === 'ENG' ? 'Send Message' : 'Kirim Pesan'}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: 'KOR' | 'ENG' | 'IDN' }) => {
  return (
    <footer className="mt-24 p-4 md:p-6 lg:p-8 pb-0">
      <div className="relative rounded-t-[3rem] overflow-hidden bg-[#0f251a] pt-24 pb-12 px-6 md:px-12">
        <div className="relative z-10 max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div>
              <div className="flex items-center gap-2 text-white mb-8">
                <img src="https://raw.githubusercontent.com/KNJ86/agrow/refs/heads/img/Agrow_BI.png" alt="Agrow Logo" className="h-10 object-contain brightness-0 invert" referrerPolicy="no-referrer" />
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
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="text-white font-bold">{lang === 'KOR' ? '주식회사 에이그로우' : lang === 'ENG' ? 'Agrow Inc.' : 'Agrow Inc.'}</p>
              <p className="text-white/50 text-sm">
                {lang === 'KOR' 
                  ? '사업자 등록번호 : 292-86-03541 | 대표 : 박영민' 
                  : lang === 'ENG'
                  ? 'Business Registration: 292-86-03541 | CEO: Youngmin Park'
                  : 'Registrasi Bisnis: 292-86-03541 | CEO: Youngmin Park'}
              </p>
              <p className="text-white/50 text-sm">
                {lang === 'KOR'
                  ? '강원특별자치도 춘천시 퇴계농공로 96, 비동'
                  : lang === 'ENG'
                  ? 'B-dong, 96, Toegyegong-ro, Chuncheon-si, Gangwon-do, Korea'
                  : 'B-dong, 96, Toegyegong-ro, Chuncheon-si, Gangwon-do, Korea'}
              </p>
              <p className="text-white/30 text-xs pt-4">© 2025 Agrow Inc. All Rights Reserved.</p>
            </div>
            <div className="flex gap-8 text-white/30 text-sm">
              <a href="#" className="hover:text-white transition-colors">{lang === 'KOR' ? 'Privacy Policy' : lang === 'ENG' ? 'Privacy Policy' : 'Kebijakan Privasi'}</a>
              <a href="#" className="hover:text-white transition-colors">{lang === 'KOR' ? 'Terms of Service' : lang === 'ENG' ? 'Terms of Service' : 'Syarat Layanan'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'KOR' | 'ENG' | 'IDN'>('KOR');

  return (
    <div className="font-sans antialiased text-[#0f251a] bg-[#e6ebe5] selection:bg-[#0f251a] selection:text-white break-keep scroll-smooth">
      <Hero lang={lang} setLang={setLang} />
      <About lang={lang} />
      <Service lang={lang} />
      <Global lang={lang} />
      <News lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
