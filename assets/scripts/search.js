document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-btn').addEventListener('click', function() {
        var searchTerm = document.getElementById('search-input').value;
        var ratingFilter = document.getElementById('rating-filter').value;
        // Implement search and filter functionality here
        // For now, it will just display an alert
        alert('Search for: ' + searchTerm + ', Rating: ' + ratingFilter);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var filterIcon = document.getElementById('filter-icon');
    var dropdownFilters = document.getElementById('dropdown-filters');

    filterIcon.addEventListener('click', function() {
        // This will toggle the 'hidden' class, thereby showing/hiding the dropdown
        dropdownFilters.classList.toggle('hidden');
    });

    // Rest of your search functionality code

    // Additional JavaScript for handling the search functionality
    document.getElementById('search-btn').addEventListener('click', function() {
        var searchTerm = document.getElementById('search-input').value;
        // Add logic here to handle the search with filters
        alert('Search functionality not implemented yet.');
    });
});

