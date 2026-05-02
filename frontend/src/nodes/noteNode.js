// noteNode.js — A sticky note for pipeline documentation (no handles)

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode
      id={id}
      title="Note"
      handles={[]}
    >
      <label>
        <textarea
          className="text-node-textarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note..."
          rows={2}
        />
      </label>
    </BaseNode>
  );
};
