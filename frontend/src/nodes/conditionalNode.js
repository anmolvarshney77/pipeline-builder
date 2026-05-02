// conditionalNode.js — Routes data based on a boolean condition

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [field, setField] = useState(data?.field || '');
  const [operator, setOperator] = useState(data?.operator || '==');

  return (
    <BaseNode
      id={id}
      title="Conditional"
      handles={[
        { type: 'target', id: 'input' },
        { type: 'source', id: 'true' },
        { type: 'source', id: 'false' },
      ]}
    >
      <label>
        Field:
        <input type="text" value={field} onChange={(e) => setField(e.target.value)} placeholder="field_name" />
      </label>
      <label>
        Operator:
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="==">==</option>
          <option value="!=">!=</option>
          <option value=">">&gt;</option>
          <option value="<">&lt;</option>
          <option value="contains">contains</option>
        </select>
      </label>
    </BaseNode>
  );
};
