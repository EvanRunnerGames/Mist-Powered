const gamesId = document.querySelector(".games-id");

let isResizing = false;

gamesId.addEventListener("mousemove", (e) => {
    const rect = gamesId.getBoundingClientRect();
    if (e.clientX >= rect.right - 10) { // Hover near the right edge
        gamesId.style.cursor = "ew-resize";
    } else {
        gamesId.style.cursor = "default";
    }
});

gamesId.addEventListener("mousedown", (e) => {
    const rect = gamesId.getBoundingClientRect();
    if (e.clientX >= rect.right - 10) { // Check if click is near the right edge
        isResizing = true;
        const startX = e.clientX;
        const startWidth = rect.width;

        // Change border color to #60646c when resizing starts
        gamesId.style.borderRight = "6px solid #60646c";
        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", () => {
            isResizing = false;
            // Reset border color once resizing stops
            gamesId.style.borderRight = "#17191b solid 6px";
            document.removeEventListener("mousemove", onMouseMove);
        });

        function onMouseMove(e) {
            if (isResizing) {
                const newWidth = startWidth + (e.clientX - startX);
                gamesId.style.width = `${Math.max(200, newWidth)}px`; // Apply min width of 200px
            }
        }
    }
});
