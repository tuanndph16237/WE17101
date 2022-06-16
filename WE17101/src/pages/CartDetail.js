import Cart from "../components/Cart";
import reRender from "../helpers/reRender";

const CartDetail = {
    render: () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

        return (
            cartItems.map(item => (
                `<div class='d-flex align-items-center justify-content-between my-2'>
                    <div>
                        ${item.name}
                    </div>
                    <div>
                        <span>-</span>
                        <input value="${item.value}" style="width: 70px;" />
                        <span>+</span>
                    </div>
                    <div>
                        Không có tiền
                    </div>
                    <div>
                        <button
                            data-id="${item.id}"
                            class='btn btn-danger'
                            id='delete-cart-btn'
                        >
                            Xoá
                        </button>
                    </div>
                </div>`
            )).join('')
        )
    },
    afterRender: () => {
        // 1. Tìm nút để tạo sự kiện xoá
        const deleteCartBtn = document.querySelector('#delete-cart-btn');
        deleteCartBtn.addEventListener('click', () => {
            // Tìm id cần được xoá qua thuộc tính data-id
            const itemId = deleteCartBtn.dataset.id;
            // Lấy ds sp trong giỏ
            const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            // Tạo 1 mảng mới từ mảng cũ nhưng đã loại bỏ sp có id là itemId
            const newCartItems = cartItems.filter((item) => item.id !== itemId);
            // Lưu lại giỏ hàng và render lại view chi tiết và view GH
            localStorage.setItem('cart', JSON.stringify(newCartItems));
            reRender('#content', CartDetail);
            reRender('#cart', Cart);
        });
    }
};

export default CartDetail;