module.exports = (str) => {
    specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(specialChars.test(str)){
        throw new Error(`Could not create dashboard ${add} because the string has special characters.`)
    }else{
        return
    };
}