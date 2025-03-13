export default async function uploadMedia(file) {
  if (!file) {
    console.error("No file selected!");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "formImage"); // Replace with your Cloudinary Upload Preset

  try {
    const response = await fetch("https://api.cloudinary.com/v1_1/di0itwkur/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.secure_url; // The URL of the uploaded image
  } catch (error) {
    console.error("Upload failed:", error);
    return null;
  }
}
