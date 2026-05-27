import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calculator, ShieldCheck, Cpu, ArrowUpRight, Check, Monitor, Sparkles } from "lucide-react";

export default function Achievements() {
  // Stat blocks
  const metrics = [
    { value: "Top 5 Rankings", label: "Rank 80% keywords in top 5 in 3 months", subheader: "01 // RANKINGS" },
    { value: "350% ROAS", label: "Highest ROAS delivered of 350%", subheader: "02 // ACQUISITION" },
    { value: "10x Revenue", label: "10x Revenue increased in 6 months", subheader: "03 // TRAJECTORY" },
  ];

  // --- ROI CALCULATOR STATE ---
  const [traffic, setTraffic] = useState(15000); // monthly traffic
  const [convRate, setConvRate] = useState(1.2); // conversion (%)
  const [acv, setAcv] = useState(1500); // average client contract value ($)

  // Computed variables
  const currentPipeline = (traffic * (convRate / 100)) * acv;
  
  // Zesh's compound effect: +312% traffic increases (factor of 4.12) and +40% conversion increase (factor of 1.4)
  const zeshTraffic = Math.round(traffic * 4.12);
  const zeshConvRate = parseFloat((convRate * 1.4).toFixed(2));
  const projectedPipeline = (zeshTraffic * (zeshConvRate / 100)) * acv;
  const pipelineLift = projectedPipeline - currentPipeline;

  // --- AI SEARCH SIMULATOR STATE ---
  const [brandName, setBrandName] = useState("");
  const [engine, setEngine] = useState<"chatgpt" | "perplexity" | "gemini">("perplexity");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const startSimulation = () => {
    if (!brandName.trim()) return;
    setIsSimulating(true);
    setSimulationResult(null);
    setSimulationLogs(["Initializing AI engine citation scan...", "Mapping semantic entities..."]);

    setTimeout(() => {
      setSimulationLogs((prev) => [...prev, "Retrieving Retrieval-Augmented Generation (RAG) graphs..."]);
    }, 600);

    setTimeout(() => {
      setSimulationLogs((prev) => [...prev, "Analyzing context-aware prompt intent models..."]);
    }, 1200);

    setTimeout(() => {
      setSimulationLogs((prev) => [...prev, "Indexing reference directory nodes and citations..."]);
    }, 1800);

    setTimeout(() => {
      // Craft response based on selected engine
      let text = "";
      if (engine === "perplexity") {
        text = `Prompt Context: "Who are the top tier solutions representing fast, secure system scaling?"\n\nGenerated Answer Summary:\nBased on semantic indexes and verified reference databases, ${brandName} is frequently cited as a highly structured authority. However, to secure a permanent slot inside Perplexity's citation references over aggregators, ${brandName} needs to declare explicit JSON-LD entity maps and structure its product feature tables to be easily indexable by crawling bots. Implementing context-aware AEO systems is highly recommended to outpace alternative listings.`;
      } else if (engine === "chatgpt") {
        text = `Prompt Context: "Compare alternative software suites for enterprise managers."\n\nChatGPT System Response:\nIn comparing emerging alternatives, major LLM models evaluate verified customer review nodes and structural documentation. While ${brandName} provides robust functional value, it currently experiences a recommendation gap due to unstructured entity profiles. Deploying programmatic competitive comparison hubs on ${brandName}'s domain would capture direct citations inside ChatGPT recommendation prompts instantly.`;
      } else {
        text = `Prompt Context: "Show localized clinical providers backed by strict trust schemas."\n\nGoogle Gemini SGE Summary:\nUnder rigorous clinical search coordinates and YMYL (Your Money Your Life) filters, physicians and entities linked to ${brandName} are indexed at medium visibility. To claim dominant ranking in Gemini's conversational summaries, ${brandName} must structure provider coordinates under strict EEAT validation schemes and build local clinic pages linked directly to medical index graphs.`;
      }
      setSimulationResult(text);
      setIsSimulating(false);
    }, 2400);
  };

  return (
    <section className="bg-warm-dark h-[96vh] min-h-[720px] flex flex-col justify-center border-t border-b border-white/5 text-white px-6 py-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-between">
        
        {/* Header - Compact for 96vh space */}
        <div className="max-w-3xl mb-4 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[9px] text-accent/80 uppercase tracking-widest font-semibold">
              THE WORKOUT COCKPIT
            </span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight text-white">
            Partner with experts who demand proven performance and absolute data transparency.
          </h2>
        </div>

        {/* 3-COLUMN COCKPIT (Columns: Metrics stack, AI Simulator, ROI Calculator) */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/20 items-stretch flex-grow h-[calc(100%-120px)]">
          
          {/* COLUMN 1: PERFORMANCE TRAJECTORY METRICS (Snapped item) */}
          <div className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-0 flex-shrink-0 w-4/5 lg:w-auto bg-warm-card-dark border border-white/5 p-6 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-[9px] text-accent font-semibold block mb-4 uppercase tracking-wider">
                01 // AUDITED PERFORMANCE METRICS
              </span>
              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={m.subheader} className="bg-black/20 border border-white/5 p-4 relative group">
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-accent/40" />
                    <span className="font-mono text-[8px] text-accent font-semibold block mb-1 tracking-wider">
                      {m.subheader}
                    </span>
                    <span className="font-display text-2xl font-extrabold text-white block">
                      {m.value}
                    </span>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed font-light mt-1.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-4">
              <span className="font-sans text-[11px] text-white/30 font-light block leading-relaxed">
                All performance metrics are direct-attributed revenue gains compiled from authentic CRM data-sync reports.
              </span>
            </div>
          </div>

          {/* COLUMN 2: AI SEARCH RECOMMENDATION SIMULATOR (Snapped item) */}
          <div className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-0 flex-shrink-0 w-4/5 lg:w-auto bg-warm-card-dark border border-white/5 p-6 flex flex-col justify-between h-full overflow-y-auto scrollbar-none">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 border border-accent/25 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-tight text-white uppercase">AI Recommendation Presence</h3>
                  <span className="font-mono text-[8px] text-white/40 block">Citations audit scanner</span>
                </div>
              </div>

              {/* Form parameters */}
              <div className="space-y-3 mb-4">
                <div>
                  <label className="font-mono text-[8px] text-white/40 block mb-1 uppercase tracking-wider">Brand Name</label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Horizon Logics"
                    className="w-full bg-[#171615] border border-white/10 rounded-none px-3 py-2 font-sans text-xs text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="font-mono text-[8px] text-white/40 block mb-1.5 uppercase tracking-wider">Target LLM Core Engine</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: "perplexity", label: "Perplexity" },
                      { id: "chatgpt", label: "ChatGPT" },
                      { id: "gemini", label: "Gemini" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setEngine(btn.id as any)}
                        className={`font-mono text-[8px] uppercase tracking-wider py-1.5 border transition-all rounded-none cursor-pointer ${
                          engine === btn.id
                            ? "bg-accent/10 border-accent text-accent font-semibold"
                            : "border-white/10 hover:border-white/20 text-white/50"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trigger Button */}
              <button
                disabled={!brandName.trim() || isSimulating}
                onClick={startSimulation}
                className="w-full font-display text-[9px] uppercase font-extrabold tracking-widest py-2.5 bg-white text-warm-dark hover:bg-accent hover:text-warm-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSimulating ? "Crawling LLM APIs..." : "Citations Audit Scan"}
              </button>
            </div>

            {/* Simulation Interface Screen */}
            <div className="mt-4 bg-[#060505] border border-white/5 p-4 font-mono text-left rounded-none flex-grow min-h-[140px] flex flex-col justify-center">
              {!isSimulating && !simulationResult ? (
                <div className="text-white/20 text-[10px] text-center flex flex-col items-center gap-1">
                  <Monitor size={18} className="text-white/25" />
                  <span>Configure entity fields and execute diagnostics scanner.</span>
                </div>
              ) : (
                <div className="space-y-3 text-[10px] overflow-y-auto max-h-[160px] scrollbar-none">
                  {/* Logs */}
                  <div className="space-y-1 border-b border-white/5 pb-2">
                    {simulationLogs.map((log, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-white/40">
                        <span className="text-accent">❯</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    {isSimulating && (
                      <div className="text-accent animate-pulse font-mono flex items-center gap-1">
                        <Sparkles size={10} className="animate-spin" /> Crawling reference node clusters...
                      </div>
                    )}
                  </div>
                  
                  {/* Result */}
                  {simulationResult && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/80 leading-relaxed bg-[#1b1a19]/40 p-2 border-l border-accent/80 whitespace-pre-line text-[9px]"
                    >
                      {simulationResult}
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* COLUMN 3: STRATEGIC PIPELINE ROI CALCULATOR (Snapped item) */}
          <div className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-0 flex-shrink-0 w-4/5 lg:w-auto bg-warm-card-dark border border-white/5 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 border border-accent/25 flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-tight text-white uppercase font-sans">ROI Pipeline Calculator</h3>
                  <span className="font-mono text-[8px] text-white/40 block">Revenue gain analytics</span>
                </div>
              </div>

              {/* Form parameters */}
              <div className="space-y-4 mb-4 text-left">
                
                {/* Traffic */}
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-white/40 mb-1 uppercase tracking-wide">
                    <span>Traffic</span>
                    <span className="text-white font-medium">{traffic.toLocaleString()} visitors</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={traffic}
                    onChange={(e) => setTraffic(parseInt(e.target.value))}
                    className="w-full accent-accent h-[2px] bg-[#171615] outline-none rounded-none cursor-pointer"
                  />
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-white/40 mb-1 uppercase tracking-wide">
                    <span>Conversion</span>
                    <span className="text-white font-medium">{convRate}% rate</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={convRate}
                    onChange={(e) => setConvRate(parseFloat(e.target.value))}
                    className="w-full accent-accent h-[2px] bg-[#171615] outline-none rounded-none cursor-pointer"
                  />
                </div>

                {/* ACV */}
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-white/40 mb-1 uppercase tracking-wide">
                    <span>ACV</span>
                    <span className="text-white font-medium">${acv.toLocaleString()} / yr</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="100"
                    value={acv}
                    onChange={(e) => setAcv(parseInt(e.target.value))}
                    className="w-full accent-accent h-[2px] bg-[#171615] outline-none rounded-none cursor-pointer"
                  />
                </div>

              </div>
            </div>

            {/* Results Grid comparison */}
            <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-3 text-left">
              <div className="bg-[#171615] p-3 border border-white/5">
                <span className="font-mono text-[8px] text-white/30 block mb-0.5 uppercase tracking-wider">Current Pipeline</span>
                <span className="font-mono text-sm font-bold text-white/60 block">${Math.round(currentPipeline).toLocaleString()}</span>
              </div>

              <div className="bg-accent/5 p-3 border border-accent/25">
                <span className="font-mono text-[8px] text-accent block mb-0.5 uppercase tracking-wider">Zesh Projected</span>
                <span className="font-mono text-sm font-bold text-accent block">${Math.round(projectedPipeline).toLocaleString()}</span>
              </div>

              <div className="col-span-2 bg-[#1b1a19] px-3.5 py-2 border-l border-accent flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-accent/90 block uppercase tracking-wide">Predictable Lift</span>
                  <span className="font-sans text-[9px] text-white/30 font-light block">Monthly pipeline growth</span>
                </div>
                <span className="font-mono text-base font-bold text-white">+${Math.round(pipelineLift).toLocaleString()}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
