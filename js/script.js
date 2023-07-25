const servises = [
    {
        title: "Бухгалтерские услуги в вашем городе",
        button: "Заказать услугу",
    },
    {
        title: "Учет в 1С",
        button: "Заказать услугу",
    },
    {
        title: "Расчет зарплат",
        button: "Заказать услугу",
    },
    {
        title: "Оформление налоговых отчетов",
        button: "Заказать услугу",
    },
];


//
const service_cards = document.querySelector(".service_cards");
const servise_left_btn = document.querySelector(
    ".servise_triggers > .left_button"
);
servise_left_btn.addEventListener("click", go_left_service);

const servise_right_btn = document.querySelector(
    ".servise_triggers > .right_button"
);
servise_right_btn.addEventListener("click", go_right_service);

const servise_navigator_move_panel = document.querySelector(
    ".servise_navigator_move_panel"
);
const sponsor_navigator_move_panel = document.querySelector(
    ".sponsor_navigator_move_panel"
);
const thanks_navigator_move_panel = document.querySelector(
    ".thanks_navigator_move_panel"
);

// определяю родитея   для установки врем родителям выравнивание
const wrapper = document.querySelectorAll(".wrapper");
for (const elem of wrapper) {
    elem.parentElement.classList.add("parent");
}
// -------------------------------header
const togglsContainer= document.querySelector('.burger-menu-toggle');
const nav_menu= document.querySelector('.nav-menu-container');
const toggle1= document.querySelector('.toggle-img1');
const toggle2= document.querySelector('.toggle-img2');
const toggle3= document.querySelector('.toggle-img3');

togglsContainer.addEventListener('click',()=>{
    toggle1.classList.toggle('left')
    toggle2.classList.toggle('none')
    toggle3.classList.toggle('right')
    nav_menu.classList.toggle('nav-menu-inactive')
    togglsContainer.classList.toggle('burger-menu-click')
})

// спонсори
const sponsors_arr = [
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
    "./img/sponsor.svg",
];

const sponsors_container = document.querySelector(".sponsors_container");
const triggers_left_button = document.querySelector(
    ".sponsor_triggers > .left_button"
);
const triggers_right_button = document.querySelector(
    ".sponsor_triggers > .right_button"
);
//подяки
const thanks_arr = [
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
        avatar: "./img/avatar.svg",
        name: "Анна Петрова",
        job: "administrator",
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
        avatar: "./img/avatar.svg",
        name: "Анна Петрова",
        job: "administrator",
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
        avatar: "./img/avatar.svg",
        name: "Анна Петрова",
        job: "administrator",
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
        avatar: "./img/avatar.svg",
        name: "Анна Петрова",
        job: "administrator",
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
        avatar: "./img/avatar.svg",
        name: "Анна Петрова",
        job: "administrator",
    },
];

let servis_index = 0;
let sponsor_index = 0;
let thanks_index = 0;

// ------------------------------------------универс функция сдвигающая блок
// универс функция сдвигающая блок
function move_block_servise(card_container, index, pixel) {
    card_container.style.left = `${-1 * index * pixel}px`;
}

//------------------------------------------- рендер первой галлереи service
let service_navi_arr = document.querySelectorAll(".move_item");

for (let i = 0; i < servises.length; i++) {
    const service_container = document.createElement("div");
    const title_el = document.createElement("p");
    const btn_el = document.createElement("button");

    service_container.classList.add("service_item");
    btn_el.classList.add("button");
    title_el.classList.add("title");

    title_el.innerText = servises[i].title;
    btn_el.innerText = servises[i].button;

    service_container.append(title_el, btn_el);
    service_cards.append(service_container);

    // рендер кружочков

    const buttonElem = document.createElement("button");
    buttonElem.innerText = "";
    buttonElem.classList.add("move_item", "move");
    servise_navigator_move_panel.append(buttonElem);
    if (+i === servis_index) {
        buttonElem.classList.add("active");
    }
    buttonElem.addEventListener("click", () => {
        servis_index = +i;
        move_block_servise(service_cards, servis_index, 1110);
        document
            .querySelectorAll(".move_item")
            .forEach((el) => el.classList.remove("active"));
        buttonElem.classList.add("active");
    });
}

const carusel_buttons = document.querySelectorAll(".move_item");

function go_left_service() {
    if (servis_index != 0) {
        servis_index--;
        carusel_buttons[servis_index + 1].classList.remove("active");
        carusel_buttons[servis_index].classList.add("active");
        move_block_servise(service_cards, servis_index, 1110);
    } else {
        servis_index = servises.length - 1;
        carusel_buttons[0].classList.remove("active");
        carusel_buttons[servis_index].classList.add("active");
        move_block_servise(service_cards, servis_index, 1110);
    }
}
function go_right_service() {
    if (servis_index < servises.length - 1) {
        servis_index++;
        carusel_buttons[servis_index - 1].classList.remove("active");
        carusel_buttons[servis_index].classList.add("active");
        move_block_servise(service_cards, servis_index, 1110);
    } else {
        servis_index = 0;
        carusel_buttons[carusel_buttons.length - 1].classList.remove("active");
        carusel_buttons[servis_index].classList.add("active");
        move_block_servise(service_cards, servis_index, 1110);
    }
}

const service_grid = document.querySelector(".service_grid");

for (let i = 0; i < 6; i++) {
    const servContainer = document.createElement("div");
    const servP = document.createElement("p");

    servContainer.className = "servContainer";
    servP.innerText = "Бухгалтерское  обслуживание";
    servContainer.append(servP);
    service_grid.append(servContainer);
}
// about__us_grid-----------------------------

const about__us_grid = document.querySelector(".about__us_grid");

for (let i = 0; i < 4; i++) {
    const about__us_grid_div = document.createElement("div");
    const deals_count = document.createElement("h3");
    const deals_info = document.createElement("p");
    const link_cases = document.createElement("a");

    deals_count.innerText = 90;
    deals_info.innerText = `Завершено  крупных сделок`;
    link_cases.innerText = `Все кейсы`;
    link_cases.href = `#`;

    about__us_grid_div.classList.add("about_us_item");

    about__us_grid_div.append(deals_count, deals_info, link_cases);
    about__us_grid.append(about__us_grid_div);
}

//--------------------------------------- рендер секции спонсоры

for (let i = 0; i < sponsors_arr.length; i++) {
    const imgEl = document.createElement("img");
    imgEl.src = sponsors_arr[i];
    imgEl.alt = `sponsors img`;
    imgEl.classList.add("sponsor-img");

    sponsors_container.append(imgEl);
}

// кружлчки для спонсоров
sponsors_container.style.left = 0;

let screenWidth = window.innerWidth;
function widthSponsors() {
    if (screenWidth <= 768) {
        return 2044;
    } else {
        return 1140;
    }
}

function widthTanks() {
    if (screenWidth <= 768) {
        // console.log(600);
        return 600;
    } else {
        // console.log(1100);
        return 1100;
    }
}

let sponsors_counter = Math.ceil(sponsors_arr.length / 4);
for (let i = 0; i < sponsors_counter; i++) {
    const buttonEl = document.createElement("button");
    buttonEl.innerText = "";
    buttonEl.classList.add("sponsors_move_item", "move");
    sponsor_navigator_move_panel.append(buttonEl);
    if (+i === sponsor_index) {
        buttonEl.classList.add("active");
    }
    buttonEl.addEventListener("click", () => {
        sponsor_index = +i;
        move_block_servise(sponsors_container, sponsor_index, widthSponsors());
        document.querySelectorAll(".sponsors_move_item").forEach((el) => {
            el.classList.remove("active");
            buttonEl.classList.add("active");
        });
    });
}

const sponsors_carusel_buttons = document.querySelectorAll(
    ".sponsors_move_item"
);

function go_left_sponsors() {
    if (sponsor_index != 0) {
        sponsor_index--;
        sponsors_carusel_buttons[sponsor_index + 1].classList.remove("active");
        sponsors_carusel_buttons[sponsor_index].classList.add("active");
        // move_block_servise(sponsors_container,sponsor_index, 1140)
        move_block_servise(sponsors_container, sponsor_index, widthSponsors());
    } else {
        sponsor_index = Math.round(sponsors_arr.length / 4);
        sponsors_carusel_buttons[0].classList.remove("active");
        sponsors_carusel_buttons[sponsor_index].classList.add("active");
        move_block_servise(sponsors_container, sponsor_index, widthSponsors());
    }
}

function go_right_sponsors() {
    console.log(sponsor_index);

    if (sponsor_index < Math.round(sponsors_arr.length / 4)) {
        sponsor_index++;
        sponsors_carusel_buttons[sponsor_index - 1].classList.remove("active");
        sponsors_carusel_buttons[sponsor_index].classList.add("active");
        move_block_servise(sponsors_container, sponsor_index, widthSponsors());
    } else {
        sponsor_index = 0;
        sponsors_carusel_buttons[
            sponsors_carusel_buttons.length - 1
        ].classList.remove("active");
        sponsors_carusel_buttons[sponsor_index].classList.add("active");
        move_block_servise(sponsors_container, sponsor_index, widthSponsors());
    }
}

triggers_left_button.addEventListener("click", go_left_sponsors);
triggers_right_button.addEventListener("click", go_right_sponsors);

// ----------------------------------------------------------------------thanks

const thanks_container = document.querySelector(".thanks_container");
thanks_container.style.left = 0;

for (const obj in thanks_arr) {
    const thanksEl = document.createElement("div");
    const textEl = document.createElement("p");
    const personDiv = document.createElement("div");
    const avatarEl = document.createElement("img");
    const personInfo = document.createElement("div");
    const personNameEl = document.createElement("p");
    const personJobEl = document.createElement("p");

    textEl.innerText = thanks_arr[obj].text;
    avatarEl.src = thanks_arr[obj].avatar;
    avatarEl.alt = thanks_arr[obj].name;
    personNameEl.innerText = thanks_arr[obj].name;
    personJobEl.innerText = thanks_arr[obj].job;

    thanksEl.classList.add("thanks_item");
    personDiv.classList.add("thanks_info_div");
    personNameEl.classList.add("name-title");
    personJobEl.classList.add("job");

    personInfo.append(personNameEl, personJobEl);
    personDiv.append(avatarEl, personInfo);
    thanksEl.append(textEl, personDiv);
    thanks_container.append(thanksEl);

    // кружочки
    const buttonEl = document.createElement("button");
    buttonEl.innerText = "";
    buttonEl.classList.add("thanks_move_item", "move");

    thanks_navigator_move_panel.append(buttonEl);
    if (+obj === thanks_index) {
        buttonEl.classList.add("active");
    }

    buttonEl.addEventListener("click", () => {
        thanks_index = +obj;
        move_block_servise(thanks_container, thanks_index, widthTanks());

        document.querySelectorAll(".thanks_move_item").forEach((el) => {
            el.classList.remove("active");
            buttonEl.classList.add("active");
        });
    });
}

const thanks_carusel_buttons = document.querySelectorAll(".thanks_move_item");
const thanks_left = document.querySelector(".thanks_triggers > .left_button");
const thanks_right = document.querySelector(".thanks_triggers > .right_button");

thanks_left.addEventListener("click", go_left_thanks);
thanks_right.addEventListener("click", go_right_thanks);
function go_left_thanks() {
    if (thanks_index != 0) {
        thanks_index--;
        thanks_carusel_buttons[thanks_index + 1].classList.remove("active");
        thanks_carusel_buttons[thanks_index].classList.add("active");
        move_block_servise(thanks_container, thanks_index, widthTanks());
    } else {
        thanks_index = thanks_arr.length - 1;
        thanks_carusel_buttons[0].classList.remove("active");
        thanks_carusel_buttons[thanks_index].classList.add("active");
        move_block_servise(thanks_container, thanks_index, widthTanks());
    }
}

function go_right_thanks() {
    if (thanks_index < thanks_arr.length - 1) {
        thanks_index++;
        thanks_carusel_buttons[thanks_index - 1].classList.remove("active");
        thanks_carusel_buttons[thanks_index].classList.add("active");
        move_block_servise(thanks_container, thanks_index, widthTanks());
    } else {
        thanks_index = 0;
        thanks_carusel_buttons[
            thanks_carusel_buttons.length - 1
        ].classList.remove("active");
        thanks_carusel_buttons[thanks_index].classList.add("active");
        move_block_servise(thanks_container, thanks_index, widthTanks());
    }
}
