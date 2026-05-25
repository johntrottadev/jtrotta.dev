import { resumeData } from "@/data/resume";

export default function Contact() {
  const { contact } = resumeData;

  return (
    <footer id="contact" className="bg-hero-bg text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div>
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">
              Email
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="text-accent hover:text-white transition-colors"
            >
              {contact.email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">
              Phone
            </h3>
            <a
              href={`tel:${contact.phone}`}
              className="text-accent hover:text-white transition-colors"
            >
              {contact.phone}
            </a>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">
              Location
            </h3>
            <p className="text-slate-300">{contact.location}</p>
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap gap-6 mb-12">
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            {contact.linkedin}
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            {contact.github}
          </a>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {contact.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
