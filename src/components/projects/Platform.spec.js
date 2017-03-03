import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Platform from './Platform';

describe('<Platform />', () => {
  const platform = {_id: 'fake-id', icon:"test-icon"};
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <Platform platform={platform}/>
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
