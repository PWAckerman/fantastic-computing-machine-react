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

  it('should call select on mouseleave after 3 seconds', () => {
      Component.find('.skill').simulate('mouseleave');
      setTimeout(()=>{
          expect(select.count).to.equal(1);
      },3500);
  });

  it('should call select on mouseover', () => {
      Component.find('.skill').simulate('mouseover');
      expect(select.count).to.equal(1);
  });
});
