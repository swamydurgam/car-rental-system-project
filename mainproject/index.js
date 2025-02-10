
function bookCar() {
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const pickupDate = document.getElementById("pickup-date").value;
    const dropDate = document.getElementById("drop-date").value;

    if (pickup && drop && pickupDate && dropDate) {
        alert(`Car booked from ${pickup} to ${drop} \nPickup: ${pickupDate} \nDrop-off: ${dropDate}`);
    } else {
        alert("Please fill in all details!");
    }
}


const cars = [
    { id: 1, model: "Toyota Yaris", category: "Economy", dailyRate: 1500, image: "https://tse1.mm.bing.net/th?id=OIP.HkrxWcQwOzytH6Wz1heGKQHaEK&pid=Api&P=0&h=180" },
    { id: 2, model: "Ford Fiesta", category: "Economy", dailyRate: 1700, image: "https://tse3.mm.bing.net/th?id=OIP.Wc-WlpAg-hl77fRyUJH4rQHaE8&pid=Api&P=0&h=180" },
    { id: 3, model: "Honda Civic", category: "Compact", dailyRate: 1600, image: "https://tse2.mm.bing.net/th?id=OIP.DQxvZwWTRupvN0Vu0S4eXgHaEK&pid=Api&P=0&h=180" },
    { id: 4, model: "Hyundai Elantra", category: "Compact", dailyRate: 2000, image: "https://tse1.mm.bing.net/th?id=OIP._Y0AjKMRhAnd8lBNL6-1rQHaEK&pid=Api&P=0&h=180" },
    { id: 5, model: "Toyota Camry", category: "Midsize", dailyRate: 2100, image: "https://tse3.mm.bing.net/th?id=OIP.rn50ksLdQLY3JC4f910I7AHaE6&pid=Api&P=0&h=180" },
    { id: 6, model: "Nissan Altima", category: "Midsize", dailyRate: 2500, image: "https://tse3.mm.bing.net/th?id=OIP.bkKJDkMGJifSjlfQVg61jAHaEo&pid=Api&P=0&h=180" },
    { id: 7, model: "Chevrolet Impala", category: "Full-Size", dailyRate: 1300, image: "https://tse2.mm.bing.net/th?id=OIP.WrL1qAgClBTo6cPjloy5bAHaEK&pid=Api&P=0&h=180" },
    { id: 8, model: "Ford Fusion", category: "Full-Size", dailyRate: 2900, image: "https://tse3.mm.bing.net/th?id=OIP.1Tnxfxox5O09bC2xiB_v_wHaE8&pid=Api&P=0&h=180" },
    { id: 9, model: "Ford Escape", category: "SUV", dailyRate: 3500, image: "https://tse1.mm.bing.net/th?id=OIP.YkWCW41eA9F6Ln3cVwTmeQHaEK&pid=Api&P=0&h=180" },
    { id: 10, model: "Toyota RAV4", category: "SUV", dailyRate: 4100, image: "https://tse2.mm.bing.net/th?id=OIP.EtRF9F86Ol4yc4pPiP8_1wHaEL&pid=Api&P=0&h=180" },
    { id: 11, model: "BMW 3 Series", category: "Luxury", dailyRate: 4800, image: "https://tse2.mm.bing.net/th?id=OIP.pGacAyPqaAKkvNIJm_5fsAHaE7&pid=Api&P=0&h=180" },
    { id: 12, model: "Audi A4", category: "Luxury", dailyRate: 6000, image: "https://tse4.mm.bing.net/th?id=OIP.TiAkpXmxN0mNstaiuCirpgHaE7&pid=Api&P=0&h=180" },
    { id: 13, model: "Kia Rio", category: "Economy", dailyRate: 1200, image: "https://tse3.mm.bing.net/th?id=OIP.AWfBiXjaY4j5ZufMB-p6GQHaEA&pid=Api&P=0&h=180" },
    { id: 14, model: "Chevrolet Spark", category: "Economy", dailyRate: 1400, image: "https://tse4.mm.bing.net/th?id=OIP.xlcOm1wXI-S_XjAZrxbE7wHaEh&pid=Api&P=0&h=180" },
    { id: 15, model: "Volkswagen Jetta", category: "Compact", dailyRate: 1499, image: "https://tse4.mm.bing.net/th?id=OIP.vTED__ebPvfd8NW90ESIIAHaEL&pid=Api&P=0&h=180" },
    { id: 16, model: "Mazda3", category: "Compact", dailyRate: 1677, image: "https://tse2.mm.bing.net/th?id=OIP.Br40BdFaePK1BsT9HOxSUgHaEK&pid=Api&P=0&h=180" },
    { id: 17, model: "Subaru Legacy", category: "Midsize", dailyRate: 1567, image: "https://tse1.mm.bing.net/th?id=OIP.p4e8f5vxX8UyQjKfCBBrGgHaEi&pid=Api&P=0&h=180" },
    { id: 18, model: "Honda Accord", category: "Midsize", dailyRate: 1777, image: "https://tse3.mm.bing.net/th?id=OIP.Rx6VgPT-OtPfTmSq-MEUVAHaEK&pid=Api&P=0&h=180" },
    { id: 19, model: "Dodge Charger", category: "Full-Size", dailyRate: 1766, image: "https://tse1.mm.bing.net/th?id=OIP.yJnLp-U0XaznGQGeaVAvaAHaE8&pid=Api&P=0&h=180" },
    { id: 20, model: "Chevrolet Tahoe", category: "SUV", dailyRate: 4999, image: "https://tse1.mm.bing.net/th?id=OIP.4S-NFY02FGr-tIao9EtOVAHaE8&pid=Api&P=0&h=180" }
  ];




const container = document.getElementById('car-container');


cars.forEach(car => {

    const card = document.createElement('div');
    card.className = 'car-card';

    
    card.innerHTML = `
      <img src="${car.image}" alt="${car.model}">
      <div class="details">
        <h2>${car.model}</h2>
        <p><strong>Category:</strong> ${car.category}</p>
        <p><strong>Daily Rate:</strong> ₹${car.dailyRate}</p>
        <button class="rent-button" onclick="addToCart(${car.id})">
          Rent 
        </button>
      </div>
    `;

    container.appendChild(card);
});


let cart = [];

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cartCount.textContent = cart.length;

    cart.forEach((car, index) => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p>${car.model} - ₹${car.dailyRate}/day</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(item);
    });
}

function toggleCart() {
    const cartSection = document.getElementById("cart-section");
    cartSection.style.right = cartSection.style.right === "0px" ? "-100%" : "0px";
}


function addToCart(carId) {
    const selectedCar = cars.find(car => car.id === carId);
    if (selectedCar) {
        cart.push(selectedCar);
        updateCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


document.getElementById("cart-link").addEventListener("click", toggleCart);


document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    updateCart();
});



function addToCart(carId) {
    const selectedCar = cars.find(car => car.id === carId);
    if (selectedCar) {
        cart.push(selectedCar);
        updateCart();

        const carCards = document.querySelectorAll('.car-card');
        carCards.forEach(card => {
            if (card.querySelector("h2").innerText === selectedCar.model) {
                card.classList.add('added-to-cart');

               
                setTimeout(() => {
                    card.classList.remove('added-to-cart');
                }, 1000);
            }
        });
    }
}


function showPaymentSection() {
    document.getElementById("book").style.display = "none";
    document.getElementById("car-container").style.display = "none";
    document.getElementById("cart-section").style.display = "none";
    document.getElementById("avail").style.display = "none";

    document.getElementById("payment-section").classList.remove("hidden");
}

function processPayment() {
    const selectedMethod = document.getElementById("payment-method").value;
    
    if (!selectedMethod) {
        alert("Please select a payment method.");
        return;
    }

    setTimeout(() => {
        alert(`Payment successful using ${selectedMethod}! Your car rental is confirmed.`);
        cart = [];
        updateCart();
        document.getElementById("payment-section").classList.add("hidden");
        document.getElementById("book").style.display = "block";
        document.getElementById("car-container").style.display = "block";
        document.getElementById("cart-section").style.display = "block";
    }, 2000);
}


document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
        console.log("Contact section loaded successfully.");
    }
});
