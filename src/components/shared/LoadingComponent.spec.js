import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LoadingComponent from './LoadingComponent';

describe('<LoadingComponent />', () => {
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <LoadingComponent />
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
