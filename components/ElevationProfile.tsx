"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ElevationDay } from "@/lib/pseo-data";
import { useState } from "react";

interface ElevationProfileProps {
  data: ElevationDay[];
}

const metersToFeet = (m: number) => Math.round(m * 3.28084);

export default function ElevationProfile({ data }: ElevationProfileProps) {
  const [hoveredDay, setHoveredDay] = useState<ElevationDay | null>(null);

  if (!data || data.length === 0) return null;

  const maxAlt = Math.max(...data.map(d => d.altitude), 5895);

  const width = 800;
  const height = 300;
  const padding = 40;

  const getX = (index: number) => padding + (index * (width - 2 * padding)) / (data.length - 1);
  const getY = (alt: number) => height - padding - ((alt - 1500) * (height - 2 * padding)) / (maxAlt - 1500);

  const points = data.map((d, i) => `${getX(i)},${getY(d.altitude)}`).join(" ");
  const areaPoints = `${points} ${getX(data.length - 1)},${height - padding} ${getX(0)},${height - padding}`;

  return (
    <LazyMotion features={domAnimation}>
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">Altitude Profile</h3>
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Waypoints & Acclimatization</p>
        </div>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-tighter">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-slate-400">Trek Path</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-slate-400">Summit (5,895m)</span>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] w-full">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="elevationGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid Lines */}
          {[2000, 3000, 4000, 5000].map(alt => (
            <g key={alt}>
              <line 
                x1={padding} 
                y1={getY(alt)} 
                x2={width - padding} 
                y2={getY(alt)} 
                stroke="#1e293b" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
              />
              <text 
                x={padding - 10} 
                y={getY(alt) + 4} 
                fill="#475569" 
                fontSize="10" 
                textAnchor="end"
                className="font-bold"
              >
                {alt}m
              </text>
            </g>
          ))}

          {/* Main Area */}
          <m.polyline
            points={areaPoints}
            fill="url(#elevationGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Path Line */}
          <m.polyline
            points={points}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Interaction Points */}
          {data.map((d, i) => (
            <g 
              key={i} 
              onMouseEnter={() => setHoveredDay(d)}
              onMouseLeave={() => setHoveredDay(null)}
              className="cursor-pointer"
            >
              <circle
                cx={getX(i)}
                cy={getY(d.altitude)}
                r="6"
                fill="#0f172a"
                stroke={hoveredDay?.day === d.day ? "#f59e0b" : "#475569"}
                strokeWidth="2"
                className="transition-all duration-200"
              />
              {hoveredDay?.day === d.day && (
                <m.circle
                  initial={{ r: 6, opacity: 1 }}
                  animate={{ r: 12, opacity: 0 }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  cx={getX(i)}
                  cy={getY(d.altitude)}
                  fill="#f59e0b"
                />
              )}
            </g>
          ))}
        </svg>

        {/* Tooltip Overlay */}
        {hoveredDay && (
          <div 
            className="absolute z-20 bg-slate-800 border border-amber-500/50 p-4 rounded-xl shadow-2xl pointer-events-none"
            style={{ 
              left: `${(getX(data.indexOf(hoveredDay)) / width) * 100}%`,
              top: `${(getY(hoveredDay.altitude) / height) * 100}%`,
              transform: 'translate(-50%, -120%)'
            }}
          >
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">Day {hoveredDay.day}</p>
            <p className="text-white font-bold text-sm mb-1">{hoveredDay.label}</p>
            <div className="flex gap-3 items-center">
              <span className="text-xl font-black text-white">{hoveredDay.altitude}m</span>
              <span className="text-slate-500 text-xs font-medium">/ {metersToFeet(hoveredDay.altitude)} ft</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center bg-slate-800/30 p-4 rounded-xl border border-slate-800/50">
        <div className="flex gap-8">
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Max Altitude</p>
            <p className="text-white font-black text-lg">5,895m</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Vertical Gain</p>
            <p className="text-white font-black text-lg">~{5895 - data[0].altitude}m</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-amber-500/50 font-bold uppercase tracking-widest mb-1">Acclimatization Key</p>
          <p className="text-slate-300 text-xs max-w-[200px]">Look for the dips in the chart - these represent 'Climb High, Sleep Low' days.</p>
        </div>
      </div>
    </div>
    </LazyMotion>
  );
}
