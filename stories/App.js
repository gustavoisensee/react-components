import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/components/App';

storiesOf('App', module)
  .add('basic app', () => (
    <App />
  )); 