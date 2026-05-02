module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { form_type, from_email, name, company, revenue, sector, bottleneck } = req.body;

  const rows = [
    ['Email',      from_email],
    ['Name',       name],
    ['Company',    company],
    ['Revenue',    revenue],
    ['Sector',     sector],
    ['Bottleneck', bottleneck],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `
      <tr>
        <td style="padding:10px 16px;color:#6b7280;font-size:14px;width:130px;white-space:nowrap">${k}</td>
        <td style="padding:10px 16px;color:#06101e;font-size:14px;font-weight:500">${v}</td>
      </tr>`)
    .join('');

  const html = `
    <div style="font-family:'Inter Tight',Arial,sans-serif;max-width:580px;margin:0 auto;background:#f4f6f9;padding:32px 24px">
      <div style="background:#06101e;border-radius:8px 8px 0 0;padding:24px 28px">
        <p style="margin:0;color:#4cc9f0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-family:monospace">Calon AI · Lead Notification</p>
        <h2 style="margin:8px 0 0;color:#f1f4f9;font-size:22px;font-weight:500">${form_type}</h2>
      </div>
      <div style="background:#fff;border-radius:0 0 8px 8px;overflow:hidden">
        <table style="width:100%;border-collapse:collapse">
          ${rows}
        </table>
        <div style="padding:16px 16px 20px;border-top:1px solid #e5e7eb">
          <a href="mailto:${from_email}" style="display:inline-block;background:#4cc9f0;color:#06101e;text-decoration:none;padding:12px 20px;border-radius:4px;font-size:14px;font-weight:600">
            Reply to ${from_email} →
          </a>
        </div>
      </div>
      <p style="margin:16px 0 0;color:#9ca3af;font-size:12px;text-align:center">calonaisolutions.com</p>
    </div>`;

  try {
    const apiKey = process.env.RESEND_API_KEY || 're_gprDCJhc_D1hNxNzGw72StWKXRKrLtpqR';
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:     'Calon AI <trade@calonaisolutions.com>',
        to:       ['fab@calonaisolutions.com', 'alom@calonaisolutions.com'],
        reply_to: from_email,
        subject:  `New ${form_type}: ${company || name || from_email}`,
        html,
      }),
    });

    const data = await r.json();
    if (!r.ok) throw new Error(data.message || 'Resend error');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
