import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSmoothScroll } from './useSmoothScroll';

export interface CodeProjectData {
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  techStack: string[];
  stats: { label: string; value: string }[];
  overview: string;
  features: string[];
  architecture: { title: string; description: string }[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  type: 'cardvice' | 'annie' | 'chorezen';
}

export const CODE_PROJECT_DETAILS: Record<string, CodeProjectData> = {
  "Cardvice": {
    title: "Cardvice",
    tagline: "Smart credit card recommendation and rewards optimization engine built with TypeScript.",
    category: "Fintech Engineering",
    tags: ["Credit Optimization", "TypeScript", "Yield Simulator", "State Machine"],
    techStack: ["TypeScript", "React 19", "Math Models", "Tailwind CSS"],
    stats: [
      { label: "Calculation Latency", value: "< 2ms" },
      { label: "Supported Card Rules", value: "140+ Cards" },
      { label: "Rule Tree Depth", value: "5 Levels" },
      { label: "Optimization Precision", value: "99.8%" }
    ],
    overview: "Cardvice is an algorithmic financial utility designed to maximize user reward yields across credit and debit card portfolios. It evaluates individualized category expenditure, reward caps, sign-up bonuses, and annual fee trade-offs to compute optimal card pairings and payment routing.",
    features: [
      "Dynamic spend-allocation model calculating weighted net cashback and point redemption value",
      "Multi-tier category analysis for Dining, Travel, Groceries, Fuel, and Online subscriptions",
      "Real-time annual fee vs. yield breakeven solver",
      "Zero-latency client-side calculation engine without backend round-trips"
    ],
    architecture: [
      {
        title: "Rule Engine Pipeline",
        description: "Evaluates card reward vectors across variable spend buckets, factoring in monthly and quarterly reward ceiling thresholds."
      },
      {
        title: "Breakeven Solver",
        description: "Calculates net effective return after subtracting annual fees, bonus multipliers, and opportunity costs against benchmark yields."
      },
      {
        title: "Deterministic State",
        description: "Pure functional state architecture allowing zero-dependency calculation passes inside requestAnimationFrame cycles."
      }
    ],
    codeSnippet: {
      filename: "CardOptimizer.ts",
      language: "typescript",
      code: `export interface SpendVector {
  dining: number;
  travel: number;
  groceries: number;
  fuel: number;
  online: number;
}

export interface CardModel {
  name: string;
  annualFee: number;
  multipliers: Record<keyof SpendVector, number>;
  baseMultiplier: number;
}

export function calculateOptimalCard(spend: SpendVector, cards: CardModel[]) {
  return cards.map(card => {
    let grossPoints = 0;
    for (const [category, amount] of Object.entries(spend)) {
      const mult = card.multipliers[category as keyof SpendVector] || card.baseMultiplier;
      grossPoints += amount * mult * 12; // Annualized
    }
    const estimatedValue = grossPoints * 0.015; // 1.5c per point valuation
    const netReturn = estimatedValue - card.annualFee;
    return {
      name: card.name,
      annualGross: estimatedValue,
      annualNet: netReturn,
      effectiveYield: (netReturn / (Object.values(spend).reduce((a, b) => a + b, 0) * 12)) * 100
    };
  }).sort((a, b) => b.annualNet - a.annualNet);
}`
    },
    type: 'cardvice'
  },

  "Annie": {
    title: "Annie",
    tagline: "Intelligent conversational assistant and multi-modal prompt reasoning engine.",
    category: "AI & Workflow Systems",
    tags: ["Conversational AI", "TypeScript", "Token Streaming", "Reasoning Graph"],
    techStack: ["TypeScript", "Prompt Pipeline", "State Tree", "Streaming Parser"],
    stats: [
      { label: "Token Stream Rate", value: "45 tok/s" },
      { label: "Context Window", value: "128k Tokens" },
      { label: "Reasoning Stages", value: "3 Steps" },
      { label: "Memory Footprint", value: "2.1 MB" }
    ],
    overview: "Annie is an AI assistant architecture built for structured reasoning, multi-turn conversational planning, and step-by-step task decomposition. It pairs client-side stream parsing with customizable reasoning persona nodes and interactive step introspection.",
    features: [
      "Interactive multi-step reasoning tree exposing internal thought checkpoints",
      "Real-time simulated token streamer with typewriter pacing",
      "Preset executive, technical, and creative persona directives",
      "Dynamic prompt token calculation and context memory manager"
    ],
    architecture: [
      {
        title: "Stream Tokenizer",
        description: "Processes chunked server-sent event buffers into discrete markdown and code tokens with zero UI stuttering."
      },
      {
        title: "Reasoning Graph",
        description: "Decomposes complex requests into discrete sub-goals (Intent Analysis → Data Gathering → Synthesis) before final output generation."
      },
      {
        title: "Context Windowing",
        description: "Maintains a sliding token budget across multi-turn sessions with automatic summarization of stale memory blocks."
      }
    ],
    codeSnippet: {
      filename: "ReasoningPipeline.ts",
      language: "typescript",
      code: `export interface ReasoningStep {
  stage: 'intent' | 'retrieval' | 'synthesis';
  status: 'pending' | 'active' | 'complete';
  detail: string;
}

export class AnniePipeline {
  private steps: ReasoningStep[] = [];

  public async execute(prompt: string, onToken: (t: string) => void) {
    // 1. Intent Extraction
    this.recordStep('intent', 'Analyzing user requirements and constraints...');
    
    // 2. Knowledge Retrieval & Synthesis
    this.recordStep('retrieval', 'Synthesizing context parameters and edge cases...');
    
    // 3. Output Generation
    this.recordStep('synthesis', 'Streaming formatted output response...');
    const tokens = this.generateResponse(prompt);
    for (const token of tokens) {
      await new Promise(r => setTimeout(r, 20));
      onToken(token);
    }
  }

  private recordStep(stage: ReasoningStep['stage'], detail: string) {
    this.steps.push({ stage, status: 'complete', detail });
  }
}`
    },
    type: 'annie'
  },

  "Chorezen": {
    title: "Chorezen",
    tagline: "On-demand dispatch scheduler, task allocation engine, and booking state machine.",
    category: "Logistics & Workflow",
    tags: ["Dispatch Engine", "Scheduling Matrix", "State Machine", "Pricing Engine"],
    techStack: ["TypeScript", "React", "State Machine", "Tailwind CSS"],
    stats: [
      { label: "Dispatch Latency", value: "< 15ms" },
      { label: "Scheduling Matrix", value: "30-Min Slots" },
      { label: "State Transitions", value: "6 Validated" },
      { label: "Validation Errors", value: "0% Unhandled" }
    ],
    overview: "Chorezen's booking and logistics engine coordinates customer cleaning requests, property configuration variables, real-time availability slots, and automatic team allocation. It features a strict finite state machine preventing invalid booking progressions.",
    features: [
      "Dynamic pricing matrix calculating base property workload, service tiers, and add-on durations",
      "Real-time crew capacity estimation and dispatch slot calendar",
      "Finite state machine managing step verification (Specs → Schedule → Extras → Confirmation)",
      "Instant frequency discount calculator (One-time, Bi-weekly, Monthly)"
    ],
    architecture: [
      {
        title: "Workload Estimator",
        description: "Converts bedroom/bathroom metrics into standardized labor minutes based on deep vs regular maintenance multipliers."
      },
      {
        title: "Slot Matrix Allocator",
        description: "Checks team availability schedules and travel buffers to generate valid contiguous appointment windows."
      },
      {
        title: "Booking State Machine",
        description: "Strict TypeScript transition tables preventing progression without full payload validation."
      }
    ],
    codeSnippet: {
      filename: "BookingStateMachine.ts",
      language: "typescript",
      code: `export type BookingState = 'SELECT_SERVICE' | 'CONFIGURE_ROOMS' | 'SCHEDULE_SLOT' | 'CONFIRMED';

export interface BookingPayload {
  serviceTier: 'standard' | 'deep' | 'move_in';
  bedrooms: number;
  bathrooms: number;
  slotTimestamp?: string;
}

export class BookingEngine {
  private state: BookingState = 'SELECT_SERVICE';

  public transition(next: BookingState, payload: BookingPayload): boolean {
    if (this.state === 'SELECT_SERVICE' && next === 'CONFIGURE_ROOMS') {
      if (!payload.serviceTier) return false;
      this.state = next;
      return true;
    }
    if (this.state === 'CONFIGURE_ROOMS' && next === 'SCHEDULE_SLOT') {
      if (payload.bedrooms < 1 || payload.bathrooms < 1) return false;
      this.state = next;
      return true;
    }
    return false;
  }

  public calculateQuote(p: BookingPayload): number {
    const base = p.serviceTier === 'deep' ? 140 : p.serviceTier === 'move_in' ? 190 : 90;
    const roomCost = (p.bedrooms * 25) + (p.bathrooms * 35);
    return base + roomCost;
  }
}`
    },
    type: 'chorezen'
  }
};

// ==========================================
// 1. Interactive Cardvice Live Simulator
// ==========================================
const CardviceDemo: React.FC = () => {
  const [dining, setDining] = useState(450);
  const [travel, setTravel] = useState(300);
  const [groceries, setGroceries] = useState(550);
  const [fuel, setFuel] = useState(150);

  const CARDS = [
    {
      name: "Apex Sapphire Reserve",
      fee: 250,
      rates: { dining: 0.04, travel: 0.05, groceries: 0.02, fuel: 0.015 },
      tier: "Premium Travel"
    },
    {
      name: "Gold Everyday Cash",
      fee: 95,
      rates: { dining: 0.03, travel: 0.02, groceries: 0.04, fuel: 0.03 },
      tier: "Everyday Multiplier"
    },
    {
      name: "Zero-Fee Freedom",
      fee: 0,
      rates: { dining: 0.015, travel: 0.015, groceries: 0.015, fuel: 0.015 },
      tier: "Flat Cashback"
    }
  ];

  const totalMonthlySpend = dining + travel + groceries + fuel;
  const annualSpend = totalMonthlySpend * 12;

  const results = CARDS.map(card => {
    const annualRewards = (
      dining * card.rates.dining +
      travel * card.rates.travel +
      groceries * card.rates.groceries +
      fuel * card.rates.fuel
    ) * 12;

    const netAnnual = annualRewards - card.fee;
    const effectiveYield = annualSpend > 0 ? (netAnnual / annualSpend) * 100 : 0;

    return {
      ...card,
      annualRewards,
      netAnnual,
      effectiveYield
    };
  }).sort((a, b) => b.netAnnual - a.netAnnual);

  const bestCard = results[0];

  return (
    <div className="w-full bg-[#ecece8] border border-[#DEDBD6] p-5 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DEDBD6] pb-3 gap-2 text-xs">
        <div>
          <span className="font-bold text-[#041727] text-sm block">Cardvice Spend Yield Optimizer</span>
          <span className="text-[#465460] text-[11px]">Adjust monthly spend categories to calculate optimal portfolio net yield</span>
        </div>
        <div className="flex items-center gap-1.5 self-start">
          <button
            onClick={() => { setDining(800); setTravel(700); setGroceries(400); setFuel(100); }}
            className="px-2 py-1 bg-[#F8F5F0] border border-[#DEDBD6] text-[10px] font-bold text-[#041727] uppercase hover:bg-[#041727] hover:text-white transition-colors"
          >
            Traveler Preset
          </button>
          <button
            onClick={() => { setDining(300); setTravel(50); setGroceries(700); setFuel(250); }}
            className="px-2 py-1 bg-[#F8F5F0] border border-[#DEDBD6] text-[10px] font-bold text-[#041727] uppercase hover:bg-[#041727] hover:text-white transition-colors"
          >
            Family Preset
          </button>
        </div>
      </div>

      {/* Spend Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Dining & Food", val: dining, set: setDining, max: 1500 },
          { label: "Flights & Hotels", val: travel, set: setTravel, max: 1500 },
          { label: "Groceries & Supermarket", val: groceries, set: setGroceries, max: 1500 },
          { label: "Gas & Commute", val: fuel, set: setFuel, max: 800 }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#F8F5F0] border border-[#DEDBD6] p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#465460] tracking-tight">{item.label}</span>
              <span className="font-mono font-bold text-[#041727]">${item.val}/mo</span>
            </div>
            <input
              type="range"
              min="0"
              max={item.max}
              step="25"
              value={item.val}
              onChange={e => item.set(Number(e.target.value))}
              className="w-full accent-[#041727] cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Comparison Engine Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {results.map((res, rIdx) => {
          const isWinner = res.name === bestCard.name;
          return (
            <div
              key={rIdx}
              className={`p-4 border flex flex-col justify-between transition-all ${
                isWinner 
                  ? 'bg-[#041727] text-[#F8F5F0] border-[#041727]' 
                  : 'bg-[#F8F5F0] text-[#041727] border-[#DEDBD6]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${isWinner ? 'text-[#A1B2C3]' : 'text-[#7A8793]'}`}>
                    {res.tier}
                  </span>
                  {isWinner && (
                    <span className="bg-[#F8F5F0] text-[#041727] text-[10px] font-bold px-1.5 py-0.2">
                      OPTIMAL PICK
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm tracking-tight mb-3">{res.name}</h4>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-current/20 pt-3 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="opacity-80">Gross Annual:</span>
                  <span>+${res.annualRewards.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Annual Fee:</span>
                  <span>-${res.fee}</span>
                </div>
                <div className="flex justify-between font-bold text-sm pt-1 border-t border-current/20">
                  <span>Net Annual Return:</span>
                  <span>${res.netAnnual.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-[11px] opacity-75">
                  <span>Effective Net Yield:</span>
                  <span>{res.effectiveYield.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// 2. Interactive Annie AI Reasoning Simulator
// ==========================================
const AnnieDemo: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState('Analyze market competitor pricing for fintech API tools');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [persona, setPersona] = useState<'Technical' | 'Executive' | 'Product'>('Technical');

  const SAMPLE_PROMPTS = [
    'Analyze market competitor pricing for fintech API tools',
    'Generate architectural state machine specification for bookings',
    'Summarize Q3 payment gateway latency benchmarks'
  ];

  const RESPONSES: Record<string, string> = {
    'Analyze market competitor pricing for fintech API tools': `1. Executive Summary:
Tier-1 APIs charge a $0.002/token baseline with tiered volume discounts at 10M tokens/month.

2. Cost Matrix Breakdown:
- Standard Ingestion: $0.15 per 1,000 requests
- Real-Time Websocket Bridge: $25.00 / concurrency channel / month
- SLA Guarantee (99.99%): +18% enterprise surcharge

3. Strategic Recommendation:
Implement dual-route load balancing with fallback caching to reduce peak unit costs by 34%.`,
    
    'Generate architectural state machine specification for bookings': `State Machine Definition [Booking Engine]:

State 1: UNINITIALIZED -> Payload validation (Property dimensions, service tier)
State 2: SLOT_RESERVED -> 10-min redis lock on contractor availability
State 3: PAYMENT_PENDING -> Stripe escrow intent authorization
State 4: DISPATCHED -> Webhook push to field crew dispatch mobile queue
State 5: FULFILLED -> Client sign-off and receipt generation.

Error Guardrails: Invalid payload transitions automatically abort to State 1 with rollback triggers.`,

    'Summarize Q3 payment gateway latency benchmarks': `Benchmark Summary [Q3 Latency Analysis]:

- Stripe Core: 182ms p95 | 99.98% uptime
- Adyen Direct: 144ms p95 | 99.99% uptime
- Local Settlement Nodes: 310ms p95 | 99.40% uptime

Key Finding: Regional edge TLS termination reduced TTFB by 42ms across West African payment routes.`
  };

  const handleRunStream = () => {
    setIsStreaming(true);
    setStreamedText('');
    setActiveStep(1);

    const fullResponse = RESPONSES[selectedPrompt] || 'Processing complete.';
    let charIndex = 0;

    setTimeout(() => {
      setActiveStep(2);
    }, 400);

    setTimeout(() => {
      setActiveStep(3);
      const interval = setInterval(() => {
        if (charIndex < fullResponse.length) {
          setStreamedText(fullResponse.slice(0, charIndex + 3));
          charIndex += 3;
        } else {
          clearInterval(interval);
          setIsStreaming(false);
        }
      }, 15);
    }, 900);
  };

  useEffect(() => {
    handleRunStream();
  }, [selectedPrompt, persona]);

  return (
    <div className="w-full bg-[#ecece8] border border-[#DEDBD6] p-5 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DEDBD6] pb-3 gap-2 text-xs">
        <div>
          <span className="font-bold text-[#041727] text-sm block">Annie Multi-Step Reasoning Sandbox</span>
          <span className="text-[#465460] text-[11px]">Inspect real-time token stream and reasoning pipeline checkpoints</span>
        </div>
        
        {/* Persona Switch */}
        <div className="flex items-center gap-1">
          {(['Technical', 'Executive', 'Product'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPersona(p)}
              className={`px-2 py-0.5 text-[10px] font-bold uppercase transition-colors ${
                persona === p ? 'bg-[#041727] text-white' : 'bg-[#F8F5F0] border border-[#DEDBD6] text-[#465460]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold text-[#465460] uppercase tracking-wider">Select Query Prompt</span>
        <div className="flex flex-wrap gap-1.5">
          {SAMPLE_PROMPTS.map((pr, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setSelectedPrompt(pr)}
              className={`px-2.5 py-1 text-xs text-left font-medium transition-colors border ${
                selectedPrompt === pr 
                  ? 'bg-[#041727] text-[#F8F5F0] border-[#041727]' 
                  : 'bg-[#F8F5F0] text-[#041727] border-[#DEDBD6] hover:bg-[#E2DFD9]'
              }`}
            >
              {pr}
            </button>
          ))}
        </div>
      </div>

      {/* Reasoning Step Tracker */}
      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
        <div className={`p-2 border transition-colors ${activeStep >= 1 ? 'bg-[#041727] text-white border-[#041727]' : 'bg-[#F8F5F0] text-[#7A8793] border-[#DEDBD6]'}`}>
          <span className="block font-bold">1. Intent Extraction</span>
          <span className="text-[10px] opacity-75">Parsing constraints</span>
        </div>
        <div className={`p-2 border transition-colors ${activeStep >= 2 ? 'bg-[#041727] text-white border-[#041727]' : 'bg-[#F8F5F0] text-[#7A8793] border-[#DEDBD6]'}`}>
          <span className="block font-bold">2. Retrieval & Context</span>
          <span className="text-[10px] opacity-75">Evaluating knowledge tree</span>
        </div>
        <div className={`p-2 border transition-colors ${activeStep >= 3 ? 'bg-[#041727] text-white border-[#041727]' : 'bg-[#F8F5F0] text-[#7A8793] border-[#DEDBD6]'}`}>
          <span className="block font-bold">3. Token Generation</span>
          <span className="text-[10px] opacity-75">Streaming markdown</span>
        </div>
      </div>

      {/* Live Stream Terminal View */}
      <div className="bg-[#041727] text-[#F8F5F0] border border-[#DEDBD6] p-4 flex flex-col font-mono text-xs shadow-inner min-h-[160px]">
        <div className="flex justify-between items-center text-[10px] text-[#8BB4E7] border-b border-[#2A3B4C] pb-1.5 mb-2">
          <span>MODEL: ANNIE-STREAM-PRO | TEMP: 0.2</span>
          <span>{isStreaming ? 'STREAMING ACTIVE...' : 'RESPONSE COMPLETE'}</span>
        </div>
        <pre className="whitespace-pre-wrap leading-relaxed font-mono text-xs text-[#ECEFF4]">
          {streamedText}
          {isStreaming && <span className="inline-block w-2 h-3.5 bg-[#8BB4E7] ml-0.5 animate-pulse" />}
        </pre>
      </div>
    </div>
  );
};

// ==========================================
// 3. Interactive Chorezen Dispatch Simulator
// ==========================================
const ChorezenDemo: React.FC = () => {
  const [tier, setTier] = useState<'Standard' | 'Deep Clean' | 'Move-In'>('Deep Clean');
  const [beds, setBeds] = useState(2);
  const [baths, setBaths] = useState(2);
  const [frequency, setFrequency] = useState<'One-Time' | 'Bi-Weekly' | 'Monthly'>('Bi-Weekly');
  const [addOven, setAddOven] = useState(true);
  const [addWindows, setAddWindows] = useState(false);

  // Pricing calculations
  const baseRate = tier === 'Deep Clean' ? 120 : tier === 'Move-In' ? 180 : 75;
  const roomCost = (beds * 20) + (baths * 25);
  const addOns = (addOven ? 35 : 0) + (addWindows ? 45 : 0);
  const subtotal = baseRate + roomCost + addOns;

  const discountMultiplier = frequency === 'Bi-Weekly' ? 0.85 : frequency === 'Monthly' ? 0.90 : 1.0;
  const total = subtotal * discountMultiplier;
  const estimatedHours = ((beds * 0.75) + (baths * 0.9) + (tier === 'Deep Clean' ? 1.5 : tier === 'Move-In' ? 2.5 : 0.8) + (addOven ? 0.5 : 0) + (addWindows ? 0.75 : 0)).toFixed(1);

  return (
    <div className="w-full bg-[#ecece8] border border-[#DEDBD6] p-5 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DEDBD6] pb-3 gap-2 text-xs">
        <div>
          <span className="font-bold text-[#041727] text-sm block">Chorezen Dispatch & Quote Engine</span>
          <span className="text-[#465460] text-[11px]">Real-time labor calculation, team sizing, and booking state estimator</span>
        </div>
        <span className="bg-[#041727] text-white px-2 py-0.5 text-[10px] font-mono font-bold self-start">
          STATE: QUOTE_READY
        </span>
      </div>

      {/* Property Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tier */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold text-[#465460] uppercase tracking-wider">Service Tier</span>
          <div className="flex flex-col gap-1.5">
            {(['Standard', 'Deep Clean', 'Move-In'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-3 py-1.5 text-xs text-left font-bold transition-colors border ${
                  tier === t 
                    ? 'bg-[#041727] text-white border-[#041727]' 
                    : 'bg-[#F8F5F0] text-[#041727] border-[#DEDBD6] hover:bg-[#E2DFD9]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms configuration */}
        <div className="flex flex-col gap-3 bg-[#F8F5F0] border border-[#DEDBD6] p-3.5">
          <span className="text-[11px] font-bold text-[#465460] uppercase tracking-wider">Rooms Layout</span>
          
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-[#041727]">Bedrooms:</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setBeds(b => Math.max(1, b - 1))} className="w-6 h-6 bg-[#041727] text-white font-bold">-</button>
              <span className="font-mono font-bold text-sm w-4 text-center">{beds}</span>
              <button onClick={() => setBeds(b => Math.min(6, b + 1))} className="w-6 h-6 bg-[#041727] text-white font-bold">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-[#041727]">Bathrooms:</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setBaths(b => Math.max(1, b - 1))} className="w-6 h-6 bg-[#041727] text-white font-bold">-</button>
              <span className="font-mono font-bold text-sm w-4 text-center">{baths}</span>
              <button onClick={() => setBaths(b => Math.min(6, b + 1))} className="w-6 h-6 bg-[#041727] text-white font-bold">+</button>
            </div>
          </div>
        </div>

        {/* Add-ons & Frequency */}
        <div className="flex flex-col gap-3 bg-[#F8F5F0] border border-[#DEDBD6] p-3.5">
          <span className="text-[11px] font-bold text-[#465460] uppercase tracking-wider">Cadence & Extras</span>
          
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-2 text-xs font-bold text-[#041727] cursor-pointer">
              <input
                type="checkbox"
                checked={addOven}
                onChange={e => setAddOven(e.target.checked)}
                className="accent-[#041727]"
              />
              Interior Oven Deep Clean (+$35)
            </label>
            <label className="flex items-center gap-2 text-xs font-bold text-[#041727] cursor-pointer">
              <input
                type="checkbox"
                checked={addWindows}
                onChange={e => setAddWindows(e.target.checked)}
                className="accent-[#041727]"
              />
              Interior Window Glass (+$45)
            </label>
          </div>

          <div className="pt-2 border-t border-[#DEDBD6] flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#465460]">Cadence:</span>
            <select
              value={frequency}
              onChange={e => setFrequency(e.target.value as any)}
              className="text-xs font-bold bg-[#ecece8] border border-[#DEDBD6] px-2 py-1 text-[#041727]"
            >
              <option value="One-Time">One-Time</option>
              <option value="Monthly">Monthly (-10%)</option>
              <option value="Bi-Weekly">Bi-Weekly (-15%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calculated Dispatch Output */}
      <div className="bg-[#041727] text-[#F8F5F0] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex flex-wrap gap-6">
          <div>
            <span className="text-[10px] text-[#8BB4E7] uppercase block">Estimated Workload</span>
            <span className="font-bold text-sm text-[#F8F5F0]">{estimatedHours} Total Crew Hours</span>
          </div>
          <div>
            <span className="text-[10px] text-[#8BB4E7] uppercase block">Assigned Crew</span>
            <span className="font-bold text-sm text-[#F8F5F0]">{beds >= 4 || tier === 'Move-In' ? '3 Cleaners' : '2 Cleaners'}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#8BB4E7] uppercase block">Cadence Discount</span>
            <span className="font-bold text-sm text-[#F8F5F0]">{frequency === 'Bi-Weekly' ? '15% OFF' : frequency === 'Monthly' ? '10% OFF' : '0%'}</span>
          </div>
        </div>

        <div className="text-right border-t md:border-t-0 md:border-l border-[#2A3B4C] pt-2 md:pt-0 md:pl-6">
          <span className="text-[10px] text-[#8BB4E7] uppercase block">Calculated Service Quote</span>
          <span className="font-bold text-xl text-[#F8F5F0]">${total.toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Primary CodeWorkView Layout Component
// ==========================================
interface CodeWorkViewProps {
  selectedProject: string;
}

export const CodeWorkView: React.FC<CodeWorkViewProps> = ({ selectedProject }) => {
  const [activePane, setActivePane] = useState<'demo' | 'code' | 'architecture'>('demo');
  const [copied, setCopied] = useState(false);
  const scrollRef = useSmoothScroll<HTMLDivElement>();

  const data = CODE_PROJECT_DETAILS[selectedProject] || CODE_PROJECT_DETAILS["Cardvice"];

  // Reset copied state and active pane on project switch
  useEffect(() => {
    setCopied(false);
    setActivePane('demo');
  }, [selectedProject]);

  const handleCopyCode = () => {
    if (!data.codeSnippet) return;
    navigator.clipboard.writeText(data.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={scrollRef} className="flex-1 h-full w-full overflow-y-auto bg-[#F8F5F0] p-6 lg:p-12 flex flex-col">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">
        
        {/* Header Strip: Title, Tagline, & Category Badges */}
        <div className="border-b border-[#DEDBD6] pb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#041727] text-white px-2 py-0.5 text-xs font-bold tracking-[-0.04em]">
                {data.title}
              </span>
              <span className="text-xs font-bold text-[#465460] uppercase tracking-wider font-mono">
                {`{${data.category}}`}
              </span>
            </div>
            <h2 className="text-base lg:text-lg font-bold text-[#041727] tracking-tight leading-snug">
              {data.tagline}
            </h2>
          </div>

          {/* Interactive Pane Tabs: [LIVE DEMO] [SOURCE CODE] [ARCHITECTURE] */}
          <div className="flex items-center gap-1 bg-[#ecece8] border border-[#DEDBD6] p-0.5 self-start shrink-0">
            {(['demo', 'code', 'architecture'] as const).map(pane => (
              <button
                key={pane}
                onClick={() => setActivePane(pane)}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-tight transition-colors ${
                  activePane === pane 
                    ? 'bg-[#041727] text-white' 
                    : 'text-[#465460] hover:text-[#041727]'
                }`}
              >
                {pane === 'demo' ? 'Live Demo' : pane === 'code' ? 'Source' : 'Architecture'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Main Workspace Pane */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {activePane === 'demo' && (
              <motion.div
                key="demo"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {data.type === 'cardvice' && <CardviceDemo />}
                {data.type === 'annie' && <AnnieDemo />}
                {data.type === 'chorezen' && <ChorezenDemo />}
              </motion.div>
            )}

            {activePane === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="bg-[#041727] text-[#F8F5F0] border border-[#DEDBD6] p-5 flex flex-col font-mono text-xs"
              >
                <div className="flex items-center justify-between border-b border-[#2A3B4C] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8BB4E7] font-bold">📄 {data.codeSnippet.filename}</span>
                    <span className="text-[10px] text-[#A1B2C3] uppercase">({data.codeSnippet.language})</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="px-2.5 py-1 bg-[#152B40] text-[11px] font-bold text-white hover:bg-[#203D5B] transition-colors"
                  >
                    {copied ? 'Copied ✓' : 'Copy Code'}
                  </button>
                </div>
                <pre className="overflow-x-auto leading-relaxed text-[#ECEFF4] whitespace-pre font-mono text-xs">
                  {data.codeSnippet.code}
                </pre>
              </motion.div>
            )}

            {activePane === 'architecture' && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {data.architecture.map((item, idx) => (
                  <div key={idx} className="bg-[#ecece8] border border-[#DEDBD6] p-4 flex flex-col">
                    <span className="text-xs font-bold text-[#041727] mb-2 uppercase tracking-tight">
                      {item.title}
                    </span>
                    <p className="text-xs text-[#465460] font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Overview & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 pt-4">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block bg-[#041727] text-white px-2 py-0.5 text-xs font-bold mb-3 tracking-[-0.04em]">
                Overview
              </span>
              <p className="text-sm text-[#041727] font-medium leading-relaxed tracking-[-0.03em]">
                {data.overview}
              </p>
            </div>

            <div>
              <span className="inline-block bg-[#041727] text-white px-2 py-0.5 text-xs font-bold mb-3 tracking-[-0.04em]">
                Key Engineering Highlights
              </span>
              <ul className="flex flex-col gap-2">
                {data.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-sm text-[#041727] font-medium tracking-tight flex items-start gap-2">
                    <span className="text-[#041727] font-bold">→</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Specs & Stats */}
          <div className="flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-[#DEDBD6] pt-6 lg:pt-0 lg:pl-6">
            {/* Tech Stack */}
            <div>
              <span className="text-[11px] font-bold text-[#465460] uppercase tracking-wider block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-[#ecece8] text-[#041727] px-2 py-0.5 text-xs font-bold tracking-tight border border-[#DEDBD6]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div>
              <span className="text-[11px] font-bold text-[#465460] uppercase tracking-wider block mb-2">
                Performance Benchmarks
              </span>
              <div className="flex flex-col gap-2">
                {data.stats.map((st, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-center text-xs border-b border-[#DEDBD6] pb-1">
                    <span className="text-[#465460] font-medium">{st.label}</span>
                    <span className="text-[#041727] font-bold font-mono">{st.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
