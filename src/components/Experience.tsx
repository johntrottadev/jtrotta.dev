import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Experience
        </h2>

        <div className="space-y-8">
          {resumeData.experience.map((job, index) => (
            <div
              key={`${job.company}-${job.role}`}
              className={`relative ${
                index < resumeData.experience.length - 1
                  ? "pb-8 border-b border-section-border"
                  : ""
              }`}
            >
              {/* Role header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {job.role}
                  </h3>
                  <p className="text-accent font-medium mt-1">{job.company}</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:text-right shrink-0">
                  <p className="text-sm text-gray-600 font-medium">
                    {job.period}
                  </p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>

              {/* Description */}
              {job.description && (
                <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
                  {job.description}
                </p>
              )}

              {/* Bullets */}
              {job.bullets.length > 0 && (
                <ul className="space-y-3">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
