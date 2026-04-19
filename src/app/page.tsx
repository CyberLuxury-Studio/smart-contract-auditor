import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0e15] text-[#eeedf7] font-['Space_Grotesk'] selection:bg-[#9cff93] selection:text-black">
      {/* Top Nav */}
      <nav className="fixed w-full z-50 bg-[#0d0e15]/80 backdrop-blur-xl border-b border-[#474750]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#9cff93]">NEON_SENTINEL</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#abaab4]">
            <a href="#features" className="hover:text-[#9cff93] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#9cff93] transition-colors">Pricing</a>
            <a href="#demo" className="hover:text-[#9cff93] transition-colors">Live Scan</a>
          </div>
          <button className="px-6 py-2 border border-[#9cff93]/30 text-[#9cff93] text-sm uppercase tracking-widest hover:bg-[#9cff93]/10 transition-all">
            Connect
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,14,21,1)_0%,rgba(13,14,21,0)_50%,rgba(13,14,21,1)_100%),linear-gradient(90deg,rgba(71,71,80,0.1)_1px,transparent_1px),linear-gradient(rgba(71,71,80,0.1)_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-[#181922] border border-[#ff7073]/30 text-[#ff7073] text-xs uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(255,112,115,0.2)]">
            SYSTEM ALERT: VULNERABILITIES DETECTED
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            AUDIT BEFORE <br/><span className="text-[#ff7073]">EXPLOIT.</span>
          </h1>
          <p className="text-xl text-[#abaab4] mb-12 max-w-2xl mx-auto">
            AI-driven forensic analysis for smart contracts. Detect logic flaws, reentrancy attacks, and gas inefficiencies before deployment.
          </p>
          <button className="px-12 py-5 bg-[#9cff93] text-[#00440a] font-bold uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(156,255,147,0.4)] transition-all">
            INITIATE SCAN
          </button>
        </div>
      </section>

      {/* Live Terminal Demo */}
      <section id="demo" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-[#000000] border border-[#474750]/50 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden relative">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none"></div>
           
           {/* Code View */}
           <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-[#474750]/50 relative z-10">
             <div className="text-xs text-[#abaab4] uppercase tracking-widest mb-6 flex justify-between border-b border-[#474750]/30 pb-2">
               <span>/contracts/StakingPool.sol</span>
               <span className="text-[#ff7073] animate-pulse">ANALYZING...</span>
             </div>
             <pre className="text-sm font-mono leading-relaxed">
               <code className="text-[#abaab4]">
                 <span className="block">42 | function withdraw(uint256 amount) public {</span>
                 <span className="block">43 |   require(balances[msg.sender] >= amount);</span>
                 <span className="block bg-[#ff7073]/10 text-[#ff7073] border-l-2 border-[#ff7073] pl-2 shadow-[0_0_10px_rgba(255,112,115,0.1)]">44 |   (bool success, ) = msg.sender.call{'{value: amount}'}("");</span>
                 <span className="block">45 |   balances[msg.sender] -= amount;</span>
                 <span className="block">46 | }</span>
               </code>
             </pre>
           </div>
           
           {/* Diagnostics */}
           <div className="w-full md:w-80 bg-[#12131b] p-8 relative z-10">
             <h3 className="text-sm text-[#00eefc] uppercase tracking-widest mb-8 border-b border-[#00eefc]/30 pb-2">Diagnostics</h3>
             <div className="flex flex-col items-center justify-center mb-8">
               <div className="text-6xl font-bold text-[#ff7073] drop-shadow-[0_0_15px_rgba(255,112,115,0.4)]">34</div>
               <div className="text-xs text-[#abaab4] uppercase tracking-widest mt-2">Security Score</div>
             </div>
             <ul className="space-y-4 text-xs uppercase tracking-widest">
               <li className="flex justify-between border-b border-[#474750]/30 pb-2"><span className="text-[#ff7073]">Reentrancy</span> <span>CRITICAL</span></li>
               <li className="flex justify-between border-b border-[#474750]/30 pb-2"><span className="text-[#9cff93]">Access Control</span> <span>SECURE</span></li>
               <li className="flex justify-between border-b border-[#474750]/30 pb-2"><span className="text-[#00eefc]">Gas Limit</span> <span>WARNING</span></li>
             </ul>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-16 text-[#eeedf7]">Defense Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {title: "Formal Verification", color: "#9cff93"},
            {title: "Gas Optimization", color: "#00eefc"},
            {title: "Logic Flaw Detection", color: "#ff7073"},
            {title: "Instant Remediation", color: "#9cff93"}
          ].map((f, i) => (
            <div key={i} className="bg-[#181922] border border-[#474750]/30 p-8 hover:bg-[#1e1f28] hover:border-[#474750] transition-colors">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4" style={{color: f.color}}>{f.title}</h3>
              <p className="text-[#abaab4]">Advanced algorithmic scanning utilizing neural networks trained on historical exploit vectors across all major EVM chains.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-16">Deployment Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="bg-[#12131b] border border-[#474750]/50 p-8">
              <h3 className="text-xl uppercase tracking-widest text-[#abaab4] mb-4">Base</h3>
              <div className="text-4xl font-bold text-[#eeedf7] mb-8">Free</div>
              <ul className="space-y-4 text-sm text-[#abaab4] mb-8">
                <li>10 Scans / Month</li>
                <li>Basic Vulnerability Output</li>
                <li>Community Support</li>
              </ul>
              <button className="w-full py-3 border border-[#abaab4] hover:bg-[#abaab4] hover:text-black uppercase tracking-widest text-sm transition-colors">Select</button>
            </div>
            
            <div className="bg-[#1e1f28] border-2 border-[#9cff93] p-10 shadow-[0_0_30px_rgba(156,255,147,0.1)] relative">
              <div className="absolute top-0 right-0 bg-[#9cff93] text-[#00440a] text-xs font-bold px-3 py-1 uppercase tracking-widest">Active</div>
              <h3 className="text-xl uppercase tracking-widest text-[#9cff93] mb-4">Pro</h3>
              <div className="text-4xl font-bold text-[#eeedf7] mb-8">99<span className="text-lg text-[#abaab4]">/mo</span></div>
              <ul className="space-y-4 text-sm text-[#eeedf7] mb-8">
                <li>Unlimited Scans</li>
                <li className="text-[#9cff93]">Automated Remediation Code</li>
                <li>Private Slack Channel</li>
              </ul>
              <button className="w-full py-4 bg-[#9cff93] text-[#00440a] font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(156,255,147,0.4)] transition-all">Select Pro</button>
            </div>

            <div className="bg-[#12131b] border border-[#474750]/50 p-8">
              <h3 className="text-xl uppercase tracking-widest text-[#abaab4] mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-[#eeedf7] mb-8">Custom</div>
              <ul className="space-y-4 text-sm text-[#abaab4] mb-8">
                <li>Dedicated Neural Instance</li>
                <li>Custom Rule Sets</li>
                <li>24/7 Phone Support</li>
              </ul>
              <button className="w-full py-3 border border-[#abaab4] hover:bg-[#abaab4] hover:text-black uppercase tracking-widest text-sm transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#474750]/30 text-center bg-[#0d0e15]">
         <p className="text-[#abaab4] text-xs uppercase tracking-widest">© 2024 NEON_SENTINEL | SYSTEM_STATUS: <span className="text-[#9cff93]">NOMINAL</span></p>
      </footer>
    </main>
  );
}
