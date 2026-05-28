import { resumeData } from "@/data/resume";

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
          {resumeData.stack.map((item) =>
            item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 text-sm font-medium rounded-md border bg-violet-100 text-violet-800 border-violet-200 hover:bg-violet-200 transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <span
                key={item.name}
                className="inline-block px-3 py-1.5 text-sm font-medium rounded-md border bg-violet-100 text-violet-800 border-violet-200"
              >
                {item.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
