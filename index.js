// Sample menu data with prices (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Shrimp Cocktail", price: 25 },
        { name: "Chicken Satay", price: 60 }
    ],
    MainCourses: [
        { name: "Döner", price: 100 },
        { name: "Pilav", price: 90 }
    ],
    Desserts: [
        { name: "Gulab Jamun", price: 25 },
        { name: "Baklava", price: 40 }
    ]
};

// Display menu items by category
function displayMenuItems(menu) {
    
    const menuContainer = document.getElementById('menu');

    for (const [category, items] of Object.entries(menu)) {

       const categoryElem = document.createElement('h3');
       
        categoryElem.textContent = category;
       
        menuContainer.appendChild(categoryElem);

       const itemList = document.createElement('ul');
      
        menuContainer.appendChild(itemList);

        for (const item of items) {
            
            const itemElem = document.createElement('li');
            
            itemElem.textContent = `${item.name} - R${item.price}`;
           
            itemElem.addEventListener('click', () => addToOrder(item));
            
            itemList.appendChild(itemElem);
        }
    }
}

function addToOrder(item) {
   
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElem = document.getElementById('order-total');
    const orderItemElem = document.createElement('li');
   
    orderItemElem.textContent = `${item.name} - R${item.price}`;
     orderItemsList.appendChild(orderItemElem);
    const currentTotal = parseFloat(orderTotalElem.textContent);
    const newTotal = currentTotal + item.price;
    orderTotalElem.textContent = newTotal.toFixed(2);
}

function initMenuSystem(menu) {
    displayMenuItems(menu);

    // Initialize order total to 0.00
    const orderTotalElem = document.getElementById('order-total');
    orderTotalElem.textContent = '0.00';
}
initMenuSystem(menu);
