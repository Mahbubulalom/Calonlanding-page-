// Solution — 4-step process with 3D isometric flow
const Solution = () => {
  return (
    <section className="section solution-section" id="solution">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">02</span>
            <span className="eyebrow">How we operate</span>
          </div>
          <h2 className="section-h2">
            We don't deploy software. We <em>rebuild</em> the workflow around how your business actually works.
          </h2>
        </div>

        <div className="process-3d">
          <div className="process-step" style={{'--i': 0}}>
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-line"></div>
              <h4>Diagnose</h4>
              <p>Map the actual workflow — not how it should work, how it does. 30–45 minutes, founder + ops lead.</p>
              <div className="step-meta">
                <span>Output</span>
                <span>Workflow map · 6 stages</span>
              </div>
            </div>
          </div>

          <div className="process-step" style={{'--i': 1}}>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-line"></div>
              <h4>Identify</h4>
              <p>Name the biggest leak. Specific to the business, not generic advice. Quantified in £.</p>
              <div className="step-meta">
                <span>Output</span>
                <span>Leak ledger · ranked</span>
              </div>
            </div>
          </div>

          <div className="process-step" style={{'--i': 2}}>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-line"></div>
              <h4>Build</h4>
              <p>Design the system. Workflow, handover doc, automation, dashboard. Around your team, not over it.</p>
              <div className="step-meta">
                <span>Output</span>
                <span>Operating system · live</span>
              </div>
            </div>
          </div>

          <div className="process-step" style={{'--i': 3}}>
            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-line"></div>
              <h4>Operate</h4>
              <p>Trained, documented, owned by your operator. Margin recovery measured monthly.</p>
              <div className="step-meta">
                <span>Output</span>
                <span>Founder handover · signed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="compare-block">
          <div className="compare-head">
            <span className="eyebrow">Now → with Calon</span>
            <span className="compare-meta">Real client averages · anonymised</span>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-header">
              <div>Workflow</div>
              <div className="now-col">Now</div>
              <div className="with-col">With Calon</div>
            </div>
            <div className="compare-row">
              <div className="compare-label">Lead response time</div>
              <div className="now-col">24–48 hrs · multi-channel</div>
              <div className="with-col">2–4 hrs · one inbox · routed</div>
            </div>
            <div className="compare-row">
              <div className="compare-label">Quote turnaround</div>
              <div className="now-col">2+ hrs · manual entry</div>
              <div className="with-col">30 min · history pre-filled</div>
            </div>
            <div className="compare-row">
              <div className="compare-label">Job handover</div>
              <div className="now-col">Email memory · 30 min on-site</div>
              <div className="with-col">Standard doc · scope pre-confirmed</div>
            </div>
            <div className="compare-row">
              <div className="compare-label">Repeat work</div>
              <div className="now-col">Random · founder-led</div>
              <div className="with-col">Systematic · proactive reminders</div>
            </div>
            <div className="compare-row total-row">
              <div className="compare-label">Recovered margin / year</div>
              <div className="now-col">—</div>
              <div className="with-col total-val">£82,000 avg.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sectors — three sector cards
const Sectors = () => {
  return (
    <section className="section sectors-section" id="sectors">
      <div className="section-inner">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num-tag">03</span>
            <span className="eyebrow">Where we operate</span>
          </div>
          <h2 className="section-h2">
            Built for founder-led firms between <em>£500k</em> and <em>£5m</em>.
          </h2>
        </div>

        <div className="sectors-grid">
          <div className="sector-card">
            <div className="sector-head">
              <span className="sector-num">01</span>
              <span className="sector-pill">Core sector</span>
            </div>
            <h3>Trades & contractors</h3>
            <p>Engineers on site without scope. Rework eats margin. Quotes drift across two follow-ups.</p>
            <div className="sector-frictions">
              <span className="friction-tag">Job handover</span>
              <span className="friction-tag">Scope confirm</span>
              <span className="friction-tag">Time tracking</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-head">
              <span className="sector-num">02</span>
              <span className="sector-pill">Core sector</span>
            </div>
            <h3>Security & FM</h3>
            <p>Multi-site, multi-engineer. Visibility breaks at scale. Schedules slip and customers notice.</p>
            <div className="sector-frictions">
              <span className="friction-tag">Scheduling</span>
              <span className="friction-tag">Response time</span>
              <span className="friction-tag">Follow-up</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-head">
              <span className="sector-num">03</span>
              <span className="sector-pill">Core sector</span>
            </div>
            <h3>Hospitality & venues</h3>
            <p>Bookings scattered across channels. Repeat work isn't surfaced. Margin per cover never measured.</p>
            <div className="sector-frictions">
              <span className="friction-tag">Lead capture</span>
              <span className="friction-tag">CRM</span>
              <span className="friction-tag">Repeat revenue</span>
            </div>
          </div>
        </div>

        <div className="sector-secondary">
          <span className="eyebrow muted">Also serving</span>
          <span className="sec-pill">Field service</span>
          <span className="sec-pill">Recruitment</span>
          <span className="sec-pill">Property</span>
          <span className="sec-pill">Training</span>
          <span className="sec-pill">Other founder-led service businesses</span>
        </div>
      </div>
    </section>
  );
};

window.Solution = Solution;
window.Sectors = Sectors;
