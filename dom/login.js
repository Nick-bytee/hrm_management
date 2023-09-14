const signInbutton = document.getElementById('signIn')
document.addEventListener('submit', login)

const backendAPI = 'http://localhost:8082'


async function login(e){
    e.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const myObj = { 
        email : email.value,
        password : password.value
    }
    try{
        if(email.value === 'nick2228' && password.value === '123'){
            const result = await axios.post(`${backendAPI}/user/login`, myObj)
            window.location = '/dashboard'
        }else{
            window.alert('Invalid Password')
        }
    }catch(err){
        console.log(err)
    }
}