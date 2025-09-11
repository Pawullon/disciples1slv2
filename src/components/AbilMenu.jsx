import { useMemo } from "react"
import { abilData } from "../data/abilities.js"
import { useTranslation } from "react-i18next"

export default function AbilMenu({ setSelectedSubPage }) {
    const { t } = useTranslation()

    const groupedAbils = useMemo(() => {
        return abilData.reduce((groups, abil) => {
            if (!groups[abil.minLevel]) {
                groups[abil.minLevel] = []
            }
            groups[abil.minLevel].push(abil)
            return groups
        }, {})
    }, [abilData])

    const AbilGroup = ({ minLevel, abilities }) => (
        <>
            {abilities.map((abil, index) => (
                <tr key={abil.abilIndex}>
                    {index === 0 && <td rowSpan={abilities.length}>{minLevel}</td>}
                    <td>{t(`abilities.${abil.abilIndex}.name`)}</td>
                    <td>{t(`abilities.${abil.abilIndex}.desc`)}</td>
                    <td style={!abil.lordType ? {border: "none"} : {}}>{t(abil.lordType)}</td>
                </tr>
            ))}
        </>
    )

    return (
        <div className="abil-menu">
            <div className="abil-list">
                <table className="abil-table">
                    <thead>
                        <tr>
                            <th>{t("abilMinLevel")}</th>
                            <th>{t("abilName")}</th>
                            <th>{t("abilDesc")}</th>
                            <th>Lord</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(groupedAbils).map(([minLevel, abilities]) => (
                            <AbilGroup key={minLevel} minLevel={minLevel} abilities={abilities} />
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="button-back" onClick={() => setSelectedSubPage(undefined)}></button>
        </div>
    )
}