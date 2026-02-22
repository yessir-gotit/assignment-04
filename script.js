let interviewNum = [];
let rejectNum = [];

let all = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectCount = document.getElementById('rejected');
let allCard = document.getElementById('allCard');

const allBtn = document.getElementById('all-filter-btn');
const interviewBtn = document.getElementById('interview-filter-btn');
const rejectBtn = document.getElementById('reject-filter-btn');
const emptyState = document.getElementById('empty-state');
const jobs = document.getElementById('up-menu');

function cardCount() {
    all.innerText = allCard.querySelectorAll('.card').length;
    interviewCount.innerText = interviewNum.length;
    rejectCount.innerText = rejectNum.length;
}

cardCount();

function toggleStyle(id) {
    const buttons = [allBtn, interviewBtn, rejectBtn];
    for (const btn of buttons) {
        btn.classList.add('border-gray-200', 'text-gray-500');
        btn.classList.remove('bg-blue-500', 'text-white');
    }

    const selected = document.getElementById(id);
    selected.classList.remove('border-gray-200', 'text-gray-500');

    selected.classList.add('bg-blue-500', 'text-white');

    const cards = allCard.querySelectorAll('.card');
    let count = 0;

    for (const card of cards) {
        card.classList.add('shadow-md');
        const badgeText = card.querySelector('.badge-text').innerText;

        if (id === 'all-filter-btn') {
            card.style.display = 'block';
            count++;
        } 
        else if (id === 'interview-filter-btn') {
            if (badgeText === 'INTERVIEWED') {
                card.style.display = 'block';
                count++;
            } 
            
            else {
                card.style.display = 'none';
            }
        } 
        else if (id === 'reject-filter-btn') {
            if (badgeText === 'REJECTED') {
                card.style.display = 'block';
                count++;
            } 
            
            else {
                card.style.display = 'none';
            }
        }
    }

    if (count === 0) {
        emptyState.classList.remove('hidden');
        allCard.classList.add('hidden'); 
    } 
    
    else {
        emptyState.classList.add('hidden');
        allCard.classList.remove('hidden');
    }

    jobs.innerText = `${count} jobs`;
}

allCard.addEventListener('click', function(e) {
    const t = e.target;
    const trash = t.closest('.btn-ghost'); 

    const isInt = t.classList.contains('interview-btn');
    const isRej = t.classList.contains('reject-btn');

    if (trash && !isInt && !isRej) {

        const p = trash.closest('.card');

        const name = p.querySelector('.company-name').innerText;

        interviewNum = interviewNum.filter(i => i !== name);
        rejectNum = rejectNum.filter(i => i !== name);
        
        p.remove();
        cardCount();
        
        const cur = [allBtn, interviewBtn, rejectBtn].find(b => b.classList.contains('bg-blue-500'));
        toggleStyle(cur.id);
        return;
    }

    if (!isInt && !isRej) return;

    const p = t.closest('.card');
    const name = p.querySelector('.company-name').innerText;
    const b = p.querySelector('.badge-text');

    if (isInt) {
        b.innerText = "INTERVIEWED";
        b.classList.remove('bg-blue-50', 'text-[#0D2A54]', 'bg-red-50', 'text-red-600');
        b.classList.add('bg-green-100', 'text-green-700');

        if (!interviewNum.includes(name)) {
            interviewNum.push(name);
            rejectNum = rejectNum.filter(i => i !== name);
        }
    } 

    else if (isRej) {
        b.innerText = "REJECTED";
        b.classList.remove('bg-blue-50', 'text-[#0D2A54]', 'bg-green-100', 'text-green-700');
        b.classList.add('bg-red-50', 'text-red-600');

        if (!rejectNum.includes(name)) {
            rejectNum.push(name);
            interviewNum = interviewNum.filter(i => i !== name);
        }
    }

    cardCount(); 
    const act = [allBtn, interviewBtn, rejectBtn].find(btn => btn.classList.contains('bg-blue-500')).id;
    toggleStyle(act);


})