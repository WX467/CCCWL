import React from 'react';
import{Link} from 'react-router-dom';
import{Button,Icon} from 'antd';
import{Avatar} from 'antd';


var Personal1Css = require('../Personal1/personal1.css');
export default class Personal1 extends React.Component{
    render(){
        return(
            <div className={Personal1Css.Personal1}>
                <div className={Personal1Css.top}>
                    <Link to="homepage">
                        <Button icon="left" ghost className={Personal1Css.topa}> 个人中心</Button>
                    </Link>
                    <Link to="/biji">
                        <p>分类笔记</p>
                    </Link>
                    <Link to="/shoucang">
                        <p>我的收藏 |&nbsp;</p>
                    </Link>
                </div>
                <div className={Personal1Css.left}>
                    <div className={Personal1Css.menu1}>
                        <div className={Personal1Css.icon}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                            <p>昵称：XXX</p>
                            <p>账号：XXXXXX</p>
                        </div>

                    </div>
                </div>
                <div className={Personal1Css.right} >
                    <div className={Personal1Css.message}>
                        <div className={Personal1Css.touxiang}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />                        </div>
                        <div className={Personal1Css.wenzi}>
                            <p>昵称：XXXX</p>
                            <p>账号：XXXXXXXX</p>
                            <p>所在地：四川省 成都市</p>
                            <p>我的小区：XXXXXXXXXXXX</p>
                            <p>邮箱：XXXXXXXXXXXXXXXX</p>
                            <p>联系方式：XXXXXXXXXXXXX</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}