const username=document.querySelector('#username')
const useremail=document.querySelector('#useremail')
const userpassword=document.querySelector('#userpassword')
const failure_icon=document.querySelectorAll('.failure-icon')
const inp=document.querySelectorAll('input')
const err=document.querySelectorAll('.error')
const btn=document.querySelector('.btn button')
const success_icon=document.querySelectorAll('.success-icon')
const pop=document.querySelector('.pop')
const container=document.querySelector('.container')

let tempuser=''
let tempeamil=''
let tempepass=''
let worning=0
btn.addEventListener('click',(e)=>{
    worning=0
    tempuser=username.value
    tempeamil=useremail.value
    tempepass=userpassword.value
    console.log(tempepass)
    err.forEach((val)=>{
        val.style.display='none'
    })
    inp.forEach((val)=>{
        val.style.border='1px solid #333'
    })
    failure_icon.forEach((val)=>{
        val.style.display='none'
    })
    success_icon.forEach((val)=>{
        val.style.display='none'
    })
    if(tempuser==''|| tempuser==null ||tempuser==/<script/>=0){
        failure_icon[0].style.color='red'
        inp[0].style.border='1px solid red'
        err[0].style.display='block'
        failure_icon[0].style.display='block'
        worning++
    }else if( tempuser.length<=3||tempuser.search(/[^a-z]/) >=0){
        failure_icon[0].style.color='red'
        inp[0].style.border='1px solid red'
        err[0].style.display='block'
        failure_icon[0].style.display='block' 
        worning++
    }else{
        success_icon[0].style.display='block'
        inp[0].style.borderBottom="1px solid green"
        console.log("tempuser:"+tempuser)
    }
    
    
    if(tempeamil==''|| tempeamil==null ||tempeamil==/<script/>=0){
        failure_icon[1].style.color='red'
        inp[1].style.border='1px solid red'
        err[1].style.display='block'
        failure_icon[1].style.display='block'
        worning++
    }
    else if(tempeamil.search(/@/)<3||(tempeamil.match(/@/g))>=tempeamil.length|| tempeamil.length<10||(tempeamil.lastIndexOf('.')+2>=tempeamil.length)){
            failure_icon[1].style.color='red'
            inp[1].style.border='1px solid red'
            err[1].style.display='block'
            failure_icon[1].style.display='block'
            worning++
        }
        else{
            success_icon[1].style.display='block'
            inp[1].style.borderBottom="1px solid green"
            console.log("tempuser:"+tempeamil)
        }
    

    if(tempepass==''|| tempepass==null ||tempepass==/<script/>=0){
        failure_icon[2].style.color='red'
        inp[2].style.border='1px solid red'
        err[2].style.display='block'
        failure_icon[2].style.display='block'
        worning++
    }
    else if(tempepass.length<3 ||tempepass.search(/[a-z]/i) ){
            failure_icon[2].style.color='red'
            inp[2].style.border='1px solid red'
            err[2].style.display='block'
            failure_icon[2].style.display='block'
            worning++
        }
        else{
            success_icon[2].style.display='block'
            inp[2].style.borderBottom="1px solid green"
            console.log("tempuser:"+tempepass)
        }
        if(worning>0){
            console.log(worning)
            e.preventDefault()
        }else{
            pop.style.display='flex'
            pop.innerHTML=`
            <span class='clos'>X</span>
            <span>Success!</span>
            <p>Welcome to yoga dojo. Your journey to a healthier you starts now!</p>
            `
            container.style.filter='blur(10px)'
            const span = document.querySelector('.clos')
            console.log("span:", span)
            span.addEventListener('click', () => {
                pop.style.display = 'none'
                container.style.filter='blur(0px)'
            })
            console.log("popup")
        }
})