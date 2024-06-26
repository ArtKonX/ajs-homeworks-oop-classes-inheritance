export default class Character {
    static types = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
    ]

    constructor(name, type) {
        if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
            this.name = name;
        } else {
            throw new Error('Имя должно быть строкой и от 2 до 10 символов!')
        }

        if (typeof type === 'string' && Character.types.includes(type)){
            this.type = type;
        } else {
            throw new Error(`Тип персонажа должен быть ${this.types.join(' ')}`)
        }

        this.health = 100;
        this.level = 1;
    }
}