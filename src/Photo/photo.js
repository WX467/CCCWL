import React from 'react';

var PhotoCss = require("./photo.css")
var a = require('../Img/l1.jpg')
var aa = require('../Img/l2.jpg')
var aaa = require('../Img/l5.jpg')
var aaaa = require('../Img/l4.jpg')
var aaaaa = require('../Img/l3.jpg')
export default class Photo extends React.Component {
    render() {
        return (
            <div>
                <title>测试</title>
                <div className={PhotoCss.div}> 
                    <img className={PhotoCss.img} src={a} alt="测试" width="150" height="210"/>
                    <img className={PhotoCss.img1} src={aa} alt="测试" width="150" height="210"/>
                    <img className={PhotoCss.img1} src={aaa} alt="测试" width="150" height="210"/>
                    <img className={PhotoCss.img1} src={aaaa} alt="测试" width="150" height="210"/>
                    <img className={PhotoCss.img1} src={aaaaa} alt="测试" width="150" height="210"/>
                </div> 
            </div>
        )
    }
}