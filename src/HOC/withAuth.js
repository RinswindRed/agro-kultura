import React from 'react';

const withAuth = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      const isLoged = true;
      return (
        <WrappedComponent
            isLoged={isLoged}
          {...this.props}
        />
      );
    }
  }
  return HOC; 
}

export default withAuth;