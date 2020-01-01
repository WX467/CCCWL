import React from 'react'
import { Carousel,Row, Col, Divider,Icon } from 'antd';
import End from './../Homepage/End/end';
import Homepagetop from './../Homepage/HomepageTop//homepagetop';

var information = require("./information.css")
var img1 = require('../Img/194.jpg')
var img2 = require('../Img/196.jpg')
var img3 = require('../Img/197.jpg')
var img4 = require('../Img/198.jpg')

export default class Information extends React.Component {
  render(){
    return(
      <div className={information.all}>
        <div className={information.left}>
          <Homepagetop></Homepagetop>
            <div className={information.slide}>
              <Carousel autoplay="false">
                  <div>
                       <img src={img1} height={400} width={400}></img>
                  </div>
                  <div>
                       <img src={img2} height={400} width={400}></img>
                  </div>
                  <div>
                       <img src={img3} height={400} width={400}></img>
                  </div>
                  <div>
                       <img src={img4} height={400} width={400}></img>
                  </div>
                  </Carousel>
                    </div>
                  <div className={information.word}>
                    <div className={information.topic}>刚刚成都城镇垃圾分类标准发布</div>
                    <div className={information.mainbody}>
                      <a href="/massage" className={information.mainbody1}>根据“垃圾围城”，2020年可能要出的这些大招</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>西安市垃圾分类管理条例规定：单位不得闲置生</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>成都市总引导职工主动参与生活垃圾分类</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>安徽亳州市城市生活垃圾分类工作实施方案</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>常熟推行“定时定点”垃圾分类</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>2019年福州全面推行垃圾分类工作大事记都变化</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>【年终特刊】兰州试点垃圾分类渐入人心</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>垃圾分类进校园 争当环保小卫士</a>
                      <div className={information.time}>12-12</div>
                      <a href="/massage" className={information.mainbody1}>2020年底前连云港市将推进垃圾“四分类”</a>
                      <div className={information.time}>12-30</div>
                      <a href="/massage" className={information.mainbody1}>废为宝 积分奖励 蓝田经济开发区智能垃圾分类系统</a>
                      <div className={information.time}>12-30</div>
                    </div>
                  </div>
                  <div className={information.one}>
                  <div className={information.international}>国际动态 
                  <div className={information.tubiao}>更多<Icon type="right" /></div></div><Divider></Divider></div>
                  <div className={information.two}>
                  <div className={information.country}>国内动态
                  <div className={information.tubiao01}>更多<Icon type="right" /></div></div><Divider></Divider>
                  <div className={information.wordpage}><Icon type="sound" />北京拟将垃圾分类修改为义务性条款
                  <div className={information.time}>12-30</div>
                  <Icon type="sound" />多个城市将垃圾分类纳入物业管理
                  <div className={information.time}>12-30</div>
                  <Icon type="sound" />提高环保意识 登州路街道开展垃圾分类宣传活动
                  <div className={information.time}>12-30</div>
                  <Icon type="sound" />湖岛街道：走进市北区垃圾分类科教中心
                  <div className={information.time}>12-30</div>
                  <Icon type="sound" />来安县独山镇：推进垃圾分类建立长效机制
                  <div className={information.time}>12-30</div>
                  <Icon type="sound" />垃圾分类“最美”评选喊你投票
                  <div className={information.time}>12-30</div>
                  <Icon type="sound" />南京全面推进单位垃圾分类
                  <div className={information.time}>12-30</div>
                  伴<Icon type="sound" />垃圾分类即将实行！看看能源金贸区的小伙怎！
                  <div className={information.time}>12-30</div>
                  </div>
                  </div>
                  <div className={information.noname}>
                  <Icon type="sound" />桐庐争创全国分类 文明示范县<div className={information.time1}>12-30</div>
                  <Icon type="sound" />南京垃圾分类全面提速 学习芬兰垃圾桶“吸星大法”<div className={information.time1}>12-30</div>
                  <Icon type="sound" />垃圾分类见成效，日本用了27年，德国40年，我们<div className={information.time1}>12-30</div>
                  <Icon type="sound" />垃圾分类—————日本人的基本“生存技能”<div className={information.time1}>12-30</div>
                  <Icon type="sound" />雅典垃圾分类发展经验<div className={information.time1}>12-30</div>
                  <Icon type="sound" />在芬兰，你永远不填一个垃圾桶！<div className={information.time1}>12-30</div>
                  <Icon type="sound" />俄罗斯拟开发AI垃圾分类系统 速度将是人工的数十倍<div className={information.time1}>12-30</div>
                  <Icon type="sound" />在日本扔垃圾是“生存技能”，乱丢垃圾最高获刑5年并<div className={information.time1}>12-30</div>
                  </div>
                  </div>
                  <div className={information.right}>
                    <div className={information.topic1}>点击排行</div>
                    <div className={information.mainbody02}>
                      <div className={information.a}>1</div>
                    <div className={information.b}>垃圾分类创业兴起 青年成为主力军</div>  <div className={information.number}>396</div>
                    <div className={information.a}>2</div>
                    <div className={information.b}>“AI智能垃圾分类”，圆梦流浪</div>  <div className={information.number}>394</div>
                    <div className={information.a}>3</div>
                    <div className={information.b}>这个上海阿姨坚持10年干湿垃圾分类</div>  <div className={information.number}>376</div>
                    <div className={information.c}>4</div>
                    <div className={information.b}>上海已累计查处生活垃圾分类案件64</div>  <div className={information.number}>360</div>
                    <div className={information.c}>5</div>
                    <div className={information.b}>中国城市环境卫生协会生活垃圾分类</div>  <div className={information.number}>352</div>
                    <div className={information.c}>6</div>
                    <div className={information.b}>全省生活垃圾处理设施规范运营管理</div>  <div className={information.number}>340</div>
                    <div className={information.c}>7</div>
                    <div className={information.b}>中国关于垃圾分类的法律</div>  <div className={information.number}>338</div>
                    <div className={information.c}>8</div>
                    <div className={information.b}>《福州市生活垃圾分类管理办法》出台</div>  <div className={information.number}>330</div>
                    <div className={information.c}>9</div>
                    <div className={information.b}>深度徐海云：垃圾处理要覆盖每一寸土地</div>  <div className={information.number}>299</div>
                    </div>          
                  </div>
                  <div className={information.end}><End></End></div>
      </div>
    )
  }
}
