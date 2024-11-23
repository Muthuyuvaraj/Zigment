import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormSchema } from "../types/schema";

const FormPreview = ({ schema }: { schema: FormSchema }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-400 shadow-xl rounded-lg p-8 w-full max-w-lg"
    >
      <h1 className="text-2xl font-bold text-center">{schema.formTitle}</h1>
      <p className="text-gray-600 text-center">{schema.formDescription}</p>

      {schema.fields.map((field) => (
        <div key={field.id} className="space-y-1">
          <label className="block font-medium">{field.label}:</label>
          <Controller
            name={field.id}
            control={control}
            rules={{
              required: field.required ? "This field is required" : undefined,
              ...(field.validation?.pattern && {
                pattern: {
                  value: new RegExp(field.validation.pattern),
                  message: field.validation.message || "Invalid format",
                },
              }),
            }}
            render={({ field: hookField, fieldState }) => {
              switch (field.type) {
                case "text":
                case "email":
                  return (
                    <>
                      <input
                        {...hookField}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded"
                      />
                      {fieldState.error && (
                        <span className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </span>
                      )}
                    </>
                  );
                case "select":
                  return (
                    <>
                      <select
                        {...hookField}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {fieldState.error && (
                        <span className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </span>
                      )}
                    </>
                  );
                case "radio":
                  return (
                    <>
                      {field.options?.map((option) => (
                        <label key={option.value} className="block">
                          <input
                            {...hookField}
                            type="radio"
                            value={option.value}
                            className="mr-2"
                            checked={hookField.value === option.value}
                          />
                          {option.label}
                        </label>
                      ))}
                      {fieldState.error && (
                        <span className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </span>
                      )}
                    </>
                  );
                case "textarea":
                  return (
                    <>
                      <textarea
                        {...hookField}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded"
                      />
                      {fieldState.error && (
                        <span className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </span>
                      )}
                    </>
                  );
                default:
                  return <span className="text-red-500">Unsupported field</span>;
              }
            }}
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-500 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
