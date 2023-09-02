// Codes to get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Codes to Update the post
  const updateTechPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-tech-post").value.trim();
    const content = document
      .querySelector("#content-update-tech-post")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); 
      } else {
        alert("Failed to update a post."); // Displays the alert when unsuccessful.
      }
    }
  };
  
  // Codes to delete the post
  const deleteTechPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Failed to delete a post."); // Displays the alert when unsuccessful.
    }
  };
  
  // Event listeners
  const updateTechPostButton = document.querySelector("#update-tech-post");
  
  if (updateTechPostButton) {
    updateTechPostButton.addEventListener("click", updateTechPostFormHandler);
  }
  
  const deleteTechPostButton = document.querySelector("#delete-tech-post");
  
  if (deleteTechPostButton) {
    deleteTechPostButton.addEventListener("click", deleteTechPostFormHandler);
  }