import React from 'react';

import { CourseCreateHandle, CourseGetHandle, CourseUpdateHandle, CourseDeleteHandle } from '../pages/CourseView';

import { ContainerProviderTendon } from '../services/container';


function AdminCourse() {
  return (
    <div className="AdminCourse">
      <ContainerProviderTendon>
        < CourseCreateHandle />
        < CourseGetHandle />
        < CourseUpdateHandle />
        < CourseDeleteHandle />
      </ContainerProviderTendon>
    </div>
  );
}

export default AdminCourse;
