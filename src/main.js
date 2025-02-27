const { invoke } = window.__TAURI__.core;


const tabsContainer = document.querySelector('.tabs');
const addTabButton = document.getElementById('add-tab');


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

//Func for add new tab
function createTab(title = `Вкладка ${document.querySelectorAll('.tab-button').length + 1}`) {
  //Create new tab
  const tabButton = document.createElement('button');
  tabButton.classList.add('tab-button');
  tabButton.textContent = title;

  //Add close-btn
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-tab');
  closeButton.textContent = '×';
  tabButton.appendChild(closeButton);

  //Add event for close
  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const allTabs = document.querySelectorAll('.tab-button');
    
    // Проверяем, есть ли хотя бы две вкладки
    if (allTabs.length > 1) {
      tabButton.remove();
      adjustTabsWidth();
  
      // Если удаляем активную вкладку, делаем активной следующую
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

  //Event for active tab
  tabButton.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    tabButton.classList.add('active');
  });

  //add tab to container
  tabsContainer.appendChild(tabButton);
  adjustTabsWidth();
}

//Func for adjust tabs width
function adjustTabsWidth() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const containerWidth = tabsContainer.offsetWidth;
  const totalTabs = tabButtons.length;

  //Min width for tab
  const minWidth = Math.max(100, containerWidth / totalTabs);
  tabButtons.forEach(tab => {
    tab.style.flexBasis = `${minWidth}px`;
  });
}

//add event to create tab
addTabButton.addEventListener('click', () => {
  createTab();
});

//Create 1 tab
createTab('Вкладка 1');
document.querySelector('.tab-button').classList.add('active');