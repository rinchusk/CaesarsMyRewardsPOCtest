import Banner from './Banner';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
 
});

class MyRewards extends React.Component {
  componentWillMount() {
    
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="myrewards-page">

       <Banner token={this.props.token} appName={this.props.appName} />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRewards);
