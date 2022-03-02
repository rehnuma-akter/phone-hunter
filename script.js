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
        .then((data) => console.log(data.data));
        document.getElementById("search-field").value = "";
        document.getElementById("blank-input").style.display = "none";
    }
};
