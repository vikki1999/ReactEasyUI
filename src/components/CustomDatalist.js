import React from 'react';
import { DataList } from 'rc-easyui';
 
class CustomDatalists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
      selection: null
    }
  }
  getImage(row) {
    return 'https://www.jeasyui.com/tutorial/datagrid/images/' + row.itemid + '.png';
  }
  getData() {
    return [
      { "code": "FI-SW-01", "name": "Koi", "unitcost": 10.00, "status": "P", "listprice": 36.50, "attr": "Large", "itemid": "EST-1" },
      { "code": "K9-DL-01", "name": "Dalmation", "unitcost": 12.00, "status": "P", "listprice": 18.50, "attr": "Spotted Adult Female", "itemid": "EST-2" },
      { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 38.50, "attr": "Venomless", "itemid": "EST-3" },
      { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 26.50, "attr": "Rattleless", "itemid": "EST-4" },
      { "code": "RP-LI-02", "name": "Iguana", "unitcost": 12.00, "status": "P", "listprice": 35.50, "attr": "Green Adult", "itemid": "EST-5" },
      { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 158.50, "attr": "Tailless", "itemid": "EST-6" },
      { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 83.50, "attr": "With tail", "itemid": "EST-7" },
      { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 23.50, "attr": "Adult Female", "itemid": "EST-8" },
      { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 89.50, "attr": "Adult Male", "itemid": "EST-9" },
      { "code": "AV-CB-01", "name": "Amazon Parrot", "unitcost": 92.00, "status": "P", "listprice": 63.50, "attr": "Adult Male", "itemid": "EST-10" }
    ]
  }
  handleSelectionChange(selection) {
    this.setState({ selection: selection })
  }
  render() {
    return (
      <div>
        <h2>Custom DataList</h2>
        <DataList
          style={{ width: 550, height: 250 }}
          itemCls="dataitem"
          data={this.state.data}
          selectionMode="single"
          onSelectionChange={this.handleSelectionChange.bind(this)}
          renderItem={({ row }) => (
            <div className="product">
              <img src={this.getImage(row)} />
              <p>{row.name}</p>
            </div>
          )}
        />
        <p>You selected: {JSON.stringify(this.state.selection)}</p>
      </div>
    );
  }
}
 
export default CustomDatalists;