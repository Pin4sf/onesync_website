"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Brain,
  Heart,
  Moon,
  Sparkles,
  Battery,
  Wifi,
  Signal,
  Home,
  BarChart3,
  User,
  TrendingUp,
  TrendingDown,
  Zap,
  Target,
  Clock,
  ChevronRight,
  Activity,
  Flame,
  Droplets,
} from "lucide-react";

// ============================================
// SHARED COMPONENTS
// ============================================

function CircularProgress({
  value,
  size = 120,
  strokeWidth = 8,
  animate = true,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(16, 185, 129, 0.15)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#emeraldGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={animate ? { strokeDashoffset: circumference } : { strokeDashoffset: offset }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MiniChart({ data, color = "#10b981" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-0.5 h-8">
      {data.map((value, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${((value - min) / range) * 100}%` }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="w-1.5 rounded-full"
          style={{ backgroundColor: color, minHeight: 4, opacity: 0.3 + (i / data.length) * 0.7 }}
        />
      ))}
    </div>
  );
}

// ============================================
// DASHBOARD SCREEN
// ============================================

function DashboardScreen({ onCardTap }: { onCardTap?: (card: string) => void }) {
  const cognitiveScore = 87;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full overflow-y-auto scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Greeting */}
      <div className="mb-3">
        <p className="text-gray-400 text-xs">Good morning</p>
        <h2 className="text-white text-lg font-semibold">Alex</h2>
      </div>

      {/* Hero Metric - Cognitive Score */}
      <motion.div
        className="flex flex-col items-center py-4 mb-3 cursor-pointer"
        whileTap={{ scale: 0.98 }}
        onClick={() => onCardTap?.("cognitive")}
      >
        <p className="text-gray-400 text-[10px] mb-2 uppercase tracking-wider">Cognitive Score</p>
        <div className="relative">
          <CircularProgress value={cognitiveScore} size={120} strokeWidth={8} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{cognitiveScore}</span>
            <span className="text-gray-500 text-[10px]">/100</span>
          </div>
        </div>
        <div className="mt-2 px-3 py-1 bg-emerald-500/20 rounded-full">
          <span className="text-emerald-400 text-[10px] font-medium">Peak Performance</span>
        </div>
      </motion.div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { icon: Heart, label: "Stress", value: "Low", trend: "down", color: "text-green-400" },
          { icon: Brain, label: "Focus", value: "High", trend: "up", color: "text-emerald-400" },
          { icon: Moon, label: "Sleep", value: "7.5h", trend: "up", color: "text-blue-400" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCardTap?.(stat.label.toLowerCase())}
            className="bg-white/5 rounded-xl p-2.5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-1 mb-1">
              <stat.icon className="w-3 h-3 text-gray-400" />
              <span className="text-[9px] text-gray-400 uppercase">{stat.label}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`text-sm font-semibold ${stat.color}`}>{stat.value}</span>
              {stat.trend === "up" ? (
                <TrendingUp className="w-3 h-3 text-green-400" />
              ) : (
                <TrendingDown className="w-3 h-3 text-green-400" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Today's Activity */}
      <div className="bg-white/5 rounded-xl p-3 border border-white/10 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">Today&apos;s Activity</span>
          <span className="text-[10px] text-emerald-400">View all</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Flame, value: "420", label: "cal", color: "text-orange-400" },
            { icon: Activity, value: "6,842", label: "steps", color: "text-blue-400" },
            { icon: Droplets, value: "1.2L", label: "water", color: "text-cyan-400" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className={`w-4 h-4 mx-auto mb-1 ${item.color}`} />
              <p className="text-white text-sm font-semibold">{item.value}</p>
              <p className="text-gray-500 text-[9px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Quick Insight */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => onCardTap?.("ai")}
        className="mt-auto bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl p-3 border border-emerald-500/20 cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-emerald-400 text-[10px] font-medium">AI Insight</span>
          <ChevronRight className="w-3 h-3 text-emerald-400 ml-auto" />
        </div>
        <p className="text-gray-300 text-xs leading-relaxed">
          Your focus peaks at <span className="text-emerald-400 font-medium">10am</span>. That&apos;s your sharpest window today.
        </p>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// INSIGHTS SCREEN
// ============================================

function InsightsScreen() {
  const weeklyData = [65, 72, 68, 85, 78, 92, 87];
  const insights = [
    {
      icon: Target,
      title: "Optimal Focus Window",
      description: "Your cognitive performance peaks between 9-11am. This is when you make your best decisions.",
      type: "tip",
    },
    {
      icon: Moon,
      title: "Sleep Pattern Detected",
      description: "You've been sleeping 45min later than usual. This correlates with 12% lower morning focus.",
      type: "warning",
    },
    {
      icon: Zap,
      title: "Recovery Recommendation",
      description: "Based on your HRV, a 20-min afternoon break would boost your evening energy by ~18%.",
      type: "action",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full overflow-y-auto scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-white text-lg font-semibold">AI Insights</h2>
        <p className="text-gray-400 text-xs">Personalized recommendations</p>
      </div>

      {/* Weekly Trend */}
      <div className="bg-white/5 rounded-xl p-3 border border-white/10 mb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">Weekly Cognitive Trend</span>
          <span className="text-emerald-400 text-xs font-medium">+12%</span>
        </div>
        <div className="flex items-end justify-between h-16 px-1">
          {weeklyData.map((value, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${value * 0.5}px` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-5 rounded-t-md ${i === weeklyData.length - 1 ? "bg-emerald-500" : "bg-emerald-500/40"}`}
              />
              <span className="text-[8px] text-gray-500">
                {["M", "T", "W", "T", "F", "S", "S"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights List */}
      <div className="flex-1 space-y-2 overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {insights.map((insight, i) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className={`p-3 rounded-xl border cursor-pointer ${
              insight.type === "warning"
                ? "bg-amber-500/10 border-amber-500/20"
                : insight.type === "action"
                ? "bg-blue-500/10 border-blue-500/20"
                : "bg-white/5 border-white/10"
            }`}
          >
            <div className="flex items-start gap-2">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  insight.type === "warning"
                    ? "bg-amber-500/20"
                    : insight.type === "action"
                    ? "bg-blue-500/20"
                    : "bg-emerald-500/20"
                }`}
              >
                <insight.icon
                  className={`w-4 h-4 ${
                    insight.type === "warning"
                      ? "text-amber-400"
                      : insight.type === "action"
                      ? "text-blue-400"
                      : "text-emerald-400"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xs font-medium mb-0.5">{insight.title}</h3>
                <p className="text-gray-400 text-[10px] leading-relaxed">{insight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}

// ============================================
// PROFILE SCREEN
// ============================================

function ProfileScreen() {
  const stats = [
    { label: "Days Tracked", value: "127" },
    { label: "Avg Score", value: "82" },
    { label: "Insights", value: "48" },
  ];

  const settings = [
    { icon: Clock, label: "Reminders", value: "On" },
    { icon: Target, label: "Daily Goal", value: "85+" },
    { icon: Zap, label: "Sync", value: "Auto" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full overflow-y-auto scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Profile Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
          <span className="text-white text-lg font-bold">A</span>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold">Alex Johnson</h2>
          <p className="text-gray-400 text-xs">Premium Member</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
            <p className="text-white text-xl font-bold">{stat.value}</p>
            <p className="text-gray-400 text-[9px] uppercase">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Device Status */}
      <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl p-3 border border-emerald-500/20 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/30 flex items-center justify-center">
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-white text-xs font-medium">OneBand Pro</p>
              <p className="text-emerald-400 text-[10px]">Connected</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white text-xs font-medium">78%</p>
            <p className="text-gray-400 text-[10px]">Battery</p>
          </div>
        </div>
      </div>

      {/* Quick Settings */}
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        {settings.map((setting, i) => (
          <motion.div
            key={setting.label}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-between p-3 cursor-pointer hover:bg-white/5 ${
              i < settings.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <setting.icon className="w-4 h-4 text-gray-400" />
              <span className="text-white text-xs">{setting.label}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-xs">{setting.value}</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sign Out */}
      <div className="mt-auto py-2.5 bg-white/5 rounded-xl text-gray-500 text-xs font-medium border border-white/10 text-center opacity-50 cursor-not-allowed">
        Sign Out
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN APP PREVIEW COMPONENT
// ============================================

type Screen = "dashboard" | "insights" | "profile";

export function AppPreview() {
  const [activeScreen, setActiveScreen] = useState<Screen>("dashboard");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const navItems: { id: Screen; icon: React.ComponentType<{ className?: string }>; label: string }[] = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "insights", icon: BarChart3, label: "Insights" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardScreen onCardTap={(card) => card === "ai" && setActiveScreen("insights")} />;
      case "insights":
        return <InsightsScreen />;
      case "profile":
        return <ProfileScreen />;
    }
  };

  return (
    <div ref={containerRef} className="flex justify-center">
      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Outer glow effect */}
        <div className="absolute -inset-4 bg-emerald-500/20 rounded-[52px] blur-2xl opacity-50" />

        {/* Phone body - scales down on mobile */}
        <div className="relative w-[240px] h-[500px] sm:w-[280px] sm:h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] sm:rounded-[44px] p-1.5 sm:p-2 shadow-2xl border border-gray-700/50">
          {/* Inner bezel effect */}
          <div className="absolute inset-1.5 sm:inset-2 rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-gray-700/30 to-transparent pointer-events-none" />

          {/* Screen */}
          <div className="relative w-full h-full bg-[#0a0a0f] rounded-[32px] sm:rounded-[36px] overflow-hidden flex flex-col">
            {/* Dynamic Island */}
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 sm:h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-800" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
            </div>

            {/* Status Bar */}
            <div className="h-10 sm:h-12 px-4 sm:px-6 flex items-center justify-between text-white z-10 flex-shrink-0">
              <span className="text-[10px] sm:text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <Wifi className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <Battery className="w-3.5 sm:w-4 h-3 sm:h-3.5" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="flex-1 px-3 sm:px-4 pb-2 overflow-hidden">
              <AnimatePresence mode="wait">
                {renderScreen()}
              </AnimatePresence>
            </div>

            {/* Bottom Navigation */}
            <div className="h-14 sm:h-16 px-3 sm:px-4 pb-3 sm:pb-4 flex-shrink-0">
              <div className="h-full bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-around px-1 sm:px-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveScreen(item.id)}
                    className={`flex flex-col items-center gap-0.5 py-1 sm:py-1.5 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors ${
                      activeScreen === item.id ? "bg-emerald-500/20" : ""
                    }`}
                  >
                    <item.icon
                      className={`w-4 sm:w-5 h-4 sm:h-5 ${
                        activeScreen === item.id ? "text-emerald-400" : "text-gray-400"
                      }`}
                    />
                    <span
                      className={`text-[8px] sm:text-[9px] ${
                        activeScreen === item.id ? "text-emerald-400" : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reflection effect */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-gradient-to-t from-emerald-500/10 to-transparent blur-xl rounded-full" />
      </motion.div>
    </div>
  );
}
