import { useEffect, useRef, useState } from "react";
import "./CompanyValues.css";
export default function CompanyValues() {
  const valuesH1 = useRef()
  const values = useRef()
  const [visible, setVisible] = useState(false)
  const [valuesVisible, setValuesVisible] = useState(false)
  useEffect(function(){
    const valuesObserver = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setVisible(true)
      }
    }, {
      threshold:[0.2, 1]
    })
    valuesObserver.observe(valuesH1.current)
  },[])
  useEffect(function(){
    const valuesObserver = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setValuesVisible(true)
      }
    },{
      threshold:[0.2, 1]
    })
    valuesObserver.observe(values.current)
  },[])
  return (
    <div className="our-values">
      <h1 className={visible ? "visible" : ""} ref={valuesH1}>Values</h1>
      <hr/>
      <div ref={values} className={`values-container ${valuesVisible ? "visible" : ""}`}>
        <div>
          <h1>Equality and Inclusion</h1>
          <p>
            We believe in the inherent dignity and equality of all individuals
            and are committed to promoting inclusive practices that ensure
            everyone, regardless of their background, has equal opportunities
            and rights.
          </p>
        </div>
        <div>
          <h1>Equality and Equity</h1>
          <p>We believe in equity and equal rights of all individuals</p>
        </div>
        <div>
          <h1>Dignity and Respect</h1>
          <p>
            Upholding the inherent dignity of every individual, advocating for
            their rights, and ensuring they are treated with respect.
          </p>
        </div>
        <div>
          <h1>Justice and Accountability</h1>
          <p>
            We strive to uphold justice by ensuring access to fair legal
            representation and holding individuals and institutions accountable
            for violations of human rights.
          </p>
        </div>
        <div>
          <h1>Sustainability and Responsibility</h1>
          <p>
            We are committed to promoting environmental sustainability and
            ensuring that all communities have the right to a healthy and safe
            environment. Prioritizing environmental sustainability and
            advocating for practices that protect and preserve our planet for
            future generations.
          </p>
        </div>
        <div>
          <h1>Transparency and Integrity</h1>
          <p>
            We operate with transparency and integrity, ensuring that our
            actions and decisions are open, honest, and accountable to the
            communities we serve.
          </p>
        </div>
        <div>
          <h1 className="long">Environmental Ethics and</h1>
          <h1> Eco-centrism</h1>
          <p>
            Emphasizing the importance of ecological balance and ethical
            treatment of the environment.
          </p>
        </div>
        <div>
          <h1>Networking and Collaboration</h1>
          <p>
            We believe in the power of partnerships and actively seek to
            collaborate with local, national, and international organizations to
            amplify our impact and drive systemic change.
          </p>
        </div>
        <div>
          <h1>Respect for Cultural Heritage</h1>
          <p>
            We value and respect cultural diversity and work to protect the
            cultural rights of individuals, ensuring their ability to
            participate in cultural life and preserve their cultural heritage.
          </p>
        </div>
        <div>
          <h1>Innovation</h1>
          <p>
            Encouraging creative solutions and forward-thinking approaches to
            advance human rights and inclusion.
          </p>
        </div>
      </div>
    </div>
  );
}
