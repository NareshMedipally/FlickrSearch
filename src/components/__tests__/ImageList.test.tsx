import React from "react";
import {
  render,
  fireEvent
} from  '@testing-library/react-native'
import ImageItem from "../../components/ImageItem";
import ImageList from "../../components/ImageList";

const mockData = [{
    "id":"51946307924",
    "owner":"189456781@N03",
    "secret":"23eccc4d71",
    "server":"65535",
    "farm":66,"title":"Kitten Bubs & Mark",
    "ispublic":1,
    "isfriend":0,
    "isfamily":0
}];


describe("ImageList", () => {
    test("renders Flatlist ", () => {
        const loadMorePhotos = jest.fn()
       const {getByTestId} = render(<ImageList photos={mockData} loadMorePhotos = {loadMorePhotos}/>)
       expect(getByTestId("flat-list"))
     });
   })


   describe("ImageItem", () => {
    test("renders a Image Item ", () => {
       const {getByTestId} = render(<ImageItem  photo={mockData[0]}/>)
       console.log(getByTestId("fast-image"))
       expect(getByTestId("fast-image"))
     });
   
   })
   