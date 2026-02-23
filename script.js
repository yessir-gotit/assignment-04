const tabContainer = document.querySelector('.tab-btn');
const cardContainer = document.getElementById('allCard');

tabContainer.addEventListener('click', function(e) {
    const target = e.target;
    
    if (!target.classList.contains('btn')) {
        return;
    }

    const active = tabContainer.querySelector('.active');
    if (active){
        active.classList.remove('active');
    }

    target.classList.add('active');
    filterCards();
    updateMenu();

})

function updateStats(){
    let allCount = Number(0);
    let intCount = Number(0);
    let rejCount = Number(0);
    for (const card of cardContainer.children){
        if (card.getAttribute('data-status') === 'interview') {
            intCount++;
        }

        else if (card.getAttribute('data-status') === 'reject') {
            rejCount++;
        }

    
    
    }
    allCount = cardContainer.children.length;

    document.getElementById('interview').innerText = intCount;
    document.getElementById('rejected').innerText = rejCount;
    document.getElementById('total').innerText = allCount;
}

function updateMenu() {
    const menu = document.getElementById('up-menu');
    let count = 0;
    const unga = cardContainer.children;
    for (const c of unga) {
        if (c.style.display !== 'none') {
            count++;
        }
    }
    
    menu.innerText = `${count} jobs`;

}


function filterCards(){
    const active = document.querySelector('.tab-btn .active');
    const card = cardContainer.children;
    const empty = document.getElementById('empty-state');
    let cardsShownInt = 0;
    let cardsShownRej = 0;
    let allShown = 0;
    for (const c of card) {
        

        if (active.id === 'interview-filter-btn') {

            if (c.getAttribute('data-status') === 'interview') {
                c.style.display = 'block';
                cardsShownInt++;
            }
            else {
                c.style.display = 'none';
            }
        }

        else if(active.id === 'reject-filter-btn'){
            if (c.getAttribute('data-status') === 'reject') {
                c.style.display = 'block';
                cardsShownRej++;
            }
            else {
                c.style.display = 'none';
            }
        }
        else{
            c.style.display = 'block';
            allShown++;
        }
    }
    
    if (cardsShownInt === 0 && active.id === 'interview-filter-btn'){
        empty.classList.remove('hidden');
    }
    else if (cardsShownRej === 0 && active.id === 'reject-filter-btn'){
        empty.classList.remove('hidden');
    }
    else if (active.id === 'all-filter-btn' && allShown === 0) {
        empty.classList.remove('hidden');
    }

    else{
        empty.classList.add('hidden');
    }

    
}


cardContainer.addEventListener('click', function(e) {
    const target = e.target;
    const btn = target.closest('.btn');

    if (!btn) {
        return;
    }
    const card = btn.closest('.card');
    const badge = card.querySelector('.badge');

    if(btn.classList.contains('delete')){
        card.remove();
        updateStats();
        filterCards();
        updateMenu();
        return;
    }
        
    if (btn.classList.contains('interview-btn')){
        target.closest('.card').setAttribute('data-status', 'interview');
        badge.innerText = "INTERVIEWED";
        badge.classList.remove('bg-blue-50', 'text-[#0D2A54]', 'bg-red-50', 'text-red-600');
        badge.classList.add('bg-green-100', 'text-green-700');
    }

    else if (btn.classList.contains('reject-btn')){
        target.closest('.card').setAttribute('data-status', 'reject');
        badge.innerText = "REJECTED";
        badge.classList.remove('bg-blue-50', 'text-[#0D2A54]', 'bg-green-100', 'text-green-700');
        badge.classList.add('bg-red-50', 'text-red-600');
    }

    updateStats();
    filterCards();
    updateMenu();
})
updateStats();
filterCards();
updateMenu();

