import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../src/components/Header';

let component : any;

describe("<Header />", () => {

  beforeEach(() => {
    component = render(<Header />);
  });

  it("Render Component Header", () => {
    expect(component).toBeDefined();
    // Test case if exists <Text />
    expect(component.getByTestId("text-country-directory")).toBeDefined();
  });

});
