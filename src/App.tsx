import { ArrowDownToLine, Github, Linkedin, Mail, Send, ShieldCheck, Terminal } from 'lucide-react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import {
  about,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from './data/portfolio';

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-signal ring-1 ring-teal-200 dark:bg-teal-950/50 dark:text-teal-200 dark:ring-teal-800">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cloud text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-200">
      <Header />
      <main>
        <section id="summary" className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.18),transparent_34%),linear-gradient(135deg,rgba(249,115,22,0.12),transparent_35%)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-signal shadow-sm dark:border-teal-900 dark:bg-slate-900/80 dark:text-teal-200">
                Cloud infrastructure, automation, and modern deployment practices
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-5 text-2xl font-semibold text-signal dark:text-teal-300">{profile.role}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                DevOps engineer building secure, scalable, highly available systems with CI/CD, Docker, Kubernetes, AWS, OCI, Python, shell scripting, and ML workflow automation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 font-semibold text-white transition hover:bg-teal-800">
                  <Send size={18} />
                  Get in Touch
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-signal px-5 py-3 font-semibold text-signal transition hover:bg-teal-50 dark:text-teal-200 dark:hover:bg-teal-950/40"
                >
                  <ArrowDownToLine size={18} />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                <Terminal className="text-ember" />
                <span className="font-mono text-sm text-slate-500 dark:text-slate-400">devops-profile.yml</span>
              </div>
              <dl className="grid gap-5 text-sm">
                {[
                  ['Cloud', 'AWS, OCI, cloud infrastructure'],
                  ['DevOps', 'Kubernetes, Docker, GitHub Actions, CI/CD, Terraform'],
                  ['Automation', 'Python, shell scripting, ML workflows'],
                  ['Focus', 'Secure, scalable, production-ready systems'],
                ].map(([term, value]) => (
                  <div key={term} className="grid gap-1">
                    <dt className="font-semibold text-slate-950 dark:text-white">{term}</dt>
                    <dd className="text-slate-600 dark:text-slate-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" muted>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group) => (
              <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="mb-4 text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <article className="max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{experience.title}</h3>
                <p className="font-semibold text-signal dark:text-teal-300">
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {experience.company}
                  </a>
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{experience.period}</p>
            </div>
            <ul className="grid gap-3 text-slate-600 dark:text-slate-300">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-signal dark:text-teal-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </Section>

        <Section id="projects" title="Projects" muted>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-700 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
               <div className="mt-6 flex flex-wrap gap-2">
  {project.tags.map((tag) => (
    <Pill key={tag}>{tag}</Pill>
  ))}
</div>

{'github' in project && project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block rounded-md bg-signal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
  >
    View Project
  </a>
)}
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <article className="max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{education.degree}</h3>
                <p className="font-semibold text-signal dark:text-teal-300">{education.school}</p>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{education.graduation}</p>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{education.focus}</p>
          </article>
        </Section>

        <Section id="certifications" title="Certifications" muted>
          <div className="max-w-4xl space-y-4">
            {certifications.map((certification) => (
              <article key={certification.title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <ShieldCheck className="mt-1 h-6 w-6 flex-none text-signal dark:text-teal-300" />
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{certification.title}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{certification.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="languages" title="Languages">
          <div className="grid max-w-3xl gap-4 sm:grid-cols-3">
            {languages.map(([language, level]) => (
              <article key={language} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-bold text-slate-950 dark:text-white">{language}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{level}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get in Touch" muted>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Contact Information</h3>
              <div className="mt-6 grid gap-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-signal hover:text-teal-800 dark:text-teal-300">
                  <Mail size={18} />
                  {profile.email}
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-signal hover:text-teal-800 dark:text-teal-300">
                  <Github size={18} />
                  {profile.githubLabel}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-signal hover:text-teal-800 dark:text-teal-300">
                  <Linkedin size={18} />
                  {profile.linkedinLabel}
                </a>
                <a href={profile.tryHackMe} target="_blank" rel="noopener noreferrer" className="text-signal hover:text-teal-800 dark:text-teal-300">
                  {profile.tryHackMeLabel}
                </a>
              </div>
            </div>
            <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950" action={`mailto:${profile.email}`} method="post" encType="text/plain">
              <div className="grid gap-5">
                {['Name', 'Email', 'Subject'].map((label) => (
                  <label key={label} className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {label}
                    <input
                      required
                      type={label === 'Email' ? 'email' : 'text'}
                      name={label.toLowerCase()}
                      className="rounded-md border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-signal focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-teal-950"
                    />
                  </label>
                ))}
                <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="resize-none rounded-md border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-signal focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-teal-950"
                  />
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 font-semibold text-white transition hover:bg-teal-800">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Section>
      </main>
      <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Cloud infrastructure, containerization, and automation specialist.</p>
        </div>
      </footer>
    </div>
  );
}
