import React from 'react';
import { FileButton } from 'rc-easyui';
 
class FileButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      filename: null
    }
  }
  handleSelect(files) {
    this.setState({ filename: files[0].name });
  }
  render() {
    return (
      <div>
        <h2>Basic FileButton</h2>
        <FileButton style={{ width: 100 }} onSelect={this.handleSelect.bind(this)}>Select a file</FileButton>
        <p>You selected: {this.state.filename}</p>
      </div>
    );
  }
}
 
export default FileButtons;