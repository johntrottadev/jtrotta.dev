import { resumeData } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.projects.map((project) => {
            const cardClass =
              "group p-4 sm:p-5 bg-section-bg rounded-lg border border-section-border hover:border-accent/30 transition-colors block";
            const content = (
              <>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  {project.url && (
                    <span
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm shrink-0"
                      aria-hidden="true"
                    >
                      View on GitHub →
                    </span>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-600">Tech: </span>
                  {project.technologies}
                </p>
              </>
            );

            return project.url ? (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {content}
              </a>
            ) : (
              <div key={project.name} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
