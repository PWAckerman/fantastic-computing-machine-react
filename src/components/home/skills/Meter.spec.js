import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Meter from './Meter';

describe('<Meter />', () => {
  let Component;
  let percentage = 90;
  beforeEach(()=>{
      Component = shallow(
              <Meter percentage={percentage} />
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
