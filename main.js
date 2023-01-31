const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1')
const paper2 = document.querySelector('#p2')
const paper3 = document.querySelector('#p3')

prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

let currentState = 1;
let numOfPapers = 3;
let maxState = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if(currentState < maxState) { 
        switch(currentState) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                closeBook(false);
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            default: 
                throw new Error("unkown state");    
        }

        currentState++;
    }
}

function goPrevious() {
    if(currentState > 1) {
        switch(currentState) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4: 
                openBook()
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
        }

        currentState--;
    }
}
let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const birth = document.getElementById('birth');
    const sex = document.getElementById('sex');
    const phone = document.getElementById('phone');
    const photo = document.getElementById('photo');
    const color = document.getElementById('color');
    const hour = document.getElementById('hour');
    const doornumber = document.getElementById('doornumber');
    const townname = document.getElementById('townname');
    const zodiacsign = document.getElementById('zodiacsign');
    const number = document.getElementById('number');
    const thingsyoulikemostly = document.getElementById('thingsyoulikemostly');
    const dislikethingst = document.getElementById('dislikethingst');
    const funniestmoment = document.getElementById('funniestmoment');
    const goal = document.getElementById('goal');
    const suggestionstome = document.getElementById('suggestionstome');
    
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Birth: ' +birth.value + ' \r\n ' + 
        'Sex: ' + sex.value + ' \r\n ' + 
        'Phone: ' + phone.value + ' \r\n ' + 
        'Photo: ' + photo.value + ' \r\n ' + 
        'Color: ' + color.value + ' \r\n ' + 
        'Hour: ' + hour.value + ' \r\n ' + 
        'Address: ' + doornumber.value + ' \r\n ' + 
        'Townname: ' + townname.value + ' \r\n ' + 
        'Zodiac_Sign: ' + zodiacsign.value + ' \r\n ' + 
        'Favorite_Number: ' + number.value + ' \r\n ' + 
        'Things_You_Like_mostly: ' + thingsyoulikemostly.value + ' \r\n ' + 
        'Dislike_Thingst: ' + dislikethingst.value + ' \r\n ' + 
        'Funniest_Moment: ' + funniestmoment.value + ' \r\n ' + 
        'Goal: ' + goal.value + ' \r\n ' + 
        'Suggestions_To_Me: ' + suggestionstome.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'friend.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}