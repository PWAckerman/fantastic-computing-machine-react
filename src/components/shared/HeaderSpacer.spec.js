import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HeaderSpacer from './HeaderSpacer';

describe('<HeaderSpacer />', () => {
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <HeaderSpacer />
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
