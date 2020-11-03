import React from 'react'
import {Col, Row,Card} from "antd";
import "./order-card-style.css"

const OrderCard = ({data,setOrder,order}) => {
    
    return(
        <Card className={["order-card",(order?.transaction_ref==data?.transaction_ref && "border")]} 
        title={data? data.transaction_ref:"ORDER NO"} 
        headStyle={{color:'white',height:'30%',textAlign:'center'}}
        bodyStyle={{padding:'10px',textAlign:'right'}}
        onClick={()=>{setOrder(data)}}
        >
            <Row>
                <Col span={20} >
                    <div className="cardBody">
                        <span className="card-text">REQ ORDER QTY : {data?.req_order_qty}</span>
                        <span className="card-text">PICKED QTY : {data?.picked_order_qty}</span>
                    </div>
                </Col>
                <Col span={4}>
                    <span className="status-text">{data?.position}</span>
                </Col>
            </Row>
        </Card>
    )
}

export default OrderCard
