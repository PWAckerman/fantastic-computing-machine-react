import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import VideoModal from './VideoModal';

describe('<VideoModal />', () => {
  let Component;
  let dispatch = function(){
      console.log('dispatch');
  }

  beforeEach(()=>{
      Component = shallow(
              <VideoModal dispatch={dispatch} />
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
