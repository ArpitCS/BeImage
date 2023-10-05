// Fiter Images by Category
function filterSelection(category) {
    var allImages = document.querySelectorAll('.column'); 
    if (category === 'all') {
        // Show all images
        allImages.forEach(function(image) {
            image.style.display = 'block';
        });
    } else {
        // Hide all images
        allImages.forEach(function(image) {
            image.style.display = 'none';
        });    
        // Show images with the selected category
        var selectedImages = document.querySelectorAll('.' + category);
        selectedImages.forEach(function(image) {
            image.style.display = 'block';
        });
    }

// Remove 'active' class from all buttons
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
    button.classList.remove('active');
});
        
// Add 'active' class to the clicked button
document.querySelector('[onclick="filterSelection(\'' + category + '\')"]').classList.add('active');
}

// Set the 'all' button as active by default
filterSelection('all');