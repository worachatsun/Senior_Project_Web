import React, { Component } from 'react'
import { Affix } from 'antd'
import { Header } from '../common/Header'

class EventPage extends Component {
    render() {
        return (            
            <div>
                <Affix>
                    <Header />
                </Affix>
            </div>
        )
    }
}

export default EventPage