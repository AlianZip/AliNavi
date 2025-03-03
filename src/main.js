const { invoke } = window.__TAURI__.core;

const tabsContainer = document.querySelector('.tabs');
const addTabButton = document.getElementById('add-tab');
const btnBack = document.getElementById('btn-back');
const btnForward = document.getElementById('btn-forward');
const btnRefresh = document.getElementById('btn-refresh');
const inputPath = document.querySelector('#input-path input');



async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

// window.addEventListener("DOMContentLoaded", () => {
//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document.querySelector("#greet-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     greet();
//   });
// });


function createTab(title = `Вкладка ${document.querySelectorAll('.tab-button').length + 1}`) {
  const tabButton = document.createElement('button');
  tabButton.classList.add('tab-button');
  tabButton.textContent = title;

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-tab');
  closeButton.textContent = '×';
  tabButton.appendChild(closeButton);

  //Delete tabs
  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const allTabs = document.querySelectorAll('.tab-button');
    
    //2 or more tabs
    if (allTabs.length > 1) {
      tabButton.remove();
      adjustTabsWidth();

      //Active next if now active is delete
      if (tabButton.classList.contains('active')) {
        const nextTab = document.querySelector('.tab-button');
        if (nextTab) {
          nextTab.classList.add('active');
        }
      }
    } else {
      alert('Нельзя удалить последнюю вкладку!');
    }
  });

  //Active tab
  tabButton.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    tabButton.classList.add('active');
  });

  //Add new tab
  tabsContainer.insertBefore(tabButton, addTabButton);
  adjustTabsWidth();
}

function adjustTabsWidth() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const containerWidth = tabsContainer.offsetWidth;
  const totalTabs = tabButtons.length;

  const minWidth = Math.max(100, containerWidth / totalTabs);
  tabButtons.forEach(tab => {
    tab.style.flexBasis = `${minWidth}px`;
  });
}

addTabButton.addEventListener('click', () => {
  createTab();
});

createTab('Вкладка 1');
document.querySelector('.tab-button').classList.add('active');


//Back
btnBack.addEventListener('click', () => {
  console.log('Кнопка "Назад" нажата');
  
});

//Forward
btnForward.addEventListener('click', () => {
  console.log('Кнопка "Вперёд" нажата');
  
});

//Refresh
btnRefresh.addEventListener('click', () => {
  console.log('Кнопка "Обновить" нажата');

});



inputPath.addEventListener('focus', () => {
  inputPath.removeAttribute('readonly');
  inputPath.style.backgroundColor = 'white';
  inputPath.style.color = '#333';
});

inputPath.addEventListener('blur', () => {
  inputPath.setAttribute('readonly', true);
  inputPath.style.backgroundColor = '#f9f9f9';
  inputPath.style.color = '#666';
});