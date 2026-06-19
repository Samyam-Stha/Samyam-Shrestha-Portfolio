

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
}

const CERTIFICATIONS: Certificate[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "July 2025",
    verifyUrl: "https://www.mygreatlearning.com/certificate/JJPNIORC",
  },
  {
    id: 2,
    title: "Introduction to Javascript",
    issuer: "Great Learning",
    issueDate: "",
    verifyUrl: "https://www.mygreatlearning.com/certificate/QGPXCILG",
  },
  {
    id: 3,
    title: "Frontend Development",
    issuer: "Great Learning",
    issueDate: "",
    verifyUrl: "https://www.freecodecamp.org/certification/samyam_shrestha/responsive-web-design",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-28">
      <div className="flex flex-col mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Qualifications</span>
        <h3 className="text-4xl font-extrabold text-text">Certifications</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="group bg-card border border-border rounded-3xl p-6 hover:border-primary/50 hover:shadow-[0_10px_35px_-15px_rgba(79,70,229,0.25)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>

              <h4 className="text-lg font-bold text-text mb-2 group-hover:text-heading-text transition-colors duration-300">
                {cert.title}
              </h4>

              <p className="text-primary text-sm font-semibold mb-4">{cert.issuer}</p>

              <div className="space-y-1 text-xs text-muted mb-6">
                {cert.issueDate && (
                  <p>Issued: <span className="font-medium text-text">{cert.issueDate}</span></p>
                )}
                {cert.credentialId && (
                  <p>Credential ID: <span className="font-mono text-text">{cert.credentialId}</span></p>
                )}
              </div>
            </div>

            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-border bg-muted/5 text-sm text-text font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              Verify Certificate
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
