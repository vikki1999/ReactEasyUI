import React from 'react';
import { Tree } from 'rc-easyui';
 
class ComboTrees extends React.Component {
  constructor() {
    super();
    this.state = {
      data: this.getData(),
      checkedNodes: []
    }
  }
  getData() {
    return [
      {
        id: 1,
        text: "My Documents",
        children: [
          {
            id: 11,
            text: "Photos",
            state: "closed",
            children: [
              {
                id: 111,
                text: "Friend"
              },
              {
                id: 112,
                text: "Wife"
              },
              {
                id: 113,
                text: "Company"
              }
            ]
          },
          {
            id: 12,
            text: "Program Files",
            children: [
              {
                id: 121,
                text: "Intel"
              },
              {
                id: 122,
                text: "Java"
              },
              {
                id: 123,
                text: "Microsoft Office"
              },
              {
                id: 124,
                text: "Games"
              }
            ]
          },
          {
            id: 13,
            text: "index.html"
          },
          {
            id: 14,
            text: "about.html"
          },
          {
            id: 15,
            text: "welcome.html"
          }
        ]
      }
    ];
  }
  handleCheckChange(nodes) {
    this.setState({ checkedNodes: nodes })
  }
  render() {
    const { data, checkedNodes } = this.state;
    return (
      <div>
        <h2>Checkbox Tree</h2>
        <Tree data={data} checkbox onCheckChange={this.handleCheckChange.bind(this)}></Tree>
        <div style={{ padding: '4px 16px' }}>
          <div>Checked Nodes:</div>
          {
            checkedNodes.map((node, index) => {
              return <div key={index}>{index + 1} {node.text}</div>
            })
          }
        </div>
      </div>
    );
  }
}
 
export default ComboTrees;