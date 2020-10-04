import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Route } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <footer
        style={{ background: "#222", height: 300, width: "100%" }}
      ></footer>
    </Fragment>
  );
};

export const HomeTemplate = (props) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
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
};
