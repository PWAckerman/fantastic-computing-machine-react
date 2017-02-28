import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tag from './Tag';

describe('<Tag />', () => {
  const tag = "#topic";
  let Component;

  beforeEach(()=>{
      Component = shallow(
              <Tag tag={tag}/>
          )
  });

  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.tag').text()).to.equal('#topic');
  });

});
