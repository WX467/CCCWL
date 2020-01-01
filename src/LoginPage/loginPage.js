import React from 'react';
import { Input, Button, Row, Col,Divider,Icon,Modal ,message} from 'antd';
import { Link } from 'react-router-dom'
import Axios from 'axios';
var loginPage = require("./loginPage.css")


export default class LoginPage extends React.Component {
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
            "number":this.state.number,
            "password":this.state.password,
        }
        //axios
        Axios.post({
            url:"/user/register",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("账号或密码错误")
            }else if(result.state==1){
                message.info("登录成功")
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
                        <Input size="small" placeholder="电话号码/用户名" className={loginPage.name} name="number" value={this.state.number} onChange={e=>this.changeValue(e)}></Input>
                        </div>
                        <div className={loginPage.text4}>
                            密码：
                        <Input.Password placeholder="请输入密码" size="small" className={loginPage.Password} name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
                            <div className={loginPage.text5}><br></br><Link to="/retrievePage" className={loginPage.forget}>忘记密码？</Link></div>
                        </div>
                        <div className={loginPage.registe}>
                            <Link to="/homePage">
                                <Button type="primary" shape="round" >登录</Button>
                            </Link>
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