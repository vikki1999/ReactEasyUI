import React from 'react';
import { Menu, MenuItem, MenuSep, SubMenu } from 'rc-easyui';
 
class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  handleItemClick(value) {
    this.setState({ value: value })
  }
  render() {
    return (
      <div>
        <h2>Basic Menu</h2>
        <Menu inline onItemClick={this.handleItemClick.bind(this)}>
          <MenuItem value="new" text="New"></MenuItem>
          <MenuItem text="Open">
            <SubMenu>
              <MenuItem value="word" text="Word"></MenuItem>
              <MenuItem value="excel" text="Excel"></MenuItem>
              <MenuItem value="ppt" text="PowerPoint"></MenuItem>
            </SubMenu>
          </MenuItem>
          <MenuItem value="save" text="Save" iconCls="icon-save"></MenuItem>
          <MenuItem value="print" text="Print" iconCls="icon-print" disabled></MenuItem>
          <MenuSep></MenuSep>
          <MenuItem value="exit" text="Exit"></MenuItem>
        </Menu>
        <p>Item Clicked: {this.state.value}</p>
      </div>
    );
  }
}
 
export default Menus;