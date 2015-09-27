import uuid from 'node-uuid';
import Controller from 'cerebral';
import Model from 'cerebral-baobab';

// TODO: load the initial state of the app from localStorage here
const model = Model({
  lanes: [],
  notes: []
});

model.tree.on('update', (e) => {
  // TODO: write the new state to localStorage
  console.log('tree updated', e);
});

const controller = Controller(model);

controller.signal('laneCreated', (lane) => {
  lane.id = uuid.v4();
  lane.notes = lane.notes || [];

  model.tree.select('lanes').push(lane);
});

export default controller;
