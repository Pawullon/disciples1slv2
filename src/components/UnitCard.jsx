import { useMemo, useCallback, useState } from "react"
import { unitData } from "../data/units.js"
import { attackData } from "../data/attacks.js"
import { useTranslation } from "react-i18next"

export default function UnitCard(props) {
    const { selectedUnit, setSelectedUnit, selectedRace } = props
    const [unitLevel, setUnitLevel] = useState(() => selectedUnit.lvl)
    const { t } = useTranslation()
    const filteredAttack = useMemo(
        () => attackData.find((attack) => attack.attackIndex === selectedUnit.attackIndex),
        [selectedUnit]
    )
    const unitTypes = [
        { key: "normalIndex", label: t("goToNormal") },
        { key: "leaderIndex", label: t("goToLeader") },
        { key: "summonIndex", label: t("goToSummon") },
        { key: "illusionIndex", label: t("goToIllusion") },
    ]
    const sources = t("sources", { returnObjects: true })

    const handleFormChange = useCallback((transformIndex) => {
        const newUnit = unitData.find((unit) => unit.unitIndex === transformIndex)
        setSelectedUnit(newUnit)
    }, [setSelectedUnit])

    const leaderList = [
        "Pegazi Rycerz", "Myśliwy", "Arcymag", "Archanioł",
        "Strażnik Króla", "Inżynier", "Mistrz Wiedzy", "Dumny Krasnolud",
        "Książę", "Doradca", "Arcydiabeł", "Baronowa",
        "Rycerz Śmierci", "Nosferatu", "Królowa Liczy", "Banshee"
    ]
    const handleLeaderLevel = (e) => {
        const value = Math.min(8, Number(e.target.value))
        if (value > 0) {
            setUnitLevel(value)
            const shortIndex = parseInt(selectedUnit.unitIndex.slice(8))
            const newIndex = selectedUnit.unitIndex.slice(0, 7) + (value === 1 ? "0" : value) + shortIndex
            handleFormChange(newIndex)
        }
    }

    return (
        <div className={`unit-card race${selectedRace}`}>
            <div className="cat-buttons-menu">
                {unitTypes.map(({ key, label }) => selectedUnit?.[key]
                    ? (<button key={key} onClick={() => handleFormChange(selectedUnit[key])} className={`unit-type-button`}
                    >{label}</button>) : null
                )}
            </div>
            <div className="unit-info">
                <div className={"unit-portrait" + (selectedUnit.isBig ? " big" : "")}
                    style={{
                        backgroundImage: `url(/units/${selectedUnit.imgName ? selectedUnit.imgName : selectedUnit.unitIndex}big.png)`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `contain`
                    }}>
                </div>
                <div className="unit-name">{t(`units.${selectedUnit.unitIndex}.name`)}</div>
                <div className="unit-desc">{t(`units.${selectedUnit.unitIndex}.desc`)}</div>
            </div>
            <div className="unit-stats">
                <div className="unit-label lvl">{t("levelLabel")}:</div>
                <div className="unit-value lvl">
                    {leaderList.includes(selectedUnit.name)
                        ? (<input type="number" value={unitLevel} min={1} max={8} onChange={handleLeaderLevel} />)
                        : selectedUnit.lvl}
                </div>
                <div className="unit-label xp">{t("xpLabel")}:</div>
                <div className={"unit-value xp" + (selectedUnit.lvlMax && " lvl-max")}>{selectedUnit.xpNext} {selectedUnit.lvlMax && "(Max)"}</div>
                <div className="unit-label yield">{t("yieldLabel")}:</div>
                <div className="unit-value yield">{selectedUnit.xpYield}</div>
                {selectedUnit.leadership ?
                    (<>
                        <div className="unit-label leadership">{t("leadershipLabel")}:</div>
                        <div className="unit-value leadership">{selectedUnit.leadership}</div>
                    </>) : null}
                {selectedUnit.movePoints ?
                    (<>
                        <div className="unit-label move">{t("movepointsLabel")}:</div>
                        <div className="unit-value move">{selectedUnit.movePoints}</div>
                    </>) : null}
                <div className="unit-label hp">{t("hpLabel")}:</div>
                <div className="unit-value hp">{selectedUnit.hitPoints}</div>
                {selectedUnit.regen > 0 ?
                    (<>
                        <div className="unit-label regen">{t("regenLabel")}:</div>
                        <div className="unit-value regen">{selectedUnit.regen}%</div>
                    </>) : null}
                <div className="unit-label armor">{t("armorLabel")}:</div>
                <div className="unit-value armor">{selectedUnit.armor}</div>
                <div className="unit-label immunities">{t("immuneLabel")}:</div>
                <div className="unit-value immunities">
                    {selectedUnit.immune ? selectedUnit.immune.map(imm => t("sources", { returnObjects: true })[imm]).join(", ") : t("noAbilities")}
                </div>
                <div className="unit-label wards">{t("wardsLabel")}:</div>
                <div className="unit-value wards">
                    {selectedUnit.wards ? selectedUnit.wards.map(ward => t("sources", { returnObjects: true })[ward]).join(", ") : t("noAbilities")}
                </div>

                <div className="attack-label attack-name">{t("attackLabel")}:</div>
                <div className="attack-value attack-name">{t(`attacks.${filteredAttack.attackIndex}`)}</div>
                <div className="attack-label attack-name">{t("chanceLabel")}:</div>
                <div className="attack-value attack-name">{filteredAttack.hitChance}%</div>
                {
                    filteredAttack.damage ? (<>
                        <div className="attack-label damage">{t("damageLabel")}:</div>
                        <div className="attack-value damage">{filteredAttack.damage}</div>
                    </>) : filteredAttack.heal ? (<>
                        <div className="attack-label heal">{t("healLabel")}:</div>
                        <div className="attack-value heal">{filteredAttack.heal}</div>
                    </>) : filteredAttack.level ? (<>
                        <div className="attack-label boost">{t("boostLabel")}:</div>
                        <div className="attack-value boost">+{
                            filteredAttack.level === 1 ? 100 : filteredAttack.level === 2 ? 50 : 25
                        }%</div>
                    </>) : null
                }
                <div className="attack-label source">{t("sourceLabel")}:</div>
                <div className="attack-value source">{sources[filteredAttack.source]}</div>
                <div className="attack-label ini">{t("iniLabel")}:</div>
                <div className="attack-value ini">{filteredAttack.initiative}</div>
                <div className="attack-label ini">{t("reachLabel")}:</div>
                <div className="attack-value ini">{t("reaches", { returnObjects: true })[filteredAttack.reach]}</div>
                <div className="attack-label ini">{t("targetLabel")}:</div>
                <div className="attack-value ini">{t("targets", { returnObjects: true })[filteredAttack.reach]}</div>
            </div>
            {leaderList.includes(selectedUnit.name) && (
                <div className="abilities">
                    <div className="abil-label">{t("abilitiesLabel")}:</div>
                    {
                        (selectedUnit.rod || selectedUnit.magic || selectedUnit.flying)
                        ? (<>
                            {selectedUnit.rod && (<div className="abil"><img style={{aspectRatio: "38/20"}} src="/icons/rod.png"/>{t("plantRod")}</div>)}
                            {selectedUnit.magic && (<div className="abil"><img style={{aspectRatio: "39/13"}} src="/icons/magic.png"/>{t("magic")}</div>)}
                            {selectedUnit.flying && (<div className="abil"><img style={{aspectRatio: "40/19"}} src="/icons/flying.png"/>{t("flying")}</div>)}
                        </>)
                        : "Brak"
                    }
                </div>
            )}
            <button className="button-back" onClick={() => setSelectedUnit(undefined)}></button>
        </div>
    )
}