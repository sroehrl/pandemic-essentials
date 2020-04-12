const modal = document.getElementById('modal');

// open terms and condition modal
document.getElementById('tac-link').addEventListener('click',ev =>{
    ev.preventDefault();
    fetch('{{base}}component/termsConditions/termsConditions.view.html').then(resp => {
        return resp.text();
    }).then(res =>{
        modal.innerHTML = res;
        modal.setAttribute('open','');
    })
});

// catch form submission
document.getElementById('notification-form').addEventListener('submit',ev =>{
    ev.preventDefault();
    let email = document.getElementById('email');
    fetch('{{base}}/api.v1/newsletter-registration',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:email.value})
    }).then(resp =>{
        return resp.json();
    }).then(result =>{
        modal.innerHTML = `
        <h1>Thank you</h1>
        <p>We will notify you as soon as possible.</p>
        `;
        modal.setAttribute('open','');
    })
});