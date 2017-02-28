import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TechList from './TechList';

describe('<TechList />', () => {
  const techs = [{_id: 'fake-id', icon:"placeholder.jpg"}];
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <TechList techs={techs}/>
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
