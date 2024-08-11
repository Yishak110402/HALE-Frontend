import { useEffect, useRef, useState } from "react";
import "./ProgramsOverview.css";
export default function ProgramsOverview() {
  const [visible, setVisible] = useState(false);
  const programsParagraph = useRef();
  const programsButton = useRef()
  useEffect(function () {
    const programsObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      if (entry.isIntersecting) {
        setTimeout(() => {
          setVisible(true);
        }, 300);
      }
    });
    programsObserver.observe(programsButton.current)
    programsObserver.observe(programsParagraph.current);
  }, []);
  return (
    <div className="programs-overview">
      <p className={`${visible ? "visible" : ""}`} ref={programsParagraph}>
        Our organization provides different services for different communities
        with various needs.
      </p>
      <button className={`${visible ? "visible" : ""}`} ref={programsButton}>Find out more about our services</button>
      <img
        src="https://i.postimg.cc/Fsvhd40w/programs-overview-pic.jpg"
        alt=""
      />
    </div>
  );
}
