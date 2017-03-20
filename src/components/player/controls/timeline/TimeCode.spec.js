import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TimeCode from './TimeCode';

describe('<TimeCode />', () => {
  let current = 10;
  let duration = 20;

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <TimeCode current={current} duration={duration}/>
          )
  });

  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
