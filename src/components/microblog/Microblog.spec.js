import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { MicroBlog } from './Microblog';

describe('<MicroBlog />', () => {
    let entries = [];
    let user = {};
    let dispatch = function(){
        console.log('dispatch');
    }


    it('calls componentWillMount', () => {
      const componentWillMountSpy = spy(MicroBlog.prototype, 'componentWillMount');
      const wrapper = mount(
          <MicroBlog entries={entries} user={user} dispatch={dispatch}/>
      );
      expect(MicroBlog.prototype.componentWillMount.calledOnce).to.equal(true);
      componentWillMountSpy.restore();
    });

    it('calls dispatch', () => {
      dispatch = spy();
      const wrapper = mount(
          <MicroBlog entries={entries} user={user} dispatch={dispatch}/>
      );
      expect(dispatch.calledOnce).to.equal(true);
    });
});
