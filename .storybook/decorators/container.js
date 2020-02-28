import React from 'react';

const ContainerDecorator = storyFn => <div className='sb-root-container'>{storyFn()}</div>;

export default ContainerDecorator;
