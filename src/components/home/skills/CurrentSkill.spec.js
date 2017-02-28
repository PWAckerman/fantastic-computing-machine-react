import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CurrentSkill from './CurrentSkill';

describe('<CurrentSkill />', () => {
  const currentSkill = {
      icon: 'placeholder.jpg',
      name: 'Generic Skill',
      type: 'Library'
  };

  const visibilityFilter = 'SKILL_VISIBLE'

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <CurrentSkill currentSkill={currentSkill} visibilityFilter={visibilityFilter}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.current-skill__type').text()).to.equal("Library")
      expect(Component.find('.current-skill__icon').prop("src")).to.equal("placeholder.jpg")
      expect(Component.find('.current-skill__name').text()).to.equal("Generic Skill");
      expect(Component.find('.SKILL_VISIBLE').length).to.equal(1);
  });
});
