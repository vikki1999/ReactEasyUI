import React from 'react';
import { Layout, LayoutPanel, DataGrid, GridColumn, Tabs, TabPanel, Tree,LinkButton,SplitButton,MenuButton,Menu,MenuItem,MenuSep,SubMenu } from 'rc-easyui';
import { withRouter } from 'react-router'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [
        {
          text: "Grid",
          iconCls: "fa fa-wpforms",
          state: "open",
          children: [
            {
              text: "CheskGrids",
              // render:<CheskGrids />,
              path:'/checkgrid',
            },
            {
              text: "DataGrids",
              // render:<DataGrids />,
              path:'/datagrid',
            },
            {
              text: "EditGrids",
              // render:<EditGrids />
              path:'/editgrid',
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
              // render:<ComboTrees />
              path:'/combotree',
            },
            {
              text: "FilterTrees",
              // render:<FilterTrees  />
              path:'/filtertree',
            },
            {
              text: "IconTrees",
              // render:<IconTrees />
              path:'/icontree',
            },
            {
              text: "Trees",
              // render:<Trees />
              path:'/tree',
            }
          ]
        },
        {
          text: "Other",
          iconCls: "fa fa-table",
          children: [
            {
              text: "yingyong",
              // render:<App />
              path:'/yingyong',
            },
            {
              text: "FileButtons",
              // render:<FileButtons />
              path:'/filebutton',
            },
            {
              text: "Forms",
              // render:<Forms />
              path:'/form',
            },
            {
              text: "Layouts",
              // render:<Layouts  />
              path:'/layout',
            },
            {
              text: "MenuButtons",
              // render:<MenuButtons  />
              path:'/menubutton',
            },
            {
              text: "Menus",
              // render:<Menus  />
              path:'/menu',
            },
            {
              text: "NumberBoxs",
              // render:<NumberBoxs  />
              path:'/numberbox',
            },
            {
              text: "Panels",
              // render:<Panels  />
              path:'/panel',
            },
            {
              text: "Tab",
              // render:<Tab  />
              path:'/tab',
            },
            {
              text: "DataList",
              // render:<Menus  />
              path:'/datalist',
            },
            {
              text: "ShoppingCart",
              // render:<NumberBoxs  />
              path:'/shoppingcart',
            },
            {
              text: "CustomDataList",
              // render:<Panels  />
              path:'/customdatalist',
            },
            {
              text: "CustomAccordion",
              // render:<Tab  />
              path:'/customaccordion',
            },
            {
              text: "TreeGrid",
              // render:<Tab  />
              path:'/treegrid',
            }
          ]
        }
      ],
      
    }
  }
  handleSelectionChange(selection) {
    // this.setState({ selection: selection })
    this.props.history.push(selection.path)
  }
  editMenu() {
    return (
      <Menu>
        <MenuItem text="Undo" iconCls="icon-undo"></MenuItem>
        <MenuItem text="Redo" iconCls="icon-redo"></MenuItem>
        <MenuSep></MenuSep>
        <MenuItem text="Cut"></MenuItem>
        <MenuItem text="Copy"></MenuItem>
        <MenuItem text="Paste"></MenuItem>
        <MenuSep></MenuSep>
        <MenuItem text="Toolbar">
          <SubMenu>
            <MenuItem text="Address"></MenuItem>
            <MenuItem text="Link"></MenuItem>
            <MenuItem text="Navigation Toolbar"></MenuItem>
            <MenuItem text="Bookmark Toolbar"></MenuItem>
            <MenuSep></MenuSep>
            <MenuItem text="New Toolbar..."></MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem text="Delete" iconCls="icon-remove"></MenuItem>
        <MenuItem text="Select All"></MenuItem>
      </Menu>
    )
  }
  helpMenu() {
    return (
      <Menu>
        <MenuItem text="Help"></MenuItem>
        <MenuItem text="Update"></MenuItem>
        <MenuItem text="About"></MenuItem>
      </Menu>
    )
  }
  aboutMenu() {
    return (
      <Menu noline>
        <div style={{ padding: '10px' }}>
          <img src="https://www.jeasyui.com/images/logo1.png" style={{ width: 150, height: 50 }} />
        </div>
      </Menu>
    )
  }
  render() {
    return (
      <div>
        <Layout style={{ width: '100%',height:600 }}>
          <LayoutPanel region="north">
            <LinkButton plain>Home</LinkButton>
            <SplitButton text="Edit" plain iconCls="icon-edit" menu={this.editMenu}></SplitButton>
            <SplitButton text="Help" plain iconCls="icon-help" menu={this.helpMenu}></SplitButton>
            <MenuButton text="About" plain menu={this.aboutMenu}></MenuButton>
          </LayoutPanel>
          <LayoutPanel region="west" split style={{ minWidth: 150, maxWidth: 300 }}>
            <Tree data={this.state.menuData} onSelectionChange={this.handleSelectionChange.bind(this)}></Tree>
          </LayoutPanel>
          <Tabs style={{ height: '100%' }}>
            <TabPanel title="Tab1" bodyCls="f-column" border={false}>
              {this.props.children}
            </TabPanel>
            <TabPanel title="Tab2"></TabPanel>
            <TabPanel title="Tab3"></TabPanel>
          </Tabs>
        </Layout>
      </div>
    );
  }
}
 
//connect to redux to get App

App = withRouter(App);
export default App;