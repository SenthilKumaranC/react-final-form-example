export const minValueValidator = (min: number) => (value: any) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;