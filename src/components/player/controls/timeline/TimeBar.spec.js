import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TimeBar from './TimeBar';

describe('<TimeBar />', () => {
  let percent = .5;
  let segments = [];

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <TimeBar segments={segments} percent={percent}/>
          )
  });

  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
