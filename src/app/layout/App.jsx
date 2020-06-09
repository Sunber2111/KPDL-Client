import React, { Fragment } from "react";
import "./App.css";
import HomePage from "../../Component/Layout/HomePage";
import ModalContainer from "../../Container/Modal/ModalContainer";

//Redux
import { Provider } from "react-redux";
import store from "../../Redux/store";
import Navigation from "../../Component/Navigation";
import PointPage from "../../Component/Layout/PointPage";
import StudentPage from "../../Container/Layout/Student/StudentPage";
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
