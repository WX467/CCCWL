import React from 'react'
import {Icon} from 'antd'
var EndCss = require('./end.css');

export default class End extends React.Component{
    render(){
        return(
            <div className={EndCss.a}>
                <div className={EndCss.b}>
                    <div className={EndCss.c}>
                        <div className={EndCss.d}>
                            <div className={EndCss.e} prefix={<Icon type="customer-service" />}>客服服务热线</div>
                            <div className={EndCss.f}>123456789</div>
                        </div>
                        <div className={EndCss.g}>
                            <i className={EndCss.h}></i>
                            <i className={EndCss.i}></i>
                            <div className={EndCss.j}>
                                <div className={EndCss.k}><a href="/aboutus">关于我们</a></div>
                                <div>
                                    <ul>
                                        <li>
                                            <p>注册协议</p>
                                            <p>法律声明</p>
                                            <p>经营资源</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={EndCss.l}>
                                <div className={EndCss.m}>产品服务</div>
                                <div>
                                    <ul>
                                        <li>
                                            <p>普工专区</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className={EndCss.n}>
                                <div className={EndCss.p}>收费推广</div>
                                <div>
                                    <ul>
                                        <li>
                                            <p>品牌推广</p>
                                            <p>标准收费</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={EndCss.q}>
                                <div className={EndCss.r}>网站特色</div>
                                <div>
                                    <ul>
                                        <li>
                                            <p>排行榜</p>
                                            <p>求职测评</p>
                                            <p>订阅服务</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={EndCss.s}>
                                <div className={EndCss.t}>咨询反馈</div>
                                <div>
                                    <ul>
                                        <li>
                                            <p>客服中心</p>
                                            <p>职场指南</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}