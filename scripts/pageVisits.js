function updateVisitCounter() {
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    }
    else {
        visitCount = 1;
    }
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('pagecounter').textContent = visitCount;
}

updateVisitCounter();