import React from 'react'
import { Row, Col } from 'antd'

const WhiteBox = props => (
    <Row style={{marginTop: 20}} type={'flex'} justify={'space-around'}>
        <Col style={{backgroundColor: 'white', padding: 15, fontSize: 15}} span={props.colSpan}>
            {props.children}
        </Col>
    </Row>
)

export {
    WhiteBox
}