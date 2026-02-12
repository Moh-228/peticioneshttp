

const fetchQuote = async()=>{
    const res = await fetch('https://rickandmortyapi.com/api/character/1');
    const data = await res.json();
    console.log(data);
    return data;
}


export const RickmortyApp = async(element)=>{
    document.querySelector('#app-title').innerHTML = 'Rick and Morty App'
    element.innerHTML = 'Loading...'
    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data'
}