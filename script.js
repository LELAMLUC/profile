const btnInformation = document.querySelector('#btn-inf');
const CardInfomation = document.querySelector('.cardInfomation');
// Mở rộng hoặc thu nhỏ cardInfomation khi click
btnInformation.addEventListener('click', function() {
    if (CardInfomation.style.display === 'none' || CardInfomation.style.display === '') {
        CardInfomation.style.display = 'flex';
        setTimeout(() => { // Thêm một chút trễ để thực hiện hiệu ứng mượt mà hơn
            CardInfomation.style.width = '350px';
            CardInfomation.style.height = '450px';
        }, 10); 
    } else {
        CardInfomation.style.width = '1px';
        CardInfomation.style.height = '1px';
        
        // Đợi animation hoàn thành trước khi ẩn
        setTimeout(() => {
            CardInfomation.style.display = 'none';
        }, 500);
    }
});
const btnHomeWork = document.querySelector('#btn-homeWork');
const CardHomeWork = document.querySelector('.cardHomeWork');


btnHomeWork.addEventListener('click', function() {
    if (CardHomeWork.style.display === 'none' || CardHomeWork.style.display === '') {
        CardHomeWork.style.display = 'flex';
        setTimeout(() => { // Thêm một chút trễ để thực hiện hiệu ứng mượt mà hơn
            CardHomeWork.style.width = '350px';
            CardHomeWork.style.height = '450px';
        }, 10); 
    } else {
        CardHomeWork.style.width = '1px';
        CardHomeWork.style.height = '1px';
        
        // Đợi animation hoàn thành trước khi ẩn
        setTimeout(() => {
            CardHomeWork.style.display = 'none';
        }, 500);
    }
});