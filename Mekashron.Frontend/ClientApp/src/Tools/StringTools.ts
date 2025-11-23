export class StringTools {
    static isNullOrWhiteSpace(str: string) {
        return str === null || str === undefined || /^\s*$/.test(str);
    }
}