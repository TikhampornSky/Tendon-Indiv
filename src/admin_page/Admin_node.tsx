import React from 'react';

import { NodeCreateHandle, NodeGetHandle, NodeUpdateHandle, NodeDeleteHandle } from '../pages/NodeView';

import { ContainerProviderTendon } from '../services/container';


function AdminNode() {
  return (
    <div className="App">
      <ContainerProviderTendon>
        < NodeCreateHandle />
        < NodeGetHandle />
        < NodeUpdateHandle />
        < NodeDeleteHandle />
      </ContainerProviderTendon>
    </div>
  );
}

export default AdminNode;
