const url = "https://www.matskrane.no/wp-json/wc/store/products";
fetch(url)
.then(response => response.json())
.then(data => {
    //console.log('Success:', data);
listProducts(data);
})
.catch((error) => {
    console.error('Error:', error);
});

const output = document.querySelector("#products");
function listProducts (products) {
    let myList = "";
    for (let product of products) {
        console.log(product);        
        
        myList += `        
         <li>            
         <a href="product.html?id=${product.id}">
         ${product.name}            
         </a>        
         </li>`;
            }
            output.innerHTML = myList;
        }