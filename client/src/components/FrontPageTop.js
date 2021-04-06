import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendData, getData } from '../actions/dashboardAction';
import '../App.css';

class FrontPageTop extends Component {
  constructor(props) {
    super();
    this.state = {
      post: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    this.props.getData('/api/hello');
  };

  handleSubmit = () => {
    this.props.sendData('/api/data', { post: this.state.post });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h3>Welcome to my page!</h3>
        </header>
        <p>{this.props.getDataFromBackend.express}</p>
        <div>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <p style={{ color: 'blue' }}>
          <b>{this.props.dataFromBackend.data}</b>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataFromBackend: state.dashboardReducer.dataFromBackend,
    getDataFromBackend: state.dashboardReducer.getDataFromBackend,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendData,
      getData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageTop);
