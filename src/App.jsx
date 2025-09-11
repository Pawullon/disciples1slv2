import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import './utils/i18n.js'
import SideNav from "./components/SideNav.jsx"
import Container from "./components/Container.jsx"

function App() {

  const [selectedRace, setSelectedRace] = useState()
  const [selectedTab, setSelectedTab] = useState()
  const [selectedSubPage, setSelectedSubPage] = useState()
  const [selectedUnit, setSelectedUnit] = useState()

  const { t, i18n } = useTranslation()

  useEffect(() => { document.title = t("pageTitle") }, [t])

  return (
    <>
      <SideNav i18n={i18n} selectedRace={selectedRace} setSelectedRace={setSelectedRace} selectedSubPage={selectedSubPage} setSelectedSubPage={setSelectedSubPage} setSelectedTab={setSelectedTab} setSelectedUnit={setSelectedUnit} />
      <Container selectedRace={selectedRace} setSelectedRace={setSelectedRace} selectedSubPage={selectedSubPage} setSelectedSubPage={setSelectedSubPage} selectedTab={selectedTab} setSelectedTab={setSelectedTab} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
    </>
  )
}

export default App