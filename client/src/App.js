import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Radio from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';


class App extends Component {
	
	state = {
		member: {
			first_name:'',
			last_name:'',
			id:'',
			birth_date:'',
			phone_number:''
		},
		provider: {
			first_name:'Marty',
			last_name:'Seeger',
			npi:'1234567890'
		},
		
		trading_partner_id:'',
		
		selected:'has'
	};

	componentDidMount(){
		
	}

  checkChangeHandler = (e) => {
	  console.log(e)
	  this.setState({
		  selected: e.target.name
	  })
	  
  }	
  
  inputChangeHandler = (e) => {
	  let k = e.target.name
	  let v = e.target.value
	  
	  if(k === "first_name"){
		  this.setState(prevState => {
			  prevState.member.first_name = v
		  })
	  }
	  if(k === "last_name"){
		   this.setState(prevState => {
			  prevState.member.last_name = v
		  })
	  }
	  if(k === "birth_date"){
		   this.setState(prevState => {
			  prevState.member.birth_date = v
		  })
	  }
	  if(k === "id"){
		   this.setState(prevState => {
			  prevState.member.id = v
		  })
	  }
	  if(k === "phone_number"){
		   this.setState(prevState => {
			  prevState.member.phone_number = v
		  })
	  }
	  
	  if(k === "trading_partner_id"){
		  this.setState({ trading_partner_id: v})
	  }
	 
  }
  
  handleFormSubmit = (e) => {
	  
	  axios.post('http://localhost:5000/api/patient_data', this.state)
	  .then(function (response) {
		  console.log(response)
	  })
	  .catch(function (error) {
		  console.log(error)
	  });
	  
	  e.preventDefault()
	  
  }
	
  render() {
	  const form__style = {
		backgroundColor: 'rgb(234,97,26)',
		  color:'rgba(92,81,72,.9)',
		  padding:'25px',
		  fontSize:'16px'
	  };
	  
	  const btn__style = {
		  backgroundColor:'rgb(15,109,158)',
		  color: 'white',
		  padding:'5px 25px',
		  width:'80%',
		  margin:'20px 0'
	  };
	  
	  let formInstance = null
	  
	  if(this.state.selected === "has"){
		  
		  formInstance = (
		  			
			  <Form onSubmit={this.handleFormSubmit} horizontal style={form__style}>
				<FormGroup>
				  <Radio onChange={this.checkChangeHandler.bind(this)} checked={this.state.selected==="has"} name="has" inline>
					Yes, I have insurance.
				  </Radio>
				  {' '}

				<Radio onChange={this.checkChangeHandler.bind(this)} checked={this.state.selected==="has_not"} name="has_not" inline>
					No, I do not have insurance.
				  </Radio>

				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
				  <Col componentClass={ControlLabel} sm={3}>
					First Name
				  </Col>
				  <Col sm={6}>
					<FormControl onChange={this.inputChangeHandler} name="first_name" type="text" placeholder="First name" />
				  </Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
				  <Col componentClass={ControlLabel} sm={3}>
					Last Name
				  </Col>
				  <Col sm={6}>
					<FormControl onChange={this.inputChangeHandler} type="text" name="last_name" placeholder="Last name" />
				  </Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
				  <Col componentClass={ControlLabel} sm={3}>
					Date of birth
				  </Col>
				  <Col sm={6}>
					<FormControl onChange={this.inputChangeHandler} type="text" name="birth_date" placeholder="Date of birth" />
				  </Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
				  <Col componentClass={ControlLabel} sm={3}>
					Phone number
				  </Col>
				  <Col sm={6}>
					<FormControl onChange={this.inputChangeHandler} type="text" name="phone_number" placeholder="Phone number" />
				  </Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<hr/>
				  <Col componentClass={ControlLabel} sm={3}>
					Insurance Carrier
				  </Col>
				  <Col sm={6}>
					<FormControl onChange={this.inputChangeHandler} type="text" name="trading_partner_id" placeholder="Insurance Carrier" />
				  </Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
				  <Col componentClass={ControlLabel} sm={3}>
					Insurance ID
				  </Col>
				  <Col sm={6}>
					<FormControl onChange={this.inputChangeHandler} type="text" name="id" placeholder="Insurance ID" />
				  </Col>
				</FormGroup>

				<FormGroup>
					<Button type="submit" style={btn__style}>Submit</Button>
				</FormGroup>
			  </Form>
		  );
	  }
	  
	  else{
		  
		  formInstance = (
			  
		  		<Form onSubmit={this.handleFormSubmit} horizontal style={form__style}>
					<FormGroup>
					  <Radio onChange={this.checkChangeHandler.bind(this)} checked={this.state.selected==="has"} name="has" inline>
						Yes, I have insurance.
					  </Radio>
					  {' '}

					<Radio onChange={this.checkChangeHandler.bind(this)} checked={this.state.selected==="has_not"} name="has_not" inline>
						No, I do not have insurance.
					  </Radio>
					</FormGroup>

					<FormGroup controlId="formHorizontalEmail">
					  <Col componentClass={ControlLabel} sm={3}>
						First Name
					  </Col>
					  <Col sm={6}>
						<FormControl type="text" placeholder="First name" />
					  </Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
					  <Col componentClass={ControlLabel} sm={3}>
						Last Name
					  </Col>
					  <Col sm={6}>
						<FormControl type="text" placeholder="Last name" />
					  </Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalEmail">
					  <Col componentClass={ControlLabel} sm={3}>
						Date of birth
					  </Col>
					  <Col sm={6}>
						<FormControl type="text" placeholder="Date of birth" />
					  </Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
					  <Col componentClass={ControlLabel} sm={3}>
						Phone number
					  </Col>
					  <Col sm={6}>
						<FormControl type="text" placeholder="Phone number" />
					  </Col>
					</FormGroup>
					
					<FormGroup>
						<Button type="submit" style={btn__style}>Submit</Button>
					</FormGroup>

				</Form>
		 );
	  }
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      		<br/>
		{formInstance}
		
      </div>
    );
  }
}

export default App;
