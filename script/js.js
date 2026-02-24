let interViews = [];
let rejecteds = [];
let currentStatus = 'all';
let totalCount = document.getElementById('total-count');
let interViewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let allCards = document.getElementById('allCards');
let mainContainers = document.querySelector('main');
let filterSection = document.getElementById('filtered-section');

function calculate() {
    totalCount.innerText = allCards.children.length;
    interViewCount.innerText = interViews.length;
    rejectedCount.innerText = rejecteds.length;
}
calculate()

let allFilterBtn = document.getElementById('all-filter-btn');
let interviewFilterBtn = document.getElementById('interview-filter-btn');
let rejectedFilterBtn = document.getElementById('rejected-filter-btn');
function toggleStyle(id) {
    allFilterBtn.classList.remove('active-btn', 'text-white');
    interviewFilterBtn.classList.remove('active-btn', 'text-white');
    rejectedFilterBtn.classList.remove('active-btn', 'text-white');

    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');


    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('active-btn', 'text-white');
    allCards.classList.remove('hidden');
    filterSection.classList.remove('hidden');

    if (id == 'interview-filter-btn') {
        allCards.classList.add('hidden');
        renderInterviews()
        // filterSection.classList.remove('hidden');
    } else if (id == 'all-filter-btn') {
        // allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == 'rejected-filter-btn') {
        allCards.classList.add('hidden');
        renderRejected()
        // filterSection.classList.remove('hidden');
    }

}
function showOnly(id) {

    const allJobs = document.getElementById('allCards');
    const filterSection = document.getElementById('filtered-section');

    allJobs.classList.add('hidden');
    filterSection.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}

mainContainers.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // const jobCard = event.target.closest('.job-card');

        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobPosition = parentNode.querySelector('.job-position').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const jobBadge = parentNode.querySelector('.job-badge').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        parentNode.querySelector('.job-badge').innerText = 'Interview';


        const cardInfo = {
            // jobCard,
            jobTitle,
            jobPosition,
            jobType,
            jobBadge: 'Interview',
            jobDescription
        }
        //console.log(cardInfo);

        const cardExist = interViews.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!cardExist) {
            interViews.push(cardInfo);
        }

        rejecteds = rejecteds.filter(item => item.jobTitle != cardInfo.jobTitle)
        console.log(rejecteds);

        calculate()

        renderInterviews()
    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // const jobCard = event.target.closest('.job-card');

        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobPosition = parentNode.querySelector('.job-position').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const jobBadge = parentNode.querySelector('.job-badge').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        parentNode.querySelector('.job-badge').innerText = 'Rejected';

        console.log('rejecteds');

        const cardInfo = {
            // jobCard,
            jobTitle,
            jobPosition,
            jobType,
            jobBadge: 'Rejected',
            jobDescription
        }
        //console.log(cardInfo);

        const cardExist = rejecteds.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!cardExist) {
            rejecteds.push(cardInfo);
        }
        // rejecteds = 
        interViews = interViews.filter(item => item.jobTitle != cardInfo.jobTitle)
        calculate()

        renderRejected()
    }

})
function renderInterviews() {
    filterSection.innerHTML = '';
    for (let interview of interViews) {
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'flex justify-between p-10 shadow rounded-md job-card';
        div.innerHTML = `
        <div class="s">
                    <h2 class="job-title font-bold text-2xl mb-1">${interview.jobTitle}</h2>
                    <p class="job-position font-medium mb-5">${interview.jobPosition}</p>
                    <p class="job-type mb-5">${interview.jobType}</p>
                    <span class="job-badge btn bg-[#EEF4FF] font-normal mb-2">${interview.jobBadge}</span>
                    <p class="job-description mb-5">${interview.jobDescription}
                    </p>
                    <button class="interview-btn btn btn-outline btn-success hover:text-white mr-2">INTERVIEW</button>
                    <button class="rejected-btn btn btn-outline btn-error hover:text-white">REJECTED</button>
                </div>
                <div>
                    <button id="" class="btn rounded-full py-6 btn-delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `
        filterSection.appendChild(div);
    }
}
function renderRejected() {
    filterSection.innerHTML = '';
    for (let rejected of rejecteds) {
        console.log(rejected);
        let div = document.createElement('div');
        div.className = 'flex justify-between p-10 shadow rounded-md job-card';
        div.innerHTML = `
        <div class="s">
                    <h2 class="job-title font-bold text-2xl mb-1">${rejected.jobTitle}</h2>
                    <p class="job-position font-medium mb-5">${rejected.jobPosition}</p>
                    <p class="job-type mb-5">${rejected.jobType}</p>
                    <span class="job-badge btn bg-[#EEF4FF] font-normal mb-2">${rejected.jobBadge}</span>
                    <p class="job-description mb-5">${rejected.jobDescription}
                    </p>
                    <button class="interview-btn btn btn-outline btn-success hover:text-white mr-2">INTERVIEW</button>
                    <button class="rejected-btn btn btn-outline btn-error hover:text-white">REJECTED</button>
                </div>
                <div>
                    <button id="" class="btn rounded-full py-6 btn-delete"><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `
        filterSection.appendChild(div);
    }
}


const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        card.remove();
    });
});
