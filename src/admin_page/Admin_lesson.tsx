import React from 'react';

import { LessonCreateHandle, LessonGetHandle, LessonUpdateHandle, LessonDeleteHandle } from '../pages/LessonView';

import { ContainerProviderTendon } from '../services/container';


function AdminLesson() {
  return (
    <div className="App">
      <ContainerProviderTendon>
        < LessonCreateHandle />
        < LessonGetHandle />
        < LessonUpdateHandle />
        < LessonDeleteHandle />
      </ContainerProviderTendon>
    </div>
  );
}

export default AdminLesson;
