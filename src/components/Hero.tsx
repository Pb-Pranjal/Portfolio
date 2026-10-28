import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Check, 
  Copy, 
  Terminal, 
  Play, 
  Radio, 
  Cpu, 
  Database
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'voice' | 'rag' | 'vision'>('voice');
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simStep, setSimStep] = useState(3);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const runSimulation = () => {
    setIsRunningSim(true);
    setSimStep(1);
    const t1 = setTimeout(() => setSimStep(2), 600);
    const t2 = setTimeout(() => setSimStep(3), 1300);
    const t3 = setTimeout(() => {
      setSimStep(3);
      setIsRunningSim(false);
    }, 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-tech-grid">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="font-mono text-sky-300 font-semibold">{personalInfo.positioning}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">AI Models</span>, Tool Calling, and Production Backends.
            </h1>

            {/* Concise Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong> — Computer Science & AI undergraduate at{' '}
              <span className="text-sky-300 font-medium">{personalInfo.university}</span> (CGPA {personalInfo.cgpa}). I build practical intelligent systems: from full-duplex voice customer support agents to document-grounded RAG assistants and anti-spoofing biometric pipelines.
            </p>

            {/* Academic & Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
                🎓 Chitkara University (2024–2028)
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
                ⚡ CGPA: 9.66 / 10.00
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950/60 border border-sky-800/60 text-sky-300">
                ☁️ 3x Microsoft Azure Certified
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium text-sm transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Resume Dossier</span>
              </button>
            </div>

            {/* Quick Links & Email Copy */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-amber-400 transition-colors"
              >
                <span className="font-bold text-amber-500 text-xs">LC</span>
                <span>LeetCode</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-sky-300 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive AI Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-800 bg-[#0A101D] shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D1527] border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>system-telemetry.py</span>
                  </span>
                </div>
                
                <button
                  onClick={runSimulation}
                  disabled={isRunningSim}
                  className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 border border-sky-800/80 text-sky-300 hover:bg-sky-900 disabled:opacity-50 transition-colors"
                >
                  <Play className={`w-3 h-3 ${isRunningSim ? 'animate-spin' : ''}`} />
                  <span>{isRunningSim ? 'Streaming...' : 'Run Trace'}</span>
                </button>
              </div>

              {/* Pipeline Selection Tabs */}
              <div className="grid grid-cols-3 border-b border-slate-800/80 bg-[#070B14] text-xs font-mono">
                <button
                  onClick={() => setActiveTab('voice')}
                  className={`py-2 px-2 text-center border-r border-slate-800 transition-colors ${
                    activeTab === 'voice'
                      ? 'text-sky-300 bg-[#0E172A] border-b-2 border-b-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Maya Voice Live
                </button>
                <button
                  onClick={() => setActiveTab('rag')}
                  className={`py-2 px-2 text-center border-r border-slate-800 transition-colors ${
                    activeTab === 'rag'
                      ? 'text-sky-300 bg-[#0E172A] border-b-2 border-b-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Policy RAG Q&A
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`py-2 px-2 text-center transition-colors ${
                    activeTab === 'vision'
                      ? 'text-sky-300 bg-[#0E172A] border-b-2 border-b-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  CV Liveness + QR
                </button>
              </div>

              {/* Console Body */}
              <div className="p-4 font-mono text-xs space-y-3 min-h-[310px] bg-[#080D18]">
                {activeTab === 'voice' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-800/60">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Radio className="w-3 h-3 animate-pulse" /> WSS: /ws/voice (24kHz PCM)
                      </span>
                      <span>Latency: 480ms</span>
                    </div>

                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300 space-y-1">
                      <span className="text-slate-500 text-[10px] block">CLIENT INCOMING AUDIO:</span>
                      <p className="text-slate-200 italic">"Can you check if my order A1001 is eligible for a refund?"</p>
                    </div>

                    {simStep >= 2 && (
                      <div className="p-2 rounded bg-sky-950/40 border border-sky-800/60 text-sky-200 space-y-1 animate-fadeIn">
                        <span className="text-sky-400 text-[10px] block font-semibold">AZURE VOICE LIVE TOOL CALL:</span>
                        <div className="text-[11px] bg-slate-950/80 p-1.5 rounded text-amber-300">
                          <code>fn: lookup_order(order_id="A1001")</code>
                        </div>
                        <span className="text-slate-400 text-[10px] block">
                          Response: Status: Delivered (3d ago) · Eligible: True
                        </span>
                      </div>
                    )}

                    {simStep >= 3 && (
                      <div className="p-2 rounded bg-emerald-950/30 border border-emerald-800/50 text-emerald-200 space-y-1 animate-fadeIn">
                        <span className="text-emerald-400 text-[10px] block font-semibold">SYNTHESIZED VOICE OUT:</span>
                        <p className="text-slate-100 text-[11px]">
                          "Order A1001 was delivered 3 days ago and is within the 7-day refund window. Would you like me to initiate the request?"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'rag' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-800/60">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Database className="w-3 h-3" /> Azure AI Search (Vector + Hybrid)
                      </span>
                      <span>Index: health_policy_docs</span>
                    </div>

                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300 space-y-1">
                      <span className="text-slate-500 text-[10px] block">USER INQUIRY:</span>
                      <p className="text-slate-200 italic">"Does policy Gold-Shield cover pre-existing hypertension after 2 years?"</p>
                    </div>

                    {simStep >= 2 && (
                      <div className="p-2 rounded bg-cyan-950/40 border border-cyan-800/60 text-cyan-200 space-y-1 animate-fadeIn">
                        <span className="text-cyan-400 text-[10px] block font-semibold">RETRIEVED CHUNKS (Top-K=2):</span>
                        <div className="text-[10px] bg-slate-950/80 p-1.5 rounded space-y-1">
                          <p className="text-slate-300">📄 Section 4.2.1 [p. 18] - Waiting Period: 24 months for specified PED.</p>
                          <p className="text-sky-300">Similarity Score: 0.892 (Hybrid dense/sparse)</p>
                        </div>
                      </div>
                    )}

                    {simStep >= 3 && (
                      <div className="p-2 rounded bg-emerald-950/30 border border-emerald-800/50 text-emerald-200 space-y-1 animate-fadeIn">
                        <span className="text-emerald-400 text-[10px] block font-semibold">GROUNDED ANSWER + CITATION:</span>
                        <p className="text-slate-100 text-[11px]">
                          "Yes. Under Section 4.2.1 of the Gold-Shield policy, hypertension is covered after a 24-month waiting period from inception."
                        </p>
                        <span className="inline-block text-[10px] px-1.5 py-0.5 rounded bg-sky-900/80 text-sky-200 border border-sky-700">
                          Source: PolicyDoc_v2.pdf #Section-4.2
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-800/60">
                      <span className="flex items-center gap-1.5 text-purple-400">
                        <Cpu className="w-3 h-3" /> OpenCV + Dynamic QR Pipeline
                      </span>
                      <span>Auth: Signed JWT Session</span>
                    </div>

                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300 space-y-1">
                      <span className="text-slate-500 text-[10px] block">STAGE 1: DYNAMIC QR VERIFICATION</span>
                      <p className="text-slate-300">Payload: <code className="text-amber-300">{"{teacher: 'Dr. Rao', exp: 17298240, sig: 0x9f}"}</code></p>
                      <span className="text-emerald-400 text-[10px]">✓ QR Token Valid (Scanned within 15s window)</span>
                    </div>

                    {simStep >= 2 && (
                      <div className="p-2 rounded bg-purple-950/40 border border-purple-800/60 text-purple-200 space-y-1 animate-fadeIn">
                        <span className="text-purple-400 text-[10px] block font-semibold">STAGE 2: BIOMETRIC LIVENESS (OpenCV):</span>
                        <div className="text-[10px] bg-slate-950/80 p-1.5 rounded space-y-0.5">
                          <p className="text-slate-300">EAR (Eye Aspect Ratio): <span className="text-sky-300">0.19</span> (&lt; 0.22 threshold)</p>
                          <p className="text-slate-300">Blink Detected: <span className="text-emerald-400">Yes (2 verified blinks)</span></p>
                          <p className="text-slate-300">Head Yaw: <span className="text-sky-300">+14° (Natural micro-movement)</span></p>
                        </div>
                      </div>
                    )}

                    {simStep >= 3 && (
                      <div className="p-2 rounded bg-emerald-950/30 border border-emerald-800/50 text-emerald-200 space-y-1 animate-fadeIn">
                        <span className="text-emerald-400 text-[10px] block font-semibold">STATUS: ATTENDANCE COMMITTED</span>
                        <p className="text-slate-100 text-[11px]">
                          Student: Pranjal (ID: 241099xxxx) · Mode: Face + Dynamic QR · WAL commit: SUCCESS
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Console Footer */}
              <div className="px-4 py-2 bg-[#090F1C] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Engine: Python 3.11 · FastAPI · OpenCV
                </span>
                <span className="text-slate-500">Pranjal Engineering Portfolio</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
