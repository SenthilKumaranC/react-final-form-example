export const passwordValidator = (str: string) => {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str) ? undefined : "At least one number, one lowercase and one uppercase letter";
}