import React from 'react';
import PropTypes from 'prop-types';
import NotificationManager from './NotificationManager';
import Notifications from './Notifications';

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
    NotificationManager.addChangeListener(this.handleStoreChange);
    this.state = {
      notifications: []
    };
  }

  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  handleStoreChange = notifications => {
    this.setState({
      notifications
    });
  };

  handleRequestHide = notification => {
    NotificationManager.remove(notification);
  };

  render() {
    const { notifications } = this.state;
    const { enterTimeout, leaveTimeout } = this.props;
    return (
      <Notifications
        enterTimeout={enterTimeout}
        leaveTimeout={leaveTimeout}
        notifications={notifications}
        onRequestHide={this.handleRequestHide}
      />
    );
  }
}

NotificationContainer.propTypes = {
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number
};

NotificationContainer.defaultProps = {
  enterTimeout: 400,
  leaveTimeout: 400
};

export default NotificationContainer;
