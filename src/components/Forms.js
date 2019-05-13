import React from 'react';
import { Form, Label, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';
 
class Forms extends React.Component {
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
        <h2>Basic Form</h2>
        <Form model={user} onChange={this.handleChange.bind(this)}>
          <div style={{ marginBottom: '20px' }}>
            <Label htmlFor="name" align="top">Name:</Label>
            <TextBox inputId="name" name="name" value={user.name}></TextBox>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Label htmlFor="email" align="top">Email:</Label>
            <TextBox inputId="email" name="email" value={user.email}></TextBox>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Label htmlFor="hero" align="top">Select a hero:</Label>
            <ComboBox inputId="hero" data={heroes} name="hero" value={user.hero}></ComboBox>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <CheckBox inputId="accept" name="accept" checked={user.accept}></CheckBox>
            <Label htmlFor="accept" style={{width:100}}>Accept Me</Label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
          </div>
        </Form>
        <p>{JSON.stringify(user)}</p>
      </div>
    );
  }
}
 
export default Forms;