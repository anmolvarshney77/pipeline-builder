// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-title">Pipeline Builder</div>
            <div className="toolbar-nodes">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='merge' label='Merge' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='conditional' label='If/Else' />
                <DraggableNode type='note' label='Note' />
            </div>
        </div>
    );
};
