// Hero — 3D layered diagnostic card stack on the right, lead-capture form on the left
const Hero = ({ tweaks, setTweak, heroContent, show3D, bgStyle }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    // Modal opens via document-level data-open-roadmap handler
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        {bgStyle !== 'flat' && bgStyle !== 'glow' && <div className="grid-floor"></div>}
        {bgStyle !== 'flat' && <div className="hero-glow"></div>}
      </div>

      <div className="hero-inner" style={!show3D ? {gridTemplateColumns: '1fr', maxWidth: '900px'} : undefined}>
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            <span>For trades · security · FM · field service</span>
          </div>

          <h1 className="hero-h1">{heroContent.h1}</h1>

          <p className="hero-lead">{heroContent.lead}</p>

          <form className="lead-form" onSubmit={submit}>
            <div className="form-row">
              <input
                type="email"
                placeholder="founder@yourcompany.co.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              <button type="submit" data-open-roadmap>
                Book the diagnostic <span className="arr">→</span>
              </button>
            </div>
            <div className="form-sub">
              <span className="check">✓</span>
              30–45 minutes. No sales pitch. Just clarity on which workflow to fix first.
            </div>
            {submitted && (
              <div className="form-success">
                Booked. We'll reach out within 4 hours to confirm a time.
              </div>
            )}
          </form>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">£82k</div>
              <div className="stat-lbl">avg. margin recovered<br/>per engagement</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">14<span className="unit">wk</span></div>
              <div className="stat-lbl">average time to<br/>full system handover</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">23</div>
              <div className="stat-lbl">founder-led firms<br/>diagnosed in 2025</div>
            </div>
          </div>
        </div>

        {show3D && (
          <div className="hero-right">
            <DiagnosticStack />
          </div>
        )}
      </div>
    </section>
  );
};

// 3D layered diagnostic card stack — the visual centerpiece
const DiagnosticStack = () => {
  return (
    <div className="stack-scene">
      {/* Back card — workflow map */}
      <div className="stack-card stack-back">
        <div className="card-head">
          <span className="card-eyebrow">Workflow map · 04 / 06</span>
          <span className="card-tag">Stage 02</span>
        </div>
        <div className="workflow-rail">
          <div className="rail-step">
            <div className="rail-dot done"></div>
            <div className="rail-label">Lead in</div>
          </div>
          <div className="rail-line"></div>
          <div className="rail-step">
            <div className="rail-dot done"></div>
            <div className="rail-label">Quote</div>
          </div>
          <div className="rail-line"></div>
          <div className="rail-step">
            <div className="rail-dot active"></div>
            <div className="rail-label">Handover</div>
            <div className="rail-leak">— 30 min lost</div>
          </div>
          <div className="rail-line dim"></div>
          <div className="rail-step dim">
            <div className="rail-dot"></div>
            <div className="rail-label">On site</div>
          </div>
          <div className="rail-line dim"></div>
          <div className="rail-step dim">
            <div className="rail-dot"></div>
            <div className="rail-label">Invoice</div>
          </div>
        </div>
      </div>

      {/* Middle card — leak ledger */}
      <div className="stack-card stack-mid">
        <div className="card-head">
          <span className="card-eyebrow accent">Margin leak · live</span>
          <span className="card-pulse">
            <span className="pulse-dot"></span>
            tracking
          </span>
        </div>
        <div className="leak-grid">
          <div className="leak-row">
            <div className="leak-label">Scope clarification on site</div>
            <div className="leak-bar"><div className="leak-fill" style={{width: '78%'}}></div></div>
            <div className="leak-val">£18k</div>
          </div>
          <div className="leak-row">
            <div className="leak-label">Quote follow-up drift</div>
            <div className="leak-bar"><div className="leak-fill" style={{width: '54%'}}></div></div>
            <div className="leak-val">£12k</div>
          </div>
          <div className="leak-row">
            <div className="leak-label">Job overrun (untracked)</div>
            <div className="leak-bar"><div className="leak-fill warn" style={{width: '92%'}}></div></div>
            <div className="leak-val warn">£28k</div>
          </div>
          <div className="leak-row">
            <div className="leak-label">Repeat work missed</div>
            <div className="leak-bar"><div className="leak-fill" style={{width: '36%'}}></div></div>
            <div className="leak-val">£8k</div>
          </div>
        </div>
        <div className="leak-total">
          <span>Annual leakage</span>
          <span className="leak-total-num">£66,000</span>
        </div>
      </div>

      {/* Front card — diagnostic summary */}
      <div className="stack-card stack-front">
        <div className="card-head">
          <span className="card-eyebrow accent">Diagnostic · sample</span>
          <span className="card-tag success">Recoverable</span>
        </div>
        <div className="front-stat">
          <div className="front-num">£100<span className="front-unit">k</span></div>
          <div className="front-label">recovered margin / year</div>
        </div>
        <div className="front-meta">
          <div className="front-meta-row">
            <span className="front-meta-lbl">Workflow</span>
            <span className="front-meta-val">Quote → handover rebuild</span>
          </div>
          <div className="front-meta-row">
            <span className="front-meta-lbl">Build time</span>
            <span className="front-meta-val">14 weeks</span>
          </div>
          <div className="front-meta-row">
            <span className="front-meta-lbl">Software added</span>
            <span className="front-meta-val">None</span>
          </div>
        </div>
      </div>

      {/* Floating mono ticker */}
      <div className="float-ticker">
        <span className="ticker-dot"></span>
        <span>diagnostic.run() · live</span>
      </div>
    </div>
  );
};

window.Hero = Hero;
