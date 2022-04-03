var randomnum1 = Math.floor(Math.random() * 3 +1);
console.log(randomnum1)

   
const maps = document.querySelector('.maps');
var randomnum = 0

var result;

var changer;

var temp;

var finishedMaps = []

 const mapArray = [
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8260931843406!2d-117.33010358447723!3d33.971309129437465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae4fb8630895%3A0x3e4ff3d2064cd864!2sOlmsted%20Hall!5e0!3m2!1sen!2sus!4v1648922327241!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.671987064374!2d-117.3281287844771!3d33.97526942922918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae5acf0fa1e7%3A0xa67be5dc0009c039!2sWinston%20Chung%20Hall%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1648922487545!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.710920751995!2d-117.33111188447727!3d33.97426892928203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae450af2287b%3A0xbaa369634cb8d948!2sCosto%20Hall%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1648922530713!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7217970991373!2d-117.33302633447724!3d33.973989429296616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae444bc20527%3A0xe4dc03686e36c225!2sCHASS%20Interdisciplinary%20Building%20North!5e0!3m2!1sen!2sus!4v1648922577737!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7634261291255!2d-117.33301464890897!3d33.97291962925787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae45f30457dd%3A0x430d68028cd34595!2sHumanities%20%26%20Social%20Sciences%20Bldg%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1648922615164!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.846483395057!2d-117.32842781399066!3d33.97078510068824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae51dd0a120f%3A0xa37e8155a14899c1!2sAnderson%20Hall%201%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1648922703137!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7006280398277!2d-117.32675024890881!3d33.97453342917304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae5a9a868621%3A0x28ddbb048b46c00f!2sOrbach%20Science%20Library!5e0!3m2!1sen!2sus!4v1648922738166!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7828510568265!2d-117.32959444890884!3d33.97242042928415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb737e066e825%3A0x68902746f367f71e!2sTomas%20Rivera%20Library!5e0!3m2!1sen!2sus!4v1648922783705!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7828510568265!2d-117.32959444890884!3d33.97242042928415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae45e78b4a0d%3A0xe8b9a64d3ee578dd!2sHinderaker%20Hall%2C%20141%20W%20Campus%20Dr%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1648922874098!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.635255000994!2d-117.33043974890882!3d33.97621332908465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae44e61ce23b%3A0x11dcfd80c03794f9!2sDepartment%20of%20Materials%20Science%20and%20Engineering!5e0!3m2!1sen!2sus!4v1648922914416!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.740409288106!2d-117.32752734890886!3d33.973511129226715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae500b7583d3%3A0xb083bed007ba3222!2sWebber%20Hall%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1648923242769!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13234.958226390812!2d-117.3341202477286!3d33.973533041979195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcaf85760d7db1%3A0x7f2dee65f0dcf572!2sGenomics%20Building!5e0!3m2!1sen!2sus!4v1648923291852!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.711971425944!2d-117.33275154890893!3d33.97424192918823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcafe3a3bfbaad%3A0x30f0f2a285bf372c!2sStudent%20Success%20Center%20-%20UCR!5e0!3m2!1sen!2sus!4v1648923476886!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6732128817134!2d-117.33107854890875!3d33.975237929135865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae44fd10c617%3A0xb5f1e25fc94f175f!2sSkye%20Hall!5e0!3m2!1sen!2sus!4v1648923538603!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    `
    <iframe id="wrap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6810463909987!2d-117.33400144890882!3d33.97503662914645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae442c17bbd7%3A0xf6898343633be744!2sArts%20Building!5e0!3m2!1sen!2sus!4v1648923581053!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `

];

if (randomnum1==3){
    changer = 1
} 

if (randomnum1==2){
    changer = 5
}

if (randomnum1==1){
    changer = 10
}

function update() {
    var timerVariable = setInterval(countUpTimer, 1000);
    const mapAppear = document.querySelector('.maps');
    const qr = document.querySelector('.qr');
    const classBtn = document.querySelector('.btn');
mapAppear.style.display = "list-item"
qr.style.display = "list-item"
classBtn.style.display = "none"



randomnum = Math.floor(Math.random() * 5 + changer);
temp = mapArray[randomnum]

let html = ''
const li = `
      
${temp}

`;
html += li;


maps.innerHTML = html
console.log(temp)
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
        
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    // ...
    html5QrcodeScanner.clear();
    // ^ this will stop the scanner (video feed) and clear the scan area.
}

html5QrcodeScanner.render(onScanSuccess);





function update2()
{

  
  
    var partsRiddles = ["What did", "the computer", "have for", "lunch?", "Why","is a","computer so","smart?", "What do you","get if you","cross a computer","with a hamburger?","A big mac","it listens to its motherboard","It has a byte!"];

    // Check if a value exists in the fruits array
    if(partsRiddles.indexOf(result) !== -1){
        alert("Value exists!")
        finishedMaps.push(temp)
console.log(result)
const tag1 = document.querySelector('#one');
const tag2 = document.querySelector('#two');
const tag3 = document.querySelector('#three');
const tag4 = document.querySelector('#four');

if (result=="What did" || result=="Why"){
tag1.textContent=result;
console.log(tag1.textContent)
}
        const index = mapArray.indexOf(temp);
        
if (index > -1) {
    mapArray.splice(index, 1); // 2nd parameter means remove one item only
}
        console.log(mapArray)
        update()
    } else{
        alert("This qr code is not part of the hunt")
        
    }
}

