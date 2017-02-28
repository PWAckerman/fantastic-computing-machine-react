import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Entry from './Entry';

describe('<Entry />', () => {
  const avatar = "avatar.jpg";
  const entry = {
      date: "Date",
      text: "ipsum",
      tags: ["tag1","tag2"]
  }
  let Component;

  beforeEach(()=>{
      Component = shallow(
              <Entry avatar={avatar} entry={entry}/>
          )
  });

  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.entry-list-item__avatar').prop("src")).to.equal('avatar.jpg');
      expect(Component.find('.entry-list-item__date').text()).to.equal('Date');
      expect(Component.find('.entry-list-item__text').text()).to.equal('ipsum');
  });

});
