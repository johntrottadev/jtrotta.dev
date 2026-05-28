import { resumeData } from "@/data/resume";

export default function Press() {
  if (resumeData.press.length === 0) return null;

  const uniquePublications = Array.from(
    new Set(resumeData.press.map((p) => p.publication))
  );
  const singlePublication =
    uniquePublications.length === 1 ? uniquePublications[0] : null;

  return (
    <section id="press" className="py-6 sm:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Press
        </h2>
        {singlePublication && (
          <p className="text-sm text-gray-500 mb-4">
            All from {singlePublication}
          </p>
        )}

        <ul className="divide-y divide-section-border border-y border-section-border">
          {resumeData.press.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-4 hover:bg-section-bg transition-colors -mx-2 px-2 rounded"
              >
                <div className="flex-1 min-w-0">
                  {!singlePublication && (
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {item.publication}
                    </p>
                  )}
                  <p
                    className={`text-base sm:text-lg text-gray-900 group-hover:text-accent transition-colors ${
                      !singlePublication ? "mt-1" : ""
                    }`}
                  >
                    {item.title}
                    <span
                      className="inline-block ml-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </p>
                </div>
                <p className="text-sm text-gray-500 shrink-0">{item.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
