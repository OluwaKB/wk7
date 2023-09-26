function resultStatus(score){
    let status
    if (score >= 50){
        status = 'pass'     
    }
    else{
        status = 'fail'
    }

    return status
}

const resultGrade = (grade) =>{
    let status
    if(score < 100 && !isNaN(score)){
        if (score >= 70){
            status = 'A'
        }
        else if (score >= 60){
            status = 'B'
        }
        else if (score >= 50){
            status = 'C'
        }
        else{
            status = 'FF'
        }
    }
    else{
        status = 'the value is  either greater than 100 or not a number'
    }
    return status
}

function checkVowel(str){
    const vowels = 'aeiou'
    let status
    str = str.toLowerCase()
    //check if index of the first letter exists in vowels
    if(vowels.indexOf(str[0]) === -1){
        status = 'vowels'
    }
    else{
        status = 'consonant'
    }
    return status
}
function truncate(str){
    let truncstr
    if(str.length > 15){
        truncstr = str.slice(0, 15) + '...'
    }
    else {
        truncstr = str
    } 
    return truncstr
}

const startWithCap = (str) => {
    let status
    str[0] == str[0].toUpperCase() ? status = 'starts with uppercase' : status = 'starts with lowercase'
    return status
}

const statusOne = (score) => {
    let status
    score >= 50 ? status = 'pass' : status = 'fail'
    return status
}

const statusTwo = (score) => {
    let status
    score >= 70 ? status = 'A' : 
    score >= 60 ? status = 'B' : 
    score >= 50 ? status = 'C' : 
    status ='FF'
    return status
}