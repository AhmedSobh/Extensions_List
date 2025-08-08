const extension_content = document.getElementById("extension-content");
const btns = document.querySelectorAll(".category-btn");

const arr = [
    {
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundraies",
    img:"assets/1.jpeg"
    },
    {
    name: "StyleSpy",
    description: "Quickly inspect page layouts and visualize element boundraies",
    img:"assets/2.jpg"
    },
    {
    name: "SpeedBoost",
    description: "Quickly inspect page layouts and visualize element boundraies",
    img:"assets/3.jpg"
    },
    {
    name: "JSONWizard",
    description: "Quickly inspect page layouts and visualize element boundraies",
    img:"assets/4.jpg"
    },
    {
    name: "TabMaster Pro",
    description: "Quickly inspect page layouts and visualize element boundraies",
    img:"assets/5.jpg"
    },
    {
    name: "ViewportBuddy",
    description: "Quickly inspect page layouts and visualize element boundraies",
    img:"assets/6.jpg"
    },
    
]



function render() {
  extension_content.innerHTML = arr.map(elm => `
    <div class="extension-content-div all inactive">
      <div class="content-con">
        <div class="img-con"><img src="${elm.img}" alt=""></div>
        <div class="details-con">
          <h1>${elm.name}</h1>
          <h5>${elm.description}</h5>
        </div>
      </div>
      <div class="btn-con">
        <div class="left"><button class="remove-btn">Remove</button></div>
        <div class="right">
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  `).join('');
}

function applyFilter(category) {
    document.querySelectorAll('.extension-content-div').forEach(item => {
        if (category === 'all') { 
            item.style.display = '';
        } else {
            item.style.display = item.classList.contains(category) ? '' : 'none';
        }
    })
}

function setupCheckboxes() {
    document.querySelectorAll('.extension-content-div input[type="checkbox"]').forEach(chk => {
        const parent = chk.closest('.extension-content-div');
        chk.checked = parent.classList.contains('active');

        chk.addEventListener('change', function (e) {
            const p = e.target.closest('.extension-content-div');
            if (e.target.checked) {
                p.classList.remove('inactive');
                p.classList.add('active');
            } else {
                p.classList.remove('active');
                if (!p.classList.contains('inactive')) p.classList.add('inactive');
            }
            const current = document.querySelector('.category-btn.active')?.id || 'all';
            applyFilter(current);
        })
    })
}

function setupButtons() {
    btns.forEach(button => {
        button.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            applyFilter(button.id);
        })
    })
}

function setupRemoveBtn() {
    document.querySelectorAll('.remove-btn').forEach(btn => { 
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.extension-content-div');
            item.remove();
         });
    });
}

render();
setupButtons();
setupCheckboxes();
setupRemoveBtn();
applyFilter(document.querySelector('.category-btn.active')?.id || 'all');
