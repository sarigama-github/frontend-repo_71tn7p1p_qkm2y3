import { useEffect, useMemo, useState } from 'react';
import { Send, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience_level: 'Beginner',
    goals: '',
    platforms: [],
    timezone: '',
    preferred_times: [],
    consent: true,
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setForm((f) => ({ ...f, timezone: tz }));
    } catch {}
  }, []);

  const timeOptions = useMemo(
    () => [
      'Weekday Mornings',
      'Weekday Afternoons',
      'Weekday Evenings',
      'Weekend Mornings',
      'Weekend Afternoons',
      'Weekend Evenings',
    ],
    []
  );

  const platformOptions = ['Snapchat Ads', 'Meta Ads', 'TikTok Ads', 'Google Ads'];

  const updateField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const toggleArrayValue = (key, value) => {
    setForm((f) => {
      const arr = new Set(f[key]);
      arr.has(value) ? arr.delete(value) : arr.add(value);
      return { ...f, [key]: Array.from(arr) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Submission failed');
      setStatus({ loading: false, success: 'Application received! I will reach out shortly.', error: null });
      setForm({
        name: '', email: '', phone: '', experience_level: 'Beginner', goals: '', platforms: [], timezone: form.timezone, preferred_times: [], consent: true,
      });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' });
    }
  };

  return (
    <section id="apply" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-600/10 text-blue-700 p-2">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Book your one-to-one program</h2>
              <p className="text-slate-600 mt-1">Share your details and preferred times. I’ll get back to you to schedule the first session.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><User className="h-4 w-4" /> Full Name</label>
              <input required value={form.name} onChange={(e) => updateField('name', e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Mail className="h-4 w-4" /> Email</label>
              <input required type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Phone className="h-4 w-4" /> Phone/WhatsApp</label>
              <input value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+20 ..." />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium text-slate-700">Experience Level</label>
              <select value={form.experience_level} onChange={(e) => updateField('experience_level', e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {['Beginner','Intermediate','Advanced'].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">What are your goals?</label>
              <textarea value={form.goals} onChange={(e) => updateField('goals', e.target.value)} rows={3} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Launch profitable TikTok campaigns, scale ROAS on Meta..." />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">Platforms of interest</label>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {platformOptions.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => toggleArrayValue('platforms', p)}
                    className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${form.platforms.includes(p) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <label className="text-sm font-medium text-slate-700">Timezone</label>
              <input value={form.timezone} onChange={(e) => updateField('timezone', e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium text-slate-700">Preferred times</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {timeOptions.map((t) => (
                  <label key={t} className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${form.preferred_times.includes(t) ? 'border-blue-600 bg-blue-50' : 'border-slate-200'}`}>
                    <input type="checkbox" checked={form.preferred_times.includes(t)} onChange={() => toggleArrayValue('preferred_times', t)} />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input id="consent" type="checkbox" checked={form.consent} onChange={(e) => updateField('consent', e.target.checked)} />
              <label htmlFor="consent" className="text-sm text-slate-600">I agree to be contacted about my application.</label>
            </div>

            <div className="md:col-span-2 flex items-center gap-4">
              <button disabled={status.loading} type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 disabled:opacity-60">
                <Send className="h-4 w-4" />
                {status.loading ? 'Submitting...' : 'Submit Application'}
              </button>
              {status.success && (
                <div className="flex items-center gap-2 text-emerald-700 text-sm"><CheckCircle2 className="h-5 w-5" /> {status.success}</div>
              )}
              {status.error && (
                <div className="text-red-600 text-sm">{status.error}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
