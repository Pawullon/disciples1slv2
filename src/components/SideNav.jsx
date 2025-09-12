import { useRef, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function SideNav(props) {
    const { i18n, selectedRace, setSelectedRace, selectedSubPage, setSelectedSubPage, setSelectedTab, setSelectedUnit } = props
    const { t } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem("languageSL", lng)
    }
    const navRef = useRef(null)
    const [verticalBorderWidth, setVerticalBorderWidth] = useState(0)
    const [sideBorderWidth, setSideBorderWidth] = useState(0)

    useEffect(() => {
        if (!navRef.current) return

        const updateBorderWidths = () => {
            const width = navRef.current.offsetWidth
            setVerticalBorderWidth(11 / 177 * width)
            setSideBorderWidth(14 / 177 * width)
        }
        updateBorderWidths()

        const observer = new ResizeObserver(() => {
            updateBorderWidths()
        })
        observer.observe(navRef.current)
        return () => {
            observer.disconnect()
        }
    })

    return (
        <nav ref={navRef} style={{ borderWidth: `${verticalBorderWidth}px ${sideBorderWidth}px` }}>
            <button onClick={() => {
                setSelectedRace(undefined)
                setSelectedSubPage(undefined)
                setSelectedTab(undefined)
                setSelectedUnit(undefined)
            }} className={'nav-card'} style={{ fontSize: `${1.15 * sideBorderWidth}px`, width: "90%", height: `${2.75 * sideBorderWidth}px` }}>
                <p>Start</p>
            </button>
            {t('raceNames', { returnObjects: true }).map((race, raceIndex) => {
                return (
                    <button onClick={() => {
                        setSelectedRace(raceIndex)
                        setSelectedSubPage(undefined)
                        setSelectedTab(raceIndex === 4 ? 0 : undefined)
                        setSelectedUnit(undefined)
                    }} style={{ fontSize: `${1.15 * sideBorderWidth}px`, width: "90%", height: `${2.75 * sideBorderWidth}px` }}
                        key={raceIndex} className={`nav-card race${raceIndex} ` + (raceIndex === selectedRace ? 'nav-card-selected' : '')}>
                        <p>{race}</p>
                    </button>
                )
            })}
            {t('miscTabs', { returnObjects: true }).map((misc, miscIndex) => {
                return (
                    <button onClick={() => {
                        setSelectedSubPage(miscIndex)
                        setSelectedRace(undefined)
                        setSelectedTab(undefined)
                        setSelectedUnit(undefined)
                    }} style={{ fontSize: `${1.15 * sideBorderWidth}px`, width: "90%", height: `${2.75 * sideBorderWidth}px` }}
                        key={miscIndex} className={`nav-card ${misc} ` + (miscIndex === selectedSubPage ? 'nav-card-selected' : '')}>
                        <p>{misc}</p>
                    </button>
                )
            })}
            <div className="lang-container" style={{ width: 10 * sideBorderWidth }}>
                <button className="language-button polish" onClick={() => changeLanguage('pl')}></button>
                <button className="language-button english" onClick={() => changeLanguage('en')}></button>
                {/* <button className="language-button french" onClick={() => changeLanguage('fr')}></button> */}
            </div>
        </nav>
    )
}