import React,{Component} from 'react';
//路由操作
import {Route,Switch,Redirect} from 'react-router-dom';

//引入路由模块
import CheskGrids from '../components/CheckGrids';
import ComboTrees from '../components/ComboTrees';
import DataGrids from '../components/DataGrids';
import EditGrids from '../components/EditGrids';
import fenge from '../components/fengeLayout';
import FileButtons from '../components/FileButtons';
import FilterTrees from '../components/FilterTrees';
import Forms from '../components/Forms';
import IconTrees from '../components/IconTrees';
import Layouts from '../components//Layouts';
import MenuButtons from '../components//MenuButtons';
import Menus from '../components//Menus';
import NumberBoxs from '../components/NumberBox';
import Panels from '../components/Panel';
import Tab from '../components/Tabs';
import Trees from '../components/Trees';
import yingyong from '../components/yingyong';
import ShoppingCarts from '../components/ShoppingCart';
import TreeGrids from '../components/TreeGrid';
import BasicDataList from '../components/BasicDataList';
import CustomAccordions from '../components/CustomAccordion';
import CustomDatalists from '../components/CustomDatalist';

import App from '../App';

class Root extends Component{
    render(){
        return(
            <div>
                <App>
                    <Switch>
                        <Route exact path="/" component={CheskGrids}></Route>
                        <Route path="/checkgrid" component={CheskGrids}></Route>
                        <Route path="/combotree" component={ComboTrees}></Route>
                        <Route path="/datagrid" component={DataGrids}></Route>
                        <Route path="/editgrid" component={EditGrids}></Route>
                        <Route path="/fenge" component={fenge}></Route>
                        <Route path="/filebutton" component={FileButtons}></Route>
                        <Route path="/filtertree" component={FilterTrees}></Route>
                        <Route path="/form" component={Forms}></Route>
                        <Route path="/icontree" component={IconTrees}></Route>
                        <Route path="/layout" component={Layouts}></Route>
                        <Route path="/menubutton" component={MenuButtons}></Route>
                        <Route path="/menu" component={Menus}></Route>
                        <Route path="/numberbox" component={NumberBoxs}></Route>
                        <Route path="/panel" component={Panels}></Route>
                        <Route path="/tab" component={Tab}></Route>
                        <Route path="/tree" component={Trees}></Route>
                        <Route path="/yingyong" component={yingyong}></Route>
                        <Route path="/customaccordion" component={CustomAccordions}></Route>
                        <Route path="/customdatalist" component={CustomDatalists}></Route>
                        <Route path="/shoppingcart" component={ShoppingCarts}></Route>
                        <Route path="/treegrid" component={TreeGrids}></Route>
                        <Route path="/datalist" component={BasicDataList}></Route>
                        {/*路由不正确时，默认跳回home页面*/}
                        {/* <Route render={() => <Redirect to="/" />} /> */}
                    </Switch>
                </App>
                     
            </div>
        );
    }
}

export default Root;