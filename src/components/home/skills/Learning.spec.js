import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Learning from './Learning';

describe('<Learning />', () => {
  let Component;
  let learning = {
      _id:"56bd311dd4c6ff1d3a14ddd5",
      progress:"50",
      skill: {
        _id:"56bd30b0d4c6ff1d3a14ddd1",
        icon:"https://avatars0.githubusercontent.com/u/8770005?v=3&s=400",
        name:"Mocha",
        type:"JS Testing Framework"
    }
  }

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
  beforeEach(()=>{
      Component = shallow(
              <Learning learning={learning} select={select}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
