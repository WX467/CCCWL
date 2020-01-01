import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Homepage from './Homepage/homepage';
import HomepageLeft from './Homepage/HomepageLeft/homepageleft';
import LoginPage from './LoginPage/loginPage';
import Massage from './Massage/massage';
import Zhengce from './Zhengce/zhengce';
import RegisterPage from './RegisterPage/registerPage';
import RetrievePage from './RetrievePage/retrievePage';
import Photo from './Photo/photo';
import Information from './Information/information';
import Personal1 from './Personal1/personal1';
import Biji from './Personal1/Biji/biji';
import Shoucang from './Personal1/Shoucang/shoucang';


class IndexPage extends React.Component{
    render(){
        return(
           <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Zhengce" component={Zhengce}></Route>
                        <Route path="/Photo" component={Photo}></Route>
                        <Route path="/Information" component={Information}></Route>
                        <Route path="/Biji" component={Biji}></Route>
                        <Route path="/Shoucang" component={Shoucang}></Route>
                        <Route path="/Personal1" component={Personal1}></Route>
                        <Route path="/Homepage" component={Homepage}></Route>
                        <Route path="/Massage" component={Massage}></Route>
                        <Route path="/LoginPage" component={LoginPage}></Route>
                        <Route path="/RegisterPage" component={RegisterPage}></Route>
                        <Route path="/RetrievePage" component={RetrievePage}></Route>
                        <Route path="/HomepageLeft" component={HomepageLeft}></Route>
                        <Redirect to="/homepage"></Redirect>
                    </Switch>  
                </BrowserRouter>
           </div>
        )
    }
}

export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
