import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
const { Search } = Input;

var a = require('../../Img/4.jpg')
var HomepageTopCss = require('./homepagetop.css')
export default class Homepagetop extends React.Component{
    render(){
        return(
            <div className={HomepageTopCss.Haaa} >
                <div>
                    <img src={a} className={HomepageTopCss.h}></img>
                <Search placeholder="搜索" className={HomepageTopCss.Haa}
                onSearch={value => console.log(value)}style={{ width: 200 }}/>
                <Button shape="round" type="primary" className={HomepageTopCss.Ha}>
                    <a href ='/homepage'>首页</a>
                </Button>
                <Button shape="round" type="primary" className={HomepageTopCss.Ha}>
                    <a href ='/information'>资讯</a>
                </Button>
                <Button shape="round" type="primary" className={HomepageTopCss.H}>
                    <a href ='/registerPage'>注册</a>
                </Button>
                <Button shape="round" type="primary" className={HomepageTopCss.H}>
                    <a href='/personal1'>个人中心</a>
                </Button>
                </div>
            </div>
        )
    }
}