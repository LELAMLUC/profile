const HomeWorkButton = document.querySelector('#assignment-btn');
const CloseHomeWork = document.querySelector('#close');
const HomeWorkCard = document.querySelector('.modal');

// Mở modal với hiệu ứng
HomeWorkButton.addEventListener('click', function() {
    HomeWorkCard.style.display = 'flex'; // Đầu tiên phải hiển thị modal
    setTimeout(() => {
        HomeWorkCard.classList.add('show'); // Thêm class 'show' để kích hoạt hiệu ứng
    }, 10); // Thêm một chút độ trễ để đảm bảo transition được kích hoạt
});

// Đóng modal với hiệu ứng
CloseHomeWork.addEventListener('click', function() {
    HomeWorkCard.classList.remove('show'); // Bỏ class 'show' để bắt đầu hiệu ứng tắt
    setTimeout(() => {
        HomeWorkCard.style.display = 'none'; // Đợi cho đến khi hiệu ứng tắt xong rồi mới ẩn modal
    }, 550); // Đợi 550ms để khớp với thời gian của transition
});
