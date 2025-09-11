import { useState, useMemo } from "react"
import { spellData } from "../data/spells.js"
import { unitData } from "../data/units.js"
import UnitCard from "./UnitCard"
import { useTranslation } from "react-i18next"

export default function SpellMenu(props) {
    const { setSelectedTab, selectedRace, selectedUnit, setSelectedUnit } = props
    const [selectedLevel, setselectedLevel] = useState(1)
    const [selectedSpell, setselectedSpell] = useState()
    const { t } = useTranslation()
    const sources = t("sources", { returnObjects: true })
    const filteredSpells = useMemo(
        () =>
            spellData.filter(
                (spell) =>
                    spell.race == `race${selectedRace}` && spell.level === selectedLevel
            ),
        [selectedRace, selectedLevel]
    )
    const filteredUnit = useMemo(
        () =>
            unitData.filter(
                (unit) =>
                    unit.unitIndex === selectedSpell?.summonIndex
            ),
        [selectedSpell]
    )
    const researchCost = useMemo(() => {
        if (!selectedSpell) return []
        if (!selectedSpell.researchCost) return []
        return selectedSpell.researchCost.split(":").map((resource) => {
            const type = resource[0]
            const amount = parseInt(resource.replace(/[^0-9]/g, ""))
            return amount > 0 ? { type, amount } : null
        }).filter(Boolean)
    }, [selectedSpell])
    const castCost = useMemo(() => {
        if (!selectedSpell) return []
        if (!selectedSpell.castingCost) return []
        return selectedSpell.castingCost.split(":").map((resource) => {
            const type = resource[0]
            const amount = parseInt(resource.replace(/[^0-9]/g, ""))
            return amount > 0 ? { type, amount } : null
        }).filter(Boolean)
    }, [selectedSpell])

    const handleLevelClick = (lvl) => () => {
        setselectedLevel(lvl)
        setselectedSpell()
    }
    const handleSelectSpell = (spell) => () => setselectedSpell(spell)

    if (selectedUnit !== undefined) {
        return <UnitCard selectedRace={selectedRace} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
    }
    return (
        <div className="spell-menu">
            <div className="spell-list">
                {
                    filteredSpells.map((spell, sIndex) => (
                        <div className={"spell-info"} key={sIndex} onClick={handleSelectSpell(spell)}>
                            <div className={"spell-icon " + (spell === selectedSpell ? 'active' : '')}
                                style={{
                                    background: `url(/spells/${spell.spellIndex}.webp) center / 80% no-repeat 
                                    ${spell === selectedSpell ? ", url(spells/selected-spell.png) center / contain no-repeat" : ""} `
                                }}>
                            </div>
                            <div className="spell-details">
                                <div className="spell-label">{t(`spells.${spell.spellIndex}.name`)}</div>
                                <div className="spell-desc">{t(`spells.${spell.spellIndex}.desc`)}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                selectedSpell && (
                    <div className="spell-page">
                        <div className="spell-icon-page"
                            style={{ background: `url(/spells/${selectedSpell.spellIndex}.webp) center / cover no-repeat` }}>
                        </div>
                        <div className="spell-name">{t(`spells.${selectedSpell.spellIndex}.name`)}</div>
                        <div className="spell-stats">
                            <div className="spell-lab">{t("levelLabel")}:</div>
                            <div className="spell-val">{selectedSpell.level}</div>
                            {selectedSpell.source ? (
                                <>
                                    <div className="spell-lab">{t("sourceLabel")}:</div>
                                    <div className="spell-val">{sources[selectedSpell.source]}</div>
                                </>
                            ) : null}
                            <div className="spell-lab">{t("effectLabel")}:</div>
                            <div className="spell-val">{t(`spells.${selectedSpell.spellIndex}.modifText`)}</div>
                            {selectedSpell.summonIndex ? (
                                <>
                                    <div className="spell-lab">{t("durationLabel")}:</div>
                                    <div className="spell-val">{filteredUnit[0]?.duration}</div>
                                    <button className={`unit-button ${filteredUnit[0]?.isBig ? "big" : ""}`}
                                        style={{
                                            backgroundImage: `url(/units/${filteredUnit[0].imgName ? filteredUnit[0].imgName : filteredUnit[0]?.unitIndex}.png)`,
                                            backgroundRepeat: `no-repeat`,
                                            backgroundSize: `cover`,
                                            gridColumn: `1/3`
                                        }} aria-label={t(`units.${filteredUnit[0]?.unitIndex}.name`)} onClick={() => { setSelectedUnit(filteredUnit[0]) }}
                                    ></button>
                                </>
                            ) : null}
                            {selectedSpell.area ? (
                                <>
                                    <div className="spell-lab">{t("areaLabel")}:</div>
                                    <div className="spell-val">{selectedSpell.area}x{selectedSpell.area}</div>
                                </>
                            ) : null}
                        </div>

                        <div className="spell-cost">
                            <div className="buyCost">
                                <div className="cost-label">{t("buyCostLabel")}:</div>
                                <div className="cost-val">
                                    <img
                                        src={`/icons/gold.png`}
                                        alt={`res g`}
                                        loading="lazy" />
                                    <p>{selectedSpell.buyCost}</p>
                                </div>
                            </div>
                            {selectedRace !== 5 ? (
                                <>
                                    <div className="researchCost">
                                        <div className="cost-label">{t("researchCostLabel")}:</div>
                                        {researchCost.map(({ type, amount }, index) => (
                                            <div className="cost-val" key={index}>
                                                <img
                                                    width="40"
                                                    height="34"
                                                    src={`/icons/mana-${type}.png`}
                                                    alt={`res ${type}`}
                                                    loading="lazy" />
                                                <p>{selectedLevel === 5
                                                    ? amount / 2
                                                    : (<><span>{amount}</span> / <span style={{ cursor: "url(/cursor-pointer.png), pointer" }} aria-label={t("mageLord")}>{amount / 2}*</span></>)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : null}
                            <div className="castCost">
                                <div className="cost-label">{t("castCostLabel")}:</div>
                                {castCost.map(({ type, amount }, index) => (
                                    <div className="cost-val" key={index}>
                                        <img
                                            src={`/icons/mana-${type}.png`}
                                            alt={`res ${type}`}
                                            loading="lazy" />
                                        <p>{amount}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
            {
                [1, 2, 3, 4, 5].map((lvl) => (
                    <button key={lvl} onClick={handleLevelClick(lvl)} className={`bookmark bookmark-${lvl} ` + (lvl === selectedLevel ? 'selected' : '')}></button>
                ))
            }
            <button className="button-back" onClick={() => setSelectedTab(undefined)}></button>
        </div>
    )
}