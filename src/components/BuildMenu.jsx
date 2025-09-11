import React, { useState, useMemo } from "react"
import { buildData } from "../data/buildings.js"
import { unitData } from "../data/units.js"
import UnitCard from "./UnitCard"
import { useTranslation } from "react-i18next"

export default function BuildMenu(props) {
    const { setSelectedTab, selectedRace, selectedUnit, setSelectedUnit } = props
    const [selectedCat, setSelectedCat] = useState("melee")
    const noBuild = {
        buildIndex: "",
        name: "",
        cost: 0,
        race: "",
        category: "",
        imgPosLeft: 0,
        imgPosTop: 0,
        txtPosLeft: 0,
        txtPosTop: 0,
        isBuilt: "",
        buildOrder: 0
    }
    const [selectedBuild, setSelectedBuild] = useState(noBuild)
    const { t } = useTranslation()
    const buildCats = ["melee", "mage", "range", "support", "misc"]

    const filteredBuilds = useMemo(
        () =>
            buildData.filter(
                (build) =>
                    build.race === `race${selectedRace}` && build.category === selectedCat
            ),
        [selectedRace, selectedCat]
    )
    const filteredUnits = useMemo(
        () =>
            unitData.filter(
                (unit) =>
                    unit.requiredBuild === selectedBuild.buildIndex
            ),
        [selectedBuild]
    )

    if (selectedUnit !== undefined) {
        return <UnitCard selectedRace={selectedRace} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
    }

    return (
        <div className="build-menu">
            <div className={`buildings race${selectedRace} ${selectedCat}`}>
                {filteredBuilds.map((build) => (
                    <React.Fragment key={build.buildIndex}>
                        <div className={`build-txt ${build.buildIndex}`}
                            style={{
                                left: `calc(100cqw * ${build.txtPosLeft} / 640)`,
                                top: `calc(100cqw * ${build.txtPosTop} / 640)`
                            }}>
                            {t(`buildings.${build.buildIndex}.name`)}
                        </div>
                        <button
                            className={`build-img ${build.buildIndex} ${build === selectedBuild ? "build-img-selected" : ""}`}
                            style={{
                                left: `calc(100cqw * ${build.imgPosLeft} / 640)`,
                                top: `calc(100cqw * ${build.imgPosTop} / 640)`
                            }}
                            onClick={() => setSelectedBuild(build)}
                        ></button>
                    </React.Fragment>
                ))}
            </div>
            {selectedBuild.buildIndex && (
                <div className="build-desc">
                    <p className="build-name">{t(`buildings.${selectedBuild.buildIndex}.name`)}</p>
                    <p className="build-text">{t(`buildings.${selectedBuild.buildIndex}.description`)}</p>
                    <div className="resources">
                        <p className="amount">{selectedBuild.cost}</p>
                        <p className="icon">
                            <img className="gold-icon"
                                src={`/icons/gold.png`}
                                alt={``}
                                loading="lazy"
                            /></p>
                    </div>
                    <div className="build-units">
                        {
                            filteredUnits.map((unit, uIndex) => {
                                const prevUnit = unitData.find((prevUnit) => unit.prevIndex === prevUnit.unitIndex)
                                return (
                                    <div key={uIndex} className="unit-progress">
                                        {unit.prevIndex ? (
                                            <>
                                                <button className={"unit-button" + (prevUnit.isBig ? " big" : "")} aria-label={t(`units.${prevUnit.unitIndex}.name`)}
                                                    style={prevUnit.imgName
                                                        ? { backgroundImage: `url(/units//${prevUnit.imgName}big.png)` }
                                                        : { backgroundImage: `url(/units//${prevUnit.unitIndex}big.png)` }
                                                    }
                                                    onClick={() => { setSelectedUnit(prevUnit) }} >
                                                </button>
                                                <div style={{ background: "url(/units/arrow-s.png) no-repeat center / contain", height: "10%" }}></div>
                                            </>
                                        ) : null}
                                        <button className={"unit-button" + (unit.isBig ? " big" : "")} aria-label={t(`units.${unit.unitIndex}.name`)}
                                            style={unit.imgName
                                                ? { backgroundImage: `url(/units/${unit.imgName}big.png)` }
                                                : { backgroundImage: `url(/units/${unit.unitIndex}big.png)` }}
                                            onClick={() => { setSelectedUnit(unit) }} >
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
            {buildCats.map((buildCat) => (
                <button
                    key={buildCat}
                    className={`cat-button ${buildCat} ${buildCat === selectedCat ? "cat-button-selected" : ""}`}
                    onClick={() => {
                        setSelectedCat(buildCat)
                        setSelectedBuild(noBuild)
                    }}
                >
                </button>
            ))}
            <button className="button-back" onClick={() => setSelectedTab(undefined)}></button>
        </div>
    )
}
