import React from 'react';
import { Input, Button, Row, Col ,message} from 'antd';
import Axios from 'axios';
import {Link} from 'react-router-dom'
var retrievePage = require("./retrievePage.css")

export default class RetrievePage extends React.Component {
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
            "newpassword":this.state.number,
            "password":this.state.password,
            "telnumber":this.state.telnumber,
        }
        //axios
        Axios.post({
            url:"/user/retrieve",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("新密码")
            }else if(result.state==1){
                message.info("密码不一致")
            }else {
                message.info("修改密码成功")
            }
        })
    }
    render() {
        return (
            <div className={retrievePage.all}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <div className={retrievePage.text1}>
                                守护绿
                        </div>
                        <div className={retrievePage.retrieve}>
                            <div className={retrievePage.text2}>
                            保护环境，从个人做起，从点滴做起
                    </div>
                        <div className={retrievePage.text5}>
                            新密码：
                        <Input.Password placeholder="请输入密码" size="small" className={retrievePage.Password} name="newpassword" value={this.state.newpassword} onChange={e=>this.changeValue(e)}/>
                        </div>
                        <div className={retrievePage.text6}>
                            确认密码：
                        <Input.Password placeholder="请输入密码" size="small" className={retrievePage.Password} name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
                        </div>
                        <div className={retrievePage.text3}>
                            电话号码：
                        <Input size="small" className={retrievePage.number}name="telnumber" value={this.state.telnumber} onChange={e=>this.changeValue(e)}></Input>
                        </div>
                        <div className={retrievePage.button}>
                        <Button type="primary" shape="round" className={retrievePage.confirm}><Link to="/initial">确认</Link></Button>
                        <Button type="primary" shape="round" className={retrievePage.cancel }><Link to="/initial">取消</Link></Button>
                        </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}