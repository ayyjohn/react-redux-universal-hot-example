import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
// import {bindActionCreators} from 'redux';
import {getWeather} from 'redux/modules/weather';

@connect(
  (temperature) => temperature,
  dispatch => ({
    getWeather: zipCode => dispatch(getWeather(zipCode))
  })
)
export default class Weather extends Component {

  static propTypes = {
    getWeather: PropTypes.func,
    temperature: PropTypes.string
  }

  state = {
    zipCode: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.zipCode);
    console.log(this.props.getWeather);
    // this.props.getWeather(this.state.zipCode);
    // weatherActions.getWeather(this.state.zipCode);
    // const input = this.refs.username;
    // this.props.login(input.value);
    // input.value = '';
  }

  updateZipCode = (event) => {
    event.preventDefault();
    this.setState({
      zipCode: event.currentTarget.value
    });
  }

  render() {
    // const {user, logout} = this.props;
    const styles = require('../Login/Login.scss');
    return (
      <div className={styles.loginPage + ' container'}>
        <Helmet title="Weather"/>
        <h1>Get the Weather!</h1>
        <div>
          <form className="login-form form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" onChange={this.updateZipCode} value={this.state.zipCode} ref="zipcode" placeholder="Enter your zip code" className="form-control"/>
            </div>
            <button className="btn btn-success" onClick={this.handleSubmit}>{' '}Get Weather
            </button>
          </form>
        </div>
        <div>{this.props.temperature}</div>
      </div>
    );
  }
}
