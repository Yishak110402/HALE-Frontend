import { useRef } from "react"
import "./CompanyLogo.css"
import { useEffect } from "react"
import { useState } from "react"
export default function CompanyLogo(){
    const parts = useRef()
    const equals = useRef()
    const logo = useRef()


    const [partsVisible, setPartsVisible ] = useState(false)
    // const [equalsVisible, setEqualsVisible ] = useState(false)
    // const [logoVisible, setLogoVisible ] = useState(false)

    useEffect(function(){

    },[])

    return(
        <div onClick={setPartsVisible(false)} className="logo-description">
            <div ref={parts} className={`description-txt ${partsVisible ? "visible" : ""}`}>
                <p>Our Logo Embodies Our Mission Through Three Key Symbols: </p>
                <div className="parts-container">
                    <div>
                        <img src="https://i.postimg.cc/15zJHwq6/Screenshot-2024-08-19-162004.png" alt="" />
                        <p>The Running Kid, representing human rights, inclusion, and the promise of an empowered future generation.</p>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/nVX19pbY/Screenshot-2024-08-19-163429.png" alt="" />
                        <p>The Carrying Hand, symbolizing unity, community, and the ripple effect of positive change.</p>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/wvLTn1RQ/Screenshot-2024-08-19-164249.png" alt="" />
                        <p>The Green Leaf, reflecting our commitment to environmental sustainability.</p>
                    </div>
                </div>
            </div>
            <div ref={equals} className="equals">
                =
            </div>
            <div ref={logo} className="logo">
            <img src="https://i.postimg.cc/s25BSHfc/banner-02.jpg" alt="" />
            </div>
        </div>
    )
}