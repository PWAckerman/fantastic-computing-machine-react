import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { EmailForm } from './EmailForm';

describe('<EmailForm />', () => {
  it('calls render', () => {
    const renderSpy = spy(EmailForm.prototype, 'render')
    const wrapper = mount(
        <EmailForm />
    );
    expect(EmailForm.prototype.render.calledOnce).to.equal(true);
    renderSpy.restore();
  });
});
