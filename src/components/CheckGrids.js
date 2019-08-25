import React from 'react';
import { DataGrid, GridColumn, CheckBox,Pagination } from 'rc-easyui';
// import request from '../request';
import {queryRows, queryRow } from '../mysql'; //调用mysql函数
 
class CheckGrids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageNumber: 1,
      pageSize: 10,
      allChecked: false,
      rowClicked: false,
      data: []
    }
  }
  
  // //express等后端接口请求数据
  getData() {
  //   return fetch('http://localhost:3001/users', {
  //     headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //     },
  //     method:'get',
  //   }).then(response => { 
  //     response.json().then(data => {this.setState({data:data,total:data.length}) }).catch(error => console.log(error))
  //   });
  const data = queryRow('select * from sys_users');
  console.log('data===>', data);
  
     
    // return [
    //   { "code": "FI-SW-01", "name": "Koi", "unitcost": 10.00, "status": "P", "listprice": 36.50, "attr": "Large", "itemid": "EST-1" },
    //   { "code": "K9-DL-01", "name": "Dalmation", "unitcost": 12.00, "status": "P", "listprice": 18.50, "attr": "Spotted Adult Female", "itemid": "EST-10" },
    //   { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 38.50, "attr": "Venomless", "itemid": "EST-11" },
    //   { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 26.50, "attr": "Rattleless", "itemid": "EST-12" },
    //   { "code": "RP-LI-02", "name": "Iguana", "unitcost": 12.00, "status": "P", "listprice": 35.50, "attr": "Green Adult", "itemid": "EST-13" },
    //   { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 158.50, "attr": "Tailless", "itemid": "EST-14" },
    //   { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 83.50, "attr": "With tail", "itemid": "EST-15" },
    //   { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 23.50, "attr": "Adult Female", "itemid": "EST-16" },
    //   { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 89.50, "attr": "Adult Male", "itemid": "EST-17" },
    //   { "code": "AV-CB-01", "name": "Amazon Parrot", "unitcost": 92.00, "status": "P", "listprice": 63.50, "attr": "Adult Male", "itemid": "EST-18" }
    // 
  }
  handleRowCheck(row, checked) {
    let data = this.state.data.slice();
    let index = this.state.data.indexOf(row);
    data.splice(index, 1, Object.assign({}, row, { selected: checked }));
    let checkedRows = data.filter(row => row.selected);
    this.setState({
      allChecked: data.length === checkedRows.length,
      rowClicked: true,
      data: data
    }, () => {
      this.setState({ rowClicked: false })
    });
  }
  handleAllCheck(checked) {
    if (this.state.rowClicked) {
      return;
    }
    let data = this.state.data.map(row => {
      return Object.assign({}, row, { selected: checked })
    });
    this.setState({
      allChecked: checked,
      data: data
    })
  }
  componentWillMount(){
    this.getData();
  }
  render() {
  console.log(this.state.data)
  const { total, pageNumber, pageSize } = this.state;
    const checkedItems = this.state.data.filter(row => row.selected).map(row => row.UserName);
    return (
      <div>
        <h2>Checkbox Selection</h2>
        <DataGrid data={this.state.data.slice((pageNumber-1)*pageSize,pageNumber*pageSize)} >
          <GridColumn width={50} align="center"
            field="ck"
            render={({ row }) => (
              <CheckBox checked={row.selected} onChange={(checked) => this.handleRowCheck(row, checked)}></CheckBox>
            )}
            header={() => (
              <CheckBox checked={this.state.allChecked} onChange={(checked) => this.handleAllCheck(checked)}></CheckBox>
            )}
          />
          <GridColumn field="UserID" title="UserID" align="center"></GridColumn>
          <GridColumn field="UserName" title="UserName" align="center"></GridColumn>
          <GridColumn field="LoginPwd" title="LoginPwd" align="center"></GridColumn>
          <GridColumn field="MobilePhone" title="MobilePhone" align="center"></GridColumn>
          <GridColumn field="Email" title="Email" align="center" ></GridColumn>
          <GridColumn field="Permissions" title="Permissions" align="center"></GridColumn>
          <GridColumn field="Gender" title="Gender" align="center"></GridColumn>
          <GridColumn field="Local" title="Local" align="center"></GridColumn>
          <GridColumn field="CreateTime" title="CreateTime" align="center"></GridColumn>
          <GridColumn field="Companyid" title="Companyid" align="center"></GridColumn>
          <GridColumn field="Roleid" title="Roleid" align="center"></GridColumn>
        </DataGrid>
        <Pagination
              total={total}
              pageNumber={pageNumber}
              pageSize={pageSize}
              onPageChange={event => this.setState(event)}
            />
        <p>Checked Items: {checkedItems.join(', ')}</p>
      </div>
    );
  }
}
 
export default CheckGrids;