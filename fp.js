function csv(csvText){
    const city= csvText
    .match(/(.+(?=\#))|(^(?!\#).+)/mg)
    .map(str => str.split(","))
    .map(mas=>{
        let obj= {}
        obj.x=mas[0]
        obj.y=mas[1]
        obj.name=mas[2]
        obj.population=mas[3]
        return obj
    })
    .sort((a,b)=> b.population- a.population)
    .slice(0,10)
    .reduce((mainObj, infoObj, rare)=>{
        mainObj[infoObj.name]={
            population: infoObj.population,
            rating:++rare 
        }
        return mainObj
    })
    delete city['']
    console.log(city)
    return (result) => {
        let listOfCities = Object.keys(city)
        listOfCities.forEach(item => {
            let regexp = new RegExp(item, 'gi')
            result = result.replace(regexp, `${item} ( на ${city[item].rating} месте в топе самых крутейших городов в Украине с населением ${city[item].population}) `)
        })
        return result
    }
}
let test=`44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент
#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,
55.32,09.10,Киев,99214,
11.11,55.55,Львів,700222
55.55,11.11,Кропивницький,304340
34.12,51,23,Київ,3
51.12,55.28,Донецьк,3000000
11.11,11.11,Харків,2324243`
const funct=csv(test)
const result=funct("Вінниця Киев")
console.log(result)
