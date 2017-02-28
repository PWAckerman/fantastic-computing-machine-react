import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProjectContainer from './ProjectContainer';

describe('<ProjectContainer />', () => {
  const project = {
      screenshot: 'project.placeholder.jpg',
      title: 'Test Project',
      description: 'A project',
      technologies: [],
      platforms: []
  }
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <ProjectContainer project={project}/>
          )
  });
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.project__screenshot').prop('src')).to.equal('project.placeholder.jpg');
      expect(Component.find('.project__title').text()).to.equal('Test Project');
      expect(Component.find('.project__description').text()).to.equal('A project');
  });
});
