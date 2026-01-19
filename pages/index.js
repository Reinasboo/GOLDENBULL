import React, { useState, useEffect } from 'react';
import { Copy, ExternalLink, Twitter, Users, TrendingUp, Rocket, Target, Globe, ChevronDown } from 'lucide-react';

const GoldenbullWebsite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copiedCA, setCopiedCA] = useState(false);
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const CA = '9ca2Ro9wu2nJt7kwu6RbgaZHLutyjtq1U2bK1hkxpump';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'tokenomics', 'roadmap', 'community'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (email) {
      alert('Newsletter signup coming soon!');
      setEmail('');
    }
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">$GB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">$Goldenbull</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'tokenomics', 'roadmap', 'community'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-yellow-400 transition-colors ${activeSection === item ? 'text-yellow-400' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <a
              href="https://t.co/3KZ722021z"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Buy Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-black"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400/10"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            ></div>
          ))}
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            GOLDENBULL
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The Next Generation of DeFi Trading Power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={copyCA}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <Copy size={20} />
              <span>{copiedCA ? 'Copied!' : 'Copy CA'}</span>
            </button>
            <a
              href="https://t.co/3KZ722021z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <ExternalLink size={20} />
              <span>Buy on DEX</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">About $GOLDENBULL</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                $GOLDENBULL is a revolutionary DeFi token designed to empower traders with cutting-edge tools and community-driven innovation. Built on Solana's lightning-fast blockchain, we combine security, speed, and sustainability.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our mission is to democratize access to advanced trading strategies and make DeFi accessible to everyone, regardless of their technical expertise.
              </p>
              <ul className="space-y-4">
                {[
                  '⚡ Lightning-fast transactions',
                  '🔒 Military-grade security',
                  '💎 Community-first governance',
                  '🚀 Continuous innovation'
                ].map((item, idx) => (
                  <li key={idx} className="text-yellow-400 text-lg">{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-yellow-900/30 to-yellow-600/10 rounded-2xl flex items-center justify-center">
              <Rocket size={200} className="text-yellow-500/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 bg-yellow-900/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Tokenomics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Total Supply', value: '1B', icon: '📊' },
              { label: 'Burn Rate', value: '50%', icon: '🔥' },
              { label: 'LP Locked', value: '3 Years', icon: '🔐' },
              { label: 'Tax', value: '2%', icon: '💰' }
            ].map((item, idx) => (
              <div key={idx} className="bg-black border-2 border-yellow-400/30 rounded-xl p-6 text-center hover:border-yellow-400 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-gray-400 text-sm mb-2">{item.label}</div>
                <div className="text-3xl font-bold text-yellow-400">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Roadmap</h2>
          <div className="space-y-6">
            {[
              { phase: 'Phase 1', title: 'Launch & Community', items: ['Token Launch', 'Community Building', 'Initial DEX Listing'] },
              { phase: 'Phase 2', title: 'Expansion', items: ['CEX Listings', 'Mobile App', 'Advanced Trading Tools'] },
              { phase: 'Phase 3', title: 'Ecosystem', items: ['Staking Platform', 'Governance DAO', 'Cross-chain Bridge'] }
            ].map((phase, idx) => (
              <div key={idx} className="bg-black border-l-4 border-yellow-400 p-6 rounded-r-lg hover:bg-yellow-900/10 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <Target className="text-yellow-400" size={32} />
                  <div>
                    <div className="text-yellow-400 font-bold">{phase.phase}</div>
                    <div className="text-2xl font-bold text-white">{phase.title}</div>
                  </div>
                </div>
                <ul className="ml-12 space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-gray-400">✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-yellow-900/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Join Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Twitter size={48} className="text-yellow-400 mx-auto" />, label: 'Twitter', link: 'https://twitter.com' },
              { icon: <Users size={48} className="text-yellow-400 mx-auto" />, label: 'Discord', link: 'https://discord.com' },
              { icon: <Globe size={48} className="text-yellow-400 mx-auto" />, label: 'Website', link: 'https://goldenbull.io' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-2 border-yellow-400/30 rounded-xl p-8 text-center hover:border-yellow-400 hover:bg-yellow-900/10 transition-colors"
              >
                {social.icon}
                <div className="text-xl font-bold text-white mt-4">{social.label}</div>
              </a>
            ))}
          </div>
          <div className="bg-black border-2 border-yellow-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Subscribe to Newsletter</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-900 border border-yellow-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 $GOLDENBULL. All rights reserved.</p>
          <p className="text-sm mt-2">Built with passion for the community</p>
        </div>
      </footer>
    </div>
  );
};

export default GoldenbullWebsite;
