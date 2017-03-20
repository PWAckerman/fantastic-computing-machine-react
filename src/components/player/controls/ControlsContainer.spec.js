import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ControlsContainer from './ControlsContainer';

describe('<ControlsContainer />', () => {

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <ControlsContainer />
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
