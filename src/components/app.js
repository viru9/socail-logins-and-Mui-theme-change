import React, {Component} from 'react';
import ReactJWPlayer from 'react-jw-player';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const muiTheme = getMuiTheme({
  textField: {
    textColor: '#76FF03',
  },
  datePicker : {
     color: "#E0E0E0",
     textColor:"#E0E0E0" ,
     calendarTextColor: "#FFFF00",
     selectColor:"#F4511E" ,
     selectTextColor: "#BF360C",
     calendarYearBackgroundColor: "#00C853",
     headerColor:"#00C853"
  }
});

export default class App extends Component {

  responseFacebook(response) {
    console.log("responseFacebook: ",response);
  }

  responseGoogle(response) {
    console.log("responseGoogle: ",response);
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <MuiThemeProvider muiTheme={muiTheme}>
            <TextField hintText="Hint Text"/>
          </MuiThemeProvider>
        </div>

        <div className="row">
          <MuiThemeProvider muiTheme={muiTheme}>
            <DatePicker hintText="Portrait Dialog" />
          </MuiThemeProvider>
        </div>

        <div className="row">
          <div className="col-sm">
            Facebook:
          </div>
          <div className="col-sm">
            <FacebookLogin
              appId="114740925982514"
              autoLoad={true}
              fields="email"
              onClick={this.componentClicked}
              callback={this.responseFacebook}/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            Google:
          </div>
          <div className="col-sm">
            <GoogleLogin
              clientId="126614811788-jaq8g64slh7uqe9k3uf1km0dpkmj00lo.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}/>
          </div>
        </div>

      </div>
    );
  }
}
