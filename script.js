let interviewNum = [];
let rejectNum = [];

let all = document.getElementById('total');

let interview = document.getElementById('interview');
let reject = document.getElementById('rejected');
let allCard = document.getElementById('allCard');

const allBtn = document.getElementById('all-filter-btn')
const interviewBtn = document.getElementById('interview-filter-btn')
const rejectBtn = document.getElementById('reject-filter-btn')


function cardCount(){
    all.innerText = allCard.children.length;
    interview.innerText = interviewNum.length;
    reject.innerText = rejectNum.length;
}

cardCount();



function toggleStyle(id){
    allBtn.classList.add('border-gray-200', 'text-gray-500')
    interviewBtn.classList.add('border-gray-200', 'text-gray-500')
    rejectBtn.classList.add('border-gray-200', 'text-gray-500')

    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectBtn.classList.remove('bg-blue-500', 'text-white')

    const selected = document.getElementById(id)

    selected.classList.remove('border-gray-200', 'text-gray-500')
    selected.classList.add('bg-blue-500', 'text-white')
}