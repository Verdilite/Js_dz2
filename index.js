let price = 0;
let applePrice = 10;
let orangePrice = 12;
let kiwiPrice = 15;
let start = prompt ("Do you want fruits?",'yas')
if (start == 'yas'){
    alert ("Ok, let's start! 😉")
    let apple = prompt( "Do you want 🍎?",'yas')
    if (apple == 'yas'){
        let applek = prompt("Enter count of 🍎.",0)
        price += applek*applePrice
    }
    let orange = prompt( "Do you want 🍊?",'yas')
    if (orange == 'yas'){
        let orangek = prompt("Enter count of 🍊.",0)
        price += orangek*orangePrice
    }
    let kiwi = prompt("Do you want 🥝?",'yas')
    if (kiwi == 'yas'){
        let kiwik = prompt("Enter count of 🥝.",0)
        price += kiwik*kiwiPrice
    }
    console.log('Final price is $ ' + price)
}
else {
    alert ("Oh, bye 😔.")
}
