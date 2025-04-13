import {fetchData} from './fetch';

const getEntries = async () => {

  
  // haetaan alue joho luodaan kortit
  const diaryContainer = document.getElementById('diary');
  console.log(diaryContainer);

  // haetaan data joko json tai fetch rajapinnasta
  const url = 'http://localhost:3000/api/entries/';
  let headers = {};

  // Nyt haetaan Token localstoragesta
  const token = localStorage.getItem('token');

  // Muodostetaa nyt headers oikeaan muotoon
  headers = {Authorization: `Bearer ${token}`};

  // Options
  const options = {
    headers: headers,
  };

  console.log(options);

  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Error getting personal data:', response.error);
    return;
  }

  if (response.message) {
    console.log(response.message, 'success');
  }
  console.log(response);
  console.log(response);

  // looppi jossa luodaan yksittäiset kortit
  diaryContainer.innerHTML = '';
  response.forEach((entry) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');

    const img = document.createElement('img');
    img.src = '../img/checkhis.png';
    img.alt = 'Diary Image';
    cardImg.appendChild(img);

    const cardDiary = document.createElement('div');
    cardDiary.classList.add('containter');
    cardDiary.innerHTML = `
      <p><strong>Date:</strong> ${entry.entry_date}</p>
      <p><strong>Blood sugar value:</strong> ${entry.bs_value}</p>
      <p><strong>Medicine:</strong> ${entry.med_name}</p>
      <p><strong>Given dose:</strong> ${entry.given_dose} IU</p>
      <p><strong>Giver:</strong> ${entry.giver}</p>
      <p><strong>Notes:</strong> ${entry.notes}</p>
    `;

    card.appendChild(cardImg);
    card.appendChild(cardDiary);
    diaryContainer.appendChild(card);
  });
};

const getEntriesBtn = document.querySelector('.get_entries');
getEntriesBtn.addEventListener('click', getEntries);
