// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-id');
    const gameElements = document.querySelectorAll('.game-id');
    
    // Event listener for the search input
    searchInput.addEventListener('input', function() {
        const searchQuery = searchInput.value.toLowerCase();
        
        gameElements.forEach(function(game) {
            const gameName = game.querySelector('.game-name').textContent.toLowerCase();
            
            // Show or hide the game based on whether the name matches the search query
            if (gameName.includes(searchQuery)) {
                game.closest('a').style.display = 'block'; // Show the game
            } else {
                game.closest('a').style.display = 'none'; // Hide the game
            }
        });
    });
});
