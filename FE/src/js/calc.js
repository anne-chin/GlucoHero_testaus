import { fetchData } from "./fetch";

const calc = async () => {
    const diaryContainer = document.getElementById('diary');
    console.log(diaryContainer);
  
   
    const url = 'http://localhost:3000/api/med/';
    let headers = {};
  

    const token = localStorage.getItem('token');
  

    headers = {Authorization: `Bearer ${token}`};
  
 
    const options = {
      headers: headers,
    };
    console.log(options);

    const response = await fetchData(url, options);

    if (response.error) {
        console.error('Error getting personal data:', response.error);
        return(row[0]);
      }
    
      if (response.message) {
        console.log(response.message, 'success');
      }
      console.log(response);

      let bs_l = response.bs_l;
      let bs_h = response.bs_h;
      let d_l = response.dosage_l;
      let d_h = response.dosage_h;
      let notes = response.notes;

      let bs = parseInt(document.querySelector("#bs").value);

    if(bs > bs_l) document.querySelector("#result").innerHTML = ` 
        <p>Please give ${d_l} IU</p>` ;
        else if (bs > bs_h) document.querySelector("#result").innerHTML = ` 
        <p>Please give ${d_h} IU</p>` ;
        else if (bs < bs_l)document.querySelector("#result").innerHTML = ` 
        <p>ERROR! CHECK CARE INSTUCTION</p><br/><p>Instruction: ${notes}</p>` ;

}
      
const calcresult = document.querySelector('#calcbtn');
calcresult.addEventListener('click', calc)

