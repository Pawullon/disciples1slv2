import { useRef, useEffect, useState } from "react"
import StartPage from "./StartPage"
import RaceMenu from "./RaceMenu"
import ItemMenu from "./ItemMenu"
import AbilMenu from "./AbilMenu"
import CheatPage from "./CheatPage"

export default function Container(props) {
    const { selectedRace, selectedSubPage } = props

    const containerRef = useRef(null)
    const [topBorderWidth, setTopBorderWidth] = useState(0)
    const [sideBorderWidth, setSideBorderWidth] = useState(0)
    const [bottomBorderWidth, setBottomBorderWidth] = useState(0)

    useEffect(() => {
        if (!containerRef.current) return

        const updateBorderWidths = () => {
            const width = containerRef.current.offsetWidth
            setTopBorderWidth(25 / 670 * width)
            setSideBorderWidth(15 / 670 * width)
            setBottomBorderWidth(35 / 670 * width)
        }
        updateBorderWidths()
    })

    return (
        <div id="container" ref={containerRef} style={{ borderWidth: `${topBorderWidth}px ${sideBorderWidth}px ${bottomBorderWidth}px` }}>
            {selectedRace === undefined
                ? selectedSubPage === 0
                    ? <ItemMenu {...props} />
                    : selectedSubPage === 1
                        ? <AbilMenu {...props} />
                        : selectedSubPage === 2
                            ? <CheatPage {...props} />
                            : <StartPage />
                : <RaceMenu {...props} />}
        </div>
    )
}