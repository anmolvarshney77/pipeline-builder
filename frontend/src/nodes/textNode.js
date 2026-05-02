// textNode.js

import { useState, useMemo, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // Parse variables from text
  const variables = useMemo(() => {
    const vars = [];
    const seen = new Set();
    let match;
    const regex = new RegExp(VARIABLE_REGEX);
    while ((match = regex.exec(currText)) !== null) {
      if (!seen.has(match[1])) {
        seen.add(match[1]);
        vars.push(match[1]);
      }
    }
    return vars;
  }, [currText]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }, [currText]);

  const minWidth = 260;
  const minHeight = variables.length > 0 ? 120 : 100;
  const dynamicWidth = Math.max(minWidth, Math.min(currText.length * 3 + 260, 500));

  return (
    <BaseNode
      id={id}
      title="Text"
      style={{ minWidth: dynamicWidth, minHeight }}
      handles={[
        ...variables.map((varName) => ({ type: 'target', id: varName })),
        { type: 'source', id: 'output' },
      ]}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          className="text-node-textarea"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
        />
      </label>
    </BaseNode>
  );
};
