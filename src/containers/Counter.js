import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {sub, less} from "../actions/demo";

const mapStateToProps = ({demo}) => ({
  demo,
});

const mapDispatchToProps = dispatch => {
  return {
    sub: payload => dispatch(sub(payload)),
    less: payload => dispatch(less(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
