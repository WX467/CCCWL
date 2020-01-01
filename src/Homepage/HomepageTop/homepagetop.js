import React from 'react';
import {Button ,message} from 'antd';
import { Input } from 'antd';
import Axios from 'axios';
const { Search } = Input;

var a = require('../../Img/4.jpg')
var HomepageTopCss = require('./homepagetop.css')
export default class Homepagetop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:''
        }
        this.search=this.search.bind(this);
    }
    search=(value,event)=>{
        let x=value
        this.setState=({
            search:x
        })
        const data={
            "search":this.state.search,
        }
        Axios.post("/movies/getList",{
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.warn("账号或密码错误")
            }else if(result.state==1){
                message.success("登录成功")
            }
        })
    }
    render(){
        return(
            <div className={HomepageTopCss.Haaa} >
                <div>
                    <img src={a} className={HomepageTopCss.h}></img>
                <Search placeholder="搜索" className={HomepageTopCss.Haa}
                onSearch={this.search}style={{ width: 200 }}/>
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