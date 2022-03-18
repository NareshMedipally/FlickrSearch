import React from "react";
import {
  render,
  waitForElement,
  fireEvent
} from "react-native-testing-library";


import ImageList from "../../components/ImageList";


describe("HomeScreen", () => {

 test("renders a loading component initially", () => {
    const {getByTestId} = render(<Home />)
    expect(getByTestId("header"));
  });

})