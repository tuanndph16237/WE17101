const Student = {
        render: async() => { // đã đóng ngoặc nhọn phải có return ở trong
                // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
                // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
                // 3. fetch nhận vào đường dẫn API endpoint của BE
                const response = await fetch('https://6291d2a0cd0c91932b6886a8.mockapi.io/students');
                // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
                console.log('response', response);
                // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
                const students = await response.json();
                console.log('students', students);

                return `<div>
        ${
            students.map((student) => (
                `<div>
                    <div>ID: ${student.id}</div>
                    <div>Name: ${student.name}</div>
                    <div>MSV: ${student.msv}</div>
                </div>`
            ))
        }
    </div>`
    },
};

export default Student;