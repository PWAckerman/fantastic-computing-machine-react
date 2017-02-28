import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PlatformList from './PlatformList';

describe('<PlatformList />', () => {
  const platforms = [{_id: 'fake-id', icon:"placeholder.jpg"}];
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <PlatformList platformList={platforms}/>
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
