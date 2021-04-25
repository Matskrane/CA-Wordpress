const url = "https://www.matskrane.no/wp-json/wc/store/products";
const productHTML = document.querySelector(".products")

async function getProducts() {
    try{
        const response = await fetch(url);
        const getFlowers = await response.json();
        listProducts(getFlowers);
        console.log(getFlowers);
    }
   
    catch(error){
        console.log(error);
    }
    
}



getProducts();

function listProducts(products){
    products.forEach(function(product){
        productHTML.innerHTML += `
        <div class="product">
          <a href="product.html?id=${product.id}">
            <h2>${product.name}</h2>
            <img src="${product.images[0].src}" alt="${product.name}">
            <p>${product.price_html}</p>
            <button>View more</button>
          </a>
        </div>
        `;
    })

}
