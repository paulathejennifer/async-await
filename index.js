//Question 1: Email reminder
//pseudocode
//1. Define a function; wait(milliseconds) 
//2. Return a Promise that resolves after 'milliseconds' time that is specified
//3. Define async function sendReminder which takes email as ParameterDecorator
//4. the async function waits for five seconds(5000 ms)
//5. It then prints a reminder: "Reminder sent to [email]"
//6. Call the sendReminder for 3 different emails


function wait(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

async function sendReminder(email){
    await wait(5000);
    console.log(`Reminder sent to ${email}`);
    
}


sendReminder('paula@gmail.com')
sendReminder('jane@gmail.com')
sendReminder('kangethe@gmail.com')


//Question 2: Login attempts with delay after 1 second
//pseudocode
//1. Define function attemptLogin which takes in attemptNumber as the parameter
//2. After one second, if attemptNumber is 3: resolve promise with 'Login successful'
//3. Else reject promise with 'Login failed'
//4. Define async function tryLogin for attempts numbers from 1 to 3
//5. Try to call the attemptLogin
//6. If it is successful print 'Login successful' and stop further attempts
//7. if failed print attempt {attemptNumber} failed
//8. esle if it failed after 3 attempt print  'Login failed after 3 attempts'


function attemptLogin(attempt){
    return new Promise((resolve, reject)=> setTimeout(()=>{
        if (attempt ===3 ){
            resolve('Login successful')
        }
        else{
            reject('Login failed'), 1000
        };
    })
)
}

async function tryLogin() {
    for (let i = 1; i <= 3;i++){
        try{
            const result = await attemptLogin(i)
            console.log(result);
            return;
        }
        catch(error){
            console.log(`Attempt ${i}: ${error}`);
            console.log(i);
            
            
        }
    }
    console.log("Login failed after 3 attempts");
    
}
tryLogin()

//Question 3: COUNT DOWN TIMER USING SET INTERVAL
//pseudocode
//1. Set count at 5
//2. Every one second
//3. Print current value of count
//4. Decrease count by one
//5. if count is less than 0
//6. Stop timer
//7. Print 'Time's Up!'


let count = 5;
const interval = setInterval(()=>{
    console.log(count);
    count--;

    if(count < 0){
        clearInterval(interval);
        console.log('Time is up!');
        
    }
    
}, 1000);


//Question 4: Simulating page loading
//pseudocode
//1. Define function wait which takes milliseconds as it's parameter
//2. Define async function loadpage()
//3. print 'Loading header...'
//4. wait 1 second
//5. print 'Loading content...'
//6. wait 2 seconds
//7. print'Loading footer...'
//8. wait 1 second

//9. then print 'Page loading complete'

//10. call the function


function wait(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function loadPage(){
    console.log('Loading header...');
    await wait(1000);


    console.log('Loading content...');
    await wait(2000);

    console.log('Loading footer...');
    await wait(1000);


    console.log('Page fully loaded.');  
    
    
}
loadPage()


//Question 5: Fetching stock prices
//pseudocode
//1. Define a function fetchPrice which takes in stockSymbol as a parameter
//2. return a promise that resolves every two seconds as [stockSymbol] resolved