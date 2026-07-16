"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const LEFT_NODES = [
  { x: 38, y: 32, label: "Excel" },
  { x: 125, y: 26, label: "Paper Files" },
  { x: 222, y: 34, label: "Emails" },

  { x: 42, y: 82, label: "WhatsApp" },
  { x: 140, y: 78, label: "Phone Calls" },
  { x: 235, y: 88, label: "Approvals" },

  { x: 34, y: 140, label: "CRM" },
  { x: 126, y: 145, label: "Inventory" },
  { x: 220, y: 146, label: "Invoices" },

  { x: 55, y: 205, label: "Accounting" },
  { x: 170, y: 198, label: "Payroll" },

  { x: 36, y: 265, label: "Machines" },
  { x: 132, y: 260, label: "Sales" },
  { x: 232, y: 260, label: "Marketing" },

  { x: 52, y: 318, label: "Reports" },
  { x: 170, y: 320, label: "Customers" },
];

const RIGHT_NODES = [
  { x: 130, y: 55, label: "AI" },

  { x: 60, y: 100, label: "CRM" },
  { x: 200, y: 100, label: "ERP" },

  { x: 32, y: 160, label: "HRMS" },
  { x: 95, y: 160, label: "Finance" },
  { x: 165, y: 160, label: "Inventory" },
  { x: 228, y: 160, label: "Sales" },

  { x: 32, y: 225, label: "Website" },
  { x: 95, y: 225, label: "Mobile" },
  { x: 165, y: 225, label: "Automation" },
  { x: 228, y: 225, label: "Analytics" },

  { x: 60, y: 290, label: "IoT" },
  { x: 130, y: 315, label: "Cloud" },
  { x: 200, y: 290, label: "APIs" },
];

const RIGHT_EDGES: Array<[number, number]> = [
  [0, 1],
  [0, 2],

  [1, 3],
  [1, 4],

  [2, 5],
  [2, 6],

  [3, 7],
  [4, 8],
  [5, 9],
  [6, 10],

  [7, 11],
  [8, 12],
  [9, 12],
  [10, 13],

  [11, 12],
  [12, 13],
];

export function BeforeAfter() {
  const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "before-after" });
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });

  const leftOpacity = useTransform(scrollYProgress, [0.15, 0.55], [1, 0.35]);
  const leftDesat = useTransform(scrollYProgress, [0.15, 0.55], [1, 0]);
  const leftFilter = useTransform(leftDesat, (v) => `saturate(${v})`);
  const rightReveal = useTransform(scrollYProgress, [0.25, 0.65], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="bg-[color:var(--surface)] py-24 lg:py-32"
    >
      <div ref={anchor} className="container-page">
        <SectionHeader
          eyebrow="The Transformation"
          title="From Fragmented to Fully Connected."
          description="The same business, before and after. One is chaotic and manual. The other is one intelligent system."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          {/* LEFT — Before */}
          <motion.div
            style={reduced ? undefined : { opacity: leftOpacity, filter: leftFilter }}
            className="rounded-3xl border border-red-500/15 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8 overflow-hidden relative"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Before
            </p>

            <h3 className="mt-2 text-xl font-semibold text-foreground">Fragmented Operations</h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Business information lives everywhere—spreadsheets, WhatsApp, emails, machines,
              paperwork and disconnected software. Teams spend more time searching, updating and
              reconciling data than actually growing the business.
            </p>
            <div className="relative mt-6 h-[360px] w-full">
              <svg viewBox="0 0 260 350" className="h-full w-full">
                {/* random disconnected lines */}

                {[
                  [0, 4],
                  [1, 6],
                  [2, 5],
                  [3, 7],
                  [8, 12],
                  [9, 10],
                  [11, 13],
                  [6, 14],
                  [5, 15],
                  [4, 8],
                  [2, 9],
                ].map(([a, b], i) => (
                  <line
                    key={i}
                    x1={LEFT_NODES[a].x}
                    y1={LEFT_NODES[a].y}
                    x2={LEFT_NODES[b].x}
                    y2={LEFT_NODES[b].y}
                    stroke="oklch(0.6 0.01 250)"
                    strokeDasharray="5 5"
                    opacity={0.35}
                  />
                ))}

                {LEFT_NODES.map((n, index) => (
                  <g key={index}>
                    {/* shadow */}

                    <rect
                      x={n.x - 26}
                      y={n.y - 11}
                      width={52}
                      height={24}
                      rx={6}
                      fill="rgba(255,255,255,.02)"
                    />

                    {/* border */}

                    <rect
                      x={n.x - 26}
                      y={n.y - 11}
                      width={52}
                      height={24}
                      rx={6}
                      fill="none"
                      stroke="oklch(0.58 0.01 250)"
                      strokeOpacity=".45"
                      strokeDasharray="3 3"
                    />

                    {/* red status dot */}

                    <circle cx={n.x - 18} cy={n.y} r={2.5} fill="#ef4444" />

                    <text
                      x={n.x + 2}
                      y={n.y + 4}
                      fontSize="9"
                      textAnchor="middle"
                      fill="oklch(0.55 0.01 250)"
                      fontFamily="var(--font-sans)"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
                  Operational Inefficiency
                </span>

                <span className="text-xs text-red-300">Multiple disconnected systems</span>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Data scattered across disconnected tools</li>
              <li>• Manual approvals and repetitive work</li>
              <li>• Duplicate entries and inconsistent records</li>
              <li>• Limited operational visibility</li>
              <li>• Slow reporting and delayed decisions</li>
              <li>• Missed sales opportunities</li>
              <li>• Difficult to scale operations</li>
              <li>• Departments work in isolation</li>
            </ul>
          </motion.div>

          {/* RIGHT — After */}
          <div className="rounded-3xl border border-primary/20 bg-card p-6 shadow-[var(--shadow-card-hover)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">After</p>

            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Unified Intelligent Ecosystem
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every department, employee, customer, machine and software system works through one
              intelligent platform. AI automates repetitive work, connects data across the
              organization and provides real-time insights for faster, better decisions.
            </p>
            <div className="relative mt-6 h-[360px] w-full">
              <svg viewBox="0 0 260 350" className="h-full w-full">
                <defs>
                  <radialGradient id="coreGlow">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
                    <stop offset="65%" stopColor="var(--primary)" stopOpacity=".25" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* animated edges */}

                {RIGHT_EDGES.map(([a, b], i) => {
                  const pa = RIGHT_NODES[a];
                  const pb = RIGHT_NODES[b];

                  return (
                    <motion.line
                      key={i}
                      x1={pa.x}
                      y1={pa.y}
                      x2={pb.x}
                      y2={pb.y}
                      stroke="var(--primary)"
                      strokeWidth="1.4"
                      strokeOpacity=".45"
                      strokeLinecap="round"
                      style={{
                        pathLength: rightReveal,
                      }}
                    />
                  );
                })}

                {/* glowing center */}
                

                <motion.circle
                  cx="130"
                  cy="55"
                  r="32"

                  fill="url(#coreGlow)"

                  animate={{
                    scale: [1, 1.08, 1],
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                />

                {RIGHT_NODES.map((node, index) => (
                  <RightNode
                    key={index}

                    node={node}

                    index={index}

                    progress={rightReveal}

                    reduced={!!reduced}
                  />
                ))}
              </svg>
            </div>

            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Connected Ecosystem
                </span>

                <span className="text-xs text-primary/80">Everything works together</span>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Every department connected</li>
              <li>• One centralized business platform</li>
              <li>• AI-powered automation across operations</li>
              <li>• Real-time dashboards and analytics</li>
              <li>• Connected cloud, APIs and IoT devices</li>
              <li>• Faster workflows with fewer errors</li>
              <li>• Better customer experiences</li>
              <li>• Built to grow and scale effortlessly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RightNode({
  node,

  index,

  progress,

  reduced,
}: {
  node: {
    x: number;
    y: number;
    label: string;
  };

  index: number;

  progress: any;

  reduced: boolean;
}) {
  const threshold = 0.28 + index * 0.035;

  const opacity = useTransform(progress, [threshold - 0.12, threshold], [0.1, 1]);

  const scale = useTransform(
    progress,
    [threshold - 0.12, threshold, threshold + 0.08],
    [0.65, 1.18, 1],
  );

  const isCore = index === 0;

  if (isCore) {
    return (
      <motion.g
        style={
          reduced
            ? undefined
            : {
                opacity,
                scale,
                transformOrigin: `${node.x}px ${node.y}px`,
              }
        }
      >
        <rect x={75} y={35} width={110} height={42} rx={10} fill="var(--primary)" />

        <text x={130} y={52} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
          Centralized
        </text>

        <text x={130} y={65} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
          Intelligent System
        </text>
      </motion.g>
    );
  }

  return (
    <motion.g
      style={
        reduced
          ? undefined
          : {
              opacity,
              scale,
              transformOrigin: `${node.x}px ${node.y}px`,
            }
      }
    >
      <rect
        x={node.x - 18}

        y={node.y - 10}

        rx="5"

        width="36"

        height="20"

        fill="rgba(255,255,255,.04)"

        stroke="var(--primary)"

        strokeOpacity=".35"
      />

      <circle
        cx={node.x - 12}

        cy={node.y}

        r="2.5"

        fill="var(--primary)"
      />

      <text
        x={node.x + 3}

        y={node.y + 4}

        fontSize="8.5"

        textAnchor="middle"

        fill="white"
      >
        {node.label}
      </text>
    </motion.g>
  );
}
