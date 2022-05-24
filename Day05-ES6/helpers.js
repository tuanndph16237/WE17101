function toUpperCase(string) {
    if (typeof string === 'string') {
        return string.toUpperCase();
    }

    return string;
}

function sum(first, second) {
    if (isNaN(first) || isNaN(second)) {
        return 0;
    }

    return first + second;
}

const helpers = "HELPERS";

export { toUpperCase, sum };

// Với việc export default thì khi import có thể tự đặt tên
// Vì giá trị của default đã được mang sang
export default helpers;