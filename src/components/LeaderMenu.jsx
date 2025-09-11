import React, { useState, useMemo } from "react"
import { unitData } from "../data/units.js"
import UnitCard from "./UnitCard"
import { useTranslation } from "react-i18next"

export default function UnitMenu(props) {
    const { setSelectedTab, selectedRace, selectedUnit, setSelectedUnit } = props
    const { t } = useTranslation()

    const filteredUnits = useMemo(
        () =>
            unitData.filter(
                (unit) =>
                    unit.race === `race${selectedRace}` && unit.category === "Lider"
            ),
        [selectedRace]
    )
    if (selectedUnit !== undefined) {
        return <UnitCard selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} selectedRace={selectedRace} />
    }
    return (
        <div className={`unit-menu race${selectedRace}`}>
            <div className="unit-faces">
                {filteredUnits.map((unit, uIndex) => (
                        <React.Fragment key={uIndex}>
                            <button className="unit-button" onClick={() => { setSelectedUnit(unit) }}
                                style={unit.imgName 
                                    ? { backgroundImage: `url(/units/${unit.imgName}.png)`, gridArea: unit.area } 
                                    : { backgroundImage: `url(/units/${unit.unitIndex}.png)`, gridArea: unit.area }}>
                            </button>
                        </React.Fragment>
                    )
                )}
            </div>
            <button className="button-back" onClick={() => setSelectedTab(undefined)}></button>
        </div>
    )
}