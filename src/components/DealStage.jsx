import { useState } from 'react'
import { STEPS, END } from '../data'
import { Icon } from './Icons'

// Where tokens sit along a lane, as a percentage of its width.
const STAGE_POS = [17, 50, 83]

function StageLane({ title, nodes, at, tokenClass, token }) {
  return (
    <div className="lane">
      <div className="lane__title">{title}</div>
      <div className="lane__track">
        <i className="lane__line" />
        {nodes.map(([icon, label, extra], k) => (
          <span key={label + k} className={`lane__node ${extra || ''} ${k === at ? 'is-on' : ''}`} style={{ left: STAGE_POS[k] + '%' }}>
            <b><Icon name={icon} /></b>
            {label}
          </span>
        ))}
        <span className={`lane__token ${tokenClass}`} style={{ left: STAGE_POS[at] + '%' }}>{token}</span>
      </div>
    </div>
  )
}

export default function DealStage() {
  const [step, setStep] = useState(0)
  const [mode, setMode] = useState('ok')
  const last = STEPS.length // index of the final step
  const cur = step === last ? END[mode] : STEPS[step]

  const chooseMode = (next) => { setMode(next); setStep(last) }

  return (
    <section className="section how" id="how" aria-labelledby="how-title">
      <div className="container">
        <div className="how__top">
          <h2 id="how-title" className="display h2 h2--narrow">Watch one deal, start to finish.</h2>
          <p className="lead">A ₦980,000 phone. Two strangers. Tap through and see where the money and the item are at every step.</p>
        </div>

        <div className="how__body">
          <div className="stage">
            <StageLane title="The money" at={cur.m} tokenClass="lane__token--coin" token="₦980,000"
              nodes={[['user', 'You'], ['lock', 'TrustMart vault', 'is-vault'], ['box', 'Seller']]} />
            <StageLane title="The item" at={cur.i} tokenClass="lane__token--item"
              token={<><Icon name="box" size={16} />iPhone</>}
              nodes={[['box', 'Seller'], ['bike', 'Rider'], ['user', 'You']]} />
          </div>

          <div className="how__side">
            <div className="caption" aria-live="polite">
              <span className="caption__step">Step {step + 1} of {last + 1}</span>
              <h3>{cur.title}</h3>
              <p>{cur.text}</p>
              <div className="sees">
                <div><b>You see</b>{cur.you}</div>
                <div><b>The seller sees</b>{cur.seller}</div>
              </div>
            </div>

            <div className="controls">
              <button className="btn btn--ghost" style={{ visibility: step ? 'visible' : 'hidden' }} onClick={() => setStep(step - 1)}>Back</button>
              <div className="dots">
                {[...Array(last + 1)].map((_, k) => (
                  <button key={k} className={k === step ? 'is-on' : ''} aria-label={`Go to step ${k + 1}`} onClick={() => setStep(k)} />
                ))}
              </div>
              <button className="btn btn--dark" onClick={() => setStep(step === last ? 0 : step + 1)}>{step === last ? 'Replay' : 'Next'}</button>
            </div>

            <div className="mode" role="group" aria-label="Last step outcome">
              <button className={mode === 'ok' ? 'is-on' : ''} onClick={() => chooseMode('ok')}>If all is well</button>
              <button className={mode === 'bad' ? 'is-on' : ''} onClick={() => chooseMode('bad')}>If something is wrong</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
