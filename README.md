# VectorShift Frontend Technical Assessment

This repo contains:

- `frontend/`: React (Create React App) pipeline builder UI (ReactFlow + Zustand)
- `backend/`: FastAPI endpoint to parse a pipeline and report `{ num_nodes, num_edges, is_dag }`

## Prerequisites

- Node.js + npm (Node 18+ recommended)
- Python 3 (system python is fine)

## Local setup

### 1) Backend (FastAPI)

From the repo root:

```bash
cd backend
python3 -m venv .venv
./.venv/bin/pip install -U pip
./.venv/bin/pip install fastapi "uvicorn[standard]" pydantic
./.venv/bin/python -m uvicorn main:app --reload --port 8000
```

Backend will run at `http://127.0.0.1:8000`.

Notes:

- The included `backend/venv/` may be tied to a local machine path (e.g. `pyenv`) and can be broken on other machines. The commands above create a fresh, portable `.venv/`.
- CORS is configured to allow the CRA dev server origin (`http://localhost:3000`).

### 2) Frontend (React)

From the repo root:

```bash
cd frontend
npm i
npm start
```

Frontend will run at `http://localhost:3000`.

If `npm start`/`npm run build` fails with an `/usr/bin/env: bad interpreter: Operation not permitted` error (sometimes occurs in locked-down environments), you can run react-scripts directly:

```bash
cd frontend
node ./node_modules/react-scripts/bin/react-scripts.js start
```

## How to use

1. Start backend (`uvicorn ... --port 8000`).
2. Start frontend (`npm start`).
3. Drag nodes from the toolbar onto the canvas.
4. Connect nodes by dragging from an output handle (right) to an input handle (left).
5. Click **Submit Pipeline** to POST the current nodes/edges to the backend.
6. An alert displays:
   - **Nodes**: count of nodes in the pipeline
   - **Edges**: count of edges in the pipeline
   - **Is DAG**: whether the graph is acyclic

## Feature notes (assessment mapping)

- **Node abstraction**: `frontend/src/nodes/BaseNode.js` provides shared layout + handle rendering; nodes pass `title`, `handles`, and body content.
- **5 additional nodes**: `api`, `filter`, `merge`, `conditional`, `note` in `frontend/src/nodes/`.
- **Text node enhancements**:
  - Auto-resizing textarea as you type
  - `{{ variableName }}` creates dynamic input handles on the left
- **Backend integration**:
  - Frontend: `frontend/src/submit.js`
  - Backend: `backend/main.py` (`/pipelines/parse`)

## Quick API check

With backend running:

```bash
curl -s -X POST http://127.0.0.1:8000/pipelines/parse \
  -H 'Content-Type: application/json' \
  -d '{"nodes":[{"id":"a","type":"text","data":{}},{"id":"b","type":"text","data":{}}],"edges":[{"source":"a","target":"b"}]}'
```

