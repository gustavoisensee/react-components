import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Basic input', () => (
    <Input
      placeholder='Type your name'
    />
  ));