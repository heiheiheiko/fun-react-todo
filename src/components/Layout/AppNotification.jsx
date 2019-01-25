import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { hideAppNotification } from "../../redux/actions";

class AppNotification extends React.Component {
  render() {
    return (
      <Notification 
        content={this.props.content} 
        isActive={this.props.isActive}
        onClose={() => this.props.hideAppNotification()} 
      />
    );
  }
}

AppNotification.propTypes = {
  content: PropTypes.string,
  isActive: PropTypes.bool,
  hideAppNotification: PropTypes.func,
};

const mapState = state => ({ 
  isActive: state.AppNotificationIsActive,
  content:  state.AppNotificationContent,
});
const mapDispatch = dispatch => ({
  hideAppNotification: () => dispatch(hideAppNotification()) 
});
const ConnectedComponent = connect(mapState, mapDispatch)(AppNotification);
export default ConnectedComponent;
