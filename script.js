
    document.getElementById('commentForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const response = await fetch('/submitComment', {
    method: 'POST',
    body: formData
  });
  
  if (response.ok) {
    alert('Comment submitted successfully!');
  } else {
    alert('Error submitting comment. Please try again later.');
  }
});
const shareButton = document.getElementById('shareButton');

shareButton.addEventListener('click', function() {
    // Check if the Web Share API is supported
    if (navigator.share) {
        // If supported, call the share method
        navigator.share({
            title: 'Kenny Rey Portfolio',
            text: 'Check out Kenny Rey\'s portfolio!',
            url: window.location.href
        })
        .then(() => console.log('Shared successfully'))
        .catch(error => console.error('Error sharing:', error));
    } else {
        // If not supported, provide a fallback option (e.g., a prompt)
        alert('Web Share API is not supported in this browser.');
    }
});
const likeButton = document.getElementById('likeButton');
  let likesCount = 0; // Initialize the likes count

  likeButton.addEventListener('click', function() {
      // Increment the likes count
      likesCount++;
      
      // Update the UI to reflect the new likes count
      likeButton.innerHTML = `<i class="fa fa-thumbs-up"></i> Liked (${likesCount})`;
  });
  function addCommentOption(comment) {
      const commentsDropdown = document.getElementById('commentsDropdown');
      const option = document.createElement('option');
      option.textContent = comment;
      commentsDropdown.appendChild(option);
    }

    // Comment button functionality
    const commentButton = document.getElementById('commentButton');

    commentButton.addEventListener('click', function() {
        // Prompt the user to input their comment
        const comment = prompt('Enter your comment:');
        
        // Check if the user entered a comment
        if (comment !== null && comment.trim() !== '') {
            // Add the comment as an option in the dropdown menu
            addCommentOption(comment);
        } else {
            // If the user cancels or leaves the comment empty
            alert('No comment submitted.');
        }
    });

    // Function to handle comment selection
    function handleCommentSelection() {
      const commentsDropdown = document.getElementById('commentsDropdown');
      const selectedComment = commentsDropdown.value;
      if (selectedComment) {
        alert('Selected comment: ' + selectedComment);
      } else {
        alert('Please select a comment.');
      }
    }

    // Add event listener to handle comment selection
    document.getElementById('commentsDropdown').addEventListener('change', handleCommentSelection);
  