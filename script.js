function showContent(functionId) {
    // Hide all content sections
    var contentDivs = document.querySelectorAll('.main-content > div');
    contentDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    // Show the selected content section
    var selectedContent = document.getElementById(functionId + '-content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

