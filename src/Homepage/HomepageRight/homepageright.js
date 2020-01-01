import React from 'react';
import { Carousel,Icon } from 'antd';
import Photo from './../../Photo/photo';

var a = require('../../Img/1.jpg')
var aa = require('../../Img/2.jpg')
var aaa = require('../../Img/3.jpg')
var b = require('../../Img/lj1.jpg')
var c = require('../../Img/lj2.jpg')
var d = require('../../Img/lj3.jpg')
var e = require('../../Img/lj4.jpg')
var HomepageRightCss = require('./homepageright.css')
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
export default class HomepageRight extends React.Component {
    render() {
        return (
            <div className={HomepageRightCss.div}>
            <div className={HomepageRightCss.hhh}>
            <Carousel autoplay className={HomepageRightCss.hh}>
                <div>
                    <h3><img src={a} className={HomepageRightCss.h}></img></h3>
                </div>
                <div>
                    <h3><img src={aa} className={HomepageRightCss.h}></img></h3>
                </div>
                <div>
                    <h3><img src={aaa} className={HomepageRightCss.h}></img></h3>
                </div>
            </Carousel>
            </div>
            <div className={HomepageRightCss.people}>
                <h2 className={HomepageRightCss.massage}>人物访谈</h2>
                <div className={HomepageRightCss.m}>
                <a href="/massage" className={HomepageRightCss.massage1}>佟桂莉：紧盯垃圾分类全链条 构建高品质人居环境&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2019-12-04</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>杨枫率队赴金华考察垃圾分类工作&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;2019-12-03</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>68路公交车驾驶员周敏自掏腰包在公交车上宣传垃圾分类&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;2019-11-20</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>46城喜提垃圾分类重点城，网友喊李彦宏用AI救救孩子&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;2019-11-20</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>刘建国：垃圾分类推动环卫行业不断升级&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;2019-11-14</a>
                </div>
            </div>
            <div>___________________________________________________________________________________________________________________________________________________________________</div>
            <div className={HomepageRightCss.people}>
                <h2 className={HomepageRightCss.massage}>新闻公告</h2>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>垃圾分类需发挥制度力量&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;2019-12-04</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>进博会中外展商等上海体验垃圾分类新时尚（图）
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2019-12-03</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>垃圾分类进行时|垃圾分类宣传上街头 &thinsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;2019-11-20</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>垃圾分类机器人、信息安全……战略新兴产业项目“扎堆”两江新区 &thinsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;2019-11-20</a>
                </div>
            </div>
            <div>___________________________________________________________________________________________________________________________________________________________________</div>
            <div>
            <div className={HomepageRightCss.people}>
                <h2 className={HomepageRightCss.massage}>全国展会</h2>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>2019（住建委主办）上海垃圾分类与生态环保展
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;2019-12-04</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>2019中国国际垃圾分类与城市环卫设施展览会
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2019-12-03</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>IE expo 2019国际环卫技术与装备展览会 &thinsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;2019-11-14</a>
                </div>
                <div className={HomepageRightCss.m}>
                <a href='/massage' className={HomepageRightCss.massage1}>“互联网+垃圾分类”产业沙龙在京召开&emsp;&emsp;&emsp;&emsp;
                &thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;2019-01-21</a>
                </div>
            </div>
            <div>___________________________________________________________________________________________________________________________________________________________________</div>
            <div>
                <Photo></Photo>
            </div>
            <div>___________________________________________________________________________________________________________________________________________________________________</div>
            <div>
            <div className={HomepageRightCss.mainbody}>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        根据“垃圾围城”，2020年可能要出的这些大招</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        西安市垃圾分类管理条例规定：单位不得闲置生</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        成都市总引导职工主动参与生活垃圾分类</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        安徽亳州市城市生活垃圾分类工作实施方案</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        常熟推行“定时定点”垃圾分类</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        2019年福州全面推行垃圾分类工作大事记都变化</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        【年终特刊】兰州试点垃圾分类渐入人心</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        垃圾分类进校园 争当环保小卫士</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        2020年底前连云港市将推进垃圾“四分类”</a>
                    <br></br>
                    <br></br>
                    <a href="/massage" className={HomepageRightCss.mainbody1}>
                    <IconFont type="icon-tuichu" />&ensp;
                        废为宝 积分奖励 蓝田经济开发区智能垃圾分类系统</a>
                </div>
                <div className={HomepageRightCss.img}>
                    <h3 className={HomepageRightCss.i}>更多>></h3>
                    <a href=''><img src={b} className={HomepageRightCss.h1} alt="测试" width="150" height="120"/></a>
                    <a href=''><img src={d} className={HomepageRightCss.h2} alt="测试" width="150" height="120"/></a>
                    <br></br>
                    <a href=''><img src={c} className={HomepageRightCss.h1}/></a>
                    <a href=''><img src={e} className={HomepageRightCss.h2}/></a>
                </div>
               </div>
            </div>
        </div>
        )
    }
}