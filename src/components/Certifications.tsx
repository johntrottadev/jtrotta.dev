import { resumeData } from "@/data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert) => (
            <div
              key={cert.abbreviation}
              className="flex items-start gap-4 p-6 bg-section-bg rounded-xl border border-section-border"
            >
              <div className="shrink-0 w-14 h-14 bg-accent/10 text-accent rounded-lg flex items-center justify-center font-bold text-sm">
                {cert.abbreviation}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
