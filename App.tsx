
import React from 'react';
import { 
  Linkedin, 
  Mail, 
  ChevronRight, 
  ExternalLink, 
  MapPin,
  MessageSquare,
  // Add missing icons used in the component
  Database,
  Award,
  GraduationCap
} from 'lucide-react';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import { 
  HERO_STATS, 
  SNAPSHOT_CARDS, 
  EXPERIENCES, 
  SKILL_CATEGORIES, 
  PROJECTS, 
  EDUCATION 
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Senior Product Lead & AI Strategist</h2>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Shahriar Jahan <span className="text-slate-500">Rafi</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-lg font-light leading-relaxed">
                  Driving innovation at the intersection of <span className="text-slate-200 font-medium">Product Management</span>, 
                  <span className="text-slate-200 font-medium"> Data Science</span>, and <span className="text-slate-200 font-medium">Education</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all flex items-center gap-2 group">
                  View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </a>
                <a href="mailto:contact@shahriarrafi.com" className="p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-slate-300" />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
                {HERO_STATS.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 opacity-60 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold font-heading text-slate-100">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative z-10 p-8 glass rounded-[3rem] w-full max-w-md aspect-square flex flex-col justify-center items-center gap-6 overflow-hidden">
                {/* Abstract Data Viz Decoration */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,_rgba(34,211,238,0.2)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
                </div>
                <div className="w-48 h-48 rounded-full border-4 border-cyan-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-[-10px] border border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="w-32 h-32 rounded-full border-2 border-cyan-500/50 flex items-center justify-center">
                    <Database className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-cyan-400 font-bold text-2xl font-heading">Data-Driven</div>
                  <div className="text-slate-400 text-sm">Strategic decision making powered by machine learning and behavioral analytics.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROFESSIONAL SNAPSHOT */}
        <section id="about" className="py-20 px-6 bg-[#0F172A]/50">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold font-heading">Core Expertise</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Blending technical depth with business strategy to build products that matter.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SNAPSHOT_CARDS.map((card, idx) => (
                <div key={idx} className="p-8 glass rounded-3xl hover:border-cyan-500/40 transition-all group">
                  <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-4 font-heading">{card.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map((item, i) => (
                      <span key={i} className="text-[11px] px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCE TIMELINE */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="sticky top-32 h-fit">
              <h2 className="text-4xl font-bold mb-6 font-heading">Career Impact</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Over a decade of leadership across technology, education, and R&D. My focus is always on measurable results and human-centric design.
              </p>
              <div className="p-6 glass rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-sm font-medium">36.87% Growth Catalyst</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <span className="text-sm">Scalability Focused</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <span className="text-sm">Agile Methodology</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 relative">
              <div className="absolute left-0 top-0 w-px h-full bg-slate-800 ml-[18px]"></div>
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className="absolute left-0 top-2 w-10 h-10 glass rounded-full flex items-center justify-center border-slate-700 z-10 group-hover:border-cyan-500/50 transition-colors bg-[#0B1220]">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  </div>
                  <div className="p-8 glass rounded-3xl space-y-4 group-hover:translate-x-2 transition-transform">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold font-heading">{exp.title}</h3>
                        <p className="text-cyan-400/80 text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-slate-800 rounded-full text-slate-500">{exp.period}</span>
                    </div>
                    <div className="space-y-3 pt-2">
                      {exp.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                          <span className="mt-1 text-cyan-500">{bullet.icon}</span>
                          <span>{bullet.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TEACHING IMPACT */}
        <section className="py-20 px-6 bg-cyan-500/5 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-12 h-1 text-cyan-500 bg-cyan-500 rounded-full mb-4"></div>
              <h2 className="text-4xl font-bold font-heading">Academic & Mentorship Footprint</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Specialized in simplifying complex technical concepts into real-world understanding. Mentoring the next generation of data scientists and machine learning engineers.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="p-3 glass rounded-xl">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-bold text-slate-100">National & International Experience</div>
                  <div className="text-sm text-slate-500">Collaborating with global institutions.</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 glass rounded-3xl text-center space-y-2">
                  <div className="text-3xl font-bold font-heading text-cyan-400">5,000+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Students Mentored</div>
               </div>
               <div className="p-8 glass rounded-3xl text-center space-y-2 translate-y-8">
                  <div className="text-3xl font-bold font-heading text-cyan-400">9+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Years Teaching</div>
               </div>
               <div className="p-8 glass rounded-3xl text-center space-y-2">
                  <div className="text-3xl font-bold font-heading text-cyan-400">10+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Institutions</div>
               </div>
               <div className="p-8 glass rounded-3xl text-center space-y-2 translate-y-8">
                  <div className="text-3xl font-bold font-heading text-cyan-400">40+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Curriculums Designed</div>
               </div>
            </div>
          </div>
        </section>

        {/* 5. SKILLS SECTION */}
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Technical Stack</h2>
            <p className="text-slate-400">Continuous learning and specialization across the modern stack.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2 border-l-2 border-cyan-500/50">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="px-4 py-2 glass rounded-xl text-sm font-medium hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PROJECTS SECTION */}
        <section id="projects" className="py-20 px-6 bg-[#0F172A]/30">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold font-heading">Featured Works</h2>
                <p className="text-slate-400">Showcasing depth across product, research, and data science.</p>
              </div>
              <button className="flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all">
                See all research <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="p-10 glass rounded-[2.5rem] group hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading mb-2">{project.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{project.outcome}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-tighter px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-8 flex justify-end">
                    <button className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-500 hover:text-slate-100 transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. EDUCATION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Credentials</h2>
            <p className="text-slate-400">Academic foundation and executive training.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-8 glass rounded-3xl flex items-start gap-6 group hover:bg-white/[0.05] transition-colors">
                <div className="mt-1 p-3 glass rounded-xl border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                  <GraduationCap className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">{edu.title}</h3>
                  <p className="text-slate-300 font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-slate-500">{edu.info}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FOOTER */}
        <footer id="contact" className="pt-20 pb-10 px-6 border-t border-slate-800 bg-[#0B1220]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold font-heading tracking-tighter">Let's build <br/><span className="text-cyan-400">something great.</span></h2>
                <div className="flex gap-6">
                  <a href="https://linkedin.com" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin /></a>
                  <a href="mailto:contact@shahriarrafi.com" className="text-slate-400 hover:text-cyan-400 transition-colors"><Mail /></a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><MessageSquare /></a>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-slate-400 text-lg">Currently available for strategic product consultation, research collaborations, and senior leadership roles.</p>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Dhaka, Bangladesh — Remote & Onsite</span>
                </div>
                <a href="mailto:contact@shahriarrafi.com" className="inline-block px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-cyan-400 transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-800 text-slate-500 text-sm gap-4">
              <div>&copy; {new Date().getFullYear()} Shahriar Jahan Rafi. All rights reserved.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Project Index</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div id="scroll-progress" className="h-full bg-cyan-500 transition-all duration-100 ease-out" style={{ width: '0%' }}></div>
      </div>
      
      <script>
        {`
          window.addEventListener('scroll', () => {
            const h = document.documentElement, 
                  b = document.body,
                  st = 'scrollTop',
                  sh = 'scrollHeight';
            const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
            document.getElementById('scroll-progress').style.width = percent + '%';
          });
        `}
      </script>
    </div>
  );
};

export default App;