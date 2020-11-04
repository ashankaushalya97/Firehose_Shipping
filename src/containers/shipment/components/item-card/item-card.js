import React from "react"
import {Col,Card,Row} from "antd";
import "./item-card-style.css"

const ItemCard = ({data,setItem,init}) => {
    const {item} = data;
    return (
        <>
            <Card className={["item-card",(init?.item?.item_code == data?.item?.item_code && 'border')]} 
            title={data? item.item_descr:"ITEM DESCRIPTION"} 
            headStyle={{color:'white',height:'30%',textAlign:'center'}}
            bodyStyle={{padding:'10px',textAlign:'right'}}
            onClick={()=>{setItem(data)}}
            >
                <Row>
                    <Col span={4}>
                        <span className="card-text">Item Code : {item?.item_code}</span>
                    </Col>
                    <Col span={20} >
                        <div className="cardBody">
                            <span className="card-text">REQ QTY : {item?.req_item_qty}</span>
                            <span className="card-text">PICKED QTY : {item?.picked_item_qty}</span>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default ItemCard

