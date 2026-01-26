<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>OneSync - Data Scientist Command Center</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=Roboto+Condensed:wght@400;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style type="text/tailwindcss">
        :root {
            --charcoal: #0a0a0b;
            --deep-purple: #7c3aed;
            --vibrant-purple: #a855f7;
            --electric-blue: #3b82f6;
            --panel-bg: #141417;
            --border-color: #26262b;
        }
        body {
            background-color: var(--charcoal);
            color: #d1d5db;
            font-family: 'Inter', sans-serif;
            letter-spacing: -0.01em;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
        .font-condensed {
            font-family: 'Roboto Condensed', sans-serif;
        }
        .command-panel {
            background-color: var(--panel-bg);
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
        }
        .command-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--deep-purple), transparent);
            opacity: 0.5;
        }
        .glow-purple {
            box-shadow: 0 0 15px rgba(124, 58, 237, 0.3);
        }
        .status-light {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
        .status-light-active {
            background-color: #10b981;
            box-shadow: 0 0 8px #10b981;
        }
        .status-light-warning {
            background-color: #f59e0b;
            box-shadow: 0 0 8px #f59e0b;
        }
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--border-color);
        }
        .data-grid-overlay {
            background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
            background-size: 24px 24px;
        }
    </style>
</head>
<body class="antialiased selection:bg-deep-purple selection:text-white">
<nav class="fixed top-0 w-full z-50 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-[#26262b]">
<div class="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
<div class="flex items-center space-x-6">
<div class="flex items-center space-x-2">
<div class="w-6 h-6 bg-gradient-to-br from-vibrant-purple to-deep-purple rounded flex items-center justify-center text-white font-bold text-[10px] shadow-lg shadow-purple-900/20">OS</div>
<span class="font-bold text-sm tracking-widest uppercase font-mono text-white">OneSync v2.0.4</span>
</div>
<div class="hidden lg:flex items-center space-x-6 text-[11px] font-mono tracking-wider text-gray-500 uppercase">
<a class="hover:text-vibrant-purple transition-colors" href="#">Terminal</a>
<a class="hover:text-vibrant-purple transition-colors" href="#">Nodes</a>
<a class="hover:text-vibrant-purple transition-colors" href="#">Security_Logs</a>
<a class="hover:text-vibrant-purple transition-colors" href="#">Schema</a>
</div>
</div>
<div class="flex items-center space-x-4">
<div class="flex items-center space-x-2 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>SYSTEM_READY</span>
</div>
<a class="bg-white hover:bg-gray-200 text-black px-4 py-1.5 rounded text-[11px] font-bold uppercase tracking-tighter transition-all" href="#">
                Deploy Instance
            </a>
</div>
</div>
</nav>
<section class="relative pt-32 pb-20 data-grid-overlay">
<div class="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div class="inline-flex items-center space-x-2 text-[10px] font-mono text-vibrant-purple border border-vibrant-purple/30 px-2 py-0.5 rounded mb-8 uppercase tracking-[0.2em]">
                Protocol Override active
            </div>
<h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] text-white font-condensed uppercase italic">
                Intelligence at the <br/>
<span class="text-vibrant-purple">Edge</span>
</h1>
<p class="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
                OneSync processes biosignals on-device, ensuring your data never leaves your control without your explicit consent.
            </p>
<div class="flex flex-wrap gap-4 mb-16">
<button class="bg-deep-purple text-white px-8 py-4 rounded font-bold text-sm hover:bg-vibrant-purple transition-all shadow-xl shadow-purple-900/40 uppercase tracking-widest font-mono">
                    INITIATE_DEMO.exe
                </button>
<button class="border border-white/10 text-white px-8 py-4 rounded font-bold text-sm hover:bg-white/5 transition-all uppercase tracking-widest font-mono">
                    READ_DOCS.txt
                </button>
</div>
<div class="grid grid-cols-3 gap-12 border-t border-white/5 pt-10">
<div class="group">
<div class="text-3xl font-mono font-bold text-white group-hover:text-vibrant-purple transition-colors">0ms</div>
<div class="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2 font-mono">Cloud Latency</div>
</div>
<div class="group">
<div class="text-3xl font-mono font-bold text-white group-hover:text-vibrant-purple transition-colors">100%</div>
<div class="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2 font-mono">Local Processing</div>
</div>
<div class="group">
<div class="text-3xl font-mono font-bold text-white group-hover:text-vibrant-purple transition-colors">AES-256</div>
<div class="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2 font-mono">Encryption</div>
</div>
</div>
</div>
<div class="relative h-[600px] flex items-center justify-center">
<div class="absolute w-full h-full flex items-center justify-center pointer-events-none">
<div class="w-[500px] h-[500px] border border-vibrant-purple/10 rounded-full animate-pulse"></div>
<div class="absolute w-[350px] h-[350px] border border-white/5 rounded-full"></div>
<div class="absolute w-[600px] h-[600px] border border-white/5 rounded-full"></div>
</div>
<div class="relative w-full h-full">
<div class="absolute top-1/4 left-10 command-panel p-4 rounded w-48 shadow-2xl backdrop-blur-md border-l-4 border-l-vibrant-purple">
<div class="flex items-center justify-between mb-2">
<span class="text-[9px] font-mono text-gray-500 uppercase">Privacy_Layer</span>
<div class="status-light status-light-active"></div>
</div>
<div class="text-xl font-bold font-mono text-white mb-1">LOCKED</div>
<div class="h-1 w-full bg-white/5 rounded overflow-hidden">
<div class="h-full bg-vibrant-purple w-full"></div>
</div>
</div>
<div class="absolute bottom-1/4 right-10 command-panel p-4 rounded w-48 shadow-2xl backdrop-blur-md border-l-4 border-l-electric-blue">
<div class="flex items-center justify-between mb-2">
<span class="text-[9px] font-mono text-gray-500 uppercase">Inference_Engine</span>
<div class="status-light status-light-active"></div>
</div>
<div class="text-xl font-bold font-mono text-white mb-1">ACTIVE</div>
<div class="h-1 w-full bg-white/5 rounded overflow-hidden">
<div class="h-full bg-electric-blue w-3/4"></div>
</div>
</div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-vibrant-purple/5 rounded-full border border-vibrant-purple/20 flex items-center justify-center blur-2xl"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<span class="material-symbols-outlined text-7xl text-white opacity-20">android_fingerprint</span>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 border-y border-white/5 bg-[#0a0a0b]">
<div class="max-w-[1600px] mx-auto px-6">
<div class="mb-20">
<h2 class="text-4xl font-bold mb-4 font-condensed uppercase italic tracking-tighter text-white">The Paradigm <span class="text-vibrant-purple">Shift</span></h2>
<p class="text-gray-500 font-mono text-sm uppercase tracking-widest">Comparative Analysis: Traditional vs Edge-Native Architecture</p>
</div>
<div class="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
<div class="bg-charcoal p-12">
<div class="flex items-center space-x-3 mb-10">
<div class="w-8 h-8 rounded border border-white/10 flex items-center justify-center">
<span class="material-symbols-outlined text-sm text-gray-600">block</span>
</div>
<h3 class="text-xl font-bold font-mono uppercase tracking-tighter text-gray-500">The Silent Standard</h3>
</div>
<ul class="space-y-6 font-mono text-xs text-gray-500 uppercase tracking-wider">
<li class="flex items-start gap-4">
<span class="text-red-900">[!]</span>
                        Raw biometrics streamed to unknown servers
                    </li>
<li class="flex items-start gap-4">
<span class="text-red-900">[!]</span>
                        Black-box AI with unexplained outputs
                    </li>
<li class="flex items-start gap-4">
<span class="text-red-900">[!]</span>
                        False confidence (never admits uncertainty)
                    </li>
<li class="flex items-start gap-4">
<span class="text-red-900">[!]</span>
                        Data ownership is unclear or non-existent
                    </li>
</ul>
</div>
<div class="bg-[#141417] p-12 relative overflow-hidden">
<div class="absolute top-0 right-0 p-2 opacity-10">
<span class="material-symbols-outlined text-[120px]">verified</span>
</div>
<div class="flex items-center space-x-3 mb-10">
<div class="w-8 h-8 rounded border border-vibrant-purple/30 flex items-center justify-center bg-vibrant-purple/10">
<span class="material-symbols-outlined text-sm text-vibrant-purple">bolt</span>
</div>
<h3 class="text-xl font-bold font-mono uppercase tracking-tighter text-white">The OneSync Standard</h3>
</div>
<ul class="space-y-6 font-mono text-xs text-vibrant-purple tracking-wider">
<li class="flex items-start gap-4">
<span class="text-vibrant-purple">[✓]</span>
                        Edge computing — data never leaves without consent
                    </li>
<li class="flex items-start gap-4">
<span class="text-vibrant-purple">[✓]</span>
                        Transparent inference with explainable reasoning
                    </li>
<li class="flex items-start gap-4">
<span class="text-vibrant-purple">[✓]</span>
                        Honest uncertainty (NO INFERENCE is a valid state)
                    </li>
<li class="flex items-start gap-4">
<span class="text-vibrant-purple">[✓]</span>
                        Athlete-owned, privacy-native architecture
                    </li>
</ul>
</div>
</div>
</div>
</section>
<section class="py-24 bg-[#0a0a0b]">
<div class="max-w-[1600px] mx-auto px-6">
<div class="mb-20 flex justify-between items-end">
<div>
<h2 class="text-4xl font-bold mb-4 font-condensed uppercase italic tracking-tighter text-white">Built for Trust</h2>
<p class="text-gray-500 font-mono text-sm uppercase tracking-widest">Protocol Core Principles</p>
</div>
<div class="flex space-x-2">
<div class="w-2 h-2 rounded-full bg-vibrant-purple shadow-[0_0_8px_var(--vibrant-purple)]"></div>
<div class="w-2 h-2 rounded-full bg-vibrant-purple/30"></div>
<div class="w-2 h-2 rounded-full bg-vibrant-purple/30"></div>
</div>
</div>
<div class="grid md:grid-cols-4 gap-4">
<div class="command-panel p-6 border-l-2 border-l-vibrant-purple">
<div class="flex items-center justify-between mb-6">
<span class="material-symbols-outlined text-vibrant-purple">security</span>
<span class="text-[9px] font-mono text-emerald-500 uppercase">SEC_VERIFIED</span>
</div>
<h3 class="text-sm font-bold font-mono uppercase text-white mb-4 tracking-tighter">Trust by Design</h3>
<p class="text-[11px] text-gray-500 font-mono mb-6 leading-relaxed">
                    Privacy isn't an afterthought — it's built into every layer. Raw biometrics never leave your device.
                </p>
<div class="flex items-center space-x-1">
<div class="h-0.5 flex-1 bg-vibrant-purple"></div>
<div class="h-0.5 w-4 bg-white/10"></div>
<div class="h-0.5 w-2 bg-white/10"></div>
</div>
</div>
<div class="command-panel p-6 border-l-2 border-l-electric-blue">
<div class="flex items-center justify-between mb-6">
<span class="material-symbols-outlined text-electric-blue">psychology</span>
<span class="text-[9px] font-mono text-amber-500 uppercase">UNCERTAINTY_AWARE</span>
</div>
<h3 class="text-sm font-bold font-mono uppercase text-white mb-4 tracking-tighter">Conditional Intelligence</h3>
<p class="text-[11px] text-gray-500 font-mono mb-6 leading-relaxed">
                    When signal quality drops, the system says 'NO INFERENCE' instead of guessing.
                </p>
<div class="flex items-center space-x-1">
<div class="h-0.5 w-1/2 bg-electric-blue"></div>
<div class="h-0.5 flex-1 bg-white/10"></div>
</div>
</div>
<div class="command-panel p-6 border-l-2 border-l-vibrant-purple">
<div class="flex items-center justify-between mb-6">
<span class="material-symbols-outlined text-vibrant-purple">memory</span>
<span class="text-[9px] font-mono text-emerald-500 uppercase">NODE_ACTIVE</span>
</div>
<h3 class="text-sm font-bold font-mono uppercase text-white mb-4 tracking-tighter">Edge-First Computation</h3>
<p class="text-[11px] text-gray-500 font-mono mb-6 leading-relaxed">
                    Critical processing happens on the OneBand itself for faster insights and reduced latency.
                </p>
<div class="flex space-x-1">
<div class="w-1 h-3 bg-vibrant-purple"></div>
<div class="w-1 h-2 bg-vibrant-purple/50"></div>
<div class="w-1 h-4 bg-vibrant-purple"></div>
</div>
</div>
<div class="command-panel p-6 border-l-2 border-l-electric-blue">
<div class="flex items-center justify-between mb-6">
<span class="material-symbols-outlined text-electric-blue">person</span>
<span class="text-[9px] font-mono text-emerald-500 uppercase">CONSENT_REQ</span>
</div>
<h3 class="text-sm font-bold font-mono uppercase text-white mb-4 tracking-tighter">Athlete-Controlled Data</h3>
<p class="text-[11px] text-gray-500 font-mono mb-6 leading-relaxed">
                    You decide what's shared, when, and with whom. Consent is explicit, reversible, and auditable.
                </p>
<div class="h-1 w-full bg-white/5 overflow-hidden rounded">
<div class="h-full bg-emerald-500 w-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
<div class="absolute inset-0 opacity-[0.03] pointer-events-none data-grid-overlay"></div>
<div class="max-w-[1600px] mx-auto px-6">
<div class="mb-12 text-center">
<div class="inline-flex items-center space-x-2 text-vibrant-purple border border-vibrant-purple/30 bg-vibrant-purple/5 px-4 py-1.5 rounded font-mono text-[10px] uppercase tracking-widest mb-6">
<span class="w-2 h-2 bg-vibrant-purple rounded-full shadow-[0_0_8px_var(--vibrant-purple)]"></span>
<span>Live System Demo</span>
</div>
<h2 class="text-5xl font-bold font-condensed uppercase italic text-white tracking-tighter mb-4">Intelligence in Real-<span class="text-vibrant-purple">Time</span></h2>
<p class="text-gray-500 font-mono text-xs uppercase tracking-widest">Multi-Panel Insight Dashboard v4.2</p>
</div>
<div class="flex justify-center space-x-1 mb-8">
<button class="px-6 py-2 text-[10px] font-mono border border-white/5 text-gray-500 hover:text-white transition">01: SLEEP</button>
<button class="px-6 py-2 text-[10px] font-mono bg-vibrant-purple text-white">02: ACT_ACTIVE</button>
<button class="px-6 py-2 text-[10px] font-mono border border-white/5 text-gray-500 hover:text-white transition">03: TRAINING</button>
</div>
<div class="grid lg:grid-cols-3 gap-6">
<div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
<div class="command-panel p-8 rounded flex flex-col justify-between">
<div class="flex justify-between items-start">
<div class="flex flex-col">
<span class="text-[10px] font-condensed font-bold text-gray-400 uppercase tracking-widest mb-1">Biometric_Source</span>
<span class="text-xs font-mono text-vibrant-purple">HEART_RATE_PPG</span>
</div>
<span class="text-[10px] font-mono text-emerald-500">REALTIME_STREAM</span>
</div>
<div class="py-12 flex flex-col items-center">
<div class="text-[120px] font-mono font-bold leading-none tracking-tighter text-white">75</div>
<div class="text-sm font-mono text-gray-500 mt-2 uppercase tracking-[0.4em]">Beats_Per_Min</div>
</div>
<div class="h-16 w-full flex items-end space-x-1 opacity-40">
<div class="w-full h-8 bg-vibrant-purple"></div>
<div class="w-full h-12 bg-vibrant-purple/70"></div>
<div class="w-full h-10 bg-vibrant-purple"></div>
<div class="w-full h-14 bg-vibrant-purple/80"></div>
<div class="w-full h-9 bg-vibrant-purple"></div>
<div class="w-full h-11 bg-vibrant-purple/60"></div>
</div>
</div>
<div class="space-y-6">
<div class="command-panel p-6 rounded">
<div class="flex items-center space-x-2 mb-4">
<span class="material-symbols-outlined text-sm text-gray-400">psychology</span>
<span class="text-[10px] font-condensed font-bold text-gray-400 uppercase tracking-widest">Cognitive Load</span>
</div>
<div class="flex items-baseline justify-between mb-3">
<span class="text-3xl font-mono font-bold text-white tracking-tighter italic">MED</span>
<span class="text-[10px] font-mono text-electric-blue">LVL_02</span>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
<div class="h-full bg-vibrant-purple w-1/3"></div>
<div class="h-full bg-vibrant-purple/50 w-1/6"></div>
</div>
</div>
<div class="command-panel p-6 rounded">
<div class="flex items-center space-x-2 mb-4">
<span class="material-symbols-outlined text-sm text-gray-400">ecg_heart</span>
<span class="text-[10px] font-condensed font-bold text-gray-400 uppercase tracking-widest">HRV Status</span>
</div>
<div class="flex items-baseline space-x-2">
<span class="text-4xl font-mono font-bold text-white tracking-tighter">54</span>
<span class="text-xs font-mono text-gray-500 uppercase tracking-widest">ms_unit</span>
</div>
<div class="mt-4 pt-4 border-t border-white/5 flex justify-between text-[9px] font-mono uppercase text-gray-600">
<span>Delta: +2.1</span>
<span class="text-emerald-500">Stable</span>
</div>
</div>
</div>
</div>
<div class="space-y-6">
<div class="command-panel p-6 rounded h-full flex flex-col">
<div class="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<div class="flex items-center space-x-2">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span class="text-[10px] font-mono text-white tracking-tighter uppercase">Node: ONE_BND_X9</span>
</div>
<div class="flex space-x-4 font-mono text-[9px] text-gray-500">
<span>BATT: 94%</span>
<span>LAT: 4MS</span>
</div>
</div>
<div class="flex-grow space-y-8">
<div>
<div class="flex justify-between items-center mb-4">
<span class="text-[10px] font-condensed font-bold text-gray-400 uppercase tracking-widest">Inference Confidence</span>
<span class="text-xs font-mono text-electric-blue font-bold tracking-tighter">94.8%</span>
</div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
<div class="h-full bg-electric-blue rounded-full glow-purple w-[94.8%] shadow-[0_0_10px_#3b82f6]"></div>
</div>
</div>
<div class="space-y-4">
<span class="text-[10px] font-condensed font-bold text-gray-400 uppercase tracking-widest block">Active_Sensors</span>
<div class="grid grid-cols-2 gap-2">
<div class="p-2 border border-white/10 rounded flex items-center justify-between font-mono text-[9px] bg-white/[0.02]">
<span class="text-white">GYRO_X_Y</span>
<span class="text-emerald-500 text-[8px]">●</span>
</div>
<div class="p-2 border border-white/10 rounded flex items-center justify-between font-mono text-[9px] bg-white/[0.02]">
<span class="text-white">ACCEL_TR</span>
<span class="text-emerald-500 text-[8px]">●</span>
</div>
<div class="p-2 border border-white/10 rounded flex items-center justify-between font-mono text-[9px] bg-white/[0.02]">
<span class="text-white">PPG_OPTIC</span>
<span class="text-emerald-500 text-[8px]">●</span>
</div>
<div class="p-2 border border-white/10 rounded flex items-center justify-between font-mono text-[9px] bg-white/[0.02]">
<span class="text-white">EDA_COND</span>
<span class="text-amber-500 text-[8px]">○</span>
</div>
</div>
</div>
<div class="p-4 border border-vibrant-purple/20 bg-vibrant-purple/5 rounded">
<span class="text-[9px] font-mono text-vibrant-purple uppercase tracking-[0.2em] mb-2 block font-bold">Inference_Note:</span>
<p class="text-[10px] font-mono text-gray-400 leading-relaxed italic">
                                "Confidence threshold achieved. System state: RELIABLE. Continuing edge processing loop..."
                            </p>
</div>
</div>
<div class="mt-8 text-center">
<span class="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em]">Hardware_ID: 0x93FF_AE12</span>
</div>
</div>
</div>
</div>
<p class="text-center text-[10px] font-mono text-gray-600 mt-12 uppercase tracking-[0.5em]">Command Center Operational - Pipeline Ver. 4.0.1</p>
</div>
</section>
<section class="py-24 bg-[#0a0a0b] border-t border-white/5">
<div class="max-w-[1200px] mx-auto px-6">
<h2 class="text-center text-xs font-mono font-bold uppercase tracking-[0.6em] text-gray-600 mb-20">Process_Architecture_Flow</h2>
<div class="relative space-y-px bg-white/5 border border-white/5">
<div class="group relative flex flex-col md:flex-row gap-8 bg-charcoal p-10 hover:bg-[#141417] transition-all">
<div class="w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-vibrant-purple shrink-0 group-hover:border-vibrant-purple transition-colors">
                    01
                </div>
<div class="flex-1">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-bold font-condensed uppercase italic text-white tracking-tighter">OneBand Senses &amp; Computes</h3>
<span class="text-[9px] font-mono text-vibrant-purple uppercase tracking-widest px-2 py-0.5 border border-vibrant-purple/30 bg-vibrant-purple/5">EDGE_ONLY</span>
</div>
<p class="text-sm font-light text-gray-400 leading-relaxed">Raw biosignals are captured and processed on-device. Critical features are computed at the edge. Raw data never leaves your wrist.</p>
</div>
</div>
<div class="group relative flex flex-col md:flex-row gap-8 bg-charcoal p-10 hover:bg-[#141417] transition-all">
<div class="w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-vibrant-purple shrink-0 group-hover:border-vibrant-purple transition-colors">
                    02
                </div>
<div class="flex-1">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-bold font-condensed uppercase italic text-white tracking-tighter">OneSync Mobile Enforces Consent</h3>
<span class="text-[9px] font-mono text-vibrant-purple uppercase tracking-widest px-2 py-0.5 border border-vibrant-purple/30 bg-vibrant-purple/5">USER_AUTH</span>
</div>
<p class="text-sm font-light text-gray-400 leading-relaxed">The mobile app manages what data syncs and when. You explicitly consent to each sharing decision. Encryption protects data in transit.</p>
</div>
</div>
<div class="group relative flex flex-col md:flex-row gap-8 bg-charcoal p-10 hover:bg-[#141417] transition-all">
<div class="w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-vibrant-purple shrink-0 group-hover:border-vibrant-purple transition-colors">
                    03
                </div>
<div class="flex-1">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-bold font-condensed uppercase italic text-white tracking-tighter">Cloud Aggregates Features Only</h3>
<span class="text-[9px] font-mono text-vibrant-purple uppercase tracking-widest px-2 py-0.5 border border-vibrant-purple/30 bg-vibrant-purple/5">ANALYTICS_X</span>
</div>
<p class="text-sm font-light text-gray-400 leading-relaxed">Only computed features reach the cloud, never raw biometrics. This enables trend analysis while preserving your privacy boundary.</p>
</div>
</div>
<div class="group relative flex flex-col md:flex-row gap-8 bg-charcoal p-10 hover:bg-[#141417] transition-all">
<div class="w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-vibrant-purple shrink-0 group-hover:border-vibrant-purple transition-colors">
                    04
                </div>
<div class="flex-1">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-bold font-condensed uppercase italic text-white tracking-tighter">Insights with Confidence</h3>
<span class="text-[9px] font-mono text-vibrant-purple uppercase tracking-widest px-2 py-0.5 border border-vibrant-purple/30 bg-vibrant-purple/5">HONEST_OUTPUT</span>
</div>
<p class="text-sm font-light text-gray-400 leading-relaxed">Every insight comes with a confidence level. When data is insufficient, the system reports 'NO INFERENCE' rather than guessing.</p>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 bg-[#0a0a0b] border-t border-white/5">
<div class="max-w-[1600px] mx-auto px-6">
<div class="mb-20">
<h2 class="text-4xl font-bold mb-4 font-condensed uppercase italic tracking-tighter text-white">Trust, Privacy &amp; Governance</h2>
<p class="text-gray-500 font-mono text-sm uppercase tracking-widest">Global Security Policies</p>
</div>
<div class="grid md:grid-cols-4 gap-4">
<div class="command-panel p-8 rounded bg-white/[0.01]">
<h4 class="font-bold font-mono text-xs uppercase tracking-widest mb-6 text-white border-b border-white/5 pb-4">Forbidden_Data</h4>
<ul class="space-y-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
<li class="flex gap-2"><span class="text-vibrant-purple">×</span> Raw PPG waveforms</li>
<li class="flex gap-2"><span class="text-vibrant-purple">×</span> Continuous GPS</li>
<li class="flex gap-2"><span class="text-vibrant-purple">×</span> Voice recordings</li>
<li class="flex gap-2"><span class="text-vibrant-purple">×</span> Biometric Templates</li>
</ul>
</div>
<div class="command-panel p-8 rounded bg-white/[0.01]">
<h4 class="font-bold font-mono text-xs uppercase tracking-widest mb-6 text-white border-b border-white/5 pb-4">Protected_Set</h4>
<ul class="space-y-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
<li class="flex gap-2"><span class="text-emerald-500">○</span> AES-256 REST</li>
<li class="flex gap-2"><span class="text-emerald-500">○</span> EDGE_PRO_ONLY</li>
<li class="flex gap-2"><span class="text-emerald-500">○</span> NO_3RD_PARTY</li>
</ul>
</div>
<div class="command-panel p-8 rounded bg-white/[0.01]">
<h4 class="font-bold font-mono text-xs uppercase tracking-widest mb-6 text-white border-b border-white/5 pb-4">User_Control_Lvl</h4>
<ul class="space-y-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
<li class="flex gap-2"><span class="text-emerald-500">○</span> GRANULAR_CONSENT</li>
<li class="flex gap-2"><span class="text-emerald-500">○</span> INSTANT_REVOKE</li>
<li class="flex gap-2"><span class="text-emerald-500">○</span> DATA_PURGE_ALL</li>
</ul>
</div>
<div class="command-panel p-8 rounded bg-white/[0.01]">
<h4 class="font-bold font-mono text-xs uppercase tracking-widest mb-6 text-white border-b border-white/5 pb-4">Access_Matrix</h4>
<ul class="space-y-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
<li class="flex gap-2"><span class="text-emerald-500">○</span> ROLE_BASED_VIS</li>
<li class="flex gap-2"><span class="text-emerald-500">○</span> ATHLETE_APPROV</li>
<li class="flex gap-2"><span class="text-emerald-500">○</span> EMERGENCY_OVER</li>
</ul>
</div>
</div>
</div>
</section>
<section class="py-24 bg-[#0a0a0b] border-t border-white/5 relative overflow-hidden">
<div class="absolute inset-0 opacity-[0.05] pointer-events-none text-vibrant-purple font-mono text-[100px] leading-none uppercase italic font-black -rotate-12 select-none">
        Elite Science Elite Science Elite Science
    </div>
<div class="max-w-[1600px] mx-auto px-6 relative z-10">
<h3 class="text-center font-condensed text-4xl font-black uppercase italic italic text-white tracking-tighter mb-24">Built for the Highest Standards</h3>
<div class="grid md:grid-cols-3 gap-12">
<div class="command-panel p-10 rounded">
<span class="material-symbols-outlined text-4xl text-vibrant-purple mb-8">format_quote</span>
<p class="text-sm font-light italic leading-relaxed mb-8 text-gray-300">
                    "Finally, a system that tells me when it doesn't know something. That honesty changes everything about how I trust the data."
                </p>
<div class="border-t border-white/5 pt-6">
<div class="font-bold text-xs font-mono uppercase text-white">Performance Director</div>
<div class="text-[10px] text-vibrant-purple font-mono uppercase mt-1 tracking-widest">Elite Sports Program</div>
</div>
</div>
<div class="command-panel p-10 rounded">
<span class="material-symbols-outlined text-4xl text-vibrant-purple mb-8">format_quote</span>
<p class="text-sm font-light italic leading-relaxed mb-8 text-gray-300">
                    "The edge-first approach means my athletes' raw biometrics stay private. That's not just a feature — it's a requirement."
                </p>
<div class="border-t border-white/5 pt-6">
<div class="font-bold text-xs font-mono uppercase text-white">Head of Sports Science</div>
<div class="text-[10px] text-vibrant-purple font-mono uppercase mt-1 tracking-widest">Professional Team</div>
</div>
</div>
<div class="command-panel p-10 rounded">
<span class="material-symbols-outlined text-4xl text-vibrant-purple mb-8">format_quote</span>
<p class="text-sm font-light italic leading-relaxed mb-8 text-gray-300">
                    "I can clearly see what's inferred, what's measured, and what's uncertain. No other system gives me that transparency."
                </p>
<div class="border-t border-white/5 pt-6">
<div class="font-bold text-xs font-mono uppercase text-white">Senior Researcher</div>
<div class="text-[10px] text-vibrant-purple font-mono uppercase mt-1 tracking-widest">Sports Medicine Institute</div>
</div>
</div>
</div>
<div class="mt-20 bg-white/[0.02] border border-white/5 p-4 rounded flex items-center justify-center space-x-6 max-w-2xl mx-auto">
<div class="flex -space-x-3">
<div class="w-8 h-8 rounded-full bg-white/10 border border-charcoal"></div>
<div class="w-8 h-8 rounded-full bg-white/20 border border-charcoal"></div>
<div class="w-8 h-8 rounded-full bg-white/10 border border-charcoal"></div>
<div class="w-8 h-8 rounded-full bg-white/30 border border-charcoal"></div>
</div>
<span class="text-[10px] text-gray-500 font-mono uppercase tracking-widest">PEER_REVIEWED_COMPLIANCE // RESEARCH_STND_04</span>
</div>
</div>
</section>
<footer class="py-20 bg-[#050505] border-t border-white/5">
<div class="max-w-[1600px] mx-auto px-6 grid md:grid-cols-4 gap-16 text-[11px] font-mono tracking-widest uppercase">
<div>
<div class="flex items-center space-x-2 mb-8">
<div class="w-6 h-6 bg-vibrant-purple rounded flex items-center justify-center text-white font-bold text-[9px]">OS</div>
<span class="font-bold text-white tracking-tighter">OneSync_v2.0</span>
</div>
<p class="text-gray-600 leading-loose">
                Edge-first wearable intelligence. <br/>Privacy by design. <br/>Trust you can verify.
            </p>
</div>
<div>
<h5 class="font-bold text-white mb-8 border-b border-white/5 pb-2">Product.f32</h5>
<ul class="space-y-4 text-gray-500">
<li><a class="hover:text-vibrant-purple transition-colors" href="#">Terminal_Demo</a></li>
<li><a class="hover:text-vibrant-purple transition-colors" href="#">System_Spec</a></li>
<li><a class="hover:text-vibrant-purple transition-colors" href="#">Tech_Stack</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-white mb-8 border-b border-white/5 pb-2">Company.sh</h5>
<ul class="space-y-4 text-gray-500">
<li><a class="hover:text-vibrant-purple transition-colors" href="#">About_Us</a></li>
<li><a class="hover:text-vibrant-purple transition-colors" href="#">Privacy_Policy</a></li>
<li><a class="hover:text-vibrant-purple transition-colors" href="#">Contact_Endpoint</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-white mb-8 border-b border-white/5 pb-2">Legal.txt</h5>
<ul class="space-y-4 text-gray-500">
<li><a class="hover:text-vibrant-purple transition-colors" href="#">Terms_of_Svc</a></li>
<li><a class="hover:text-vibrant-purple transition-colors" href="#">Privacy_Layer_v1</a></li>
</ul>
</div>
</div>
<div class="max-w-[1600px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-mono text-gray-700 tracking-[0.4em] gap-4">
<p>© 2023 ONESYNC_CORP. [ALL_RIGHTS_RESERVED]</p>
<p>HASH: 0x933AEF910023BDCA</p>
</div>
</footer>

</body></html>