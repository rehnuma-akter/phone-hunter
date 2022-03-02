// input and search part
const searchPhone = () => {
    document.getElementById("spinner").style.display = "block";
    const searchField = document.getElementById("search-field").value;
    if (searchField == "") {
        document.getElementById("blank-input").style.display = "block";
        document.getElementById("spinner").style.display = "none";
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => showPhones(data.data));
        document.getElementById("search-field").value = "";
        document.getElementById("blank-input").style.display = "none";
    }
};
//showing the search results (phones)
const showPhones = (phone) => {
const phones = phone.slice(0, 20);
if (phones.length == 0) {
        document.getElementById("input-error").style.display = "block";
        document.getElementById("spinner").style.display = "none";
    } else {
        document.getElementById("input-error").style.display = "none";
        const displayPhone = document.getElementById("phones");
        displayPhone.textContent = "";
        phones?.forEach((phone) => {
        const createDiv = document.createElement("div");
        createDiv.classList.add("col-12", "col-lg-4");
        createDiv.innerHTML = `
                <div class="card border-0 shadow p-4 rounded mx-auto" style="width:18rem">
                <img src="${phone.image}" class="card-img-top" alt="phone-image" />
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand} </p>
                        <button onclick="getId('${phone.slug}')" class="btn btn-dark">Details</button>
                    </div>
                </div>
                `;
        displayPhone.appendChild(createDiv);
        document.getElementById("spinner").style.display = "none";
        });
    }
}
