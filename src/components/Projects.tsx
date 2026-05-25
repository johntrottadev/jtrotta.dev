import { resumeData } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resumeData.projects.map((project) => (
            <div
              key={project.name}
              className="group p-6 sm:p-8 bg-section-bg rounded-xl border border-section-border hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
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
