import { useState, useMemo } from "react"
import { buildData } from "../data/buildings.js"
import { unitData } from "../data/units.js"
import { useTranslation } from "react-i18next"
import { isBranchBuilt } from "../utils/isBranchBuilt.js"

export default function CapitalPage(props) {
    const { setSelectedTab, selectedRace } = props
    const [selectedCat, setSelectedCat] = useState("melee")
    const { t } = useTranslation()
    const buildCats = ["melee", "mage", "range", "support", "misc"]
    const [builds, setBuilds] = useState(buildData)

    const exclusiveGroups = [
        ["g000bb0001", "g000bb0002", "g000bb0003", "g000bb0004", "g000bb0010", "g000bb0011"],
        ["g000bb0006", "g000bb0007"],
        ["g000bb0008", "g000bb0009", "g000bb0012", "g000bb0013"],
        ["g000bb0018", "g000bb0019"],
        ["g000bb0020", "g000bb0021", "g000bb0022"],
        ["g000bb0023", "g000bb0024"],
        ["g000bb0025", "g000bb0026", "g000bb0027", "g000bb0028", "g000bb0029"],
        ["g000bb0030", "g000bb0031"],
        ["g000bb0035", "g000bb0036"],
        ["g000bb0038", "g000bb0039", "g000bb0040", "g000bb0041"],
        ['g000bb0042', "g000bb0043", "g000bb0044", "g000bb0045", "g000bb0046", "g000bb0047"],
        ['g000bb0053', "g000bb0054", "g000bb0055", "g000bb0056", "g000bb0057"],
        ['g000bb0058', 'g000bb0059', 'g000bb0060', 'g000bb0061', 'g000bb0062'],
        ['g000bb0064', 'g000bb0065'],
        // add more groups here if needed
    ]

    const handleShowBuilding = (buildIndex) => {
        setBuilds((prev) => {
            const clicked = prev.find((b) => b.buildIndex === buildIndex)
            const willEnable = !clicked.isBuilt
            return prev.map((b) => {
                if (b.buildIndex === buildIndex) {
                    return { ...b, isBuilt: !b.isBuilt }
                }
                if (willEnable) {
                    const group = exclusiveGroups.find((g) => g.includes(buildIndex))
                    if (group && group.includes(b.buildIndex)) {
                        return { ...b, isBuilt: false }
                    }
                }
                return b
            })
        })
    }
    const filteredBuilds = useMemo(
        () =>
            builds.filter(
                (build) =>
                    build.race === `race${selectedRace}` && build.category === selectedCat
            ),
        [builds, selectedRace, selectedCat]
    )
    const filteredUnits = useMemo(
        () =>
            unitData.filter((unit) => unit.race === `race${selectedRace}`),
        [selectedRace, selectedCat]
    )

    return (
        <div className="capital-page">
            <div className="capital-left"
                style={
                    selectedRace === 0 ? {
                        background: [
                            `url(/capitals/vhar.png) no-repeat ${(311 / (448 - 96)) * 100}% ${(262 / (420 - 96)) * 100}% / ${100 * 96 / 448}% ${100 * 98 / 420}%`,
                            isBranchBuilt("g000bb0011", builds)
                                ? `url(/capitals/g000bb0011.png) no-repeat ${(185 / (448 - 87)) * 100}% ${(195 / (420 - 114)) * 100}% / ${100 * 87 / 448}% ${100 * 114 / 420}%` : "",
                            isBranchBuilt("g000bb0008", builds)
                                ? `url(/capitals/g000bb0008.png) no-repeat ${(248 / (448 - 177)) * 100}% ${(170 / (420 - 176)) * 100}% / ${100 * 177 / 448}% ${100 * 176 / 420}%` : "",
                            isBranchBuilt("g000bb0016", builds)
                                ? `url(/capitals/g000bb0016.png) no-repeat ${(196 / (448 - 88)) * 100}% ${(152 / (420 - 83)) * 100}% / ${100 * 88 / 448}% ${100 * 83 / 420}%` : "",
                            isBranchBuilt("g000bb0015", builds)
                                ? `url(/capitals/g000bb0015.png) no-repeat ${(66 / (448 - 108)) * 100}% ${(245 / (420 - 91)) * 100}% / ${100 * 108 / 448}% ${100 * 91 / 420}%` : "",
                            isBranchBuilt("g000bb0001", builds)
                                ? `url(/capitals/g000bb0001.gif) no-repeat ${(98 / (448 - 91)) * 100}% ${(187 / (420 - 66)) * 100}% / ${100 * 91 / 448}% ${100 * 66 / 420}%` : "",
                            isBranchBuilt("g000bb0005", builds)
                                ? `url(/capitals/g000bb0005.png) no-repeat ${(19 / (448 - 130)) * 100}% ${(218 / (420 - 79)) * 100}% / ${100 * 130 / 448}% ${100 * 79 / 420}%` : "",
                            `url(/capitals/flg.gif) no-repeat ${(10 / (448 - 164)) * 100}% 0% / ${100 * 164 / 448}% ${100 * 60 / 420}%`,
                            isBranchBuilt("g000bb0003", builds)
                                ? `url(/capitals/g000bb0003.png) no-repeat 0% 100% / ${100 * 72 / 448}% ${100 * 74 / 420}%` : "",
                            isBranchBuilt("g000bb0012", builds)
                                ? `url(/capitals/g000bb0012.png) no-repeat ${(269 / (448 - 109)) * 100}% ${(254 / (420 - 93)) * 100}% / ${100 * 109 / 448}% ${100 * 93 / 420}%` : "",

                            isBranchBuilt("g000bb0013", builds)
                                ? `url(/capitals/g000bb0013.png) no-repeat 100% ${(90 / (420 - 246)) * 100}% / ${100 * 175 / 448}% ${100 * 246 / 420}%` : "",

                            isBranchBuilt("g000bb0010", builds)
                                ? `url(/capitals/g000bb0010.gif) no-repeat ${(179 / (448 - 92)) * 100}% ${(233 / (420 - 80)) * 100}% / ${100 * 92 / 448}% ${100 * 80 / 420}%` : "",
                            isBranchBuilt("g000bb0004", builds)
                                ? `url(/capitals/g000bb0004.gif) no-repeat ${(60 / (448 - 72)) * 100}% ${(96 / (420 - 109)) * 100}% / ${100 * 72 / 448}% ${100 * 109 / 420}%` : "",
                            `url(/capitals/eau.gif) no-repeat 0% ${(167 / (420 - 60)) * 100}% / ${100 * 240 / 448}% ${100 * 56 / 420}%`,
                            isBranchBuilt("g000bb0002", builds)
                                ? `url(/capitals/g000bb0002.png) no-repeat ${(145 / (448 - 48)) * 100}% ${(51 / (420 - 85)) * 100}% / ${100 * 48 / 448}% ${100 * 85 / 420}%` : "",
                            isBranchBuilt("g000bb0009", builds)
                                ? `url(/capitals/g000bb0009.png) no-repeat ${(277 / (448 - 93)) * 100}% ${(82 / (420 - 94)) * 100}% / ${100 * 93 / 448}% ${100 * 94 / 420}%` : "",
                            isBranchBuilt("g000bb0017", builds)
                                ? `url(/capitals/g000bb0017.png) no-repeat ${(358 / (448 - 81)) * 100}% ${(75 / (420 - 86)) * 100}% / ${100 * 81 / 448}% ${100 * 86 / 420}%` : "",
                            isBranchBuilt("g000bb0007", builds)
                                ? `url(/capitals/g000bb0007.gif) no-repeat ${(291 / (448 - 46)) * 100}% ${(14 / (420 - 30)) * 100}% / ${100 * 46 / 448}% ${100 * 30 / 420}%` : "",
                            isBranchBuilt("g000bb0006", builds)
                                ? `url(/capitals/g000bb0006.png) no-repeat ${(292 / (448 - 38)) * 100}% ${(37 / (420 - 43)) * 100}% / ${100 * 39 / 448}% ${100 * 43 / 420}%` : "",
                            isBranchBuilt("g000bb0014", builds)
                                ? `url(/capitals/g000bb0014.png) no-repeat ${(368 / (448 - 71)) * 100}% 0% / ${100 * 71 / 448}% ${100 * 50 / 420}%` : "",
                            `url(/capitals/capital-empire.png) no-repeat left top / cover`,
                        ].filter(Boolean).join(", "),
                    } : selectedRace === 1 ? {
                        background: [
                            isBranchBuilt("g000bb0031", builds)
                                ? `url(/capitals/yeux.gif) no-repeat ${(15 / (448 - 40)) * 100}% ${(104 / (420 - 36)) * 100}% / ${100 * 40 / 448}% ${100 * 36 / 420}%` : "",
                            isBranchBuilt("g000bb0030", builds)
                                ? `url(/capitals/ours.gif) no-repeat ${(114 / (448 - 44)) * 100}% 100% / ${100 * 44 / 448}% ${100 * 44 / 420}%` : "",
                            isBranchBuilt("g000bb0029", builds)
                                ? `url(/capitals/garde.gif) no-repeat ${(267 / (448 - 76)) * 100}% ${(87 / (420 - 28)) * 100}% / ${100 * 76 / 448}% ${100 * 28 / 420}%` : "",
                            isBranchBuilt("g000bb0019", builds)
                                ? `url(/capitals/toitneig.gif) no-repeat ${(266 / (448 - 28)) * 100}% ${(316 / (420 - 52)) * 100}% / ${100 * 28 / 448}% ${100 * 52 / 420}%` : "",
                            isBranchBuilt("g000bb0024", builds)
                                ? `url(/capitals/telescop.gif) no-repeat ${(107 / (448 - 48)) * 100}% ${(82 / (420 - 32)) * 100}% / ${100 * 48 / 448}% ${100 * 32 / 420}%` : "",
                            isBranchBuilt("g000bb0032", builds)
                                ? `url(/capitals/feuBleu.gif) no-repeat ${(366 / (448 - 80)) * 100}% ${(274 / (420 - 56)) * 100}% / ${100 * 80 / 448}% ${100 * 56 / 420}%` : "",
                            isBranchBuilt("g000bb0023", builds)
                                ? `url(/capitals/tuyeau.gif) no-repeat ${(59 / (448 - 64)) * 100}% ${(259 / (420 - 56)) * 100}% / ${100 * 64 / 448}% ${100 * 56 / 420}%` : "",
                            isBranchBuilt("g000bb0030", builds)
                                ? `url(/capitals/g000bb0030.png) no-repeat ${(110 / (448 - 89)) * 100}% 100% / ${100 * 89 / 448}% ${100 * 48 / 420}%` : "",
                            isBranchBuilt("g000bb0019", builds)
                                ? `url(/capitals/g000bb0019.png) no-repeat ${(262 / (448 - 127)) * 100}% ${(294 / (420 - 82)) * 100}% / ${100 * 127 / 448}% ${100 * 82 / 420}%` : "",
                            isBranchBuilt("g000bb0032", builds)
                                ? `url(/capitals/g000bb0032.png) no-repeat ${(364 / (448 - 80)) * 100}% ${(290 / (420 - 66)) * 100}% / ${100 * 80 / 448}% ${100 * 66 / 420}%` : "",
                            isBranchBuilt("g000bb0027", builds)
                                ? `url(/capitals/g000bb0027.png) no-repeat ${(292 / (448 - 114)) * 100}% ${(217 / (420 - 107)) * 100}% / ${100 * 114 / 448}% ${100 * 107 / 420}%` : "",
                            isBranchBuilt("g000bb0028", builds)
                                ? `url(/capitals/g000bb0028.png) no-repeat ${(174 / (448 - 105)) * 100}% ${(200 / (420 - 85)) * 100}% / ${100 * 105 / 448}% ${100 * 85 / 420}%` : "",
                            isBranchBuilt("g000bb0033", builds)
                                ? `url(/capitals/g000bb0033.png) no-repeat ${(241 / (448 - 71)) * 100}% ${(197 / (420 - 74)) * 100}% / ${100 * 71 / 448}% ${100 * 74 / 420}%` : "",
                            isBranchBuilt("g000bb0034", builds)
                                ? `url(/capitals/g000bb0034.png) no-repeat ${(2 / (448 - 98)) * 100}% ${(172 / (420 - 59)) * 100}% / ${100 * 98 / 448}% ${100 * 59 / 420}%` : "",
                            isBranchBuilt("g000bb0025", builds)
                                ? `url(/capitals/g000bb0025.png) no-repeat ${(137 / (448 - 97)) * 100}% ${(160 / (420 - 63)) * 100}% / ${100 * 97 / 448}% ${100 * 63 / 420}%` : "",
                            isBranchBuilt("g000bb0018", builds)
                                ? `url(/capitals/fumee.gif) no-repeat ${(148 / (448 - 32)) * 100}% ${(230 / (420 - 56)) * 100}% / ${100 * 32 / 448}% ${100 * 56 / 420}%,
                                url(/capitals/g000bb0018.png) no-repeat ${(138 / (448 - 130)) * 100}% ${(273 / (420 - 101)) * 100}% / ${100 * 130 / 448}% ${100 * 101 / 420}%` 
                                : "",
                            isBranchBuilt("g000bb0023", builds)
                                ? `url(/capitals/g000bb0023.png) no-repeat ${(49 / (448 - 135)) * 100}% ${(245 / (420 - 92)) * 100}% / ${100 * 135 / 448}% ${100 * 92 / 420}%` : "",
                            isBranchBuilt("g000bb0024", builds)
                                ? `url(/capitals/g000bb0024.png) no-repeat ${(108 / (448 - 36)) * 100}% ${(50 / (420 - 137)) * 100}% / ${100 * 36 / 448}% ${100 * 137 / 420}%` : "",
                            isBranchBuilt("g000bb0031", builds)
                                ? `url(/capitals/g000bb0031.png) no-repeat 0% ${(65 / (420 - 85)) * 100}% / ${100 * 67 / 448}% ${100 * 85 / 420}%` : "",
                            isBranchBuilt("g000bb0029", builds)
                                ? `url(/capitals/g000bb0029.png) no-repeat ${(247 / (448 - 90)) * 100}% ${(68 / (420 - 83)) * 100}% / ${100 * 90 / 448}% ${100 * 83 / 420}%` : "",
                            isBranchBuilt("g000bb0026", builds)
                                ? `url(/capitals/g000bb0026.png) no-repeat ${(194 / (448 - 70)) * 100}% ${(42 / (420 - 72)) * 100}% / ${100 * 70 / 448}% ${100 * 72 / 420}%` : "",
                            isBranchBuilt("g000bb0022", builds)
                                ? `url(/capitals/g000bb0022.png) no-repeat ${(81 / (448 - 143)) * 100}% 0% / ${100 * 143 / 448}% ${100 * 143 / 420}%` : "",
                            isBranchBuilt("g000bb0020", builds)
                                ? `url(/capitals/g000bb0020.png) no-repeat ${(83 / (448 - 136)) * 100}% 0% / ${100 * 136 / 448}% ${100 * 128 / 420}%` : "",
                            isBranchBuilt("g000bb0021", builds)
                                ? `url(/capitals/g000bb0021.png) no-repeat ${(39 / (448 - 60)) * 100}% ${(9 / (420 - 100)) * 100}% / ${100 * 60 / 448}% ${100 * 100 / 420}%` : "",
                            `url(/capitals/capital-clans.png) no-repeat left top / cover`,
                        ].filter(Boolean).join(", "),
                    } : selectedRace === 2 ? {
                        background: [
                            isBranchBuilt("g000bb0048", builds)
                                ? `url(/capitals/g000bb0048.png) no-repeat 100% 100% / ${100 * 372 / 448}% ${100 * 116 / 420}%` : "",
                            isBranchBuilt("g000bb0038", builds)
                                ? `url(/capitals/g000bb0038.gif) no-repeat 100% ${(262 / (420 - 124)) * 100}% / ${100 * 104 / 448}% ${100 * 124 / 420}%` : "",
                            isBranchBuilt("g000bb0044", builds)
                                ? `url(/capitals/g000bb0044.png) no-repeat ${(199 / (448 - 172)) * 100}% ${(215 / (420 - 167)) * 100}% / ${100 * 172 / 448}% ${100 * 167 / 420}%` : "",
                            isBranchBuilt("g000bb0045", builds)
                                ? `url(/capitals/g000bb0045.gif) no-repeat ${(213 / (448 - 171)) * 100}% ${(231 / (420 - 149)) * 100}% / ${100 * 171 / 448}% ${100 * 149 / 420}%` : "",
                            `url(/capitals/blop4.gif) no-repeat ${(261 / (448 - 48)) * 100}% ${(209 / (420 - 40)) * 100}% / ${100 * 48 / 448}% ${100 * 40 / 420}%`,
                            `url(/capitals/blop3.gif) no-repeat ${(178 / (448 - 36)) * 100}% ${(221 / (420 - 40)) * 100}% / ${100 * 36 / 448}% ${100 * 40 / 420}%`,
                            `url(/capitals/blop2.gif) no-repeat ${(234 / (448 - 48)) * 100}% ${(247 / (420 - 36)) * 100}% / ${100 * 48 / 448}% ${100 * 36 / 420}%`,
                            `url(/capitals/blop1.gif) no-repeat ${(112 / (448 - 64)) * 100}% ${(276 / (420 - 68)) * 100}% / ${100 * 64 / 448}% ${100 * 68 / 420}%`,
                            `url(/capitals/feuB.gif) no-repeat ${(324 / (448 - 52)) * 100}% ${(70 / (420 - 60)) * 100}% / ${100 * 52 / 448}% ${100 * 60 / 420}%`,
                            isBranchBuilt("g000bb0037", builds)
                                ? `url(/capitals/g000bb0037.gif) no-repeat 100% ${(28 / (420 - 68)) * 100}% / ${100 * 192 / 448}% ${100 * 68 / 420}%` : "",
                            `url(/capitals/feuA.gif) no-repeat ${(277 / (448 - 44)) * 100}% ${(118 / (420 - 52)) * 100}% / ${100 * 44 / 448}% ${100 * 52 / 420}%`,
                            isBranchBuilt("g000bb0049", builds)
                                ? `url(/capitals/g000bb0049.png) no-repeat ${(343 / (448 - 93)) * 100}% ${(211 / (420 - 70)) * 100}% / ${100 * 93 / 448}% ${100 * 70 / 420}%` : "",
                            isBranchBuilt("g000bb0035", builds)
                                ? `url(/capitals/g000bb0035.gif) no-repeat 0 ${(190 / (420 - 146)) * 100}% / ${100 * 136 / 448}% ${100 * 146 / 420}%` : "",
                            isBranchBuilt("g000bb0047", builds)
                                ? `url(/capitals/g000bb0047.png) no-repeat 100% ${(95 / (420 - 119)) * 100}% / ${100 * 91 / 448}% ${100 * 119 / 420}%` : "",
                            isBranchBuilt("g000bb0036", builds)
                                ? `url(/capitals/g000bb0036.png) no-repeat ${(36 / (448 - 144)) * 100}% ${(142 / (420 - 116)) * 100}% / ${100 * 144 / 448}% ${100 * 116 / 420}%` : "",
                            isBranchBuilt("g000bb0050", builds)
                                ? `url(/capitals/g000bb0050.png) no-repeat ${(238 / (448 - 64)) * 100}% ${(88 / (420 - 135)) * 100}% / ${100 * 64 / 448}% ${100 * 135 / 420}%` : "",

                            isBranchBuilt("g000bb0051", builds)
                                ? `url(/capitals/g000bb0051.png) no-repeat 0% ${(91 / (420 - 109)) * 100}% / ${100 * 61 / 448}% ${100 * 109 / 420}%` : "",

                            isBranchBuilt("g000bb0040", builds)
                                ? `url(/capitals/g000bb0040.png) no-repeat ${(122 / (448 - 171)) * 100}% ${(149 / (420 - 76)) * 100}% / ${100 * 171 / 448}% ${100 * 76 / 420}%` : "",
                            isBranchBuilt("g000bb0043", builds)
                                ? `url(/capitals/g000bb0043.png) no-repeat ${(269 / (448 - 76)) * 100}% ${(19 / (420 - 137)) * 100}% / ${100 * 76 / 448}% ${100 * 137 / 420}%` : "",
                            isBranchBuilt("g000bb0041", builds)
                                ? `url(/capitals/g000bb0041.png) no-repeat ${(108 / (448 - 168)) * 100}% ${(80 / (420 - 142)) * 100}% / ${100 * 168 / 448}% ${100 * 142 / 420}%` : "",
                            isBranchBuilt("g000bb0046", builds)
                                ? `url(/capitals/g000bb0046.gif) no-repeat top left / ${100 * 92 / 448}% ${100 * 80 / 420}%` : "",
                            isBranchBuilt("g000bb0042", builds)
                                ? `url(/capitals/g000bb0042.gif) no-repeat ${(196 / (448 - 100)) * 100}% ${(62 / (420 - 40)) * 100}% / ${100 * 100 / 448}% ${100 * 40 / 420}%` : "",
                            isBranchBuilt("g000bb0039", builds)
                                ? `url(/capitals/g000bb0039.png) no-repeat ${(143 / (448 - 69)) * 100}% ${(15 / (420 - 57)) * 100}% / ${100 * 69 / 448}% ${100 * 57 / 420}%` : "",
                            `url(/capitals/capital-legions.png) no-repeat 0 / contain`,
                        ].filter(Boolean).join(", "),
                    } : selectedRace === 3 ? {
                        background: [
                            isBranchBuilt("g000bb0068", builds)
                                ? `url(/capitals/g000bb0068.png) no-repeat ${(147 / (448 - 141)) * 100}% 100% / ${100 * 141 / 448}% ${100 * 118 / 420}%` : "",
                            isBranchBuilt("g000bb0062", builds)
                                ? `url(/capitals/g000bb0062.png) no-repeat ${(209 / (448 - 62)) * 100}% ${(118 / (420 - 91)) * 100}% / ${100 * 62 / 448}% ${100 * 91 / 420}%` : "",
                            isBranchBuilt("g000bb0053", builds)
                                ? `url(/capitals/darktmpl.gif) no-repeat ${(117 / (448 - 64)) * 100}% ${(313 / (420 - 36)) * 100}% / ${100 * 64 / 448}% ${100 * 36 / 420}%,
                                url(/capitals/g000bb0053.png) no-repeat ${(94 / (448 - 90)) * 100}% ${(266 / (420 - 89)) * 100}% / ${100 * 90 / 448}% ${100 * 89 / 420}%` : "",
                            `url(/capitals/bonhomme.gif) no-repeat ${(258 / (448 - 88)) * 100}% ${(294 / (420 - 68)) * 100}% / ${100 * 88 / 448}% ${100 * 68 / 420}%`,
                            isBranchBuilt("g000bb0055", builds)
                                ? `url(/capitals/feu14.gif) no-repeat ${(278 / (448 - 28)) * 100}% ${(112 / (420 - 24)) * 100}% / ${100 * 28 / 448}% ${100 * 24 / 420}%` : "",
                            isBranchBuilt("g000bb0056", builds)
                                ? `url(/capitals/g000bb0056.png) no-repeat ${(236 / (448 - 113)) * 100}% 0% / ${100 * 113 / 448}% ${100 * 166 / 420}%` : "",
                            `url(/capitals/feu13.gif) no-repeat ${(48 / (448 - 64)) * 100}% ${(352 / (420 - 56)) * 100}% / ${100 * 64 / 448}% ${100 * 56 / 420}%`,
                            `url(/capitals/feu15.gif) no-repeat ${(114 / (448 - 12)) * 100}% ${(301 / (420 - 16)) * 100}% / ${100 * 12 / 448}% ${100 * 16 / 420}%`,
                            `url(/capitals/feu11.gif) no-repeat ${(96 / (448 - 44)) * 100}% ${(201 / (420 - 80)) * 100}% / ${100 * 44 / 448}% ${100 * 80 / 420}%`,
                            isBranchBuilt("g000bb0066", builds)
                                ? `url(/capitals/feu09.gif) no-repeat ${(194 / (448 - 16)) * 100}% ${(79 / (420 - 20)) * 100}% / ${100 * 16 / 448}% ${100 * 20 / 420}%,
                                url(/capitals/feu08.gif) no-repeat ${(148 / (448 - 16)) * 100}% ${(89 / (420 - 20)) * 100}% / ${100 * 16 / 448}% ${100 * 20 / 420}%` : "",
                            `url(/capitals/feu07.gif) no-repeat ${(215 / (448 - 16)) * 100}% ${(232 / (420 - 24)) * 100}% / ${100 * 16 / 448}% ${100 * 24 / 420}%`,
                            `url(/capitals/feu06.gif) no-repeat ${(155 / (448 - 12)) * 100}% ${(170 / (420 - 24)) * 100}% / ${100 * 12 / 448}% ${100 * 24 / 420}%`,
                            `url(/capitals/feu05.gif) no-repeat ${(118 / (448 - 52)) * 100}% ${(131 / (420 - 32)) * 100}% / ${100 * 52 / 448}% ${100 * 32 / 420}%`,
                            `url(/capitals/feu03.gif) no-repeat ${(279 / (448 - 8)) * 100}% ${(79 / (420 - 12)) * 100}% / ${100 * 8 / 448}% ${100 * 12 / 420}%`,
                            `url(/capitals/feu02.gif) no-repeat ${(193 / (448 - 60)) * 100}% ${(65 / (420 - 16)) * 100}% / ${100 * 60 / 448}% ${100 * 16 / 420}%`,
                            `url(/capitals/feu01.gif) no-repeat ${(91 / (448 - 48)) * 100}% ${(55 / (420 - 28)) * 100}% / ${100 * 48 / 448}% ${100 * 28 / 420}%`,
                            isBranchBuilt("g000bb0060", builds)
                                ? `url(/capitals/cremat.gif) no-repeat ${(24 / (448 - 40)) * 100}% ${(229 / (420 - 32)) * 100}% / ${100 * 40 / 448}% ${100 * 32 / 420}%` : "",
                            isBranchBuilt("g000bb0067", builds)
                                ? `url(/capitals/g000bb0067.png) no-repeat 0% ${(301 / (420 - 72)) * 100}% / ${100 * 57 / 448}% ${100 * 72 / 420}%` : "",
                            isBranchBuilt("g000bb0059", builds)
                                ? `url(/capitals/g000bb0059.png) no-repeat 0% ${(265 / (420 - 125)) * 100}% / ${100 * 119 / 448}% ${100 * 125 / 420}%` : "",
                            isBranchBuilt("g000bb0060", builds)
                                ? `url(/capitals/g000bb0060.png) no-repeat 0% ${(191 / (420 - 132)) * 100}% / ${100 * 130 / 448}% ${100 * 132 / 420}%` : "",
                            isBranchBuilt("g000bb0052", builds)
                                ? `url(/capitals/g000bb0052.png) no-repeat ${(194 / (448 - 137)) * 100}% ${(144 / (420 - 110)) * 100}% / ${100 * 137 / 448}% ${100 * 110 / 420}%` : "",
                            `url(/capitals/feu04.gif) no-repeat ${(187 / (448 - 52)) * 100}% ${(101 / (420 - 32)) * 100}% / ${100 * 52 / 448}% ${100 * 32 / 420}%`,
                            isBranchBuilt("g000bb0061", builds)
                                ? `url(/capitals/g000bb0061.png) no-repeat 0% ${(50 / (420 - 139)) * 100}% / ${100 * 70 / 448}% ${100 * 139 / 420}%` : "",
                            isBranchBuilt("g000bb0058", builds)
                                ? `url(/capitals/g000bb0058.png) no-repeat 0% ${(127 / (420 - 70)) * 100}% / ${100 * 110 / 448}% ${100 * 70 / 420}%` : "",
                            isBranchBuilt("g000bb0055", builds)
                                ? `url(/capitals/g000bb0055.png) no-repeat ${(253 / (448 - 110)) * 100}% ${(47 / (420 - 118)) * 100}% / ${100 * 110 / 448}% ${100 * 118 / 420}%` : "",
                            isBranchBuilt("g000bb0066", builds)
                                ? `url(/capitals/g000bb0066.png) no-repeat ${(134 / (448 - 94)) * 100}% ${(84 / (420 - 67)) * 100}% / ${100 * 94 / 448}% ${100 * 67 / 420}%` : "",
                            isBranchBuilt("g000bb0063", builds)
                                ? `url(/capitals/g000bb0063.png) no-repeat ${(108 / (448 - 108)) * 100}% ${(34 / (420 - 61)) * 100}% / ${100 * 108 / 448}% ${100 * 61 / 420}%` : "",
                            isBranchBuilt("g000bb0064", builds)
                                ? `url(/capitals/cavern.gif) no-repeat ${(226 / (448 - 36)) * 100}% ${(51 / (420 - 36)) * 100}% / ${100 * 36 / 448}% ${100 * 36 / 420}%` : "",
                            isBranchBuilt("g000bb0065", builds)
                                ? `url(/capitals/g000bb0065.png) no-repeat ${(167 / (448 - 187)) * 100}% 0% / ${100 * 187 / 448}% ${100 * 88 / 420}%` : "",
                            isBranchBuilt("g000bb0064", builds)
                                ? `url(/capitals/g000bb0064.png) no-repeat ${(193 / (448 - 134)) * 100}% ${(10 / (420 - 79)) * 100}% / ${100 * 134 / 448}% ${100 * 79 / 420}%` : "",
                            isBranchBuilt("g000bb0054", builds)
                                ? `url(/capitals/g000bb0054.png) no-repeat ${(58 / (448 - 85)) * 100}% ${(15 / (420 - 69)) * 100}% / ${100 * 85 / 448}% ${100 * 69 / 420}%` : "",
                            isBranchBuilt("g000bb0057", builds)
                                ? `url(/capitals/g000bb0057.gif) no-repeat ${(41 / (448 - 64)) * 100}% ${(65 / (420 - 60)) * 100}% / ${100 * 64 / 448}% ${100 * 60 / 420}%` : "",
                            `url(/capitals/capital-hordes.png) no-repeat left top / cover`,
                        ].filter(Boolean).join(", "),
                    } : {

                    }}
            ></div>
            <div className="capital-right">
                <div className="capital-build-list">
                    {
                        filteredBuilds.sort((a, b) => (a.buildOrder - b.buildOrder)).map((build) => {
                            const buildUnits = filteredUnits.filter(unit => unit.requiredBuild === build.buildIndex).map(unit => t(`units.${unit.unitIndex}.name`)).join(", ")
                            return (<>
                                <button
                                    key={build.buildOrder}
                                    className={`build-button ${build.isBuilt ? "active" : ""}`}
                                    style={build.buildGap ? { marginBottom: `3cqh` } : {}}
                                    aria-label={buildUnits.length ? buildUnits : null}
                                    onClick={() => { handleShowBuilding(build.buildIndex) }}>
                                    {t(`buildings.${build.buildIndex}.name`)}
                                </button>
                            </>)
                        })
                    }
                </div>
                <div className="capital-cat-buttons">
                    {buildCats.map((buildCat, catIndex) => (
                        <button
                            key={catIndex}
                            className={`capital cat-button ${buildCat} ${buildCat === selectedCat ? "cat-button-selected" : ""}`}
                            onClick={() => { setSelectedCat(buildCat) }}
                        >
                        </button>
                    ))}
                </div>
            </div>
            <button className="button-back" onClick={() => {
                buildData.map((build) => build.isBuilt = false)
                setSelectedTab(undefined)
            }}></button>
        </div>
    )
}
