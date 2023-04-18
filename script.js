const item = document.getElementById('category');

async function get_product() {
    const response = await fetch("http://127.0.0.1:8000/Products");
    const jsonData = await response.json();

    create_product_card(jsonData)
}

function create_product_card(data) {
    itemHTML = ""
    console.log(data)
    data.map((item) =>
        itemHTML += `<div class="item">
        <img src="https://image.makewebeasy.net/makeweb/r_409x409/pyuHEt3NP/SEO/SEO.jpg?v=202012190947" width="300"/>
        <a href="https://www.4u2thailand.com/product/172874-168546/4u2-extra-oil-control-bb-powder">
            ${item._Product__name}
        </a>
        <p>${item.detail}</p>
        <p>${item.price}</p>
        <button class="buy">
            <img
                src="../frontend/cart-shopping-solid.svg"
                width="10"
                alt="cart"
            />
            สั่งซื้อสินค้า</button>
        <p>${item.description}</p>
    </div>`
    )

    item.innerHTML = itemHTML;
}


function searhbar() {
    console.log("click")
    var search = document.getElementById("searchminiBar");
    if (search.style.display === "block") {
      search.style.display = "none";
    } else {
      search.style.display = "block";
    }
  }