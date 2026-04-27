document.getElementById("formulario").addEventListener("submit", function(e) {

e.preventDefault()

let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

if (usuario.length == 0) return alert("O campo usuário deve estar preenchido")
if (senha.length == 0) return alert("O campo senha deve estar preenchido")
if (usuario !== "admin") return alert("Usuário ou senha incorretos")
if (senha !== "1234") return alert("Usuário ou senha incorretos")
window.location.href = "forum.html"
})