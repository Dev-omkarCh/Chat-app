import React, { useState } from 'react';
import { LuClipboard, LuClipboardCheck } from 'react-icons/lu';

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center px-2 py-2 text-white rounded-lg shadow-md transition duration-300 ease-in-out ${
        copied ? 'bg-green-600' : 'bg-orange-600 hover:bg-orange-700'
      }`}
    >
      {copied ? <LuClipboardCheck className="" /> : <LuClipboard className="" />}
    </button>
  );
};

export default CopyButton;
