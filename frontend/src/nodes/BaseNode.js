// BaseNode.js
// A reusable abstraction for creating pipeline nodes.
// Handles layout, handles, title, and styling so individual nodes only define their config.

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, handles = [], children, style = {} }) => {
  const inputHandles = handles.filter((h) => h.type === 'target');
  const outputHandles = handles.filter((h) => h.type === 'source');

  const getHandlePosition = (index, total) => {
    if (total === 1) return '50%';
    return `${((index + 1) / (total + 1)) * 100}%`;
  };

  return (
    <div className="base-node" style={style}>
      <div className="base-node-header">
        <span className="base-node-title">{title}</span>
      </div>
      <div className="base-node-body">
        {children}
      </div>
      {inputHandles.map((h, i) => (
        <Handle
          key={h.id}
          type="target"
          position={Position.Left}
          id={`${id}-${h.id}`}
          style={{ top: getHandlePosition(i, inputHandles.length) }}
          className="base-handle base-handle-target"
        />
      ))}
      {outputHandles.map((h, i) => (
        <Handle
          key={h.id}
          type="source"
          position={Position.Right}
          id={`${id}-${h.id}`}
          style={{ top: getHandlePosition(i, outputHandles.length) }}
          className="base-handle base-handle-source"
        />
      ))}
    </div>
  );
};
