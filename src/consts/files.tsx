export const fileContents = {
	'bun.lockb': `# Bun Lockfile v1
# This file is automatically generated by Bun.
lockfileVersion: 1
dependencies:
  react: 18.2.0
  react-dom: 18.2.0
  typescript: 4.9.4
  vite: 4.0.0
  eslint: 8.0.0
  jest: 29.0.0
# Additional metadata
metadata:
  generatedAt: ${new Date().toISOString()}
  checksum: abc123def456ghi789
# End of lockfile`,
	'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
    <link rel="stylesheet" href="/src/index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>`,
	'package.json': `{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A comprehensive React application built with TypeScript and Vite.",
  "main": "index.js",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^4.9.4",
    "vite": "^4.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0"
  },
  "keywords": [
    "react",
    "typescript",
    "vite"
  ],
  "author": "Your Name",
  "license": "MIT"
}`,
	'README.md': `# My React App

This project is a comprehensive React application built with TypeScript and Vite. Its purpose is to demonstrate a complete file system structure with detailed implementations for components, hooks, services, and utilities.

## Features

- **Modern React** with hooks and context API
- **TypeScript** for type safety
- **Vite** for fast development and production builds
- Fully featured file system simulation with drag and drop support
- Modular CSS using CSS Modules

## Installation

Clone the repository and run:

\`\`\`bash
npm install
\`\`\`

Then, start the development server:

\`\`\`bash
npm start
\`\`\`

## Project Structure

- \`src/\`: All source files.
- \`src/components/\`: Reusable React components.
- \`src/hooks/\`: Custom React hooks.
- \`src/services/\`: Business logic and API services.
- \`src/utils/\`: Utility functions and helpers.

## Contributing

Fork the repository and submit pull requests. Please follow the standard Git workflow and write tests for new features.

## License

This project is licensed under the MIT License.`,

	'src/App.module.css': `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.header {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.content {
  width: 100%;
  max-width: 800px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer {
  margin-top: 40px;
  font-size: 0.8rem;
  color: #777;
}`,

	'src/App.tsx': `import React from 'react';
import styles from './App.module.css';
import Main from './Main';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Welcome to My React App
      </header>
      <main className={styles.content}>
        <Main />
      </main>
      <footer className={styles.footer}>
        © 2025 My React App. All rights reserved.
      </footer>
    </div>
  );
};

export default App;`,

	'src/assets/favicon.ico': `data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVQ4T6XTP0sDQRDH8V+NSYpI1sk7CS3mHUSvYF1AnOysbQXQSB8QXIEf4FbP5Jsg9BtY6yM7u6c/d49d3I+Pn2Z/fe85/wJJlG2YwPJZK0wgIxTAXiT1PO5XgJqY+hkROuG+S4m8hjnV8weqVzB0ZkNulmsXYX7QZxPqf5o7z2bN92EN6vsmVbBLfFNzOfYxNfJ0sDkq5gD4zuE7IKYglxC28wIjc3cMZKrBZ/jgOk9AcV0rxBN14B3TYPKnEZ5RLLbJJYAh+imXc34HIppvMd4AP5SmYvOJ5ACewV9nUB+RX8bFe7l4N8BF+NdFh0lFJRhj+n3mS9COrVb4GtC/8A1CeF7N7X1L+wAAAABJRU5ErkJggg==`,

	'src/components/Asci.tsx': `import React from 'react';

const Asci: React.FC = () => {
  return (
    <pre style={{ fontFamily: 'monospace', fontSize: '14px' }}>
{\`
  _____  _____   _____
 / ____||  __ \\ / ____|
| (___  | |__) | (___
 \\___ \\ |  ___/ \\___ \\
 ____) || |     ____) |
|_____/ |_|    |_____/
\`}
    </pre>
  );
};

export default Asci;`,

	'src/components/FileSystem/Arrow.tsx': `import React from 'react';

interface ArrowProps {
  direction: 'up' | 'down';
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10">
      {direction === 'up' ? (
        <polyline points="2,6 5,3 8,6" stroke="black" fill="none" />
      ) : (
        <polyline points="2,4 5,7 8,4" stroke="black" fill="none" />
      )}
    </svg>
  );
};

export default Arrow;`,

	'src/components/FileSystem/FileSystem.css': `.fs-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: #333;
}

.fs-node {
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.fs-node:hover {
  background-color: #eef;
}

.fs-folder {
  font-weight: bold;
}

.fs-file {
  font-style: italic;
}`,

	'src/components/FileSystem/FileSystem.tsx': `import React, { useState } from 'react';
import './FileSystem.css';
import Arrow from './Arrow';
import Node from './Node';

interface FileSystemProps {
  nodes: any[];
}

const FileSystem: React.FC<FileSystemProps> = ({ nodes }) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleNode = (path: string) => {
    setExpanded(prev => ({ ...prev, [path]: !prev[path] }));
  };

  const renderNodes = (nodes: any[]) => {
    return nodes.map((node) => (
      <div key={node.path} className="fs-node">
        {node.children && (
          <div onClick={() => toggleNode(node.path)}>
            <Arrow direction={expanded[node.path] ? 'down' : 'up'} />
          </div>
        )}
        <Node node={node} />
        {node.children && expanded[node.path] && (
          <div style={{ paddingLeft: 20 }}>
            {renderNodes(node.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="fs-container">
      {renderNodes(nodes)}
    </div>
  );
};

export default FileSystem;`,

	'src/components/FileSystem/NameInput.tsx': `import React, { useState, useEffect, useRef } from 'react';

interface NameInputProps {
  initialName: string;
  onNameChange: (newName: string) => void;
  onBlur?: () => void;
}

const NameInput: React.FC<NameInputProps> = ({ initialName, onNameChange, onBlur }) => {
  const [name, setName] = useState(initialName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onNameChange(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={name}
      onChange={handleChange}
      onBlur={onBlur}
      style={{
        padding: '4px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default NameInput;`,

	'src/components/FileSystem/Node.tsx': `import React from 'react';

interface NodeProps {
  node: {
    name: string;
    path: string;
    children?: any[];
  };
}

const Node: React.FC<NodeProps> = ({ node }) => {
  return (
    <div>
      {node.name}
    </div>
  );
};

export default Node;`,

	'src/components/ui/Button.tsx': `import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '8px 16px',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {children}
    </button>
  );
};

export default Button;`,

	'src/components/ui/Input.tsx': `import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
        width: '100%'
      }}
    />
  );
};

export default Input;`,

	'src/consts/demo.ts': `export const DEMO_CONSTANTS = {
  APP_TITLE: 'My React App',
  VERSION: '1.0.0',
  DEFAULT_THEME: 'light',
  SUPPORTED_LANGUAGES: ['en', 'es', 'fr', 'de']
};

export const DEMO_DATA = [
  { id: 1, name: 'Sample Item 1', value: 'Data 1' },
  { id: 2, name: 'Sample Item 2', value: 'Data 2' },
  { id: 3, name: 'Sample Item 3', value: 'Data 3' }
];`,

	'src/consts/storage.ts': `export const STORAGE_KEYS = {
  USER_SETTINGS: 'user_settings',
  THEME: 'app_theme',
  SESSION: 'user_session'
};

export const DEFAULT_STORAGE_VALUES = {
  [STORAGE_KEYS.USER_SETTINGS]: {
    language: 'en',
    notifications: true,
    layout: 'grid'
  },
  [STORAGE_KEYS.THEME]: 'light',
  [STORAGE_KEYS.SESSION]: null
};`,

	'src/context/FsContext.tsx': `import React, { createContext, useState, useContext } from 'react';

interface FsContextType {
  tree: any;
  setTree: React.Dispatch<React.SetStateAction<any>>;
}

const FsContext = createContext<FsContextType | undefined>(undefined);

export const FsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tree, setTree] = useState(null);

  return (
    <FsContext.Provider value={{ tree, setTree }}>
      {children}
    </FsContext.Provider>
  );
};

export const useFs = () => {
  const context = useContext(FsContext);
  if (!context) {
    throw new Error('useFs must be used within a FsProvider');
  }
  return context;
};`,

	'src/hooks/useDnd.ts': `import { useState, useRef, useEffect } from 'react';

export const useDnd = () => {
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      setDragging(true);
      dragItem.current = e.target;
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      dragOverItem.current = e.target;
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setDragging(false);
      // Process drop logic here
    };

    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  return { dragging, dragItem, dragOverItem };
};`,

	'src/hooks/useFsDnd.ts': `import { useDnd } from './useDnd';

export const useFsDnd = () => {
  const { dragging, dragItem, dragOverItem } = useDnd();

  const handleFsDrop = () => {
    // Custom logic for file system drop events
    if (dragItem.current && dragOverItem.current) {
      console.log('Dropped item', dragItem.current, 'over', dragOverItem.current);
    }
  };

  return { dragging, handleFsDrop };
};`,

	'src/hooks/useOPFS.ts': `import { useState, useEffect } from 'react';

export const useOPFS = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        // Simulate fetching files using OPFS API
        const fetchedFiles = await new Promise<any[]>(resolve =>
          setTimeout(() => resolve([{ name: 'file1.txt' }, { name: 'file2.txt' }]), 1000)
        );
        setFiles(fetchedFiles);
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return { files, loading };
};`,

	'src/index.css': `body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #fafafa;
  color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}`,

	'src/index.tsx': `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,

	'src/logo.svg': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="50" fill="#61DAFB"/>
  <text x="60" y="70" font-size="20" text-anchor="middle" fill="#fff">Logo</text>
</svg>`,

	'src/Main.tsx': `import React from 'react';
import Asci from './components/Asci';
import FileSystem from './components/FileSystem/FileSystem';
import { DEMO_DATA } from './consts/demo';

const Main: React.FC = () => {
  return (
    <div>
      <h2>Main Component</h2>
      <Asci />
      <FileSystem nodes={DEMO_DATA} />
    </div>
  );
};

export default Main;`,

	'src/service/FS.service.ts': `export class FSService {
  static readFile(path: string): Promise<string> {
    return new Promise((resolve) => {
      // Simulate reading file
      setTimeout(() => {
        resolve(\`Contents of file at \${path}\`);
      }, 500);
    });
  }

  static writeFile(path: string, content: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulate writing file
      setTimeout(() => {
        console.log(\`Written to \${path}: \${content}\`);
        resolve(true);
      }, 500);
    });
  }
}`,

	'src/service/OPFS.service.ts': `export class OPFSService {
  static async getFiles(directory: string): Promise<any[]> {
    // Simulate fetching files from OPFS
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { name: 'opfs-file1.txt', path: \`\${directory}/opfs-file1.txt\` },
          { name: 'opfs-file2.txt', path: \`\${directory}/opfs-file2.txt\` }
        ]);
      }, 800);
    });
  }
}`,

	'src/stores/icons.tsx': `import React from 'react';

export const HomeIcon: React.FC = () => (
  <svg width="16" height="16" fill="currentColor">
    <path d="M8 3l5 5v5h-3v-3H6v3H3V8z" />
  </svg>
);

export const FileIcon: React.FC = () => (
  <svg width="16" height="16" fill="currentColor">
    <path d="M4 2h8l2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
  </svg>
);`,

	'src/types/FS.types.ts': `export interface FileNode {
  name: string;
  path: string;
  isOpen?: boolean;
  children?: FileNode[];
}

export interface FSServiceInterface {
  readFile(path: string): Promise<string>;
  writeFile(path: string, content: string): Promise<boolean>;
}`,

	'src/utils/cn.ts': `export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}`,

	'src/utils/storage.ts': `export function saveToStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage(key: string): any {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}`,

	'tsconfig.json': `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}`,

	'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});`
}
