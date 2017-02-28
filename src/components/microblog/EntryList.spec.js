import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import EntryList from './EntryList';

describe('<EntryList />', () => {
  const avatar = "avatar.jpg";
  const entryList = [{
      _id: "fake-id",
      date: "Date",
      text: "ipsum",
      tags: ["tag1","tag2"]
  }]
  let Component;

  beforeEach(()=>{
      Component = shallow(
              <EntryList entryList={entryList} avatar={avatar}/>
          )
  });

  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
  
});
