// bringing in all the elements I want to manipulate
const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// index of the active circle
let currentActive = 1;

// adding event listener to listen for a click event
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()

})

previous.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1)/(circles.length - 1) * 95 + '%'

    if(currentActive === 1) {
        previous.disabled = true 
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
}