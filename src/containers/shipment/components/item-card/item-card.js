import React from "react"
import {Col,Card,Row} from "antd";
import "./item-card-style.css"

const ItemCard = ({data}) => {
    
    return (
        <>
            <Card className={"item-card"} 
            title={data? data.item_descr:"ITEM DESCRIPTION"} 
            headStyle={{color:'white',height:'30%',textAlign:'center'}}
            bodyStyle={{padding:'10px',textAlign:'right'}}
            // onClick={()=>{handleClick(data?.items)}}
            >
                <Row>
                    <Col span={4}>
                        <span className="card-text">Item Code : {data?.item_code}</span>
                    </Col>
                    <Col span={20} >
                        <div className="cardBody">
                            <span className="card-text">REQ QTY : {data?.req_item_qty}</span>
                            <span className="card-text">PICKED QTY : {data?.picked_item_qty}</span>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default ItemCard

