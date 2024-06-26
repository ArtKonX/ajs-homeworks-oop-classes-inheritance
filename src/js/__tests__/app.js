import Bowman from '../classes/bowman';
import Character from '../classes/character';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Swordsman from '../classes/swordsman';
import Undead from '../classes/undead';
import Zombie from '../classes/zombie';



test.each([
    [
        new Bowman('Bowman'),

        {
            name: 'Bowman',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        }
    ],

    [
        new Daemon('Daemon'),

        {
            name: 'Daemon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        }
    ],

    [
        new Magician('Magician'),

        {
            name: 'Magician',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        }
    ],

    [
        new Swordsman('Swordsman'),

        {
            name: 'Swordsman',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        }
    ],

    [
        new Undead('Undead'),

        {
            name: 'Undead',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        }
    ],

    [
        new Zombie('Zombie'),

        {
            name: 'Zombie',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        }
    ]

])('создание нового персонажа', (character, expected) => {
    expect(character).toEqual(expected);
})

test('ошибка короткого имени', () => {
    expect(() => {
        new Daemon('D');
    }).toThrow();
});

test('ошибка длинного имени', () => {
    expect(() => {
        new Daemon('DaemonDaemonDaemon');
    }).toThrow();
});

test('ошибка типа имени', () => {
    expect(() => {
        new Character('Character', 'Boss');
    }).toThrow();
});