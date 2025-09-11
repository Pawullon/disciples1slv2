import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { resourcesTl } from "./resourcesTranslator"

const resources = resourcesTl

i18n
  .use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("languageSL") || "pl",
    fallbackLng: "pl",

    interpolation: {
      escapeValue: false
    }
  })

export default i18n