import React from "react";
import {
  render,
} from '@testing-library/react-native'
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  test("renders default elements  ", () => {
    const mock = jest.fn()
    const { getByPlaceholderText} = render(<SearchBar searchPhotos={mock} />)
    expect(getByPlaceholderText('Search Photos'))
  })
})
