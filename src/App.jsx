import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

function App() {
  return (
    <SandpackProvider template="react">
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default App
