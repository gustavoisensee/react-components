import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/Input';

storiesOf('Input', module)
  .add('Basic input', () => (
    <Input
      placeholder='Type your name'
    />
  ));