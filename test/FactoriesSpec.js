import React from 'react';
import components from '../tools/public-components';

let props = {
  ButtonInput: {value: 'button'},
  Glyphicon: {glyph: 'star'},
  Modal: {onHide() {}},
  ModalTrigger: {modal: React.DOM.div(null)},
  OverlayTrigger: {overlay: React.DOM.div(null)},
  SplitButton: { id: 'split-button-id' },
  DropdownButton: { id: 'dropdown-button-id' }
};

function createTest(component) {
  let factory = require(`../lib/factories/${component}`);
  xdescribe('factories', function () {
    it(`Should have a ${component} factory`, function () {
      assert.ok(React.isValidElement(factory(props[component])));
    });
  });
}

components.map(component => createTest(component));
