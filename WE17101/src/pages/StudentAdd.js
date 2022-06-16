import { createStudent, getStudent, updateStudent } from "../api/student";
import router from "../helpers/router";

const StudentAdd = {
    render: async(id) => {
        let student = {
            name: '',
            msv: '',
            avatar: ''
        };

        if (id) {
            const response = await getStudent(id);
            student = response.data;
        }

        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input
                            value="${student.name}"
                            class='form-control'
                            id='name'
                        />
                    </div>
                    <div class='form-group'>
                        <label>MSV</label>
                        <input
                            value="${student.msv}"
                            class='form-control'
                            id='msv'
                        />
                    </div>
                    <div class='form-group'>
                        <label>Avatar</label>
                        <input
                            value="${student.avatar}"
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
                await updateStudent(id, submitData);
            } else {
                await createStudent(submitData);
            }

            router.navigate('/students');
        });
    }
};

export default StudentAdd;