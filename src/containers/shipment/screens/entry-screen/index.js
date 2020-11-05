import React, {useEffect, useState} from "react"
import {Button, Col, Input, Layout, Row, Table} from "antd";
import ItemCard from "../../components/item-card/item-card";
import ItemDetails from "../../components/item-details/item-details";
import {useDispatch, useSelector} from "react-redux";
import "./styles.css"
import "antd/dist/antd.css";
import moment from 'moment';
import {getShipment} from '../../selectors';
import {saveRecord} from '../../action'
import {getRecord} from '../../selectors'

const {TextArea} = Input;
const {Content} = Layout;

const EntryScreen = ({order,setOrder}) => {
    const [item,setItem] = useState();
    const [notes,setNotes] = useState();
    const [trackingNo,setTrackingNo] = useState('');
    const [expDate,setExpDate] = useState();
    const [trackingData,setTrackingData] = useState([]);
    const [err,setErr] = useState(false);
    const shipment = useSelector(getShipment);
    const newRecord = useSelector(getRecord);
    const dispatch = useDispatch();

    useEffect(()=>{
       order && setItem(order?.items[0])
    },[order])
    useEffect(()=>{
        console.log('item ::: ',item);
       item && setTrackingData(item.tracking_units)
    },[item])
    useEffect(()=>{
        console.log('trk :::::: ',trackingData);
    },[trackingData])

    useEffect(()=>{
        if(newRecord){
            setTrackingData([...trackingData,newRecord])
        }
    },[newRecord]);

    const addRecord = () => {
        if(trackingNo.length>0){
            dispatch(saveRecord({'tracking_no':trackingNo}));
            setTrackingNo('');
        }else{
            setErr(true)
        }
    }

    const handleQtyEdit = (val,record) => {
        record.picked_qty = parseInt(val)
        item.tracking_units = trackingData.map(m => (m.picked_qty == record.picked_qty ? record : m));
        order.items = order.items.map(m=> (m.item.item_code==item.item.item_code) ? item: m);
        setOrder(pre => ({...pre,order}));
        setItem(pre => ({...pre,item}));
    }
    const handleNotesEdit = (val,record) => {
        record.tu_notes = val
        item.tracking_units = trackingData.map(m => (m.tu_notes == record.tu_notes ? record : m));
        order.items = order.items.map(m=> (m.item.item_code==item.item.item_code) ? item: m);
        setOrder(pre => ({...pre,order}));
        setItem(pre => ({...pre,item}));
    }

    const columns = [
        {
            title: 'TYPE',
            dataIndex: 'committed_type',
        },
        {
            title: 'TRACKING UNIT',
            // className: 'column-money',
            dataIndex: 'cust_tracking_label',
            // align: 'right',
        },
        {
            title: 'ITEM CODE',
            dataIndex: 'customer',
            render : () => <span>{item?.item?.item_code}</span>
        },
        {
            title: 'EXPIRY',
            dataIndex: 'expiry_date',
        },
        {
            title: 'REQ PICK QTY',
            dataIndex: 'committed_qty',
        },
        {
            title: 'PICKED',
            dataIndex: 'picked_qty',
            render: (data, record, index) => (<Input defaultValue={data} bordered={false} 
                onChange={(e)=>{handleQtyEdit(e.target.value,record)}} 
                />)
        },
        {
            title: 'NOTES',
            dataIndex: 'tu_notes',
            render: (data, record, index) => (<Input defaultValue={data} bordered={false} 
                onChange={(e)=>{handleNotesEdit(e.target.value,record)}}
            />)
        },
    ];

    

    return(
        <>
        <Content className={"mainContent"}>
            <Col span={20} className={"topDetailsRow"}>
                <div className="item-container">
                        {
                            order?.items?.map(m =>
                                <ItemCard data={m} setItem={setItem} init={item} />    
                            )
                        }
                </div>
            </Col>

            <ItemDetails data={shipment}/>

            <Row gutter={16} style={{minHeight:"200px"}}>
                <Col span={24} >
                    <div className="table-wrapper outbound-table">
                        <Table
                            columns={columns}
                            // dataSource={item && item?.tracking_units}
                            dataSource={trackingData}
                            bordered
                            pagination={false}
                            size="small"
                            rowClassName="table-row"
                            scroll={{y: 200, x: 'max-content'}}
                            className = "tableDetails"
                        />
                    </div>
                </Col>
            </Row>
            <div>
                <TextArea 
                    className={"text-area"} rows={4}
                    placeHolder={"Order Level Notes"}
                    onChange={(e)=>{setNotes(e.target.value)}}
                />
                <Row className={"row1"} >
                    <Col span={6}>
                        <Input value={trackingNo} className={"text-field"} placeholder="TRACKING UNIT NO" onChange={(e)=>{setTrackingNo(e.target.value); setErr(false)}} />
                        {err &&
                            <span style={{display:'block',color:'#FF0000',fontSize:'12px'}}>Required!</span>    
                        }
                    </Col>

                    <Col span={6}>
                        <Button Button className="btn-no-tag" type="primary" shape="round" 
                        style={{ background: "#515A5A", borderColor: "#000000 " }}
                        onClick={addRecord}
                        ><span
                            className="btn-text">ADD RECORD</span></Button>
                    </Col>

                    <Col span={6}>
                        <Input value={expDate} placeholder="EXPIRY DATE (ex: DD-MM-YYYY)" className={"text-field"} onChange={(e)=>{setExpDate(e.target.value)}} />
                        {/* <span style={{display:'block',color:'#CCCCCC'}}>DD-MM-YYYY</span>     */}
                    </Col>

                    <Col span={6}>
                        <Button className="btn-no-tag" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }} ><span
                            className="btn-text">ADD NO TAG</span></Button>
                    </Col>
                </Row>
            </div>
         </Content>
        </>
    )
}
export default EntryScreen
