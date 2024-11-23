import React, { useState } from "react";
import JSONEditor from "./JSONEditor";
import FormPreview from "./FormPreview";
import { FormSchema } from "../types/schema";

const App = () => {
  const [schema, setSchema] = useState<FormSchema>({
    formTitle: "Dynamic Form",
    formDescription: "Edit the JSON to see real-time updates",
    fields: [],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="p-4 border-r bg-gray-50">
        <JSONEditor onSchemaChange={setSchema} />
      </div>
      <div className="p-4 bg-gray-100 flex items-center justify-center">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
