export class Competence {

    constructor(private name: string, private iconPath: string, private type: string[]) {
    }

    getName(): string{
        return this.name;
    }
    getIconPath(): string{
        return this.iconPath;
    }
    getTypes(): string[]{
        return this.type;
    }
}
