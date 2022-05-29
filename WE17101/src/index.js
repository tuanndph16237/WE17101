import Navigo from 'navigo'; //import navigo
import Header from "./components/Header";
import Footer from "./components/Footer";
//import 'bootstrap';
import Home from './pages/home';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './pages/news';

//Khoi tao router

const router = new Navigo('/', { linksSelector: 'a' })

function render(content) {

    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = content;
    document.querySelector('#footer').innerHTML = Footer.render();
}
router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
});
router.resolve();


//render();
// --------------------------------


// arrow function: const ten_ham = () => {};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};

const s = () => 2 + 3;

function sum(a, b) {
    return a + b;
}; // cú pháp thông thường
const sum1 = (a, b) => {
    return a + b;
}; // arrow function có return
const sum2 = (a, b) => a + b; // nếu chỉ có return

const display = a => console.log(a); // nếu chỉ có 1 tham số
const display1 = a => alert(a);
// Callback: hàm được truyền vào dưới dạng 1 đối số, và thực thi trong 1 hàm

// const abc = (print) => {
//     const result = sum(2, 3);
//     // có nhiều cách hiển thị khác nhau, và phải nhận kq hiển thị từ result
//     print(result);
//     // display(result);
//     // display1(result);
// };

// // abc(display);
// abc(display1);

const loadScript = (src, callback) => {
    const scriptE = document.createElement('script');
    scriptE.src = src;
    scriptE.onload = () => callback();
};

const khoitaosv = () => {
    var sinhVien = {};
}

loadScript('moment.min.js', () => {
    var sinhVien = {};
    loadScript('https://cdn.com', () => {
        // tinh tuoi sv
        loadScript('https://cnd1.com', () => {
            // 123123123
        })
    })
})


// đếm số chữ cái trong thông tin user
const countString = (string, callback) => { // mang countString2 truyền vào
    setTimeout(() => {
        console.log(string);
        callback(string);
    }, 1000); //sau khi kết thúc 1s thì mới chạy lần lượt cả 2 đoạn logic
};
const countString2 = (string) => console.log(string);

const receiveUser = (user, callback, callback2) => {
    // Lấy ra tên
    const username = user.name;
    // nhận tham số truyền vào là 1 trong 2 cách hiển thị tên
    callback(username, callback2);
    // countString(username);
};

// receiveUser({name: 'tuannda3'}, countString); // gọi trước nhưng chậm 1 giây
// receiveUser({name: 'tuannda4'}, countString2);



// Promise
// let a = []; // 1
// setTimeout(() => {
//     a = [1, 2, 3]; // 2
// }, 1000);
// // console.log(a); // 3

// Promise là đối tượng xử lý bất đồng bộ ở es6
// resolve thực thi khi đúng, và gtrị truyền vào resolve sẽ trả ở then
// reject thực thi khi sai, và giá trị truyền vào reject sẽ trả ở catch
const setValueA = () => new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
        if (status) {
            resolve([1, 2, 3]);
        } else {
            reject('bị lỗi');
        }
        // a = [1, 2, 3];
    }, 1000);
});

let a = [];

setValueA()
    .then((data) => { data.push(4); return data })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));;

// console.log(a);
// async/await