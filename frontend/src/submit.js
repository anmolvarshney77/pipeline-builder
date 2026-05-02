// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
      try {
        const response = await fetch('http://localhost:8000/pipelines/parse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nodes: nodes.map((n) => ({ id: n.id, type: n.type, data: n.data })),
            edges: edges.map((e) => ({ source: e.source, target: e.target })),
          }),
        });
        const data = await response.json();
        alert(
          `Pipeline Analysis\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
        );
      } catch (err) {
        alert('Error connecting to backend. Make sure the server is running.');
      }
    };

    return (
        <div className="submit-wrapper">
            <button className="submit-btn" type="button" onClick={handleSubmit}>
              Submit Pipeline
            </button>
        </div>
    );
};
