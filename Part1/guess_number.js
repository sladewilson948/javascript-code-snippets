// lerts see and example of terniary operatiors


function greetUser(cond1, cond2)
{

        let name = "Aman Dubey"
        let message = (cond1 && cond2) ? "Hello premium user": "Hello user" 
        let greet = `${message} welcome onboard to the application I hope you will enjoy your time Mr ${name}.`
        
        return greet
}


console.log(greetUser(0,0))