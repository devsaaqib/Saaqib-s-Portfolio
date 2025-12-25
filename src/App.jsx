import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen animated-gradient
      bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-800 dark:text-gray-100">


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
          <div className="max-w-6xl mx-auto px-6 relative flex items-center">


            {/* Logo */}
            <h1 className="font-bold text-blue-600 text-lg">
              
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-lg font-semibold mx-auto">

              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="absolute right-6 px-4 py-2 rounded-md border text-base font-medium hover:bg-blue-50 dark:hover:bg-gray-800"
              >

                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t px-6 py-4 space-y-4 text-center">
              <a onClick={() => setMenuOpen(false)} href="#about" className="block">About</a>
              <a onClick={() => setMenuOpen(false)} href="#skills" className="block">Skills</a>
              <a onClick={() => setMenuOpen(false)} href="#projects" className="block">Projects</a>
              <a onClick={() => setMenuOpen(false)} href="#experience" className="block">Experience</a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-2 px-3 py-1 rounded-md border"
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          )}
        </motion.nav>

        {/* ================= HERO ================= */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex items-center pt-24 bg-white dark:bg-gray-800"
        >
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-blue-600 font-medium mb-3">
                Aspiring Software Engineer
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-blue-600">Saaqib A</span> 👋
              </h1>

              <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 mb-8">
                I build scalable web applications and AI-driven solutions with a
                strong foundation in SDLC and distributed systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/Saaqib_Resume.pdf"
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Download Resume
                </a>

                <a
                  href="https://github.com/devsaaqib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/saaqib-veltech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src="/profile.jpg"
                alt="Saaqib A"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover border-2 border-blue-600 shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Aspiring software engineer with hands-on experience in web
              development, AI projects, and mentoring roles.
            </p>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center">Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                ["Programming", "Python, Java, C"],
                ["Web", "HTML, CSS, JavaScript"],
                ["AI & ML", "TensorFlow, Scikit-learn, Pandas"],
                ["Tools", "Git, GitHub, VS Code"],
                ["Soft Skills", "Leadership, Communication"],
                ["Other", "Agile, SDLC"],
              ].map(([title, desc]) => (
                <div key={title} className="p-6 rounded-xl border bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ================= PROJECTS ================= */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 py-20"
        >

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-semibold mb-12 text-center">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-gray-900 rounded-xl p-6 border hover:shadow-lg transition backdrop-blur-sm"
              >

                <h3 className="text-xl font-semibold mb-3">MindWellCare</h3>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside mb-4">
                  <li>Scalable mental healthcare web platform</li>
                  <li>Secure, data-driven patient adherence workflows</li>
                  <li>Research-based system design</li>
                </ul>
                <p className="text-sm font-medium text-blue-600">
                  Tech: Python, HTML, CSS, JavaScript
                </p>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-gray-900 rounded-xl p-6 border hover:shadow-lg transition backdrop-blur-sm"
              >

                <h3 className="text-xl font-semibold mb-3">MedAdh</h3>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside mb-4">
                  <li>AI-based medical adherence prediction system</li>
                  <li>LSTM-based deep learning model</li>
                  <li>Optimized accuracy and resource usage</li>
                </ul>
                <p className="text-sm font-medium text-blue-600">
                  Tech: Python, LSTM, Machine Learning
                </p>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-gray-900 rounded-xl p-6 border hover:shadow-lg transition backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3">CommuneVerse</h3>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside mb-4">
                  <li>AI-powered social interaction bot</li>
                  <li>Node.js-based interactive UI</li>
                  <li>Professional networking logic</li>
                </ul>
                <p className="text-sm font-medium text-blue-600">
                  Tech: Python, Node.js, HTML, CSS, JavaScript
                </p>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="bg-slate-50 dark:bg-gray-900 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Experience & Education
            </h2>

            <div className="border-l-2 border-blue-600 pl-8 space-y-10">

              <div>
                <h3 className="text-xl font-semibold">
                  Web Development Tutor — Go Girl Organisation
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Apr 2025 – Present
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Conducted frontend training sessions, mentored students,
                  evaluated performance, and supported onboarding workflows
                  in a structured technical education environment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Front-End Developer Trainee — Eagle Tech IT Solutions
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  May 2024 – Jun 2024
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Built responsive web pages using HTML, CSS, and JavaScript,
                  collaborated using Git/GitHub, and gained exposure to SDLC
                  and deployment practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Python Instructor — Cybeorg Education Technology
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sep 2024 – Present
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Delivered Python training, conducted assessments, mock
                  interviews, and guided students on structured problem
                  solving and professional communication.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  B.Tech Computer Science — Vel Tech University
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2022 – Present
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  GPA: 8.5 | Focus on infrastructure solutions, systems design,
                  and strategic application development.
                </p>
              </div>

            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default App;
