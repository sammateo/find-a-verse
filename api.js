const button = document.querySelector('#button');


button.addEventListener('click',getVerses);

async function getVerses(){
    let book = document.querySelector('#book');
    let chap = document.querySelector('#chapter');
    let verse = document.querySelector('#verse');
    let ref= document.querySelector('#ref-response');
    let text = document.querySelector('#text-response');
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
    
    
    ref.innerHTML='Reference: '+ bibleObj.reference;
    // text.innerHTML='Text: '+ bibleObj.text;
    text.innerHTML='Text: ' + display;
    // console.log();
    
}
