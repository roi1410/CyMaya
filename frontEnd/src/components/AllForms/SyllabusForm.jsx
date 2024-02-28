import React from "react";
import { useFieldArray } from "react-hook-form";
import AppendFields from "../UI/AppendFields";

function SyllabusForm({ register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "syllabus",
  });

  return (
    <>
      <AppendFields append={append} />

      <div className="  max-h-full ">
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
          haw mach time the titled went?
        </label>
        <input
          defaultValue={"period"}
          className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
          {...register("dsg")}
        />
      </div>
    </>
  );
}

export default SyllabusForm;
