const url = "https://www.matskrane.no/wp-json/wc/store/products";
fetch(url)
.then(response => response.json())
.then(data => {
    //console.log('Success:', data);
listPosts(data);
})
.catch((error) => {
    console.error('Error:', error);
});

const output = document.querySelector("#products");
function listPosts (products) {
    let myList = "";
    for (let product of products) {
        console.log(product);        
        
        myList += `        
         <li>            
         <a href="post.html?id=${product.id}">
         ${product.title.rendered}            
         </a>        
         </li>`;
            }
            output.innerHTML = myList;
        }