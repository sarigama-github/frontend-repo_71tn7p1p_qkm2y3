import { useEffect, useMemo, useState } from 'react';
import { Shield, RefreshCw, Search, Mail, Phone, CalendarClock, Globe } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function AdminPanel() {
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [leads, setLeads] = useState([]);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return leads;
    const q = query.toLowerCase();
    return leads.filter((l) =>
      [l.name, l.email, l.phone, l.experience_level, l.goals, (l.platforms||[]).join(','), (l.preferred_times||[]).join(','), l.timezone]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [leads, query]);

  const fetchLeads = async () => {
    if (!BACKEND_URL) {
      setError('Backend URL not configured');
      return;
    }
    setLoading(true); setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads?limit=200`, {
        headers: key ? { 'X-Admin-Key': key } : {}
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Failed to load');
      setLeads(data.results || []);
    } catch (e) {
      setError(e.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_key');
    if (saved) setKey(saved);
  }, []);

  useEffect(() => {
    if (key) sessionStorage.setItem('admin_key', key);
  }, [key]);

  const exportCSV = () => {
    const headers = ['id','name','email','phone','experience_level','goals','platforms','timezone','preferred_times','consent','created_at'];
    const rows = filtered.map(l => [
      l.id || '', l.name || '', l.email || '', l.phone || '', l.experience_level || '', (l.goals||'').replace(/\n/g,' '),
      (l.platforms||[]).join('; '), l.timezone || '', (l.preferred_times||[]).join('; '), l.consent ? 'yes' : 'no', l.created_at || ''
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'leads.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="admin" className="relative py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-700"><Shield className="h-5 w-5" /></div>
          <h2 className="text-2xl font-bold">Admin — Leads</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 space-y-3 bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4">
            <label className="text-sm text-slate-600">Admin Key</label>
            <input value={key} onChange={(e)=>setKey(e.target.value)} placeholder="Enter admin key"
              className="w-full mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={fetchLeads} disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 font-semibold hover:bg-slate-800 disabled:opacity-60">
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin':''}`} />
              {loading ? 'Loading...' : 'Load Leads'}
            </button>
            <button onClick={exportCSV} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 border mt-1">
              Export CSV
            </button>
            {error && <div className="text-red-600 text-sm">{error}</div>}
          </div>

          <div className="lg:col-span-3 bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search leads..." className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="text-sm text-slate-500">{filtered.length} shown</div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Contact</th>
                    <th className="py-2 pr-4">Experience</th>
                    <th className="py-2 pr-4">Platforms</th>
                    <th className="py-2 pr-4">Pref. Times</th>
                    <th className="py-2 pr-4">Timezone</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((l) => (
                    <tr key={l.id} className="border-t">
                      <td className="py-2 pr-4 font-medium">{l.name}</td>
                      <td className="py-2 pr-4 text-slate-600">
                        <div className="flex items-center gap-2"><Mail className="h-4 w-4" />{l.email}</div>
                        {l.phone && <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{l.phone}</div>}
                      </td>
                      <td className="py-2 pr-4">{l.experience_level}</td>
                      <td className="py-2 pr-4">{(l.platforms||[]).join(', ')}</td>
                      <td className="py-2 pr-4">{(l.preferred_times||[]).join(', ')}</td>
                      <td className="py-2 pr-4">
                        <div className="flex items-center gap-2"><Globe className="h-4 w-4" />{l.timezone}</div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-10 text-center text-slate-500">No leads to show</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
