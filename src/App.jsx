import { motion } from "framer-motion";
import { useState, useEffect } from "react";



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        {/* ================= NAVBAR ================= */}
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2"
              : "bg-transparent py-4"
            }`}
        >

          <div className="max-w-6xl mx-auto px-6 py-4 relative flex items-center">

            {/* Logo (left) */}
            <h1 className="font-bold text-blue-600 absolute left-6">
              
            </h1>

            {/* Centered Nav Links */}
            <div className="mx-auto flex items-center space-x-6 text-sm font-bold font-xlarge">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-3 py-1 rounded-md border text-sm hover:bg-blue-50 dark:hover:bg-gray-800 absolute right-6"
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>

          </div>
        </motion.nav>


        {/* ================= HERO ================= */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex items-center px-6 bg-white dark:bg-gray-800 pt-24"
        >
          <div className="max-w-6xl mx-auto px-6 relative flex items-center">


            {/* LEFT SIDE — TEXT */}
            <div className="text-center md:text-left">

              <p className="text-blue-600 font-medium tracking-wide mb-3">
                Aspiring Software Engineer
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-blue-600">Saaqib A</span> 👋
              </h1>

              <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 mb-8">
                I build scalable web applications and AI-driven solutions with a
                strong foundation in SDLC, distributed systems, and modern
                software engineering practices.
              </p>

              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <a
                  href="/Saaqib_Resume.pdf"
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Download Resume
                </a>

                <a href="https://github.com/devsaaqib" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/saaqib-veltech/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — PHOTO */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/profile.jpg"
                alt="Saaqib A"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-blue-600 shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
              />

            </div>

          </div>
        </motion.section>


        {/* ================= ABOUT ================= */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 py-20"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg">
              I am an aspiring Associate Software Engineer with strong exposure
              to SDLC, distributed systems, and scalable web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
              With hands-on experience in web development, AI-based projects,
              and mentoring roles, I focus on continuous learning and building
              production-ready solutions.
            </p>
          </div>
        </motion.section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="bg-slate-50 dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center">Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {[
                ["Programming", "Python, Java, C"],
                ["Web Technologies", "HTML, CSS, JavaScript"],
                ["AI & ML", "TensorFlow, Scikit-learn, Pandas"],
                ["Tools & IDEs", "Git, GitHub, VS Code, Eclipse"],
                ["Soft Skills", "Leadership, Mentoring, Communication"],
                ["Other Skills", "Agile, SDLC, Cybersecurity Awareness"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="p-6 rounded-xl border bg-white dark:bg-gray-800 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="bg-white dark:bg-gray-800 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {[
                {
                  title: "MindWellCare",
                  tech: "Python, HTML, CSS, JavaScript",
                  points: [
                    "Scalable mental healthcare platform",
                    "Secure, data-driven workflows",
                    "Research-based development",
                  ],
                },
                {
                  title: "MedAdh",
                  tech: "Python, LSTM, Machine Learning",
                  points: [
                    "AI-based medical adherence system",
                    "Optimized accuracy & efficiency",
                    "Deep learning prediction model",
                  ],
                },
                {
                  title: "CommuneVerse",
                  tech: "Python, Node.js, Web",
                  points: [
                    "AI-powered social bot",
                    "Node.js interactive UI",
                    "Professional networking logic",
                  ],
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="bg-slate-50 dark:bg-gray-900 rounded-xl p-6 border hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside mb-4">
                    {project.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <p className="text-sm font-medium text-blue-600">
                    Tech: {project.tech}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="bg-slate-50 dark:bg-gray-900 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Experience & Education
            </h2>

            <div className="border-l-2 border-blue-600 pl-8 space-y-10">
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Web Development Tutor</strong> — Go Girl Organisation<br />
                <span className="text-sm">Apr 2025 – Present</span>
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                <strong>Frontend Developer Trainee</strong> — Eagle Tech IT Solutions<br />
                <span className="text-sm">May 2024 – Jun 2024</span>
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                <strong>Python Instructor</strong> — Cybeorg Education Technology<br />
                <span className="text-sm">Sep 2024 – Present</span>
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                <strong>B.Tech Computer Science</strong> — Vel Tech University<br />
                <span className="text-sm">GPA: 8.5</span>
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
