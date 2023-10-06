import React from "react";

type FooterProps = {
  onSubmit: () => void;
  onCancel: () => void;
  onReset: () => void;
};

const Footer = ({ onCancel, onSubmit, onReset }: FooterProps) => {
  return (
    <div className="w-full flex justify-between items-center gap-x-2">
      <button
        className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
        onClick={onReset}
      >
        Reset
      </button>
      <div className="flex gap-x-2 items-center">
        <button
          className="p-2 bg-red-400 text-white rounded-lg hover:bg-red-600"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="p-2 bg-green-400 text-white rounded-lg hover:bg-green-600"
          onClick={onSubmit}
        >
          Pick
        </button>
      </div>
    </div>
  );
};

export default Footer;
