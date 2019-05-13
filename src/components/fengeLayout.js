import React from 'react';
import { Layout, LayoutPanel, DataGrid, GridColumn, Tabs, TabPanel, Tree } from 'rc-easyui';
import { withRouter } from 'react-router'
 
class Fenge extends React.Component {
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
            },
            {
              text: "FilterTrees",
              // render:<FilterTrees  />
            },
            {
              text: "IconTrees",
              // render:<IconTrees />
            },
            {
              text: "Trees",
              // render:<Trees />
            }
          ]
        },
        {
          text: "Other",
          iconCls: "fa fa-table",
          children: [
            {
              text: "Fenge",
              // render:<Fenge />
            },
            {
              text: "FileButtons",
              // render:<FileButtons />
            },
            {
              text: "Forms",
              // render:<Forms />
            },
            {
              text: "Layouts",
              // render:<Layouts  />
            },
            {
              text: "MenuButtons",
              // render:<MenuButtons  />
            },
            {
              text: "Menus",
              // render:<Menus  />
            },
            {
              text: "NumberBoxs",
              // render:<NumberBoxs  />
            },
            {
              text: "Panels",
              // render:<Panels  />
            },
            {
              text: "Tab",
              // render:<Tab  />
            }
          ]
        }
      ],
      gridData: [
        {
          code: "FI-SW-01",
          name: "Koi",
          unitcost: 10.0,
          status: "P",
          listprice: 36.5,
          attr: "Large",
          itemid: "EST-1"
        },
        {
          code: "K9-DL-01",
          name: "Dalmation",
          unitcost: 12.0,
          status: "P",
          listprice: 18.5,
          attr: "Spotted Adult Female",
          itemid: "EST-10"
        },
        {
          code: "RP-SN-01",
          name: "Rattlesnake",
          unitcost: 12.0,
          status: "P",
          listprice: 38.5,
          attr: "Venomless",
          itemid: "EST-11"
        },
        {
          code: "RP-SN-01",
          name: "Rattlesnake",
          unitcost: 12.0,
          status: "P",
          listprice: 26.5,
          attr: "Rattleless",
          itemid: "EST-12"
        },
        {
          code: "RP-LI-02",
          name: "Iguana",
          unitcost: 12.0,
          status: "P",
          listprice: 35.5,
          attr: "Green Adult",
          itemid: "EST-13"
        },
        {
          code: "FL-DSH-01",
          name: "Manx",
          unitcost: 12.0,
          status: "P",
          listprice: 158.5,
          attr: "Tailless",
          itemid: "EST-14"
        },
        {
          code: "FL-DSH-01",
          name: "Manx",
          unitcost: 12.0,
          status: "P",
          listprice: 83.5,
          attr: "With tail",
          itemid: "EST-15"
        },
        {
          code: "FL-DLH-02",
          name: "Persian",
          unitcost: 12.0,
          status: "P",
          listprice: 23.5,
          attr: "Adult Female",
          itemid: "EST-16"
        },
        {
          code: "FL-DLH-02",
          name: "Persian",
          unitcost: 12.0,
          status: "P",
          listprice: 89.5,
          attr: "Adult Male",
          itemid: "EST-17"
        },
        {
          code: "AV-CB-01",
          name: "Amazon Parrot",
          unitcost: 92.0,
          status: "P",
          listprice: 63.5,
          attr: "Adult Male",
          itemid: "EST-18"
        }
      ]
    }
  }
  handleSelectionChange(selection) {
    // this.setState({ selection: selection })
    // this.props.history.push(selection.path)
  }
  render() {
    return (
      <div>
        <h2>Split Panel</h2>
        <Layout style={{ width: 700, height: 250 }}>
          <LayoutPanel region="west" split style={{ minWidth: 150, maxWidth: 300 }}>
            <Tree data={this.state.menuData} ></Tree>
          </LayoutPanel>
          <Tabs style={{ height: '100%' }}>
            <TabPanel title="Tab1" bodyCls="f-column" border={false}>
              {<DataGrid data={this.state.gridData} className="f-full" border={false}>
                <GridColumn field="itemid" title="Item ID"></GridColumn>
                <GridColumn field="name" title="Name"></GridColumn>
                <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
                <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
                <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
                <GridColumn field="status" title="Status" align="center"></GridColumn>
              </DataGrid>}
            </TabPanel>
            <TabPanel title="Tab2"></TabPanel>
            <TabPanel title="Tab3"></TabPanel>
          </Tabs>
        </Layout>
      </div>
    );
  }
}
 
//connect to redux to get Fenge

Fenge = withRouter(Fenge);
export default Fenge;