const Proof = () => {
  return (
    <section className="section proof-section" id="proof">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">04</span>
            <span className="eyebrow">Proof of work</span>
          </div>
          <h2 className="section-h2">
            We don't pitch outcomes. We <em>recover</em> them.
          </h2>
        </div>

        <div className="testimonial-feature">
          <div className="t-mark">"</div>
          <blockquote>
            We weren't losing because we couldn't sell. We were losing because <em>thirty</em> minutes vanished on every job before anyone touched a tool. Calon mapped it, named it, and rebuilt it.
          </blockquote>
          <div className="t-attribution">
            <div className="t-avatar"></div>
            <div className="t-who">
              <div className="t-name">Founder</div>
              <div className="t-role">14-engineer FM business · West Midlands</div>
            </div>
            <div className="t-stat">
              <div className="t-stat-num">£82k</div>
              <div className="t-stat-lbl">recovered · 14 weeks</div>
            </div>
          </div>
        </div>

        <div className="cases-grid">
          <div className="case-card">
            <div className="case-head">
              <span className="case-tag">Trades</span>
              <span className="case-meta">£1.4m revenue</span>
            </div>
            <p className="case-quote">
              "Quotes used to take two days. Now they're out within four hours and we're winning more of them."
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="case-stat-num">42<span>%</span></div>
                <div className="case-stat-lbl">quote-to-close</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">+50<span>%</span></div>
                <div className="case-stat-lbl">repeat work</div>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-head">
              <span className="case-tag">Security & FM</span>
              <span className="case-meta">32 engineers</span>
            </div>
            <p className="case-quote">
              "We didn't know which jobs made money. Now we do. And we've stopped doing the ones that don't."
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="case-stat-num">£100<span>k</span></div>
                <div className="case-stat-lbl">leak / yr identified</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">12<span>wk</span></div>
                <div className="case-stat-lbl">to handover</div>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-head">
              <span className="case-tag">Hospitality</span>
              <span className="case-meta">3 venues</span>
            </div>
            <p className="case-quote">
              "Bookings used to live in five places. Now they live in one, and we can see who's coming back."
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="case-stat-num">2.4<span>×</span></div>
                <div className="case-stat-lbl">repeat bookings</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">8<span>wk</span></div>
                <div className="case-stat-lbl">to handover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [revenue, setRevenue] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !company) return;
    setLoading(true);
    setError(false);
    try {
      await window.sendLeadEmail({
        form_type:    'Diagnostic Booking',
        from_email:   email,
        company:      company,
        revenue:      revenue || 'Not specified',
        name:         '',
        sector:       '',
        bottleneck:   '',
        to_emails:    'fab@calonaisolutions.com, alom@calonaisolutions.com',
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Email send failed:', err);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <section className="section cta-section" id="diagnostic">
      <div className="cta-bg">
        <div className="cta-grid"></div>
      </div>
      <div className="section-inner cta-inner">
        <div className="cta-left">
          <div className="eyebrow-row">
            <span className="num-tag accent">05</span>
            <span className="eyebrow accent">The diagnostic call</span>
          </div>
          <h2 className="cta-h2">
            Now decide which workflow to <em>fix first.</em>
          </h2>
          <p className="cta-lead">
            30 to 45 minutes. No deck, no sales pitch. We map your workflow, name the biggest leak, and put a number on it. You leave with a one-page diagnostic, whether or not we ever work together.
          </p>
          <ul className="cta-list">
            <li><span className="li-check">✓</span> A live workflow map of your business, six stages</li>
            <li><span className="li-check">✓</span> The single highest-leakage workflow, quantified in £</li>
            <li><span className="li-check">✓</span> A one-page recovery plan you can act on Monday</li>
            <li><span className="li-check">✓</span> No follow-up unless you ask for one</li>
          </ul>
        </div>

        <div className="cta-right">
          {!submitted ? (
            <form className="cta-form" onSubmit={submit}>
              <div className="form-head">
                <span className="form-eyebrow">Diagnostic intake · 60 sec</span>
                <span className="form-status">
                  <span className="form-pulse"></span>
                  Booking · Q2 2026
                </span>
              </div>

              <label className="field">
                <span className="field-label">Work email</span>
                <input
                  type="email"
                  required
                  placeholder="founder@company.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="field">
                <span className="field-label">Company</span>
                <input
                  type="text"
                  required
                  placeholder="Your company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>

              <label className="field">
                <span className="field-label">Annual revenue</span>
                <div className="radio-row">
                  {['£500k–£1m', '£1m–£2.5m', '£2.5m–£5m', '£5m+'].map((r) => (
                    <button
                      type="button"
                      key={r}
                      className={`radio-pill ${revenue === r ? 'active' : ''}`}
                      onClick={() => setRevenue(r)}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </label>

              <button type="submit" className="cta-submit" disabled={loading}>
                {loading ? (
                  <><span className="btn-spinner"></span>Sending…</>
                ) : (
                  <>Book the diagnostic <span className="arr">→</span></>
                )}
              </button>

              {error && (
                <div className="form-error">
                  Something went wrong. Email us directly at fab@calonaisolutions.com
                </div>
              )}

              <button type="button" className="cta-soft-link" data-open-roadmap>
                Not ready? Get the practical roadmap first <span className="arr">→</span>
              </button>

              <div className="form-footer">
                <span>One reply within 4 hours.</span>
                <span>·</span>
                <span>No mailing list.</span>
                <span>·</span>
                <span>No automated follow-up.</span>
              </div>
            </form>
          ) : (
            <div className="cta-form success-form">
              <div className="success-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 24L21 31L34 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Diagnostic booked.</h3>
              <p>We'll reach out to <strong>{email}</strong> within 4 hours to confirm a 30–45 min slot. No deck. No pitch.</p>
              <div className="success-meta">
                <span>What to have ready</span>
                <ul>
                  <li>One workflow you suspect leaks margin</li>
                  <li>Roughly how many jobs / month</li>
                  <li>Whoever runs ops, if not you</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="assets/calon-logo.png" alt="Calon AI Solutions" className="footer-logo"/>
          <p>Operational systems for founder-led service businesses. Built around how the work actually happens.</p>
        </div>
        <div className="footer-col">
          <h6>What we do</h6>
          <ul>
            <li>Operational diagnostic</li>
            <li>Workflow rebuilds</li>
            <li>Automation systems</li>
            <li>Founder handover</li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Sectors</h6>
          <ul>
            <li>Trades & contractors</li>
            <li>Security & FM</li>
            <li>Hospitality & venues</li>
            <li>Field service</li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Resources</h6>
          <ul>
            <li>Operational leakage guide</li>
            <li>Six-workflow framework</li>
            <li>Diagnostic call</li>
            <li>Case studies</li>
          </ul>
        </div>
        <div className="footer-meta">
          <span>© 2026 Calon AI Solutions · hello@calonai.com</span>
          <span>calonai.com</span>
        </div>
      </div>
    </footer>
  );
};

window.Proof = Proof;
window.CTA = CTA;
window.Footer = Footer;
