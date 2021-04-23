import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

function PrivateRoute({auth, children, ...rest }) {
  return (
    <Route
    {...rest}
    render={({ location }) =>
      auth.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
