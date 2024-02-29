/* fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`);
    }); */


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message);
//         document.querySelector('img').src = data.message
//     })
//     .catch(err => {
//         console.log(`error ${err}`);
//     });

const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const mobile_menu = document.querySelector('.mobile_menu')

hamburger.addEventListener('click', (event) => {
    close.style.display = 'block'
    mobile_menu.style.transform = 'translate(0,0em)'
    event.target.style.display = 'none'
})
close.addEventListener('click', (event) => {
    event.target.style.display = 'none'
    hamburger.style.display = 'block'
    mobile_menu.style.transform = 'translate(0,-15em)'
})

// close navigation on mobile touch screen
document.addEventListener('touchstart', function (event) {
    // Check if the touched element is not inside the navigation
    console.log('cci')
    if (!mobile_menu.contains(event.target)) {
        // Close the navigation
        mobile_menu.style.transform = 'translate(0,-15em)'
        hamburger.style.display = 'block'
        close.style.display = 'none'
    }
});