// mergeNode.js — Merges multiple inputs into one output

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [separator, setSeparator] = useState(data?.separator || '\\n');

  return (
    <BaseNode
      id={id}
      title="Merge"
      handles={[
        { type: 'target', id: 'input_a' },
        { type: 'target', id: 'input_b' },
        { type: 'source', id: 'merged' },
      ]}
    >
      <label>
        Separator:
        <input type="text" value={separator} onChange={(e) => setSeparator(e.target.value)} />
      </label>
    </BaseNode>
  );
};
