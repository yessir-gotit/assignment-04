let interviewNum = [];
let rejectNum = [];

let all = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectCount = document.getElementById('rejected');
let allCard = document.getElementById('allCard');

const allBtn = document.getElementById('all-filter-btn')
const interviewBtn = document.getElementById('interview-filter-btn')
const rejectBtn = document.getElementById('reject-filter-btn')
const emptyState = document.getElementById('empty-state');
const jobs = document.getElementById('up-menu');


function cardCount(){
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


allCard.addEventListener('click', function(event){
    const target = event.target;

    const isInterviewBtn = target.classList.contains('interview-btn');
    const isRejectBtn = target.classList.contains('reject-btn');

    if(!isInterviewBtn && !isRejectBtn){
        return;
    }
        

    const parentCard = target.closest('.card');
    const companyName = parentCard.querySelector('.company-name').innerText;
    const badge = parentCard.querySelector('.badge-text');

    if(isInterviewBtn){
        badge.innerText = "INTERVIEWED";
        badge.classList.remove('bg-blue-50', 'text-[#0D2A54]', 'bg-red-50', 'text-red-600');
        badge.classList.add('bg-green-100', 'text-green-700');


        if(!interviewNum.includes(companyName)){
            interviewNum.push(companyName);

            rejectNum = rejectNum.filter(item => item !== companyName);
        }
    } 
    

    else if (isRejectBtn){

        badge.innerText = "REJECTED";
        badge.classList.remove('bg-blue-50', 'text-[#0D2A54]', 'bg-green-100', 'text-green-700');
        badge.classList.add('bg-red-50', 'text-red-600');


        if(!rejectNum.includes(companyName)){
            rejectNum.push(companyName);

            interviewNum = interviewNum.filter(item => item !== companyName);
        }
    }

    cardCount(); 
});