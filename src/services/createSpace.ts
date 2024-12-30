const handleDownload = (fileUrl:string, fileName:string) => {
    // Fetch the file from the URL
    fetch(fileUrl, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${response.statusText}`);
        }
        return response.blob(); // Convert response to blob
      })
      .then((blob) => {
        // Create a temporary URL for the file
        const url = window.URL.createObjectURL(blob);
        // Create a temporary anchor element
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = fileName; // Set the file name
        document.body.appendChild(anchor); // Append anchor to body
        anchor.click(); // Trigger download
        document.body.removeChild(anchor); // Remove anchor from body
        // Revoke the temporary URL to free memory
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Download failed:", error);
      });
  };
  
export default handleDownload