import React from "react"
import {Col,Card} from "antd";
import "./item-card-style.css"

const ItemCard = () => {
    return (
        <>
            <Card  bordered={false} className="item-card">
                <p>Card content</p>
            </Card>
        </>
    )
}
export default ItemCard

