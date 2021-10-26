export const composeValidators = (...validators: any[]) => (value: any) => {
    //return validators.reduce((error, validator) => error || validator(value), undefined);

    const validatorsLength = validators.length;
    for (let validatorIndex = 0; validatorIndex < validatorsLength; validatorIndex++) {
        const validationResult = validators[validatorIndex](value);
        if (validationResult) {
            return validationResult;
        }
    }
    return undefined;
}





