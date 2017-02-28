import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SkillsContainer from './SkillsContainer';

describe('<SkillsContainer />', () => {
  const skills = [{
      icon: 'placeholder.jpg',
      name: 'Generic Skill',
      type: 'Library'
  }];

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <SkillsContainer skills={skills}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
