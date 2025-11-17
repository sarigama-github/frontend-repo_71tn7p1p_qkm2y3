import { CheckCircle2 } from 'lucide-react';

const Section = ({ title, items }) => (
  <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition">
    <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((text, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-700">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-transparent" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What You’ll Learn</h2>
          <p className="mt-4 text-slate-600">A comprehensive, platform-by-platform journey from fundamentals to advanced optimization.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Section title="Introduction to Media Buying" items={[
            'What media buying is and why it matters',
            'Role of a media buyer: strategy, execution, optimization',
            'Platforms overview: Snapchat, Meta, TikTok, Google',
          ]} />

          <Section title="Module 1: Snapchat Ads Media Buying" items={[
            'Ecosystem overview and audience insights',
            'Ads Manager basics and campaign structure',
            'Ad formats: Snap, Story, Collection, Lenses',
            'Targeting: demographics, interests, custom audiences',
            'Optimization and performance measurement',
          ]} />

          <Section title="Module 2: Meta Ads (Facebook & Instagram)" items={[
            'Ads Manager & Business Suite walkthrough',
            'Objectives & bidding: awareness, conversions, installs',
            'Core, Custom, and Lookalike audiences',
            'Creative best practices and Pixel/CAPI tracking',
            'Budgeting, scheduling, and ROI analysis',
          ]} />

          <Section title="Module 3: TikTok Ads Management" items={[
            'Platform overview and demographics',
            'Campaign setup and ad formats',
            'Targeting and audience segmentation',
            'Creative tips tailored for TikTok',
            'Optimization, tracking, and case studies',
          ]} />

          <Section title="Module 4: Google Ads Media Buying" items={[
            'Search, Display, and YouTube fundamentals',
            'Campaign types, objectives, and keyword strategy',
            'Display targeting and ad formats',
            'Bidding strategies and conversion tracking',
            'Analytics integration and data-driven optimization',
          ]} />

          <Section title="Module 5: Advanced Strategies" items={[
            'Cross-platform management and attribution',
            'AI and automation tools in media buying',
            'Dynamic retargeting and nurturing',
            'Smart budget allocation for maximum ROI',
            'Troubleshooting and emerging trends',
          ]} />

          <Section title="Final Project & Certification" items={[
            'Build and optimize a live cross-platform campaign',
            'Evaluation on performance and strategy',
            'Official certification of proficiency',
          ]} />
        </div>
      </div>
    </section>
  );
}
