import Navigo from 'navigo'; //import navigo
import Header from "./components/Header";
import Footer from "./components/Footer";
//import 'bootstrap';
import Home from './components/home';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './components/news';
import Nav from './components/nav';
//Khoi tao router

const router = new Navigo('/', { linksSelector: 'a' })

function render(content) {

    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = content;
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
}

// arrow function: const ten_ham = () => {};
//const arrowRender = () => {
//    document.querySelector('#header').innerHTML = '<div>Header</div>';
//   document.querySelector('#content').innerHTML = '<div>Content</div>';
//  document.querySelector('#footer').innerHTML = '<div>Footer</div>';
//};
render();
router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
});
router.resolve();