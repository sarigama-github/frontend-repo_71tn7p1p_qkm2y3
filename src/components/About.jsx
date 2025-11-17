export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet Hesham Hamdy</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I am a Senior Digital Marketing Specialist, Front-End Designer, and Digital Marketing Instructor with over 12 years of experience. Driven by an insatiable passion for digital knowledge, I’ve cultivated a wide range of skills in the digital marketing field and related areas such as web design, development, and graphic design.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Over the past few years, I’ve successfully managed and coordinated all phases of both the creative and technical aspects of digital marketing— including ads management, content strategy, branding, lead generation, viral marketing, affiliate marketing, ROI analysis, and more.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="px-3 py-1 rounded-full bg-slate-100">12+ years experience</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Cross-platform expertise</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Hands-on mentorship</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
                alt="Hesham Hamdy portrait placeholder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-600/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
