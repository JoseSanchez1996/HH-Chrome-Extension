document.addEventListener('DOMContentLoaded', () => {
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 

})

//  -- stuff to init
let num = ''
let num2 = ''
// we already init div = calc Class
// init an array of ecpected nums
const arrOfNums = []
// init arr of expected func
const arrOfFunc = [] 
// init a num = .push(initArr)


// button created dynamically or statically         !!
// assign var(Bttn1) to each button                 !!

const Buttons = document.querySelectorAll('button')
// addeventListener() = User Input
Buttons.addEventListener('click', () =>{
    if(typeof num === 'string'){
        switch (Buttons.class) {
            case '0':
                num += '0'
                // numvar += str('0')
                break;

            case '1':
                num += '1'
                break;
                
            case '2':
                num += '2'
                break

            case '3':
                num += '3'
                break

            case '4':
                num += '4'
                break;

            case '5':
                num += '5'
                break;

            case '6':
                num += '6'
                break

            case '7':
                num += '7' 
                break 

            case '8':
                num += '8' 
                break;

            case '9':
                num += '9'     
                break;

            case '+':
                    arrOfFunc.push(this.add())    
                break

            case '-':
                    arrOfFunc.push(this.subtract())   
                break           
            case '*':
                    arrOfFunc.push(this.multiply())    
                break

            case '/':
                    arrOfFunc.push(this.divide())   
                break 

            case '=':
                //  run function to loop through arr's
            default: 
                console.log("how did you even get here???")
                break;
        }
    }else {
        if(typeof num2 === 'string'){
            switch (Buttons.class) {
                case '0':
                    num2 += '0'
                    // numvar += str('0')
                    break;
    
                case '1':
                    num2 += '1'
                    break;
                    
                case '2':
                    num2 += '2'
                    break
    
                case '3':
                    num2 += '3'
                    break
    
                case '4':
                    num2 += '4'
                    break;
    
                case '5':
                    num2 += '5'
                    break;
    
                case '6':
                    num2 += '6'
                    break
    
                case '7':
                    num2 += '7' 
                    break 
    
                case '8':
                    num2 += '8' 
                    break;
    
                case '9':
                    num2 += '9'     
                    break;
    
                case '+':
                        arrOfFunc.push(this.add())    
                    break
    
                case '-':
                        arrOfFunc.push(this.subtract())   
                    break           
                case '*':
                        arrOfFunc.push(this.multiply())    
                    break
    
                case '/':
                        arrOfFunc.push(this.divide())   
                    break 
    
                case '=':
                    //  run function to loop through arr's
                default: 
                    console.log("how did you even get here???")
                    break;
            }
        }
    }    
})



// assign num pressed (1) to init var


// init another num2 = .push(Arr)
// init num3 = return result from invoking calc func


// text to better understand our thought process ? main.js calc
// once DOMContentLoaded is true
// init calc = div
// initialize varibles to use / store / get User Input
// initialize each func in Calc to an eventListener
// after user Input hit the Equals SIgn "="
// run loop 
// iterate over Num pass Num[i, i+1]   ---> 
// num = arr[i] , num2 = arr[i+1]
// nested loop "functions"
// run fun[0] (param""arr[i]", param"arr[i]")
// splice (i+1, 0)
// get return result,
// arr.shift
// arr/unshift return result



// example on how calc works
// [1,3,6,3]
// [add, divide, multiply] 
// add once [0]
// [4,6,3]
// shift
// [divide, multiply] 
// run divide [0]
// [.66, 3]
//  shift
// [multiply]
// run multiply
// [2]
// if(Array.length === 1) return arr[0]