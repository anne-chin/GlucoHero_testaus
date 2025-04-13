import { fetchData } from "./fetch";
const diaryentries = async (event) => {
    event.preventDefault();
  
    // Haetaan oikea formi
    const diary= document.querySelector('.diary');
  
    // Haetaan formista arvot
    const datetime = diary.querySelector('#timing').value.trim();
    const bs= diary.querySelector('#bs').value.trim();
    const dose= diary.querySelector('#dose').value.trim();
    const med = diary.querySelector('#insulin').value.trim();
    const caregiver = diary.querySelector('#giver').value.trim();
    const notes = diary.querySelector('#note').value.trim();
    //entry_date, bs_value, given_dose, giver, med_name, notes
    // Luodaan body lähetystä varten taustapalvelun vaatimaan muotoon
    const bodyData = {
      entry_date: datetime,
      bs_value: bs,
      given_dose: dose,
      giver: caregiver,
      med_name: med,
      notes: notes,
    };
    let headers = {};
  

    const token = localStorage.getItem('token');
  
    const options = {
        body: JSON.stringify(bodyData),
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      };
  
    // Endpoint
    const url = 'http://localhost:3000/api/entries';
  

    console.log(options);
  
    // Hae data
    const response = await fetchData(url, options);
  
    if (response.error) {
      console.error('Error adding a new entry:', response.error);
      return;
    }
  
    if (response.message) {
      console.log(response.message, 'success');
    }
  
    console.log(response);
    diaryForm.reset(); // tyhjennetään formi
  };

  const submitdiary = document.querySelector('#submitbtn');
submitdiary.addEventListener('click', diaryentries)
  