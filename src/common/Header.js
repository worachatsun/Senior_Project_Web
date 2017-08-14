import React from 'react'
import { Row, Col, Input } from 'antd'
import { NavLink } from 'react-router-dom'
import '../styles/css/index.css'

const Header = () => {
    return (
        <Row className={'header'} type={'flex'}>
            <Col>
                <NavLink exact to={'/'}>
                    <img alt={'kmutt logo'} className={'header-pic'} src={require('../styles/images/kmutt.png')} />
                </NavLink>
            </Col>
            <Col>
                <Row className={'header-row'}>
                    <Col style={{paddingRight: 10}}>
                        <NavLink exact to={'/'} activeStyle={{fontWeight: 'bold',color: '#FF7F11'}}>News</NavLink>
                    </Col>
                    <Col style={{paddingRight: 10}}>
                        <NavLink to={'/event'} activeStyle={{fontWeight: 'bold',color: '#FF7F11'}}>Event</NavLink>
                    </Col>
                    <Col style={{paddingRight: 10}}>
                        <NavLink to={'/donation'} activeStyle={{fontWeight: 'bold',color: '#FF7F11'}}>Donation</NavLink>
                    </Col>
                    <Col>
                        <NavLink to={'/career'} activeStyle={{fontWeight: 'bold',color: '#FF7F11'}}>Career</NavLink>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Input.Search
                    placeholder="input search text"
                    style={{ width: 200 }}
                    onSearch={value => console.log(value)}
                />
            </Col>
        </Row>
    )
}

export {
    Header
}