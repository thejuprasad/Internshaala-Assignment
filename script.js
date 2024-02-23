document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");

    // Fetch JSON data
    fetch("images.json")
        .then(response => response.json())
        .then(images => {
            // Append images to the container
            images.forEach(imageData => {
                const imageItem = document.createElement("div");
                imageItem.classList.add("image-item");

                const img = document.createElement("img");
                img.src = imageData.image;
                img.alt = "Image";

                const title = document.createElement("div");
                title.classList.add("image-title");
                title.textContent = "Lorem Ipsum";

                imageItem.appendChild(img);
                imageItem.appendChild(title);

                imageContainer.appendChild(imageItem);
            });
        })
        .catch(error => console.error("Error loading images:", error));
});
