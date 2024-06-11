document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem!';
        return;
    }

    if (password.length < 4) {
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres!';
        return;
    }

    // Se passar a validação, redireciona para a página de boas-vindas
    errorMessage.textContent = '';
    window.location.href = `intern.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&address=${encodeURIComponent(address)}`;
});
