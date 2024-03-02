if (window.innerWidth > 900) {
  const features = document.querySelectorAll(".feature");

  features.forEach((feature) => {
    const featureImage = document.createElement("img");
    featureImage.classList.add("feature-image");
    feature.appendChild(featureImage);

    feature.addEventListener("mouseover", () => {
      const imageUrl = feature.getAttribute("data-image-src");
      featureImage.src = imageUrl;
      featureImage.style.display = "block";
    });

    feature.addEventListener("mouseout", () => {
      featureImage.style.display = "none";
    });

    feature.addEventListener("mousemove", (e) => {
      const rect = feature.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      featureImage.style.left = `${offsetX}px`;
      featureImage.style.top = `${offsetY}px`;
    });
  });
}
