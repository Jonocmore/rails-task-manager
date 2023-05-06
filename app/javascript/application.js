// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
document.addEventListener("DOMContentLoaded", () => {
  const tasksContainer = document.getElementById("tasks-container");
  if (tasksContainer) {
    tasksContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-task")) {
        if (!confirm("Are you sure?")) {
          event.preventDefault();
        }
      }
    });
  }
});
