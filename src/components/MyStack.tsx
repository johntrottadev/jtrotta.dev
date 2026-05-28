import { resumeData } from "@/data/resume";

const itemColors: Record<string, string> = {
  "Claude Code":
    "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
  PAI: "bg-violet-100 text-violet-800 border-violet-200 hover:bg-violet-200",
  GSD: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
  "LLM-Wiki": "bg-sky-100 text-sky-800 border-sky-200 hover:bg-sky-200",
  "VS Code": "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200",
};

export default function MyStack() {
  return (
    <section id="stack" className="py-6 sm:py-8 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          What I Build With
        </h2>
        <p className="text-gray-600 mb-4 max-w-2xl">
          The core of what makes me productive. The rest of my stack lives in
          GitHub.
        </p>

        <div className="flex flex-wrap gap-2">
          {resumeData.stack.map((item) => {
            const color =
              itemColors[item.name] ??
              "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200";
            const className = `inline-block px-3 py-1.5 text-sm font-medium rounded-md border transition-colors ${color}`;

            return item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {item.name}
              </a>
            ) : (
              <span key={item.name} className={className}>
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
