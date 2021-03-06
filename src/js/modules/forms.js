const forms = () =>{
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');
    const phoneInput = document.querySelectorAll('input[name="user_phone"]');
    phoneInput.forEach(item=>{
        item.addEventListener('input',()=>{
            item.value = item.value.replace(/\D/,'');
        });
    })
    const message = {
        loading:'Загрузка...',
        success:'Спасибо! Скоро мы с вами свяжемся',
        failure:'Что то пошло не так'
    }
    const postData = async (url,data) =>{
        document.querySelector('.status').textContent = message.loading;
        let response = await fetch(url,{
            method:'POST',
            body:data
        });
        let result = await response.text();
        return result;
    };
    const clearInputs = ()=>{
        input.forEach(item =>{
            item.value = '';
        })
    }
    form.forEach(item =>{
        item.addEventListener('submit',(e)=>{
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            const formData = new FormData(item);
            postData('assets/server.php',formData)
                .then(result =>{
                statusMessage.textContent = message.success;
            }).catch(error =>{
                statusMessage.textContent = message.failure;
            }).finally(()=>{
                clearInputs();
                setTimeout(()=>{
                    statusMessage.remove();
                },5000);
            });
        });
    })
};
export default  forms;

