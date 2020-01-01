import React from 'react';
import { Row, Col } from 'antd';
import {BrowserRouter,Switch} from 'react-router-dom';
import Homepagetop from './HomepageTop/homepagetop';
import End from './End/end';
import HomepageRight from './HomepageRight/homepageright';
import HomepageLeft from './HomepageLeft/homepageleft';


var HomepageCss = require('./homepage.css')
export default class Homepage extends React.Component{
    render(){
        return(
            <div>
            <div className={HomepageCss.home}>
                <BrowserRouter basename="homepage">
                    <Homepagetop/>
                    <div>
                        <Row>
                            <Col span={17} push={7}>
                                <HomepageRight/>
                            </Col>
                            <Col span={7} pull={17}>
                                <HomepageLeft/>
                            </Col>
                        </Row>
                    </div>
                    <Switch></Switch>
                </BrowserRouter>
            </div>
            <End/>
            </div>
        )
    }
}   