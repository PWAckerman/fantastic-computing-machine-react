import 'jsdom-global/register';
import React from 'react';
import Chai, { expect } from 'chai';
import { spies } from 'chai-spies';
import { shallow } from 'enzyme';

import Skill from './Skill';

describe('<Skill />', () => {
  const skill = {
      icon: 'placeholder.jpg',
      name: 'Generic Skill',
      type: 'Library'
  };
  let closureCount = 0;

  function spy(target){
      let count = 0;
      let ret = function(){
        count++;
        ret.count = count;
        return target(...arguments)
      }
      return ret;
    }

  let select = function(){
      //my own generic spy
      closureCount++;
      return closureCount;
  }
  select = spy(select);
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <Skill skill={skill} select={select}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.skill__icon').prop("src")).to.equal("placeholder.jpg");
  });

  it('should call select on mouseenter', () => {
      Component.find('.skill').simulate('mouseenter');
      expect(select.count).to.equal(1);
      select.count = 0;
  });

  it('should call select on mouseleave', () => {
      Component.find('.skill').simulate('mouseleave');
      expect(select.count).to.equal(2);
      select.count = 0;
  });
});
