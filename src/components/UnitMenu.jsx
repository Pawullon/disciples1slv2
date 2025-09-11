import React, { useState, useMemo } from "react"
import { unitData } from "../data/units.js"
import UnitCard from "./UnitCard"
import { useTranslation } from "react-i18next"

export default function UnitMenu(props) {
    const { setSelectedTab, setSelectedRace, selectedRace, selectedUnit, setSelectedUnit } = props
    const { t } = useTranslation()

    const unitCats = selectedRace === 4
        ? t("unitTypesNeutral", { returnObjects: true })
        : t("unitTypes", { returnObjects: true })
    const [selectedCat, setSelectedCat] = useState(unitCats[0])
    const filteredUnits = useMemo(
        () =>
            unitData.filter(
                (unit) =>
                    unit.race === `race${selectedRace}` && t(unit.category) === selectedCat
            ),
        [selectedRace, selectedCat]
    )

    if (selectedUnit !== undefined) {
        return <UnitCard selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} selectedRace={selectedRace} />
    }
    return (
        <div className={`unit-menu race${selectedRace}`}>
            <div className="cat-buttons-menu">
                {unitCats.map((unitCat, unitCatIndex) => {
                    return (
                        <button key={unitCatIndex} className={`unit-type-button ${unitCat} ` + (unitCat === selectedCat ? 'unit-type-button-selected' : '')}
                            onClick={() => setSelectedCat(unitCat)}>
                            {unitCat}
                        </button>
                    )
                })}
            </div>
            <div className="unit-faces">
                {filteredUnits.map((unit, uIndex) => {
                    const requiredBuildName = unit.requiredBuild ? t(`buildings.${unit.requiredBuild}.name`) : "..."
                    return (
                        <React.Fragment key={uIndex}>
                            {unit.arrowDir && (
                                    <div style={{
                                        background: `url(/units/arrow-${unit.arrowDir}.png) no-repeat center / contain`,
                                        gridArea: unit.arrowArea,
                                        width: `100%`,
                                        height: `100%`,
                                        display: (unit.private && !showAllUnits) ? 'none' : 'block'
                                    }} aria-label={requiredBuildName}></div>
                                )}
                            <button className={"unit-button" + (unit.isBig ? " big" : "")} aria-label={t(`units.${unit.unitIndex}.name`)} onClick={() => { setSelectedUnit(unit) }}
                                style={unit.imgName 
                                    ? { backgroundImage: `url(/units/${unit.imgName}.png)`, gridArea: unit.area, placeSelf: unit.place ? unit.place : "start" } 
                                    : { backgroundImage: `url(/units/${unit.unitIndex}.png)`, gridArea: unit.area, placeSelf: unit.place ? unit.place : "start" }}>
                            </button>
                        </React.Fragment>
                    )
                })}
            </div>
            <button className="button-back" onClick={() => {
                setSelectedTab(undefined)
                if(selectedRace === 4) setSelectedRace(undefined)
                }}></button>
        </div>
    )
}