import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProjectContainer from './ProjectContainer';

describe('<ProjectContainer />', () => {
  const project = {
      screenshot: './project.placeholder.jpg',
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
      expect(Component.find('.description-block__title').text()).to.equal('Test Project<PlatformList />');
      expect(Component.find('.description-block__description').text()).to.equal('A project');
  });
  it('should tranform the source path of the screenshot', ()=>{
      expect(Component.find('.screenshot-block__screenshot').prop('src')).to.equal('./assets/project.placeholder.jpg');
  })
});
