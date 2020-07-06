import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Route } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export const HomeTemplate = (props) => (
  <Route
    path={props.path}
    {...props.exact}
    render={(propsComponent) => (
      <HomeLayout>
        <props.component {...propsComponent} />
      </HomeLayout>
    )}
  />
);
