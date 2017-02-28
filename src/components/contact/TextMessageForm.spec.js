import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { TextMessageForm } from './TextMessageForm';

describe('<TextMessageForm />', () => {
  it('calls render', () => {
    const renderSpy = spy(TextMessageForm.prototype, 'render')
    const wrapper = mount(
        <TextMessageForm/>
    );
    expect(TextMessageForm.prototype.render.calledOnce).to.equal(true);
    renderSpy.restore();
  });
});
