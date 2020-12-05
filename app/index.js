const FORM = document.querySelector('#form')
let item = document.querySelector('#to-do-list')
const LIST = document.querySelector('#list')
spans = document.querySelectorAll(".span")
let items = document.getElementsByTagName("li")

FORM.addEventListener("submit", function (event) {
    event.preventDefault();
    if (item.value === '') {
        let alert = document.getElementById("alert")
        alert.className="d-block alert alert-danger"
        alert.addEventListener ("click", function () {
            alert.className = "d-none"
        })  
      } else {
        addToList ()
        return item.value = ''
      }
})

function addToList () {
    li = document.createElement('li')
    li.innerHTML = `<p class="abrakadabra mr-5">${item.value}</p> <span id="${Math.floor(Math.random() * 10000)}" class="span ml-auto" onclick="removeItem(this.id)">x</span>`
    li.className = "list-group-item d-flex align-items-center";
    LIST.appendChild(li)

    // yapıldı/yapılmadı işaretleyici
    li.addEventListener("click", function toggle() {
        let lis = document.getElementsByTagName("li")
        
        // this burada çokomelli
        this.classList.toggle("active");
        
    })
}



function removeItem(clicked_id) {
    
    span = document.getElementById(`${clicked_id}`)
    li = span.parentNode
    li.className = "d-none"
    
}

