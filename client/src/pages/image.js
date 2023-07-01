import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {selectedImage ? (
        <div>
          <img src={selectedImage} alt="Selected" width="200" height="200" />
          <Button onClick={handleRemoveImage}>Remove Image</Button>
        </div>
      ) : (
        <div>
          <Input
            accept="image/*"
            id="image-upload"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <Button component="span">
              Upload Image
            </Button>
          </label>
        </div>
      )}
    </div>
  );
}
