import "react-native";
import React from "react";
import Home from "../Home";
import sinon from "sinon";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const tree = shallow(<Home />);
  const component = tree.instance();

  sinon.spy(component, "goBack");
  expect(component.goBack.calledOnce).toBe(false);
  component.goBack();
  expect(component.goBack.calledOnce).toBe(true);
});
