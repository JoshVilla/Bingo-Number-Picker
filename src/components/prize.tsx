import React, { useState } from "react";

const Prize = () => {
  const [editMode, setEditMode] = useState(false);
  const [prize, setPrize] = useState(100);
  return (
    <div className="flex items-center gap-6 px-6 w-full">
      <div className="text-2xl font-semibold">Prize</div>
      {editMode ? (
        <input
          type="text"
          className="border border-gray-300 p-1 rounded-lg w-full"
          value={prize}
          onChange={(e) => {
            const value = e.currentTarget.value;
            if (/^\d*$/.test(value)) {
              setPrize(parseInt(value || "0"));
            }
          }}
        />
      ) : (
        <div className="w-full text-3xl font-bold">{prize}</div>
      )}

      <div
        className="text-blue-500 hover:underline cursor-pointer"
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? "Save" : "Edit"}
      </div>
    </div>
  );
};

export default Prize;
