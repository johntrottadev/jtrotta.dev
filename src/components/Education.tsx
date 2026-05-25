import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Education
        </h2>

        {resumeData.education.map((edu) => (
          <div
            key={edu.institution}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-section-border max-w-2xl"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.institution}
            </h3>
            <p className="text-accent font-medium mt-1">{edu.school}</p>
            <p className="text-gray-700 mt-3">
              {edu.degree}, {edu.field}
            </p>
            <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
