let search = document.querySelector('input');
let show_results = document.querySelector('#show_results');

let results = [
    "Bootstrap",
    "Laravel",
    "Tailwind",
    "Carlos Framework",
    "Symfony",
    "Docker",
    "Django",
    "Go",
    "Kubernetes",
];

search.addEventListener('input', ()=>{
    show_results.innerHTML = "";
    if (search.value.length > 0) {
        searchResult = results.filter(function(value) {
            return value.toLowerCase().indexOf(search.value.toLowerCase()) >= 0;
        });
    
        for(let i = 0; i < searchResult.length; i++){
            let li = document.createElement('li');
            li.innerText = searchResult[i];
            show_results.appendChild(li);
        }
    }
});