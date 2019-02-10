import { configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';

const loadStories = () => {
  require('../stories/App.js');
  require('../stories/Button.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
})
