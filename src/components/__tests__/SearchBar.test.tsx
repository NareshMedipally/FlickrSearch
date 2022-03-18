import React from "react";
import {
  render,
  fireEvent
} from  '@testing-library/react-native'
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
    test("renders  ", () => {
        const mock = jest.fn()
        const {getByPlaceholderText} = render(<SearchBar searchPhotos={mock}/>)
        console.log(getByPlaceholderText('Search Photos'))
        fireEvent.changeText(getByPlaceholderText('Search Photos'), 'test') 
     });
   })

   