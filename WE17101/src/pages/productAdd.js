import { createProduct, getProduct, updateProduct } from "../api/product";
import router from "../helpers/router";

const ProductAdd = {
    render: async(id) => {
        let product = {
            name: '',
            msv: '',
            avatar: ''
        };

        if (id) {
            const response = await getProduct(id);
            product = response.data;
        }

        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input
                            value="${product.name}"
                            class='form-control'
                            id='name'
                        />
                    </div>
                    <div class='form-group'>
                        <label>MSV</label>
                        <input
                            value="${productt.msv}"
                            class='form-control'
                            id='msv'
                        />
                    </div>
                    <div class='form-group'>
                        <label>Avatar</label>
                        <input
                            value="${product.avatar}"
                            class='form-control'
                            id='avatar'
                        />
                    </div>
                    <div class='form-group'>
                        <button type='button' class='btn btn-success' id='btn'>
                            ${id ? 'Cập nhật' : 'Tạo mới'}
                        </button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: (id) => {
        // console.log('afterRender', id);
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const msv = document.querySelector('#msv').value;
            const avatar = document.querySelector('#avatar').value;

            const submitData = {
                name: name,
                msv: msv,
                avatar: avatar,
            };

            if (id) {
                await updateProduct(id, submitData);
            } else {
                await createProduct(submitData);
            }

            router.navigate('/products');
        });
    }
};

export default ProductAdd;