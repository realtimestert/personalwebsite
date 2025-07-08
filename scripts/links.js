document.addEventListener("DOMContentLoaded", () => {
    fetch('data/links.json')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('link-list');
            data.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                li.appendChild(a);
                list.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading links:', error));
});