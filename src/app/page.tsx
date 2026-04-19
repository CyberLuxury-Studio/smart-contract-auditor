import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] flex flex-col font-mono">
      <nav className="border-b border-[#3b4b37]/30 p-4 bg-[#0e0e0e] flex justify-between">
        <div className="text-[#00FF41] font-bold text-xl tracking-tighter">AI_AUDITOR_CLI</div>
        <div className="text-[#84967e] text-xs">STATUS: <span className="text-[#00FF41]">ONLINE</span></div>
      </nav>
      
      <div className="flex-1 flex">
        {/* Code View */}
        <section className="flex-1 border-r border-[#3b4b37]/30 p-6 overflow-y-auto">
          <div className="flex justify-between mb-4 border-b border-[#3b4b37]/30 pb-2">
            <span className="text-[#84967e]">target: ERC20_Staking.sol</span>
            <span className="text-[#FF003C] animate-pulse">2 Critical Vulnerabilities Found</span>
          </div>
          
          <pre className="bg-[#131313] p-4 text-sm leading-relaxed border border-[#3b4b37]/30 shadow-[0_0_15px_rgba(255,0,60,0.1)]">
            <code className="text-[#84967e]">
              <span className="block">12 | function withdraw(uint256 amount) public {</span>
              <span className="block">13 |   require(balances[msg.sender] >= amount, "Insufficient funds");</span>
              <span className="block bg-[#FF003C]/20 text-[#FF003C] border-l-2 border-[#FF003C] pl-2 -ml-[2px] shadow-[0_0_10px_rgba(255,0,60,0.3)]">14 |   msg.sender.call{value: amount}(""); // REENTRANCY RISK DETECTED</span>
              <span className="block">15 |   balances[msg.sender] -= amount;</span>
              <span className="block">16 | }</span>
            </code>
          </pre>
        </section>

        {/* Sidebar */}
        <aside className="w-96 bg-[#0e0e0e] p-6 flex flex-col gap-8">
          <div className="border border-[#FF003C]/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF003C] blur-[50px] opacity-20"></div>
            <h3 className="text-[#FF003C] text-sm uppercase mb-4 tracking-widest border-b border-[#FF003C]/30 pb-2">Audit Score</h3>
            <div className="text-6xl font-bold text-[#FF003C] drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">42<span className="text-xl text-[#84967e]">/100</span></div>
            <p className="text-xs text-[#84967e] mt-2 mt-4">Security threshold not met. Do not deploy.</p>
          </div>
          
          <div>
            <h3 className="text-[#e5e2e1] text-sm uppercase mb-4 tracking-widest border-b border-[#3b4b37]/30 pb-2">Issues Log</h3>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-2 items-start"><span className="text-[#FF003C] mt-0.5">■</span> <span>Reentrancy vulnerability in withdraw function (Line 14).</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#FF003C] mt-0.5">■</span> <span>Unchecked return value of low-level call.</span></li>
              <li className="flex gap-2 items-start"><span className="text-[#e5e2e1] mt-0.5 opacity-50">■</span> <span className="opacity-50">Pragma version not locked.</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
