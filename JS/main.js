let form = document.querySelector("form")
let rowsInput = document.getElementById("rowsInput")
let columnsInput = document.getElementById("columnsInput")

form.addEventListener("submit",function (e) {
   e.preventDefault();
   if (rowsInput.value == "" ) return rowsInput.focus()
   if (columnsInput.value == "" ) return columnsInput.focus()
   let table = document.createElement("table")
   for(i=1 ; i<=rowsInput.value ; i++) {
      let tr = document.createElement("tr")
      for(j=1 ; j<=columnsInput.value ; j++){
         let td = document.createElement("td");
         let txt = document.createTextNode(`${i} ${j}`)
         td.appendChild(txt)
         tr.appendChild(td)
      }
      table.appendChild(tr)
   }
   form.appendChild(table)
})
