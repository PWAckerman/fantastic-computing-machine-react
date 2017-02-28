import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tech from './Tech';

describe('<Tech />', () => {
  const tech = {_id: 'fake-id', icon:"placeholder.jpg"};
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <Tech tech={tech}/>
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.tech__icon').prop('src')).to.equal('placeholder.jpg');
  });
});
