import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for contrast (doesn't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl backdrop-blur-sm bg-white/50 border border-white/60 rounded-2xl p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/70 px-3 py-1 rounded-full mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              One-to-One Coaching • Hands-on, results-focused
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Media Buying Mastery with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Hesham Hamdy</span>
            </h1>
            <p className="mt-5 text-slate-700 text-lg md:text-xl">
              A personalized, practical program to master Snapchat, Meta, TikTok, and Google Ads — from strategy to profitable execution.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#enroll" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition">
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
