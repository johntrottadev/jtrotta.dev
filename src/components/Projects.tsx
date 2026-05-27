import { resumeData } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.projects.map((project) => (
            <div
              key={project.name}
              className="group p-4 sm:p-5 bg-section-bg rounded-lg border border-section-border hover:border-accent/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-600">Tech: </span>
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
