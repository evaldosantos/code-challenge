import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { actions } from '../store/actions'

class RootComponent extends PureComponent {
  componentDidMount() {
    const { startPolling } = this.props;
    startPolling();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  startPolling: actions.startPolling
}


export default connect(undefined, mapDispatchToProps)(RootComponent);
