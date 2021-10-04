'use strict';

// import vendor files
import './src/js/app';

// import css files
import './src/scss/main.scss';

const uploadArea = document.querySelector('.upload-area');
const uploadedItems = document.querySelector('.uploaded-items');
const input = document.querySelector('#addNew');
const inputButton = document.querySelector('.add-new')

// add new file
inputButton.addEventListener('click', (event) => {
    handleDragArea(true)
    input.click();
})

// display file on file upload
input.addEventListener('change', (event) => {
    let file = event.target.files[0]
    displayFile(file);
    handleDragArea(false)
})

// dragover event
uploadArea.addEventListener('dragover', (event) => {
    handleDragArea(true);
    event.preventDefault()
})

// dragleave event
uploadArea.addEventListener('dragleave', (event) => {
    handleDragArea(false);
})

// drop event
uploadArea.addEventListener('drop', (event) => {
    event.preventDefault();
    let file = event.dataTransfer.files[0]

    displayFile(file);
});

// Handle drag over and drag leave effect
function handleDragArea(param) { 
    if(param == true){
        uploadArea.classList.add('active')
    } else {
        uploadArea.classList.remove('active')
    }
}

// display uploadedFile
function displayFile(file) { 
    let fileType = file.type;
    let validExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
    let fileURL;

    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
            fileURL = fileReader.result;
            addNewfile(fileURL);
        }
        fileReader.readAsDataURL(file)
    }else {
        alert("File type not supported");
        handleDragArea(false);
    }
}

// Append New File in HTML
function addNewfile(file) {
    let imgTag = `
    <div class="uploaded-item">
        <img src="${file}" alt="">
        <div class="remove-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
    </div>`;
    uploadedItems.insertAdjacentHTML('beforeend', imgTag);
}

// remove item
let removeBtn = document.getElementsByClassName('remove-icon')

// if(removeBtn){
//     removeBtn.addEventListener('click', (event) => {
//         console.log(event.target)
//     });
// }

if(removeBtn){
    for (var i = 0; i < removeBtn.length; i++) {
        console.log(i);
        // Here we have the same `onclick`
        removeBtn[i].addEventListener('click', function (event) {
            console.log('Element ' + event.target.innerHTML + ' was just clicked')
            let item = event.target.closest('.uploaded-item');
            console.log(item);
            item.remove();
        })
    }
}

