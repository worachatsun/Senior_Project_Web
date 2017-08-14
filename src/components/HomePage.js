import React, { Component } from 'react'
import { Affix, Carousel, Card, Col, Row, Tabs } from 'antd'
import { Header } from '../common/Header'
import { WhiteBox } from '../common/BoxElement'
import '../styles/css/index.css'

class HomePage extends Component {
    render() {
        return (            
            <div>
                <Affix>
                    <Header />
                </Affix>
                 <div>
                    <Carousel autoplay>
                        <div><img style={{height: '100%', width: '100%'}} src={'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pic_de_neige_cordier_Face_E.jpg'} alt=""/></div>
                        <div><img style={{height: '100%', width: '100%'}} src={'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pic_de_neige_cordier_Face_E.jpg'} alt=""/></div>
                    </Carousel>
                </div> 
                <WhiteBox colSpan={18}>
                    <Row type={'flex'} justify={'space-between'}>
                        <Col style={{marginLeft: 15}}><b style={{color: '#FF7F11'}}>RECENT</b> NEWS</Col>
                    </Row>
                </WhiteBox>
                <WhiteBox colSpan={18}>
                <Tabs defaultActiveKey="1" size="small">
                    <Tabs.TabPane tab="ALL" key="1">
                            <center>
                                <Row type={'flex'} style={{marginTop: 20}}>
                                    <Col span={6}>
                                        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                                <h3>Europe Street beat</h3>
                                                <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                                <h3>Europe Street beat</h3>
                                                <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                                <h3>Europe Street beat</h3>
                                                <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                                <h3>Europe Street beat</h3>
                                                <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </center>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="INFORMATION" key="2">Content of tab 2</Tabs.TabPane>
                        <Tabs.TabPane tab="EVENT" key="3">Content of tab 3</Tabs.TabPane>
                    </Tabs>
                </WhiteBox>
                <WhiteBox colSpan={18}>
                    <Row type={'flex'} justify={'space-between'}>
                        <Col style={{marginLeft: 15}}><b style={{color: '#FF7F11'}}>RECENT</b> EVENT</Col>
                    </Row>
                </WhiteBox>
                <WhiteBox colSpan={18}>
                    
                </WhiteBox>
            </div>
        )
    }
}

export default HomePage