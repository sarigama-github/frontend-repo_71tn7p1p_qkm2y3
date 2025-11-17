import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import About from './components/About';
import CTA from './components/CTA';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">Hesham Hamdy</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#curriculum" className="hover:text-slate-900">Curriculum</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#apply" className="hover:text-slate-900">Enroll</a>
          </nav>
          <a href="#apply" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Apply</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Curriculum />
        <About />
        <CTA />
        <LeadForm />
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 border-t">
        © {new Date().getFullYear()} Hesham Hamdy — Media Buying Mastery
      </footer>
    </div>
  );
}

export default App;
