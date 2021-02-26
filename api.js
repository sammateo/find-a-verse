const button = document.querySelector('#button');

async function getDaily(){
    const dayData = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json');
    let dailyObj = await dayData.json();
    dailyObj = dailyObj.verse.details;
    let dailyBook = dailyObj.reference.split(" ");
    let dailyAddress=dailyBook[1].split(":");
    dailyBook=dailyBook[0];
    dailyChapter=dailyAddress[0];
    dailyVerse=dailyAddress[1];


    let book = document.querySelector('#book');
    let chap = document.querySelector('#chapter');
    let verse = document.querySelector('#verse');

    book.value=dailyBook;
    chap.value=Number(dailyChapter);
    verse.value=dailyVerse;
    console.log(dailyBook);
    console.log(dailyChapter);
    console.log(dailyVerse);

    
}


window.onload = getDaily;
button.addEventListener('click',getVerses);

async function getVerses(){
    let book = document.querySelector('#book');
    let chap = document.querySelector('#chapter');
    let verse = document.querySelector('#verse');
    let ref= document.querySelector('#ref-response');
    let text = document.querySelector('#text-response');
    let respcontain = document.querySelector('#response-container');
    book = book.value;
    chap = chap.value;
    verse= verse.value;
    const bibleData = await fetch('https://bible-api.com/'+book+' '+chap+':'+verse);
    const bibleObj = await bibleData.json();
    let i =0;
    let display="";
    while(bibleObj.verses[i]){
        display += '['+ bibleObj.verses[i].verse+']' + ' ' + bibleObj.verses[i].text +' ';
        i++;
    }
    
    respcontain.style.display="block";
    ref.innerHTML='<h3>Reference:</h3> '+ bibleObj.reference;
    // text.innerHTML='Text: '+ bibleObj.text;
    text.innerHTML='<h3>Text:</h3> ' + display;
    console.log(bibleObj);
    
}
