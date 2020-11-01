import { Input,Button,Row,Col,Table } from 'antd';

const FormStatus = ({data,onReprint}) => {

    return (
        <>
        <Row gutter={16}>
            {/* column */}
            <Col span={6} className="footer-container" style={{minHeight:100}}>
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>APPT CONF. NO: </span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.conf_no:''}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}  style={{minHeight:'20px'}}>
                            <span className='custom-text' style={{display:'inline'}}>{data ? (data?.direction=="I"? "INBOUND":"OUTBOUND"):""}</span>
                        </Col>
                        <Col span={12}>
                            {/* <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>456783</span> */}
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>STATUS: </span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data?(data?.checkin?"COMPLETED":"PENDING"):""}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>APPT TIME: </span>
                        </Col>
                        <Col span={12}className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.time : ""}</span>
                        </Col>
                    </Row>
                </div>    
            </Col>
            {/* column */}
            <Col span={6} className="footer-container" style={{minHeight:100}}>
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>CUSTOMER: </span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.customer:""}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>BOOKING PARTY</span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.booking_party:""}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>BOOKING CONTACT: </span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.booking_contact:""}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='footer-data-text' style={{display:'inline'}}>Phone</span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.contact_phone:""}</span>
                        </Col>
                    </Row>
                </div>    
            </Col>
            {/* column */}
            <Col span={6} className="footer-container" style={{minHeight:100}}>
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>ORDERS: </span>
                        </Col>
                        <Col span={12}>
                            {/* <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>456783</span> */}
                        </Col>
                    </Row>
                </div> 

                {
                    data ? data?.orders?.map(o =>(
                        <div>
                        <Row gutter={16} >
                            <Col span={8}>
                                <span className='footer-data-text' style={{display:'inline'}}>{o.order_no}</span>
                            </Col>
                            <Col span={8}>
                                <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{o.position}</span>
                            </Col>
                            <Col span={8}>
                                <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>PO:{o.po_no}</span>
                            </Col>
                        </Row>
                        </div>
                    )):null
                     
                }   
            </Col>
            {/* column */}
            <Col span={6} className="footer-container" style={{alignContent:'center !important', minHeight:100}}>
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>CHECK-IN TIME: </span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.checkin?.checkin_time:""}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={12}>
                            <span className='custom-text' style={{display:'inline'}}>CHECK-IN NO: </span>
                        </Col>
                        <Col span={12} className="footer-col">
                            <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>{data? data?.checkin?.checkin_no:""}</span>
                        </Col>
                    </Row>
                </div>    
                <div>
                    <Row gutter={16} >
                        <Col span={8}></Col>
                        <Col span={8}>
                        <Button type="primary" shape="round" style={{ background: "#F4D03F", borderColor: "#F4D03F",color:"#000000" }} onClick={()=> onReprint()}>RE-PRINT</Button>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>    
            </Col>
        </Row>
        </>
    );
}

export default FormStatus;