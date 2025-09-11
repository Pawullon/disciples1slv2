import { useMemo } from "react"
import UnitMenu from "./UnitMenu"
import LeaderMenu from "./LeaderMenu"
import BuildMenu from "./BuildMenu"
import SpellMenu from "./SpellMenu"
import CapitalPage from "./CapitalPage"
import { useTranslation } from "react-i18next"


export default function RaceMenu(props) {
    const { selectedRace, setSelectedRace, selectedTab, setSelectedTab, selectedUnit, setSelectedUnit } = props
    const { t } = useTranslation()
    const races = t('raceNames', {returnObjects: true})
    const raceName = races[selectedRace]
    const buttons = t('catButtons', {returnObjects: true})

    const tabComponents = useMemo(
        () => [
            <UnitMenu setSelectedTab={setSelectedTab} setSelectedRace={setSelectedRace} selectedRace={selectedRace} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />,
            <LeaderMenu setSelectedTab={setSelectedTab} selectedRace={selectedRace} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />,
            <BuildMenu setSelectedTab={setSelectedTab} selectedRace={selectedRace} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />,
            <SpellMenu setSelectedTab={setSelectedTab} selectedRace={selectedRace} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />,
            <CapitalPage setSelectedTab={setSelectedTab} selectedRace={selectedRace} />,
        ],
        [selectedTab, selectedRace, setSelectedTab, selectedUnit, setSelectedUnit]
    )
    const content = useMemo(() => {
        if (selectedTab === undefined) {
            return (
                <div id={raceName} className="race-menu">
                    {buttons.map((catButton, catButtonIndex) => (
                        <button
                            key={catButtonIndex}
                            onClick={() => setSelectedTab(catButtonIndex)}
                            className="tab-card"
                        >
                            <p>{catButton}</p>
                        </button>
                    ))}
                    <button
                        className="button-back"
                        onClick={() => setSelectedRace(undefined)}
                    ></button>
                </div>
            )
        }
        return tabComponents[selectedTab]
    }, [selectedTab, raceName, setSelectedTab, setSelectedRace, tabComponents, t])

    return <>{content}</>
}