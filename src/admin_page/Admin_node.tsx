import React from 'react';
import NodePage from './admin_node_page';

import { NodeCreateHandle, NodeGetHandle, NodeUpdateHandle, NodeDeleteHandle } from '../pages/NodeView';
import { ContainerProviderTendon } from '../services/container';


function AdminNode() {
  return (
    <div className="App">
      <NodePage method="CREATE" />
      <NodePage method="GET" />
      <NodePage method="UPDATE" />
      <NodePage method="DELETE" />
      {/* <ContainerProviderTendon>
        < NodeCreateHandle />
        < NodeGetHandle />
        < NodeUpdateHandle />
        < NodeDeleteHandle />
      </ContainerProviderTendon> */}
    </div>
  );
}

export default AdminNode;
