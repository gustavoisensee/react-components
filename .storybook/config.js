import { configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';

const loadStories = () => {
  require('../stories/Button.js');
  require('../stories/Select.js');
  require('../stories/Input.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
})
