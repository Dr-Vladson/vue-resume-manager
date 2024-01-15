function validateMaxSize (value, maxSize){
    if (!value || typeof value !== 'string' || value.length > maxSize) return false
    return true
}
function validateGmail (value){
    if (value && typeof value === 'string' && value.endsWith("@gmail.com") && value.length > 10) return true
    return false
}
function validatePhone (value){
    if (value && typeof value === 'string' && value.startsWith("+380") && value.length === 13) return true
    return false
}
export function getIsResumeValid (name, position, email, phone, intro, skills){
    if 
    (
        validatePhone(phone) && 
        validateGmail(email) &&
        validateMaxSize(name, 30) &&
        validateMaxSize(position, 30) &&
        validateMaxSize(intro, 500) &&
        validateMaxSize(skills, 150)
    ){
        return true
    }
    return false
}