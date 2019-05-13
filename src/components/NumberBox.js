import React from 'react';
import { Label, NumberBox } from 'rc-easyui';
 
class NumberBoxs extends React.Component {
  render() {
    return (
      <div>
        <h2>Basic NumberBox</h2>
        <p>The NumberBox component only accept inputing numbers.</p>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="n1" align="top">Amount:</Label>
          <NumberBox inputId="n1" value={100} spinners></NumberBox>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="n2" align="top">List Price:</Label>
          <NumberBox inputId="n2" value={234.56} precision={2} spinners={false}></NumberBox>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="n3" align="top">Discount:</Label>
          <NumberBox inputId="n3" value={60} suffix="%" spinners={false}></NumberBox>
        </div>
      </div>
    );
  }
}
 
export default NumberBoxs;