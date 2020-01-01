import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Icon} from 'antd';
import{Avatar} from 'antd';
import{Input} from 'antd';
import Homepagetop from './../../Homepage/HomepageTop//homepagetop';

const { TextArea } = Input;
var BijiCss = require('../Biji/biji.css');
export default class Biji extends React.Component{
    render(){
        return(
            <div className={BijiCss.biji}>
                <Homepagetop></Homepagetop>
                <div className={BijiCss.Personal1}>
                <div className={BijiCss.top}>
                    <Link to="Personal1">
                        <Button icon="left" ghost className={BijiCss.topa}> 个人中心</Button>
                    </Link>
                    <div className={BijiCss.bj}>
                        <Link to="biji">
                            <p>分类笔记</p>
                        </Link>
                    </div>
                    <div className={BijiCss.sc}>
                        <Link to="shoucang">
                            <p>我的收藏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </Link>
                    </div>  
                </div>
                </div>
                <div className={BijiCss.left}>
                    <div className={BijiCss.menu1}>
                        <div className={BijiCss.icon}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />                            <p>昵称：XXX</p>
                            <p>账号：XXXXXX</p>
                        </div>

                    </div>
                    <div className={BijiCss.menu2}>

                    </div>
                </div>
                <div className={BijiCss.right} >
                    <div className={BijiCss.shuru}>
                    <TextArea rows={18} placeholder="请输入分类笔记" />   
                    <Button type="primary">提交</Button>
                    </div>
                </div>
            </div>
        )
    }
}