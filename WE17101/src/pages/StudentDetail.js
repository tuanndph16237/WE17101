import { getStudent } from "../api/student";
import reRender from "../helpers/reRender";
import Cart from "../components/Cart";

const StudentDetail = {
    render: async(id) => {
        const response = await getStudent(id);
        const { data } = response; // const data = response.data;

        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>MSV: ${data.msv}</div>
                <div>
                    <input type='number' id='cartValue' value='1' min='1' />
                    <button
                        class='btn btn-info'
                        data-id="${data.id}"
                        data-name="${data.name}"
                        id='btn-add-cart'
                    >Thêm vào giỏ hàng</button>
                </div>
            </div>`
        );
    },
    afterRender: () => {
        const btnAddCart = document.querySelector('#btn-add-cart');
        btnAddCart.addEventListener('click', () => {
            const item = {
                id: btnAddCart.dataset.id,
                name: btnAddCart.dataset.name,
                value: +document.querySelector('#cartValue').value || 1
            };

            // Lưu trữ vào localStorage: setItem(key, giá trị bắt buộc là 1 chuỗi)
            // 1. Xem giỏ hàng có gì chưa
            const cartItemsString = localStorage.getItem('cart'); // lấy ra giá trị từ key cart
            // Nếu chưa có thì giá trị là null -> []
            const cartItems = JSON.parse(cartItemsString || '[]');
            // 2. Nếu chưa có gì thì push luôn sv vào
            if (!cartItems.length) {
                cartItems.push(item);
            } else {
                // 2.1 Tìm xem có phần tử nào giống cái đang muốn push vào không
                const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
                if (existItem) {
                    existItem.value += item.value;
                } else {
                    cartItems.push(item);
                }
            }
            // 3. Set giá trị mới cho giỏ hàng
            localStorage.setItem('cart', JSON.stringify(cartItems));
            reRender('#cart', Cart);
        });
    }
};

export default StudentDetail;