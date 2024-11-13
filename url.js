var url = [
		'https://goodjili1.vip',
		'https://goodjili2.vip',
		'https://goodjili3.vip',
		'https://goodjili4.vip',
		
	];





function toPage() {
		location.href ='./center.html'
		
}
var mySwiper = new Swiper('.swiper', {
	    loop: true,
	    autoplay: {
	        delay: 3000,
	        disableOnInteraction: true,
	    },
	    // 如果需要分页器
	    pagination: {
	        el: '.swiper-pagination',
	    },
	})

let el = document.getElementById('ulId');
function hanldeTag(index) {
	    var arr = Array.from(el.children)
	    arr.forEach(element => {
	        element.classList.remove("active");
	    });
	    mySwiper.slideTo(index + 1)
	    el.children[index].classList.add("active");
}

window.onload=function(){

	function detectWebsiteDelay(url, timeout, obj) {
	    return new Promise((resolve, reject) => {
	        const img = new Image();
	        let timedOut = false;
	
	        // 设置超时
	        const timeoutId = setTimeout(() => {
	            timedOut = true;
	            reject(new Error('Request timed out'));
	        }, timeout);
	
	        img.onload = () => {
	            clearTimeout(timeoutId);
	            if (!timedOut) {
	                resolve('网址响应良好，加载时间：' + (Date.now() - startTime) + '毫秒');
	            }
	        };
	
	        img.onerror = () => {
	            clearTimeout(timeoutId);
	            if (!timedOut) {
	                let d = Date.now() - startTime
	                if (d > 1000) {
	                    obj.classList.add('red');
	                }
	                obj.innerText = (Date.now() - startTime) + 'ms';
	                resolve('网址响应良好，加载时间：' + (Date.now() - startTime) + '毫秒');
	            }
	        };
	
	        const startTime = Date.now();
	        img.src = url;
	    });
	}
	
	let s = document.getElementsByClassName('hrefs');
	let b = document.getElementsByClassName('Delay')
	
	for (let i = 0; i < s.length; i++) {
	
	    detectWebsiteDelay(url[i]+ '/1.png', 5000, b[i])
	}
}