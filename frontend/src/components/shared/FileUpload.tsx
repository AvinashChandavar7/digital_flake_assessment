import React, { useState, ChangeEvent } from 'react';

const FileUpload: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="relative mt-5 border rounded-md max-w-[500px] w-full p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col items-center">
        <img
          src={preview || "/assets/avatar.svg"}
          alt="Preview"
          className="h-auto max-w-full mb-2 rounded-md"
        />
        <p className="text-sm text-gray-500">Update Image</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/assets/fileUpload.svg" alt="file upload" className="h-auto max-w-full mb-2" />
          <p className="text-sm text-gray-500">Upload Image</p>
          <p className="text-xs text-gray-400">Maximum allowed file size is 10MB</p>
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUpload;
