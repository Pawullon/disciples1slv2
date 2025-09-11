import { useState, useEffect, useRef, useMemo } from "react"
import { itemData } from "../data/items.js"
import { useTranslation } from "react-i18next"

export default function ItemMenu({ setSelectedSubPage }) {
    const { t } = useTranslation()
    const itemCats = t("itemCats", { returnObjects: true })

    const [selectedItemCat, setSelectedItemCat] = useState(0)
    const firstItemRef = useRef(null)

    const filteredItems = useMemo(
        () => itemData.filter(item => item.category === selectedItemCat),
        [itemCats, selectedItemCat]
    )

    useEffect(() => {
        if (firstItemRef.current) {
            firstItemRef.current.scrollIntoView({ behavior: "instant", block: "center" })
        }
    }, [selectedItemCat])

    const ItemButton = ({ itemCat, index }) => (
        <button
            key={index}
            className={`item-type-button ${itemCat} ${index === selectedItemCat ? 'item-type-button-selected' : ''}`}
            onClick={() => setSelectedItemCat(index)}
        >
            {itemCat}
        </button>
    )

    const Item = ({ item, isFirst }) => (
        <>
            <div
                className="item-icon" 
                ref={isFirst ? firstItemRef : null}
                id={isFirst ? "first-item" : undefined}
            >
                <div style={{background: `url(/items/${item.imgName ? item.imgName : item.itemIndex}.png) center / contain no-repeat`, margin: "1cqh"}}></div>
            </div>
            <div className="item-desc">
                {t(`items.${item.itemIndex}.name`)}
                <br />
                {t(`items.${item.itemIndex}.desc`)}

            </div>
        </>
    )
    return (
        <div className="item-menu">
            <div className="item-cat-menu">
                {itemCats.map((itemCat, index) => (
                    <ItemButton key={index} itemCat={itemCat} index={index} />
                ))}
            </div>

            <div className="item-list">
                {filteredItems.map((item, index) => (
                    <Item key={index} item={item} isFirst={index === 0} />
                ))}
            </div>

            <button className="button-back" onClick={() => setSelectedSubPage(undefined)}></button>
        </div>
    )
}