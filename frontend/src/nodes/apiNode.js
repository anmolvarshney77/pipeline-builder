// apiNode.js — Makes an HTTP API call

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || '');

  return (
    <BaseNode
      id={id}
      title="API Call"
      handles={[
        { type: 'target', id: 'body' },
        { type: 'source', id: 'response' },
      ]}
    >
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      <label>
        URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
      </label>
    </BaseNode>
  );
};
