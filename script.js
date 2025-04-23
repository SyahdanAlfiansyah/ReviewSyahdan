document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const announcement = document.getElementById("announcement");
    const outputBox = document.getElementById("outputBox");
  
    submitBtn.addEventListener("click", () => {
      const text = announcement.value.trim();
      if (text) {
        const newPost = document.createElement("div");
        newPost.classList.add("stream-post");
        newPost.innerHTML = `
          <div style="display:flex; align-items:center; margin-bottom:5px;">
            <span class="profile" style="margin-right:10px;">D</span>
            <div>
              <div class="name">Syahdan Alfiansyah</div>
              <div class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
          <div class="post-text">${text}</div>
        `;
  
        outputBox.prepend(newPost);
        outputBox.style.display = "block";
        announcement.value = "";
      }
    });
  });