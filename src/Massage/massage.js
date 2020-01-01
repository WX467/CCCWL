import React from 'react';
import Homepagetop from './../Homepage/HomepageTop//homepagetop';
import PingLun from './PingLun/pinglun'

var MassageCss = require('./massage.css')
export default class Massage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Homepagetop/>
                </div>
                <div>
                <div className={MassageCss.a}>
                    <h3 className={MassageCss.one}>佟桂莉：紧盯垃圾分类全链条 构建高品质人居环境</h3>
                <br></br>
                    <span className={MassageCss.t}>
                    核心提示：佟桂莉在调研生活垃圾分类处置工作时强调紧盯垃圾分类全链条 构建高品质人居环境 
                    昨日，市委常委、区委书记佟桂莉在调研生活
                    </span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.two}> 佟桂莉在调研生活垃圾分类处置工作时强调</span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.two1}>紧盯垃圾分类全链条 构建高品质人居环境</span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.tishi}>昨日，市委常委、区委书记佟桂莉在调研
                        生活垃圾分类处置工作时强调，生活垃圾分类处置工作是改善人居环境、促进城市
                        精细化管理、保障可持续发展的重要举措。要以更大决心、更大力度全面开展生活
                        垃圾分类工作，紧盯垃圾分类全链条，坚持源头减量、全程分类、末端无害化处置
                        和资源化利用，充分调动全民参与的积极性，让垃圾分类成为新时尚，更好推动高
                        质量发展，构建高品质人居环境。</span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.tishi}>勃勃生机的千年古樟，清澈甘洌的三口古井，
                    干净雅致的乡村小道，走进所前镇三泉王村，美丽的乡村气息扑面而来。“现在村里的垃
                    圾分类准确率是多少？”“每个垃圾桶都有二维码吗？”佟桂莉走进村里的“衣”旧换新兑换
                    超市，仔细询问垃圾分类工作。当听到三泉王村的垃圾分类准确率高达90%以上时，她很
                    高兴，鼓励镇村加大宣传力度，做到垃圾分类人人知晓、户户参与。</span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.tishi}>杭州萧山环城生物能源有限公司承担着萧山
                    易腐垃圾的处置工作。佟桂莉听取了垃圾收运流程、线路及易腐垃圾处置情况介绍，了
                    解到我区通过互联网、物联网技术，已实现实时采集和监控易腐垃圾清运量、处置量。
                    她说，全面开展生活垃圾全程分类，末端处置环节承担着重要职责，要不断创新思路，
                    进一步提升处置能力，形成易腐垃圾处置闭环。</span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.tishi}>随后，佟桂莉一行来到杭州国际博览中心，
                    实地参观了垃圾分类设施配置、制度氛围、库房和集置点建设等情况，并听取工作人员
                    介绍。佟桂莉指出，国博中心作为萧山向世界展示的“窗口”，要高起点做好垃圾分类工
                    作，提高标杆，树立典范，将萧山的分类经验推广到更多地区。</span>
                    <br></br>
                    <br></br>
                    <span className={MassageCss.tishi}>佟桂莉还来到宁围街道世纪之光小区和湖滨
                    小学，了解城市社区和学校生活垃圾分类工作。她强调，要广泛宣传发动，通过“小手拉
                    大手”等活动，提升垃圾分类的知晓率和参与率，引导群众真正成为垃圾分类工作的主体，
                    努力营造全民参与的良好氛围。要充分运用人工智能、大数据等高科技手段，科学分类、
                    精准集装，进一步提升分类准确率和收运效率。要建立长效机制，积极构建系统性、综合
                    性的运作机制和监管机制，为推动垃圾分类提供有力保障。</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>作者：记者 龚洁</span>
                    <br></br>
                    <sapn>编辑：杜科慧</sapn>
                    </div>
                </div>
                <div className={MassageCss.p}>
                <PingLun></PingLun>
                </div>
            </div>
        )
    }
}