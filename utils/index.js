    const capitalize = (string) =>{
        const stringArry = string.split('')
        stringArry.splice(0,1, stringArry[0].toUpperCase())
        return stringArry.join('') 
    }

    export default { capitalize }