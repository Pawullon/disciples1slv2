import { useRef, useEffect, useState } from "react"
import StartPage from "./StartPage"
import RaceMenu from "./RaceMenu"
import ItemMenu from "./ItemMenu"
import AbilMenu from "./AbilMenu"
import CheatPage from "./CheatPage"
import { useTranslation } from "react-i18next"

export default function Container(props) {
    const { t } = useTranslation()
    const { selectedRace, selectedSubPage } = props

    const containerRef = useRef(null)
    const [topBorderWidth, setTopBorderWidth] = useState(0)
    const [sideBorderWidth, setSideBorderWidth] = useState(0)
    const [bottomBorderWidth, setBottomBorderWidth] = useState(0)

    useEffect(() => {
        if (!containerRef.current) return

        const updateBorderWidths = () => {
            const width = containerRef.current.offsetWidth
            setTopBorderWidth(25 / 670 * width)
            setSideBorderWidth(15 / 670 * width)
            setBottomBorderWidth(35 / 670 * width)
        }
        updateBorderWidths()
    })

    return (
        <div id="container" ref={containerRef} style={{ borderWidth: `${topBorderWidth}px ${sideBorderWidth}px ${bottomBorderWidth}px` }}>
            {selectedRace === undefined
                ? selectedSubPage === 0
                    ? <ItemMenu {...props} />
                    : selectedSubPage === 1
                        ? <AbilMenu {...props} />
                        : selectedSubPage === 2
                            ? <CheatPage {...props} />
                            : <StartPage />
                : <RaceMenu {...props} />}
            <div className="footer" style={{ height: `${bottomBorderWidth}px`, bottom: `-${bottomBorderWidth}px` }}>
                <a className="footer-link" href="https://disciples2dn.vercel.app/" target="_blank" rel="noopener noreferrer">{t("HoN")}</a>
                <a className="footer-link" href="https://www.youtube.com/@Pyrek129" target="_blank" rel="noopener noreferrer">
                    Pyrek
                    <img src="/icons/yt-logo.png" alt="PyrekYT" />
                </a>
                <a className="footer-link" href="https://www.youtube.com/@pjoter-k1c" target="_blank" rel="noopener noreferrer">
                    pjoter
                    <img src="/icons/yt-logo.png" alt="PjoterYT" />
                </a>
            </div>
        </div>
    )
}