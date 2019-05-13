import React from 'react';
import { MenuButton, Menu, MenuItem, MenuSep, SubMenu, Panel, LinkButton } from 'rc-easyui';
 
class MenuButtons extends React.Component {
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
        <h2>Basic MenuButton</h2>
        <Panel bodyStyle={{ padding: '5px' }}>
          <LinkButton plain>Home</LinkButton>
          <MenuButton text="Edit" plain iconCls="icon-edit" menu={this.editMenu}></MenuButton>
          <MenuButton text="Help" plain iconCls="icon-help" menu={this.helpMenu}></MenuButton>
          <MenuButton text="About" plain menu={this.aboutMenu}></MenuButton>
        </Panel>
      </div>
    );
  }
}
 
export default MenuButtons;