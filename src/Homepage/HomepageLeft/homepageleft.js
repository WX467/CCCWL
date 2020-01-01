import React from 'react';
import { Avatar, Icon,Dropdown,Menu} from 'antd';
import{Link} from 'react-router-dom';

var a = require('../../Img/6.jpg')
var HomepageLeftCss = require('./homepageleft.css')
export default class HomepageRight extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:window.localStorage.getItem("username")
        }
    }
    logout=e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })
    }
    render(){
      const menu = (
        <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
          <span onClick={this.logout}>  退出登录</span>
          </a>
        </Menu.Item>
      </Menu>
    
    )
        let userProfile=null;
       
       
        if(this.state.username!=null){
    
                userProfile =<div>
                    <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      守护绿 <Icon type="down" />
    </a>
  </Dropdown>
                   
                </div>
        }else{
            userProfile=<a href="/loginPage"><Icon type="team" />登录</a>
        }
        return (
            <div className={HomepageLeftCss.all}> 
            <div className={HomepageLeftCss.n}>
                <div className={HomepageLeftCss.h}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" size={64} /></div>
                <div className={HomepageLeftCss.m}>&emsp; <h3 className={HomepageLeftCss.mm}>{userProfile}</h3>
                    <br></br>
                    <Link to="" className={HomepageLeftCss.company}>TA的个人信息 >></Link>
                </div>
                <div className={HomepageLeftCss.nn}>
                    <span>浏览 12</span>&emsp;<span>获赞 23</span>&emsp;<span>收藏 6</span>&emsp;<span>等级 1</span>&emsp;<span>发布 0</span>
                </div>
            </div>
            <div className={HomepageLeftCss.mmm}>
                <span className={HomepageLeftCss.nnn}>垃圾分类视频——教你如何垃圾分类</span>
                <br></br>
                <br></br>
                <div className={HomepageLeftCss.a}>
                <span>奶茶什么垃圾...</span>
                <br></br>
                <span>废旧电池什么垃圾...</span>
                <br></br>
                <span>外卖什么垃圾...</span> 
                </div> 
                <a href='https://www.iqiyi.com/v_19rr5gqmx4.html' className={HomepageLeftCss.clike}>点击学习 >></a>
            </div>
            <div className={HomepageLeftCss.nm}>
                <span className={HomepageLeftCss.location}>重点城市垃圾分类政策重点内容梳理</span>
                <div className={HomepageLeftCss.city}>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>上海—《上海市生活垃圾全程分类体系建设行动计划》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>北京—《生活垃圾分类治理行动计划》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>天津—《推进生活垃圾分类工作的实施方案》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>重庆—《重庆市生活垃圾分类制度实施方案》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>厦门—《厦门经济特区生活垃圾分类管理办法》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>武汉—《武汉市生活垃圾分类实施方案》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>长沙—《长沙市生活垃圾分类制度实施方案》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>广州—《广州市生活垃圾分类管理条例》</a>
                    <br></br>
                    <a href='/zhengce' className={HomepageLeftCss.city1}>成都—《成都市生活垃圾分类实施方案》</a>
                </div>
            </div>
            <div className={HomepageLeftCss.mmm}>
                <img src={a} className={HomepageLeftCss.img}></img>
                <h5 className={HomepageLeftCss.scan}>扫描二维码，更多的了解我们......</h5>
            </div>
            </div>
        )
    }
}