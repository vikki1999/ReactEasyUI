import React from 'react';
import { Draggable, Droppable, Layout, LayoutPanel, DataList, DataGrid, GridColumn } from 'rc-easyui';
 
class ShoppingCarts extends React.Component {
  constructor() {
    super();
    this.state = {
      isover: false,
      dragItem: null,
      cartData: [],
      sumData: [{ name: "Total", listprice: 0 }],
      productData: this.getData()
    }
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
  handleDragStart(item) {
    this.setState({ dragItem: item })
  }
  handleDrop() {
    const { dragItem, productData, cartData, sumData } = this.state;
    let index = productData.indexOf(dragItem);
    if (index >= 0) {
      this.setState({
        productData: productData.filter((row, i) => i !== index),
        cartData: [...cartData, dragItem],
        sumData: [{
          name: 'Total',
          listprice: sumData[0].listprice + dragItem.listprice
        }]
      });
    }
  }
  renderItem({ row }) {
    const item = (proxy) => (
      <div className={'product' + (proxy ? ' product-proxy' : '')}>
        <img src={'https://www.jeasyui.com/tutorial/datagrid/images/' + row.itemid + '.png'} />
        <p>{row.name}</p>
        <p>{row.listprice}</p>
      </div>
    )
    return (
      <Draggable revert proxy={() => item(true)} onDragStart={() => this.handleDragStart(row)}>
        {item()}
      </Draggable>
    )
  }
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <Layout style={{ height: 250 }}>
          <DataList style={{ height: '100%' }}
            data={this.state.productData}
            itemCls="dataitem"
            renderItem={this.renderItem.bind(this)}
          />
          <LayoutPanel region="east" bodyCls="f-column" style={{ width: '30%' }}>
            <Droppable onDrop={this.handleDrop.bind(this)}>
              <DataGrid className="f-full" showFooter border={false} data={this.state.cartData} footerData={this.state.sumData}>
                <GridColumn field="name" title="Name"></GridColumn>
                <GridColumn field="listprice" title="Price" align="right"></GridColumn>
              </DataGrid>
            </Droppable>
          </LayoutPanel>
        </Layout>
      </div>
    );
  }
}
 
export default ShoppingCarts;