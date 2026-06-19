
export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-28">
      <div className="flex flex-col mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
          Get In Touch
        </span>
        <h3 className="text-4xl font-extrabold text-text">Contact Me</h3>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
          <div className="space-y-4 pt-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samyamsth2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-115 transition-transform duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <p className="text-xs text-muted font-medium">Email Me</p>
                  <p className="text-sm font-bold text-text">
                    samyamsth2@gmail.com
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-115 transition-transform duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <p className="text-xs text-muted font-medium">
                    Contact Number
                  </p>
                  <p className="text-sm font-bold text-text">+977 9860538128</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-text"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-text"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-text"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Hi Samyam, I'd love to work with you on..."
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <p className="text-success text-center text-sm font-medium animate-pulse">
                ✓ Message sent successfully! I will get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-danger text-center text-sm font-medium animate-shake">
                ✗ Please fill in all fields before sending.
              </p>
            )}
          </form>
        </div> */}
      </div>
    </section>
  );
}
