import React from 'react';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      isAuthenticated:false
    }
  }


  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;;

    //Name
    if (!fields["user_id"]) {
      formIsValid = false;
      errors["user_id"] = "Cannot be empty";
    }

    if (typeof fields["user_id"] !== "undefined") {
      console.log(fields["user_id"].length);
      if (!((fields["user_id"].length >= 8) || (fields["user_id"].length === 20))) {
        formIsValid = false;
        errors["user_id"] = "Please enter userId of minimum length 8  and maximum length of 20";
      }
    }
    //Password

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!((fields["password"].length >= 8) || (fields["password"].length === 20))) {
        formIsValid = false;
        errors["password"] = "Please enter password of minimum length 8  and maximum length of 20";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  handleLogin(e, field) {
    e.preventDefault();
    if (this.handleValidation()) {
      const formData = this.state.fields;
      const { router } = this.props;
      fetch("http://localhost:4000/users/signin", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', "Accept": 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(formData)
      }).then(response => {
        response.json().then(data => {
          if(data.isUserAuthenticated) {
            sessionStorage.setItem('customerID',data.customerid);
            window.location.assign('/dashboard');
          }
        })
      });
    } else {
      alert("Form has errors.")
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
      <form id="login_box" className="redBox" onSubmit={this.handleLogin.bind(this)}>
        <div class="form-group">
          <label>User ID</label>
          <input ref="user_id" placeholder="Enter User ID" id="user_id" type="text" autoComplete="new-password"
            className="userid_field form-control" name="user_id" minLength="8" maxLength="20" onChange={this.handleChange.bind(this, "user_id")} value={this.state.fields["user_id"]}></input>
          <span style={{ color: "black" }}>{this.state.errors["user_id"]}</span>
        </div>
        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input ref="password" placeholder="Enter Password" id="password" type="password"
            autoComplete="new-password" name="password" className="password_field form-control" minLength="8" maxLength="20" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
          <span style={{ color: "black" }}>{this.state.errors["password"]}</span>
        </div>
        <div>
          <input type="submit" value="Login" className="loginButton" />
        </div>
      </form>
      </div>
    );
  }
}

export default withRouter(Login);
