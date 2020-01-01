import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Icon} from 'antd';
import{Avatar} from 'antd';
import Homepagetop from './../../Homepage/HomepageTop//homepagetop';


var ShoucangCss = require('../Shoucang/shoucang.css');
export default class Shoucang extends React.Component{
    render(){
        return(
            <div className={ShoucangCss.shoucang}>
                <Homepagetop></Homepagetop>
                <div className={ShoucangCss.Personal1}>
                <div className={ShoucangCss.top}>
                    <Link to="Personal1">
                        <Button icon="left" ghost > 个人中心</Button>
                    </Link>
                    <div className={ShoucangCss.bj}>
                        <Link to="biji">
                            <p>分类笔记</p>
                        </Link>
                    </div>
                    <div className={ShoucangCss.sc}>
                        <Link to="shoucang">
                            <p>我的收藏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </Link>
                    </div>  
                </div>
                </div>
                <div className={ShoucangCss.left}>
                    <div className={ShoucangCss.menu1}>
                        <div className={ShoucangCss.icon}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />                            <p>昵称：XXX</p>
                            <p>账号：XXXXXX</p>
                        </div>

                    </div>
                    <div className={ShoucangCss.menu2}>

                    </div>
                </div>
                <div className={ShoucangCss.right} >
                    <div className={ShoucangCss.shoucang1}>
                        <p>收藏1</p>
                    </div>
                    <div className={ShoucangCss.shoucang2}>
                        <p>收藏2</p>
                    </div>
                    <div className={ShoucangCss.shoucang3}>
                        <p>收藏3</p>
                    </div>
                    <div className={ShoucangCss.shoucang4}>
                         
                    </div>
                    <div className={ShoucangCss.shoucang5}>
                         
                    </div>
                    <div className={ShoucangCss.shoucang6}>
                         
                    </div>
                </div>
            </div>
        )
    }
}