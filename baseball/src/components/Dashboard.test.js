import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
      it('should render without errors', () => {
            render(<Dashboard />)
      });
});