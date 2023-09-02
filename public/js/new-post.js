const newTechPostFormHandler = async (event) => {
    event.preventDefault();
    console.log ("submitted");
    const title = document.querySelector('#title-new-tech-blog-post').value.trim();
    const content = document.querySelector('#content-new-tech-blog-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('Failed to create a new post.'); // Validation message
      }
    }
  };
  
  // Event listeners
  const newTechPostFormButton = document.querySelector('#submit-button');
  if (newTechPostFormButton) {
    newTechPostFormButton.addEventListener('click', newTechPostFormHandler);
  }