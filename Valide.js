let emails=['firstpart@secondpart.end','fi@secondpart.end','first-part@.se=cond%p.art.end','first.part@se=cond%part.r','f@secondart.end','first-part@.se=cond@part.end','-firstpart@.se=cond%.enddeded','firs_tpart@.se.en']
function validateEmails(emails){
    let prowerkaem=/(^[a-zA-Z0-9][a-zA-Z0-9+-./]{2,20})@([a-zA-Z0-9.!$%&’*+/=?^_-]{1,15}).([a-zA-z]{1,5})/
    if(prowerkaem.test(emails[4])){
        console.log('email is very good')
    }
    else{
        console.log("porobuy drugoy email")
    }
}
validateEmails(emails)
let phones=["+38 (099) 567 8901",'+38 (099) 567 8901','+38 099 5 6 7 8 9  01','+38 (099) 567 8901 0','+38 099 a0000000','+38 (0989) 567 8901','+48 (0989) 567 8901','(09-9) 567-890-1']
let strPhones='+38 099 a0000000'
function validatePhones(phones){
    let proverkaphone=/^(\+?[\+38\s]+)?(\(?[0-9\-?]+\)?)([0-9\s\-][\s\-0-9]+)$/gi
    let number=strPhones.match(/\d/g).join('')
    if(number.length <= 12 && proverkaphone.test(strPhones)){
        console.log("all good")
    }
    else{
        console.log("phone not valide")
    }
}
validatePhones(phones)
let passwords='SupperPas1'
function validatePassword(passwords){
    let proverkapassword=/(?=.*[a-zA-Z0-9]{8,})/
    let result=proverkapassword.test(passwords)
    if(result==true){
        console.log("password is very good")
    }
    else{
        console.log("what about another password?")
    }
}
validatePassword(passwords)
