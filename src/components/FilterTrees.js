import React from 'react';
import { Panel, TextBox, Tree } from 'rc-easyui';
 
class FilterTrees extends React.Component {
  constructor() {
    super();
    this.state = {
      data: this.getData()
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
  handleSearch(value) {
    this.tree.doFilter(value)
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Tree Filtering</h2>
        <Panel 
          style={{ width: '100%', maxWidth: '600px' }}
          bodyStyle={{ padding: '10px', minHeight: '250px' }}
        >
          <TextBox style={{ marginBottom: '10px', width: '100%' }}
            placeholder="Searching..."
            onChange={this.handleSearch.bind(this)}
          />
          <Tree data={data} ref={ref => this.tree = ref}></Tree>
        </Panel>
      </div>
    );
  }
}
 
export default FilterTrees;