let data;




fetch(`./kniznica.json`)

      .then(response => response.json())

      .then(json => {

            data = json;

            vyklesli();

            console.log(json);

        })




function vyklesli(){

     

      let table = document.getElementById("vypis_poloziek");









      //vypisovanie dat z kniznica.json
      for(const kniznica of data) {

            let tr = document.createElement("tr");
            let td_row = document.createElement("td");
            let td_name = document.createElement("td");
            let td_year = document.createElement("td");
            let td_type = document.createElement("td");

            console.log(kniznica)

            td_row.innerHTML = `${kniznica.id}`
            td_name.innerHTML = `${kniznica.name}`
            td_year.innerHTML = `${kniznica.year}`
            td_type.innerHTML = `${kniznica.type}`

            tr.appendChild(td_row);
            tr.appendChild(td_name);
            tr.appendChild(td_year);
            tr.appendChild(td_type);
            table.appendChild(tr);

      }

}