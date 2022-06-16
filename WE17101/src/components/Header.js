import Nav from './Nav';
import Cart from './Cart';

const HeaderB = {
    render: () => (
        `<header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
                <a href="/students" class="nav-link">Student</a>
            </li>
          </ul>
          <div id='cart'>${Cart.render()}</div>
        </header>`
    )
}


const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') =>
        `<div>
            <h1>${name}</h1>
            <div>${Nav.render()}</div>
        </div>`
        // sau mũi tên là ngoặc tròn -> return kết quả
};

export default HeaderB;