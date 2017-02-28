import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Line from './Line';

describe('<Line />', () => {
  const description = ['Studied','Very','Hard'];

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <Line line={description[0]}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.line').text()).to.equal('Studied');
  });
});
