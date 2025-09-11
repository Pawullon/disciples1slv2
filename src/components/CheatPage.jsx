import { useTranslation } from "react-i18next"

export default function CheatPage({ setSelectedSubPage }) {
    const { t } = useTranslation()

    return (
        <div className="cheat-page">
            <ul>
                <li>{t("cheats.givemeanotherchance")}</li>
                <li>{t("cheats.givememoney")}</li>
                <li>{t("cheats.iloveallofyou")}</li>
                <li>{t("cheats.iwanttobuildagain")}</li>
                <li>{t("cheats.iwanttokilleverybody")}</li>
                <li>{t("cheats.iwillkeepaneyeonyou")}</li>
                <li>{t("cheats.letmemove")}</li>
                <li>{t("cheats.makemestronger")}</li>
                <li>{t("cheats.nobodycanbeatme")}</li>
                <li>{t("cheats.nowicanseeyou")}</li>
                <li>{t("cheats.playhideandseek")}</li>
                <li>{t("cheats.upgrademe")}</li>
                <li>{t("cheats.whataloseriam")}</li>
                <li>{t("cheats.whoturnedoffthelights")}</li>
                <li>{t("cheats.wouldyou?")}</li>
            </ul>
            <button className="button-back" onClick={() => setSelectedSubPage(undefined)}></button>
        </div>
    )
}