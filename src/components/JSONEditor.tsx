import React, { useState } from "react";

const JSONEditor = ({ onSchemaChange }: { onSchemaChange: (schema: any) => void }) => {
  const [json, setJson] = useState<string>(`{
    "formTitle": "Dynamic Form",
    "formDescription": "Edit the JSON to see real-time updates",
    "fields": []
  }`);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJson(value);

    try {
      const parsed = JSON.parse(value);
      setError(null);
      onSchemaChange(parsed);
    } catch {
      setError("Invalid JSON");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-[70vh] p-2 border rounded bg-gray-50"
        value={json}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
