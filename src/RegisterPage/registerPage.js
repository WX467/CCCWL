import React from 'react';
import { Button, Input, Row, Col ,message} from 'antd';
import { Link } from 'react-router-dom'
import Axios from 'axios';
var registerPage = require("./registerPage.css")


export default class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })      
    }
    upload=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
            "telnumber":this.state.telnumber,
        }
        //axios
        Axios.post({
            url:"/user/register",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
            }
        })
    }
    render() {
        return (
            <div className={registerPage.all}>
                <Row>
                <div className={registerPage.text1}>
                            守护绿
                    </div>
                    <Col span={8}></Col>
                    <Col span={8}><div className={registerPage.register}>
                        <div className={registerPage.text2}>
                        保护环境，从个人做起，从点滴做起
                    </div>
                        {/* <div className={registerPage.text3}>
                            中国大陆+86：
                        <Input size="small" className={registerPage.number}></Input>
                        </div> */}
                        <div className={registerPage.texta} name="username" value={this.state.username} onChange={e=>this.changeValue(e)}>
                            用户名：
                        <Input size="small" className={registerPage.number}></Input>
                        </div>
                        <div className={registerPage.text4}>
                            设置密码：
                        <Input.Password placeholder="请输入密码" size="small" className={registerPage.Password}name="password" value={this.state.password} onChange={e=>this.changeValue(e)} />
                        </div>
                        <div className={registerPage.text3}>
                            手机号码：
                        <Input size="small" className={registerPage.number}></Input>
                        </div>
                        <div className={registerPage.registe}>
                            <Button type="primary" shape="round" onClick={this.upload}><Link to="initial">注册</Link></Button>
                        </div>
                        <div className={registerPage.text6}>
                            已有账号？
                       <Link to="/loginPage">登录</Link>
                        </div>
                        
                    </div></Col>
                    <Col span={8}></Col>
                </Row>

            </div>
        )
    }
}