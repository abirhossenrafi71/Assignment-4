let interViews = [];
let rejecteds = [];
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

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('active-btn', 'text-white');

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

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
       // const jobCard = event.target.closest('.job-card');

        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobPosition = parentNode.querySelector('.job-position').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const jobBadge = parentNode.querySelector('.job-badge').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;


        const cardInfo = {
            jobCard,
            jobTitle,
            jobPosition,
            jobType,
            jobBadge,
            jobDescription
        }
        //console.log(cardInfo);

        const cardExist = interViews.find(item => item.jobTitle == cardInfo.jobTitle)
        parentNode.querySelector('.job-badge').innerText = 'Interview';
        if (!cardExist) {
            interViews.push(cardInfo);
        }
        console.log(interViews);
        renderInterviews()
    }

})
function renderInterviews() {
    filterSection.innerHTML = '';
    for (let interview of interViews) {
        let div = document.createElement('div');
        div.className = 'flex justify-between p-10 shadow rounded-md job-card';
        div.innerHTML = `
        <div class="s">
                    <h2 class="job-title font-bold text-2xl mb-1">DataViz Solutions</h2>
                    <p class="job-position font-medium mb-5">Data Visualization Specialist</p>
                    <p class="job-type mb-5">Boston, MA
                        •
                        Full-time
                        •
                        $125,000 - $165,000</p>
                    <span class="job-badge btn bg-[#EEF4FF] font-normal mb-2">Not Applied</span>
                    <p class="job-description mb-5">Transform complex data into compelling visualizations. Required skills: D3.js,
                        React,
                        and strong analytical thinking.
                    </p>
                    <button class=" btn btn-outline btn-success hover:text-white mr-2">INTERVIEW</button>
                    <button class="btn btn-outline btn-error hover:text-white">REJECTED</button>
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