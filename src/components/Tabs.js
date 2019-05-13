import React from 'react';
import { Tabs, TabPanel, ComboBox } from 'rc-easyui';
 
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "top",
      positions: [
        { value: "top", text: "Top" },
        { value: "bottom", text: "Bottom" },
        { value: "left", text: "Left" },
        { value: "right", text: "Right" }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Tab Position</h2>
        <div style={{ marginBottom: 20 }}>
          <ComboBox
            editable={false}
            data={this.state.positions}
            value={this.state.position}
            onChange={(value) => this.setState({ position: value })}
          />
        </div>
        <Tabs tabPosition={this.state.position} style={{ height: 250 }}>
          <TabPanel title="Tab1">
            <p>Tab Panel1</p>
          </TabPanel>
          <TabPanel title="Tab2">
            <p>Tab Panel2</p>
          </TabPanel>
          <TabPanel title="Tab3">
            <p>Tab Panel3</p>
          </TabPanel>
          <TabPanel title="Help" closable iconCls="icon-help">
            <p>This is the help content.</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
 
export default Tab;