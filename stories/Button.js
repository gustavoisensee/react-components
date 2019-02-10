import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('Basic button', () => (
    <div>
      <Button text='Default button' />
      <Button
        text='Primary button'
        className='Button Button_primary'
      />
    </div>
  ))
  .add('Event click', () => (
    <Button
      text='Button click'
      className='Button Button_primary'
      onClick={action('button-click')}  
    />
  ));