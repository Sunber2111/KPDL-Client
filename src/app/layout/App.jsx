import React, { Fragment } from "react";
import "./App.css";
import HomePage from "pages/HomePage";
import ModalContainer from "container/Modal/ModalContainer";

//Redux
import { Provider } from "react-redux";
import store from "redux/store";
import Navigation from "component/Navigation";
import PointPage from "pages/PointPage";
import StudentPage from "container/Layout/Student/StudentPage";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Navigation />
        <div className="content-app">
         <PointPage/>
        </div>
        <ModalContainer />
      </Fragment>
    </Provider>
  );
};

export default App;
