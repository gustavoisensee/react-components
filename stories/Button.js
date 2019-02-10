import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('Basic button', () => (
    <Button text='Text' />
  ))
  .add('Primary button with click', () => (
    <Button
      text='Button click'
      className='Button Button_primary'
      onClick={action('button-click')}  
    />
  )); 