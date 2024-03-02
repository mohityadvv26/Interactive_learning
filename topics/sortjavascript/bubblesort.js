let speed = 500; // Initial speed of sorting animation
        let currentStep = 0;
        let originalArray = [];
        let sortedSteps = [];
        let isPaused = false;

        // Create elements based on user input
        function createElements() {
            const arrayInput = document.getElementById('arrayInput');
            originalArray = arrayInput.value.split(',').map(Number);

            const elementsContainer = document.getElementById('elements');
            elementsContainer.innerHTML = '';

            originalArray.forEach((value, index) => {
                const element = document.createElement('div');
                element.classList.add('element');
                element.style.height = `${value * 3}px`; // Adjust multiplier based on your preference for bar height

                const valueSpan = document.createElement('span');
                valueSpan.classList.add('value');
                valueSpan.textContent = value;
                element.appendChild(valueSpan);

                const indexSpan = document.createElement('span');
                indexSpan.classList.add('index');
                indexSpan.textContent = index;
                element.appendChild(indexSpan);

                elementsContainer.appendChild(element);
            });

            sortedSteps = [originalArray.slice()]; // Copy of the original array as the first step
        }

        // Selection Sort algorithm
        // async function selectionSort() {
        //     createElements();
        //     let elements = document.querySelectorAll('.element');
        //     let len = elements.length;

        //     for (let i = 0; i < len - 1; i++) {
        //         while (isPaused) {
        //             await new Promise(resolve => setTimeout(resolve, 100));
        //         }

        //         let minIndex = i;

        //         for (let j = i + 1; j < len; j++) {
        //             // Highlight the elements being compared
        //             elements[j].classList.add('highlight');
        //             elements[minIndex].classList.add('highlight');

        //             // Change number color to blue during sorting
        //             elements[j].querySelector('.value').style.color = 'blue';
        //             elements[minIndex].querySelector('.value').style.color = 'blue';

        //             // Delay to visualize the comparison
        //             await new Promise(resolve => setTimeout(resolve, speed));

        //             if (parseInt(elements[j].style.height) < parseInt(elements[minIndex].style.height)) {
        //                 minIndex = j;
        //             }

        //             // Remove highlight after comparison
        //             elements[j].classList.remove('highlight');
        //             elements[minIndex].classList.remove('highlight');
        //         }

        //         // Swap the elements
        //         let tempHeight = elements[minIndex].style.height;
        //         elements[minIndex].style.height = elements[i].style.height;
        //         elements[i].style.height = tempHeight;

        //         // Swap the numeric values
        //         let tempValue = elements[minIndex].querySelector('.value').textContent;
        //         elements[minIndex].querySelector('.value').textContent = elements[i].querySelector('.value').textContent;
        //         elements[i].querySelector('.value').textContent = tempValue;

        //         // Swap the indices
        //         let tempIndex = elements[minIndex].querySelector('.index').textContent;
        //         elements[minIndex].querySelector('.index').textContent = elements[i].querySelector('.index').textContent;
        //         elements[i].querySelector('.index').textContent = tempIndex;

        //         // Change the text color to white after swapping
        //         elements[i].querySelector('.value').style.color = 'white';
        //         elements[minIndex].querySelector('.value').style.color = 'white';

        //         // Delay to visualize the swap
        //         await new Promise(resolve => setTimeout(resolve, speed));

        //         // Store the current step
        //         sortedSteps.push(Array.from(elements).map(element => parseInt(element.querySelector('.value').textContent)));
        //     }

        //     // Change the text color to red after sorting
        //     elements.forEach(element => {
        //         element.querySelector('.value').style.color = 'red';
        //     });
        // }

        async function bubbleSort() {
            createElements();
            let elements = document.querySelectorAll('.element');
            let len = elements.length;

            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - i - 1; j++) {
                    // Highlight the elements being compared
                    elements[j].classList.add('highlight');
                    elements[j + 1].classList.add('highlight');

                    // Change number color to blue during sorting
                    elements[j].querySelector('.value').style.color = 'blue';
                    elements[j + 1].querySelector('.value').style.color = 'blue';

                    // Delay to visualize the comparison
                    await new Promise(resolve => setTimeout(resolve, speed));

                    if (parseInt(elements[j].style.height) > parseInt(elements[j + 1].style.height)) {
                        // Swap the elements
                        let tempHeight = elements[j].style.height;
                        elements[j].style.height = elements[j + 1].style.height;
                        elements[j + 1].style.height = tempHeight;

                        // Swap the numeric values
                        let tempValue = elements[j].querySelector('.value').textContent;
                        elements[j].querySelector('.value').textContent = elements[j + 1].querySelector('.value').textContent;
                        elements[j + 1].querySelector('.value').textContent = tempValue;

                        // Swap the indices
                        let tempIndex = elements[j].querySelector('.index').textContent;
                        elements[j].querySelector('.index').textContent = elements[j + 1].querySelector('.index').textContent;
                        elements[j + 1].querySelector('.index').textContent = tempIndex;

                        // Change the text color to white after swapping
                        elements[j].querySelector('.value').style.color = 'white';
                        elements[j + 1].querySelector('.value').style.color = 'white';

                        // Delay to visualize the swap
                        await new Promise(resolve => setTimeout(resolve, speed));

                        // Store the current step
                        sortedSteps.push(Array.from(elements).map(element => parseInt(element.querySelector('.value').textContent)));
                    }

                    // Remove highlight after comparison
                    elements[j].classList.remove('highlight');
                    elements[j + 1].classList.remove('highlight');
                }
            }

            // Change the text color to red after sorting
            elements.forEach(element => {
                element.querySelector('.value').style.color = 'red';
            });
        }
// Insertion Sort algorithm


        // Start sorting animation
        // function startSelectionSorting() {
        //     sortedSteps = [originalArray.slice()]; // Reset sortedSteps
        //     document.getElementById('pauseButton').textContent = "Pause";
        //     isPaused = false;
        //     document.getElementById('pauseButton').disabled = false;
        //     selectionSort();
        // }
        function startBubbleSorting() {
            sortedSteps = [originalArray.slice()]; // Reset sortedSteps
            document.getElementById('pauseButton').textContent = "Pause";
            isPaused = false;
            document.getElementById('pauseButton').disabled = false;
            bubbleSort();
        }
        
        // Toggle pause
        function togglePause() {
            isPaused = !isPaused;
            document.getElementById('pauseButton').textContent = isPaused ? "Resume" : "Pause";
        }

        // Reset the elements to their initial state
        function reset() {
            currentStep = 0;
            sortedSteps = [originalArray.slice()]; // Reset sortedSteps
            document.getElementById('pauseButton').disabled = true;
            createElements();
        }

        // Adjust the speed of sorting animation
        function adjustSpeed(newSpeed) {
            speed = 1000 - newSpeed; // Invert speed value to be faster at a lower range
        }

        // Call createElements() initially
        createElements();


        