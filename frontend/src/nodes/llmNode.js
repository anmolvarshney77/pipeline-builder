// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { type: 'target', id: 'system' },
        { type: 'target', id: 'prompt' },
        { type: 'source', id: 'response' },
      ]}
    >
      <span className="base-node-info">This is a LLM.</span>
    </BaseNode>
  );
};
