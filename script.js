let images = ["img/family.jpg", "img/amitabh.jpg", "img/jaya.jpg", "img/abhishekh.jpg", "img/aishwarya.jpg", "img/Aaradhna.jpg"];
let names = ["Family", "Amitabh Bachchan", "Jaya Bachchan", "Abhishekh Bachchan", "Aishwarya Bachchaan", "Aaradhna Bachchan"];
let i = 0;
function next() {
    i++;
    familylength = 5;
    if (i > familylength) {
        i = 0;
    }
    updatedImg = images[i];
    updatedName = names[i];
    document.getElementById("family").src = updatedImg;
    document.getElementById("name_member").innerHTML = updatedName;
}
