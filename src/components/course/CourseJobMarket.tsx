"use client";

import { useState } from "react";
import { TrendingUp, Globe, BarChart3 } from "lucide-react";

const jobGrowthData = [
  { year: "2024", jobs: 11000, display: "11,000+" },
  { year: "2025", jobs: 13500, display: "13,500+" },
  { year: "2026", jobs: 16500, display: "16,500+" },
  { year: "2027", jobs: 20000, display: "20,000+" },
  { year: "2028", jobs: 24000, display: "24,000+" },
  { year: "2029", jobs: 28800, display: "28,800+" },
  { year: "2030", jobs: 34500, display: "34,500+" },
];

const careerPaths = [
  { name: "Oracle SCM Trainee",                  value: 11, color: "#10b981" },
  { name: "Junior SCM Functional Consultant",     value: 11, color: "#14b8a6" },
  { name: "SCM Business Analyst",                 value: 11, color: "#06b6d4" },
  { name: "Oracle SCM Functional Consultant",     value: 12, color: "#0ea5e9" },
  { name: "SCM Implementation Specialist",        value: 11, color: "#3b82f6" },
  { name: "Oracle SCM Cloud Consultant",          value: 11, color: "#6366f1" },
  { name: "Oracle Fusion SCM Lead",               value: 11, color: "#8b5cf6" },
  { name: "Oracle SCM Solution Architect",        value: 11, color: "#a855f7" },
  { name: "ERP Implementation Manager",           value: 11, color: "#d946ef" },
];

// ── Chart constants ────────────────────────────────────────────────
const SVG_W = 500, SVG_H = 300;
const PAD_L = 65, PAD_R = 20, PAD_T = 20, PAD_B = 38;
const CHART_W = SVG_W - PAD_L - PAD_R; // 415
const CHART_H = SVG_H - PAD_T - PAD_B; // 242
const MAX_JOBS = 36000;
const BRAND_SKY = "#0ea5e9";

const yTicks = [0, 9000, 18000, 27000, 36000];

function xPos(i: number) {
  return PAD_L + (i / (jobGrowthData.length - 1)) * CHART_W;
}
function yPos(jobs: number) {
  return PAD_T + (1 - jobs / MAX_JOBS) * CHART_H;
}

// Smooth cubic bezier path (approximates recharts "monotone")
function smoothLinePath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const tension = 0.4;
    const dx = (pts[i + 1].x - pts[i].x) * tension;
    const cp1x = pts[i].x + dx;
    const cp2x = pts[i + 1].x - dx;
    d += ` C ${cp1x.toFixed(1)},${pts[i].y.toFixed(1)} ${cp2x.toFixed(1)},${pts[i + 1].y.toFixed(1)} ${pts[i + 1].x.toFixed(1)},${pts[i + 1].y.toFixed(1)}`;
  }
  return d;
}

const chartPoints = jobGrowthData.map((d, i) => ({ ...d, x: xPos(i), y: yPos(d.jobs) }));
const linePath = smoothLinePath(chartPoints);
const areaPath =
  linePath +
  ` L ${chartPoints[chartPoints.length - 1].x.toFixed(1)},${(PAD_T + CHART_H).toFixed(1)}` +
  ` L ${chartPoints[0].x.toFixed(1)},${(PAD_T + CHART_H).toFixed(1)} Z`;

// ── Donut helpers ──────────────────────────────────────────────────
function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function sectorPath(
  cx: number, cy: number,
  ir: number, or: number,
  startDeg: number, endDeg: number
): string {
  const so = polar(cx, cy, or, startDeg);
  const eo = polar(cx, cy, or, endDeg);
  const si = polar(cx, cy, ir, startDeg);
  const ei = polar(cx, cy, ir, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return (
    `M ${so.x.toFixed(3)} ${so.y.toFixed(3)} ` +
    `A ${or} ${or} 0 ${large} 1 ${eo.x.toFixed(3)} ${eo.y.toFixed(3)} ` +
    `L ${ei.x.toFixed(3)} ${ei.y.toFixed(3)} ` +
    `A ${ir} ${ir} 0 ${large} 0 ${si.x.toFixed(3)} ${si.y.toFixed(3)} Z`
  );
}

const donutCx = 100, donutCy = 100;
const innerR = 50, outerR = 75;
const PAD_DEG = 1; // half of recharts paddingAngle=2
const totalVal = careerPaths.reduce((s, c) => s + c.value, 0);

let cumDeg = 0;
const donutSegments = careerPaths.map((c) => {
  const startDeg = (cumDeg / totalVal) * 360 + PAD_DEG;
  cumDeg += c.value;
  const endDeg = (cumDeg / totalVal) * 360 - PAD_DEG;
  return { ...c, startDeg, endDeg };
});

// ── Component ──────────────────────────────────────────────────────
export default function CourseJobMarket() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [tooltip, setTooltip] = useState<{
    x: number; y: number; data: (typeof chartPoints)[0];
  } | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-foreground mb-4 text-3xl">
            Estimated Oracle Fusion SCM Job Growth (2024-2030)
          </h2>
        </div>

        {/* Chart + Donut */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">

          {/* ── SVG Area Chart ─────────────────────────────────── */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full"
              style={{ height: "300px" }}
              onMouseLeave={() => setTooltip(null)}
            >
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={BRAND_SKY} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={BRAND_SKY} stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines + Y labels */}
              {yTicks.map((v) => {
                const y = yPos(v);
                return (
                  <g key={v}>
                    <line
                      x1={PAD_L} y1={y} x2={SVG_W - PAD_R} y2={y}
                      style={{ stroke: "hsl(var(--border))", strokeDasharray: "3 3", strokeWidth: 1 }}
                    />
                    <text
                      x={PAD_L - 8} y={y + 4}
                      textAnchor="end"
                      fontSize={11}
                      style={{ fill: "hsl(var(--muted-foreground))" }}
                    >
                      {v === 0 ? "0" : v.toLocaleString()}
                    </text>
                  </g>
                );
              })}

              {/* X axis baseline */}
              <line
                x1={PAD_L} y1={PAD_T + CHART_H} x2={SVG_W - PAD_R} y2={PAD_T + CHART_H}
                style={{ stroke: "hsl(var(--border))", strokeWidth: 1 }}
              />

              {/* Gradient area fill */}
              <path d={areaPath} fill="url(#skyGrad)" />

              {/* Line */}
              <path
                d={linePath}
                fill="none"
                stroke={BRAND_SKY}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {chartPoints.map((p) => (
                <g
                  key={p.year}
                  onMouseEnter={() => setTooltip({ x: p.x, y: p.y, data: p })}
                  style={{ cursor: "pointer" }}
                >
                  {/* Hit area */}
                  <circle cx={p.x} cy={p.y} r={14} fill="transparent" />
                  {/* Dot */}
                  <circle
                    cx={p.x} cy={p.y} r={5}
                    fill={BRAND_SKY}
                    stroke="white"
                    strokeWidth={2}
                    style={{ filter: "drop-shadow(0 1px 3px rgba(14,165,233,0.4))" }}
                  />
                  {/* X label */}
                  <text
                    x={p.x} y={PAD_T + CHART_H + 22}
                    textAnchor="middle"
                    fontSize={11}
                    style={{ fill: "hsl(var(--muted-foreground))" }}
                  >
                    {p.year}
                  </text>
                </g>
              ))}

              {/* Tooltip */}
              {tooltip && (
                <g>
                  <rect
                    x={tooltip.x - 44}
                    y={tooltip.y - 44}
                    width={88}
                    height={36}
                    rx={6}
                    style={{
                      fill: "hsl(var(--card))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 1,
                      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
                    }}
                  />
                  <text
                    x={tooltip.x} y={tooltip.y - 27}
                    textAnchor="middle"
                    fontSize={10}
                    fontWeight="600"
                    style={{ fill: BRAND_SKY }}
                  >
                    {tooltip.data.year}
                  </text>
                  <text
                    x={tooltip.x} y={tooltip.y - 15}
                    textAnchor="middle"
                    fontSize={11}
                    style={{ fill: "hsl(var(--foreground))" }}
                  >
                    {tooltip.data.display}
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* ── SVG Donut + Legend ──────────────────────────────── */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-1 text-center">
              Career Paths You Can Explore
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-4">Hover to discover roles</p>

            <div className="flex items-center gap-4">
              {/* SVG Donut */}
              <div className="flex-shrink-0">
                <svg viewBox="0 0 200 200" width={180} height={180}>
                  {donutSegments.map((seg, idx) => {
                    const isActive = activeIndex === idx;
                    const ir = isActive ? innerR - 4 : innerR;
                    const or = isActive ? outerR + 8 : outerR;
                    return (
                      <path
                        key={idx}
                        d={sectorPath(donutCx, donutCy, ir, or, seg.startDeg, seg.endDeg)}
                        fill={seg.color}
                        opacity={activeIndex === undefined || isActive ? 1 : 0.4}
                        style={{
                          cursor: "pointer",
                          transition: "opacity 0.2s ease",
                          filter: isActive
                            ? "drop-shadow(0 4px 12px rgba(0,0,0,0.2))"
                            : undefined,
                          outline: "none",
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(undefined)}
                      />
                    );
                  })}
                  {/* Center text */}
                  <text
                    x={donutCx} y={donutCy - 6}
                    textAnchor="middle"
                    fontSize={22}
                    fontWeight="700"
                    style={{ fill: "hsl(var(--foreground))" }}
                  >
                    9+
                  </text>
                  <text
                    x={donutCx} y={donutCy + 12}
                    textAnchor="middle"
                    fontSize={11}
                    style={{ fill: "hsl(var(--muted-foreground))" }}
                  >
                    Roles
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-1.5 max-h-[200px] overflow-y-auto pr-2">
                {donutSegments.map((seg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeIndex === idx
                        ? "bg-muted scale-[1.02]"
                        : activeIndex === undefined
                        ? "hover:bg-muted/50"
                        : "opacity-40"
                    }`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseLeave={() => setActiveIndex(undefined)}
                  >
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0 transition-transform duration-200"
                      style={{
                        backgroundColor: seg.color,
                        transform: activeIndex === idx ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                    <span
                      className={`text-xs font-medium leading-tight transition-colors ${
                        activeIndex === idx ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {seg.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          <div className="bg-card rounded-xl p-6 border border-border shadow-lg text-center group hover:border-brand-sky/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-brand-sky/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7 text-brand-sky" />
            </div>
            <p className="text-4xl font-bold text-foreground mb-2">&#8377;6-14LPA</p>
            <p className="text-muted-foreground">Average Salary Range</p>
          </div>

          <div className="bg-brand-sky rounded-xl p-6 text-center group hover:bg-brand-sky/90 transition-all shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <p className="text-4xl font-bold text-white mb-2">20-22%</p>
            <p className="text-white/80">Annual Growth Rate</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border shadow-lg text-center group hover:border-brand-sky/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-brand-sky/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 text-brand-sky" />
            </div>
            <p className="text-4xl font-bold text-foreground mb-2">Global</p>
            <p className="text-muted-foreground">Job Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
