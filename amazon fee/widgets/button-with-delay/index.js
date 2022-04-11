let id = null;

function handleClick() {
    // this if statement acts as a debounce method. If the
    // user clicks the button prior to end of the current
    // timeout, then the timeout is cleared so a new timeout
    // can occur
    if (id) {
        clearTimeout(id);
        // console.log('yo!');
    }

    // Line after alert makes sure to reset id to null. If
    // this wasn't reset then the if statement would occur
    // everytime button is clicked afterwards
    id = setTimeout(() => {
        alert("hello!");
        id = null;
    }, 1000);
}