// Testing
//const currentYear = new Date().getFullYear()
//const lastModified = date.lastModified;

//document.getElementById("copyright-year").textContent = currentYear;
//document.getElementById("last-modified").textContent = 'Last Modified: ${lastModified}';

const options = {
    year: "numeric",
};
year.innerHTML = new Date().toLocaleDateString("en-US", options);

let modifiedDate = document.lastModified;

lastModified.innerHTML = `Last Modified: ${modifiedDate}`;