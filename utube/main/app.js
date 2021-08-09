// đóng mở user
// let user = document.querySelector(".header-user-click");
// let menu = document.querySelector(".menu-user");
// user.onclick = () => {
//   menu.classList.toggle("disable");
// };
//bấm ra ngoài thì đóng cửa sổ login
let x = document.getElementById("login-header");
let hideid = document.getElementById("box-click-login-header");
console.log(x.children[0].classList);
document.onclick = function(e) {
    if (e.target.id == "login-header") {
        console.log(e.target);
        x.children[0].classList.toggle("disable");
    } else {
        x.children[0].classList.add("disable");
        console.log("aaaa");
    }
};

//dong mo sidebar
const hidMenuBtnIn = document.getElementById('js-hidden-btn-in');
const hidMenuBtnOut = document.getElementById('js-hidden-btn-out');
const hidMenu = document.getElementsByClassName('nav-hid');

// fade in
hidMenuBtnIn.onclick = () => {
    hidMenu[0].classList.toggle('disable');
    // hidMenu[0].classList.replace('fade-out', 'fade-in');

}

// fade out
hidMenuBtnOut.onclick = () => {
    // hidMenu[0].classList.replace('fade-in', 'fade-out');
    hidMenu[0].classList.toggle('disable');
}