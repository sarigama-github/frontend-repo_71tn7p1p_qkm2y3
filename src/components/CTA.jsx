import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="enroll" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to Master Media Buying?</h2>
          <p className="mt-4 text-slate-700 text-lg">
            Apply for the one-to-one program and get personalized guidance on real campaigns.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-500">Format</p>
              <p className="font-semibold text-slate-900">1:1 Live Sessions</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-500">Duration</p>
              <p className="font-semibold text-slate-900">Multi-week, flexible</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-500">Certification</p>
              <p className="font-semibold text-slate-900">Official Certificate</p>
            </div>
          </div>

          <a
            href="https://forms.gle/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-4 text-xs text-slate-500">
            Limited seats to ensure high-impact mentorship
          </p>
        </div>
      </div>
    </section>
  );
}
