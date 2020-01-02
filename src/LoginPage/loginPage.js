import React from 'react';
import { Input, Button, Row, Col,Divider,Icon,Modal ,message} from 'antd';
import { Link } from 'react-router-dom'
import Axios from 'axios';
var loginPage = require("./loginPage.css")


export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
            username:'',
            password:'',
        }
        this.user=this.user.bind(this);
        this.pass=this.pass.bind(this);
        this.login=this.login.bind(this)
    }
    user=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    pass=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    login=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
        }
      
        Axios.post("/login/logins",{
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.warn("账号或密码错误")
            }else if(result.state==1){
                message.success("登录成功")
            }
        })
    }
    render() {
        return (
            <div className={loginPage.all}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                    <div className={loginPage.login}>
                        <div className={loginPage.text1}>
                                守护绿
                        </div>
                        <div className={loginPage.text2}>
                            保护环境，从个人做起，从点滴做起
                    </div>
                    <div className={loginPage.center}>
                        <div className={loginPage.text3}>
                            账号：
                        <Input size="small" placeholder="用户名" className={loginPage.name} name="number" onChange={this.user}></Input>
                        </div>
                        <div className={loginPage.text4}>
                            密码：
                        <Input.Password placeholder="请输入密码" size="small" className={loginPage.Password} name="password" onChange={this.user}/>
                            <div className={loginPage.text5}><br></br><Link to="/retrievePage" className={loginPage.forget}>忘记密码？</Link></div>
                        </div>
                        <div className={loginPage.registe}>
                                <Button type="primary" shape="round" onClick={this.login} >登录</Button>
                        </div>
                        <div className={loginPage.loginway}>
                                <Divider>其他方式登录</Divider>
                            <div className={loginPage.QQway}>
                                <Icon type="qq" />
                                <div className={loginPage.wayone} style={{padding: '26px 16px 16px' }}>
                                    <Button type="dashed" ghost>
                                    QQ
                                    </Button>
                                </div>
                                </div>
                                <div className={loginPage.waytwo} style={{padding: '26px 16px 16px' }}>
                                    <Button type="dashed" ghost onClick={this.showModal}>
                                    微信
                                    </Button>
                                    <Modal
                                        title="第三方登录"
                                        visible={this.state.visible}
                                        onOk={this.hideModal}
                                        onCancel={this.hideModal}
                                        okText="确认"
                                        cancelText="取消"                           
                                        >
                                            <p>微信登录</p>
                                        </Modal>
                                </div>
                                <div className={loginPage.wechatway}>
                                <Icon type="wechat" />
                                <div className={loginPage.waythree} style={{padding: '26px 16px 16px' }}>
                                    <Button type="dashed" ghost>
                                    微博
                                    </Button>
                                </div>
                                </div>
                                <div className={loginPage.weiboway}>
                                <Icon type="weibo" />
                                </div>
                        {/* <Button type="primary" onClick={this.showModal}>
                            其他登录方式</Button>
                        <Modal
                            title="请选择登录方式"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="确认"
                            cancelText="取消"                           
                        >
                        </Modal> */}
                        </div>
                        </div>
                    </div></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}