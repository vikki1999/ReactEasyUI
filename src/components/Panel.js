import React from 'react';
import { Panel,Form, Label, TextBox, CheckBox, ComboBox, LinkButton,NumberBox} from 'rc-easyui';
 
class Panels extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: null,
        email: null,
        hero: null,
        accept: true
      },
      heroes: [
        { value: 11, text: "Mr. Nice" },
        { value: 12, text: "Narco" },
        { value: 13, text: "Bombasto" },
        { value: 14, text: "Celeritas" },
        { value: 15, text: "Magneta" },
        { value: 16, text: "RubberMan" },
        { value: 17, text: "Dynama" },
        { value: 18, text: "Dr IQ" },
        { value: 19, text: "Magma" },
        { value: 20, text: "Tornado" }
      ]
    }
  }
  handleChange(name, value) {
    let user = Object.assign({}, this.state.user);
    user[name] = value;
    this.setState({user:user})
  }
  handleSubmit() {
    //...
  }
  render() {
    const { user, heroes } = this.state;
    return (
      <div>
        <h2>Basic Panel</h2>
        <Panel title="Panel Title" collapsible bodyStyle={{ padding: 20 }} style={{ width: 400 }}>
          <Form model={user} onChange={this.handleChange.bind(this)}>
          <div >
            <Label htmlFor="name" align="top">Name:</Label>
            <TextBox inputId="name" name="name" value={user.name}></TextBox>
          </div>
          <div>
            <Label htmlFor="email" align="top">Email:</Label>
            <TextBox inputId="email" name="email" value={user.email}></TextBox>
          </div>
          <div >
            <Label htmlFor="hero" align="top">Select a hero:</Label>
            <ComboBox inputId="hero" data={heroes} name="hero" value={user.hero}></ComboBox>
          </div>
          <div >
            <CheckBox inputId="accept" name="accept" checked={user.accept}></CheckBox>
            <Label htmlFor="accept" style={{width:100}}>Accept Me</Label>
          </div>
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
          <div >
            <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
          </div>
        </Form>
        </Panel>
        
      </div>
    );
  }
}
 
export default Panels;