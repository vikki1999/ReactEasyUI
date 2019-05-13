import React from 'react';
import { Layout, LayoutPanel } from 'rc-easyui';
 
class Layouts extends React.Component {
  render() {
    const titleStyle = {
      textAlign: 'center',
      marginTop: '10px'
    }
    return (
      <div>
        <h2>Basic Layout</h2>
        <Layout style={{ width: 700, height: 250 }}>
          <LayoutPanel region="north" style={{ height: 50 }}>
            <div style={titleStyle}>North Region</div>
          </LayoutPanel>
          <LayoutPanel region="south" style={{ height: 50 }}>
            <div style={titleStyle}>South Region</div>
          </LayoutPanel>
          <LayoutPanel region="west" style={{ width: 120 }}>
            <div style={titleStyle}>West Region</div>
          </LayoutPanel>
          <LayoutPanel region="east" style={{ width: 120 }}>
            <div style={titleStyle}>East Region</div>
          </LayoutPanel>
          <LayoutPanel region="center" style={{ height: '100%' }}>
            <div style={titleStyle}>Center Region</div>
          </LayoutPanel>
        </Layout>
      </div>
    );
  }
}
 
export default Layouts;