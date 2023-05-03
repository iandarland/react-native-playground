    const capitalize = (string) =>{
        if(string.includes('-')){
            const twoWord = string.split('-')
            const upperCased = twoWord.map(element => {
                const upper = element.split('')
                upper.splice(0,1, upper[0].toUpperCase())
                return upper.join('')
            });
            return upperCased.join(' ')
        }
        const stringArry = string.split('')
        stringArry.splice(0,1, stringArry[0].toUpperCase())
        return stringArry.join('') 
    }

    export default { capitalize }