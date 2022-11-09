import { render, screen } from '@testing-library/react';
import React from 'react';
import Calculator from '../Calculator';

describe('Test for Calculator', () => {
  test('should render Calculator ', () => {
    render(<Calculator />);
    expect(screen).toMatchSnapshot();
  });
});