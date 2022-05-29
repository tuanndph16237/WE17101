import Nav from "./nav";
const HeaderB = {
    render: () => (
        `<header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          </ul>
        </header>`
    )
}
const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') =>
        `<div>${name}</div>
        <div>${Nav.render()}</div>`



    // sau mũi tên là ngoặc tròn -> return kết quả
}
export default HeaderB;