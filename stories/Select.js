import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../src/components/Select';

const options = [
  { value: 1, text: 'Option 1' },
  { value: 2, text: 'Option 2' },
  { value: 3, text: 'Option 3' }
]

storiesOf('Select', module)
  .add('Basic select', () => (
    <Select
      options={options}  
    />
  ));