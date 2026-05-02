// filterNode.js — Filters data based on a condition

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'contains');
  const [value, setValue] = useState(data?.value || '');

  return (
    <BaseNode
      id={id}
      title="Filter"
      handles={[
        { type: 'target', id: 'input' },
        { type: 'source', id: 'passed' },
        { type: 'source', id: 'failed' },
      ]}
    >
      <label>
        Condition:
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="startsWith">Starts With</option>
          <option value="regex">Regex Match</option>
        </select>
      </label>
      <label>
        Value:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
    </BaseNode>
  );
};
