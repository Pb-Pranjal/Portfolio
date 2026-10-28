import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Code, 
  Sparkles,
  Server,
  Monitor
} from 'lucide-react';

interface SystemNode {
  id: string;
  label: string;
  sub: string;
  protocol: string;
  payload: string;
  description: string;
  icon: 'client' | 'api' | 'ai' | 'db';
}

export const InteractiveArchitecture: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<'maya' | 'rag' | 'attendance'>('maya');
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(2);

  const systemsData: Record<'maya' | 'rag' | 'attendance', {
    title: string;
    subtitle: string;
    nodes: SystemNode[];
  }> = {
    maya: {
      title: "Maya — Full-Duplex Voice Live Bridge",
      subtitle: "Streaming browser audio to Azure Voice Live with deterministic Python tool calling for orders & refunds.",
      nodes: [
        {
          id: "m-1",
          label: "Browser Client",
          sub: "Web Audio Worklet",
          protocol: "PCM 24kHz / AudioWorklet",
          payload: "Binary PCM chunks (16-bit mono @ 24,000 Hz, 40ms frame buffer)",
          description: "Captures microphone input without UI freezing using an AudioWorkletProcessor. Buffers raw audio frames and pushes them over client WebSocket.",
          icon: "client"
        },
        {
          id: "m-2",
          label: "FastAPI Gateway",
          sub: "WebSocket Proxy & Router",
          protocol: "WSS /ws/voice",
          payload: "{ event: 'audio_chunk', size: 1920, session_id: 'sess_99a' }",
          description: "Receives raw binary frames, verifies connection health, isolates Azure credentials from client, and proxies frames to Azure Voice Live over internal WebSocket.",
          icon: "api"
        },
        {
          id: "m-3",
          label: "Azure Voice Live",
          sub: "Real-time Voice Orchestrator",
          protocol: "Azure WebSocket API",
          payload: "{ type: 'response.function_call_arguments.done', name: 'lookup_order', call_id: 'call_1', arguments: '{\"order_id\":\"A1001\"}' }",
          description: "Transcribes audio on the fly, evaluates intent, and emits deterministic tool call requests back to FastAPI instead of making up ungrounded order data.",
          icon: "ai"
        },
        {
          id: "m-4",
          label: "Order & Refund Tools",
          sub: "Python Business Engine",
          protocol: "Internal Python Function",
          payload: "{ status: 'DELIVERED', days_since: 3, refund_eligible: true, max_window_days: 7 }",
          description: "Executes `order_store.lookup_order` or `request_refund`. Validates duplicate requests, calculates working-day refund timelines, and returns structured data.",
          icon: "db"
        },
        {
          id: "m-5",
          label: "Audio Synthesis Out",
          sub: "Client Speaker Playback",
          protocol: "WSS Audio Stream -> Speakers",
          payload: "Synthesized audio chunks played via Web Audio context buffer queue.",
          description: "FastAPI forwards synthesized speech stream from Azure Voice Live back to browser, providing an uninterrupted sub-second conversational loop.",
          icon: "client"
        }
      ]
    },
    rag: {
      title: "Health Insurance Grounded RAG Pipeline",
      subtitle: "Strict document-grounded question answering with Azure AI Search and ephemeral speech credentials.",
      nodes: [
        {
          id: "r-1",
          label: "User Question",
          sub: "Text or Voice Input",
          protocol: "REST POST /api/ask",
          payload: "{ question: 'Is day-care cataract surgery covered?', session_id: 's_42' }",
          description: "User submits policy questions via browser interface or voice microphone (powered by short-lived speech tokens issued by `/api/speech-token`).",
          icon: "client"
        },
        {
          id: "r-2",
          label: "FastAPI Agent Broker",
          sub: "Session Orchestrator",
          protocol: "HTTP/2 to Azure AI Foundry",
          payload: "Headers: DefaultAzureCredential token | Body: thread context",
          description: "Maintains active conversational context threads and passes question to Azure AI Foundry Agent without exposing root secrets to client.",
          icon: "api"
        },
        {
          id: "r-3",
          label: "Azure AI Search",
          sub: "Hybrid Vector + Semantic Index",
          protocol: "Vector Search API (Top-K=3)",
          payload: "Top chunk: [Policy Section 8.4: Daycare Procedures - Cataract covered up to $30,000 sublimit]",
          description: "Performs dense vector similarity matching and BM25 sparse keyword search against policy documents to retrieve verbatim clauses.",
          icon: "db"
        },
        {
          id: "r-4",
          label: "Foundry Agent Model",
          sub: "Grounded Synthesis",
          protocol: "LLM Reasoning with Grounding",
          payload: "Answer: 'Yes, covered under Daycare Section 8.4' + Citation [Doc: GoldPolicy.pdf, p. 12]",
          description: "Instructed strictly to answer using retrieved policy chunks only. Formats output with verifiable source citations and standard disclaimer.",
          icon: "ai"
        },
        {
          id: "r-5",
          label: "Client Response Card",
          sub: "Auditable Answer & TTS",
          protocol: "React UI + Speech Synthesis",
          payload: "Rendered answer + expandable policy citation pills + Azure TTS playback.",
          description: "Displays answers with interactive reference pills that cite the document section, empowering policyholders to verify the terms directly.",
          icon: "client"
        }
      ]
    },
    attendance: {
      title: "AI Smart Attendance Verification Pipeline",
      subtitle: "Dynamic anti-proxy QR codes combined with OpenCV biometric blink and head motion liveness checks.",
      nodes: [
        {
          id: "a-1",
          label: "Faculty Class Portal",
          sub: "Session Initialization",
          protocol: "Django Template / QR Service",
          payload: "{ teacher_id: 104, subject: 'CSE302', timestamp: 17298240, signature: '9f81a...' }",
          description: "Teacher generates rotating QR code in lecture hall. QR payload is cryptographically signed and expires within 15 seconds to prevent sharing.",
          icon: "api"
        },
        {
          id: "a-2",
          label: "Student Scan",
          sub: "JWT Session Auth",
          protocol: "Mobile Camera Scan",
          payload: "JWT Cookie: Bearer token (Student Roll: 241099xxxx) + Scanned QR payload",
          description: "Student scans dynamic QR from mobile. System validates physical presence in hall and checks teacher session window.",
          icon: "client"
        },
        {
          id: "a-3",
          label: "OpenCV Liveness Check",
          sub: "Anti-Spoofing Computer Vision",
          protocol: "Local Camera Stream Analysis",
          payload: "EAR (Eye Aspect Ratio): 0.18 -> Blink registered; Head pose yaw: +12 deg",
          description: "Analyzes video frame sequence for involuntary eye blinks and random head movements to defeat printed photo or screen playback spoofing.",
          icon: "ai"
        },
        {
          id: "a-4",
          label: "Face Recognition",
          sub: "Biometric Matching",
          protocol: "Feature Vector Cosine Match",
          payload: "Distance metric: 0.38 (< 0.50 match threshold against registered face embedding)",
          description: "Extracts facial landmark features and compares against the student's stored registration profile to confirm identity.",
          icon: "ai"
        },
        {
          id: "a-5",
          label: "WAL DB Commit",
          sub: "Bidirectional Analytics",
          protocol: "SQLite (Write-Ahead Logging)",
          payload: "INSERT INTO attendance_record (student_id, session_id, timestamp, verified=1)",
          description: "Atomic commit in SQLite WAL mode. Updates student attendance history and immediately reflects on the faculty live dashboard.",
          icon: "db"
        }
      ]
    }
  };

  const currentSystem = systemsData[selectedSystem];
  const currentNode = currentSystem.nodes[activeNodeIndex];

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client': return <Monitor className="w-4 h-4 text-sky-400" />;
      case 'api': return <Server className="w-4 h-4 text-cyan-400" />;
      case 'ai': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'db': return <Database className="w-4 h-4 text-emerald-400" />;
      default: return <Code className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 bg-[#070B12] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive System Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Connect AI Models, APIs & Backends
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            AI applications require thoughtful pipeline design. Click through the steps below to inspect exact protocols, payload structures, and architectural decisions.
          </p>

          {/* System Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => { setSelectedSystem('maya'); setActiveNodeIndex(2); }}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedSystem === 'maya'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Maya Voice Live (Full-Duplex)
            </button>
            <button
              onClick={() => { setSelectedSystem('rag'); setActiveNodeIndex(2); }}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedSystem === 'rag'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Health Insurance RAG
            </button>
            <button
              onClick={() => { setSelectedSystem('attendance'); setActiveNodeIndex(2); }}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedSystem === 'attendance'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Smart Attendance & Liveness
            </button>
          </div>
        </div>

        {/* System Diagram & Interactive Nodes Container */}
        <div className="rounded-2xl bg-[#0A101E] border border-slate-800 p-6 md:p-8 shadow-xl space-y-8">
          
          {/* Top description */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{currentSystem.title}</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {currentSystem.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 self-start sm:self-auto">
              Click any node to inspect payload
            </span>
          </div>

          {/* Linear Pipeline Nodes View */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {currentSystem.nodes.map((node, idx) => {
              const isSelected = idx === activeNodeIndex;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 relative flex flex-col justify-between min-h-[140px] ${
                    isSelected
                      ? 'bg-slate-900/90 border-sky-400 shadow-lg shadow-sky-500/20 ring-1 ring-sky-400'
                      : 'bg-[#0D1526]/80 border-slate-800 hover:border-slate-700 hover:bg-[#111A30]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-slate-400 font-bold">
                      0{idx + 1}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                      {getNodeIcon(node.icon)}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-xs font-bold text-white block font-mono">
                      {node.label}
                    </span>
                    <span className="text-[11px] text-slate-400 block line-clamp-1 mt-0.5">
                      {node.sub}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-2 text-[10px] font-mono text-sky-400 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                      Inspecting
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Node Inspector Card */}
          {currentNode && (
            <div className="bg-[#070B14] rounded-xl border border-slate-800 p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-fadeIn">
              
              {/* Left: Metadata & Protocol */}
              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                    Step 0{activeNodeIndex + 1} Analysis
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Protocol: {currentNode.protocol}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white">
                  {currentNode.label} — {currentNode.sub}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentNode.description}
                </p>
              </div>

              {/* Right: Data / Payload Inspector */}
              <div className="md:col-span-7 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <Code className="w-3.5 h-3.5" /> Payload / Telemetry Stream
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Verified in repo code</span>
                </div>

                <div className="bg-[#05080E] p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-sky-200 overflow-x-auto leading-relaxed">
                  <code>{currentNode.payload}</code>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
