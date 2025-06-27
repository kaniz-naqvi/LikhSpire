const main = document.querySelector(".blog-list");
const base_URL = "likhspire-production.up.railway.app/api";

//  GET all blogs
async function getBlogsData() {
  try {
    const response = await fetch(base_URL);
    const blogs = await response.json();

    if (!blogs.length) {
      main.innerHTML = `<p class="text-secondary m-auto">Nothing here, <a href="/create">Add blogs</a> to see the list!</p>`;
      return;
    }

    let mainHTML = "";
    blogs.forEach((b) => {
      mainHTML += `
        <div data-id="${b.id}" data-title="${b.title}" class="flex blogs-item border-top pt-3 mx-lg-5 px-3 px-lg-5">
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="fw-bold py-0">${b.title}</h4>
            <button class="btn m-1 delete-btn btn-danger fw-bold">
              <i class="bi-trash3"></i>
            </button>
          </div>
          <p class="pt-0 p">${b.body}</p>
        </div>
      `;
    });

    main.innerHTML = mainHTML;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    main.innerHTML = `<p class="text-danger">Failed to load blogs.</p>`;
  }
}

//  DELETE blog
async function deleteBlog(id) {
  try {
    const response = await fetch(`${base_URL}/delete-blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      getBlogsData(); // Refresh
    } else {
      alert("Failed to delete blog.");
    }
  } catch (error) {
    console.error("Delete error:", error);
    alert("Something went wrong.");
  }
}

//  Redirect to detail
function showDetail(id) {
  window.location.href = `./blogDetail.html?id=${id}`;
}

//  Event delegation
main.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  const blogItem = e.target.closest(".blogs-item");

  if (deleteBtn) {
    e.stopPropagation();
    const parentDiv = deleteBtn.closest(".blogs-item");
    const deleteId = parentDiv.dataset.id;
    const deleteTitle = parentDiv.dataset.title;

    const confirmed = window.confirm(`Do you want to delete "${deleteTitle}"?`);
    if (confirmed) {
      deleteBlog(deleteId);
    }
    return;
  }

  if (blogItem) {
    const blogId = blogItem.dataset.id;
    showDetail(blogId);
  }
});

//  Start
getBlogsData();
