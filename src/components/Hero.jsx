import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle, Twitter, Instagram, Facebook, LineChart, BadgeDollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Updated Spline: abstract dashboard/analytics vibe */}
        <Spline scene="https://prod.spline.design/1uQyQpK5P1WQxk5b/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient + vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/40 to-white/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.6)_100%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl backdrop-blur-sm bg-white/60 border border-white/70 rounded-2xl p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 px-3 py-1 rounded-full mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Media Buying • Multi-Platform • ROI Focused
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Master Paid Media Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Snapchat, Meta, TikTok & Google</span>
            </h1>
            <p className="mt-5 text-slate-700 text-lg md:text-xl">
              One-to-one coaching with Hesham Hamdy. Build profitable campaigns, read analytics, and scale results with confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 items-center">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100"> <LineChart className="h-3.5 w-3.5 text-blue-600"/> Analytics</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100"> <BadgeDollarSign className="h-3.5 w-3.5 text-emerald-600"/> ROAS</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100"> <Facebook className="h-3.5 w-3.5 text-blue-700"/> Meta</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100"> <Instagram className="h-3.5 w-3.5 text-pink-600"/> Instagram</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100"> <Twitter className="h-3.5 w-3.5 text-sky-500"/> TikTok</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition">
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#curriculum" className="inline-flex items-center gap-2 rounded-xl bg-white/80 text-slate-900 px-6 py-3 font-semibold border border-slate-200 hover:bg-white transition">
                <PlayCircle className="h-5 w-5 text-blue-600" />
                Explore the Curriculum
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Live, 1:1 mentorship</span>
              <span className="opacity-50">•</span>
              <span>Real campaigns & dashboards</span>
              <span className="opacity-50">•</span>
              <span>Official certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
