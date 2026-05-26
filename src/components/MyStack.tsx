import { resumeData } from "@/data/resume";

const categoryOrder = [
  "AI",
  "Infrastructure",
  "Monitoring",
  "Operations",
  "Networking",
  "Dev Tools",
  "Self-Hosted Apps",
];

const categoryColors: Record<string, string> = {
  AI: "bg-violet-100 text-violet-800 border-violet-200",
  Infrastructure: "bg-blue-100 text-blue-800 border-blue-200",
  Monitoring: "bg-amber-100 text-amber-800 border-amber-200",
  Operations: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Networking: "bg-cyan-100 text-cyan-800 border-cyan-200",
  "Dev Tools": "bg-slate-100 text-slate-800 border-slate-200",
  "Self-Hosted Apps": "bg-rose-100 text-rose-800 border-rose-200",
};

export default function MyStack() {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: resumeData.stack.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="stack" className="py-16 sm:py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          My Stack
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          The tools and platforms I use daily — from AI-assisted development to a
          fully GitOps-managed homelab running 25+ services on bare metal.
        </p>

        <div className="space-y-8">
          {grouped.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`inline-block px-3 py-1.5 text-sm font-medium rounded-md border ${
                      categoryColors[item.category] ??
                      "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
