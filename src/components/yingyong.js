import React,{Component} from 'react';
import '../index.css' 
import { Link,Redirect } from 'react-router-dom';
import {browserHistory} from 'react-router'
import { SideMenu } from 'rc-easyui';
import CheskGrids from './CheckGrids';
import ComboTrees from './ComboTrees';
import DataGrids from './DataGrids';
import EditGrids from './EditGrids';
import Fenge from './fengeLayout';
import FileButtons from './FileButtons';
import FilterTrees from './FilterTrees';
import Forms from './Forms';
import IconTrees from './IconTrees';
import Layouts from './Layouts';
import MenuButtons from './MenuButtons';
import Menus from './Menus';
import NumberBoxs from './NumberBox';
import Panels from './Panel';
import Tab from './Tabs';
import Trees from './Trees';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'AppLayout',
      width: 200,
      collapsed: false,
      selectedMenu: null,
      menus: [
        {
          text: "Grid",
          iconCls: "fa fa-wpforms",
          state: "open",
          children: [
            {
              text: "CheskGrids",
              render:<CheskGrids />,
              path:'/checkgrid',
            },
            {
              text: "DataGrids",
              render:<DataGrids />,
              path:'/datagrid',
            },
            {
              text: "EditGrids",
              render:<EditGrids />
            }
          ]
        },
        {
          text: "Tree",
          iconCls: "fa fa-at",
          selected: true,
          children: [
            {
              text: "ComboTrees",
              render:<ComboTrees />
            },
            {
              text: "FilterTrees",
              render:<FilterTrees  />
            },
            {
              text: "IconTrees",
              render:<IconTrees />
            },
            {
              text: "Trees",
              render:<Trees />
            }
          ]
        },
        {
          text: "Other",
          iconCls: "fa fa-table",
          children: [
            {
              text: "Fenge",
              render:<Fenge />
            },
            {
              text: "FileButtons",
              render:<FileButtons />
            },
            {
              text: "Forms",
              render:<Forms />
            },
            {
              text: "Layouts",
              render:<Layouts  />
            },
            {
              text: "MenuButtons",
              render:<MenuButtons  />
            },
            {
              text: "Menus",
              render:<Menus  />
            },
            {
              text: "NumberBoxs",
              render:<NumberBoxs  />
            },
            {
              text: "Panels",
              render:<Panels  />
            },
            {
              text: "Tab",
              render:<Tab  />
            }
          ]
        }
      ]
    }
  }
  toggle() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
      width: collapsed ? 200 : 50
    })
  }
  handleItemClick(item) {
    console.log(item);
    this.setState({ selectedMenu: item.render })
    // history.push(item.path);
  }
  render() {
    const { menus, title, width, selectedMenu, collapsed } = this.state;
   
    return (
      <div>
        <div className="f-column">
          <div className="main-header f-row">
            <div className="f-row f-full">
              <div className="main-title f-animate f-row" style={{ width: width }}>
                <img className="app-logo" src="https://www.jeasyui.com/favicon.ico" />
                {!collapsed && <span>{title}</span>}
              </div>
              <div className="main-bar f-full">
                <span className="main-toggle fa fa-bars" onClick={this.toggle.bind(this)}></span>
              </div>
            </div>
          </div>
          {/* 这里的class是react.css里的 */}
          <div className="f-row f-full">
            <div className="sidebar-body f-animate" style={{ width: width }}>
              {!collapsed && <div className="sidebar-user">User Panel</div>}
              <SideMenu data={menus} border={false} collapsed={collapsed} onItemClick={this.handleItemClick.bind(this)}></SideMenu>
            </div>
            <div className="main-body f-full"  style={{ width:'80%',padding:10 }}>
              {selectedMenu && <div> {selectedMenu }</div>}
              {/* {this.props.children} */}
      
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
 
export default App;