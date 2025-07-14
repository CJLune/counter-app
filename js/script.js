// Get a reference to the HTML element that displays the count
            let countEl = document.getElementById("count-el");
            // Initialize the count variable
            let count = 0;

            /**
             * Increments the count by 1 and updates the displayed count on the page.
             */
            function increment() {
                count += 1; // Or: count += 1; Or: count++;
                countEl.innerText = count; // Update the text content of the count element
            }

            /**
             * Logs the current count to the browser's developer console.
             * This function does not affect the display on the web page.
             */
            function save() {
            let saveEl = document.getElementById("save-el"); 
            // Get the element to display saved counts

            let countStr = count + " - "; // Create a string representation of the current count
            saveEl.textContent += countStr; // Append the current count to the saved counts display
            countEl.textContent = 0
            count= 0
            }

            /**
             * Resets the count to 0 and updates the displayed count on the page.
             */
            function reset() {
                count = 0; // Reset count to zero
                countEl.innerText = count; // Update the displayed count to zero
                let saveEl = document.getElementById("save-el"); // Get the saved entries element
                saveEl.textContent = "Previous entries: "; // Clear previous entries
                console.log("Count and previous entries have been reset."); // Log reset action
            } 