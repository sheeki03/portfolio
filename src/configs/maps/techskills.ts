import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';

export const techskills = {
    lowerImageSrc: "../images/backgrounds/museum.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(6),
            y: getGridPosition(16),
            isPlayer: true,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/sprite-vasco.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32,
                    animations: miniMeAnimations
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                    imageWidth: 64,
                    imageHeight: 64
                }
            }
        }),
        avatarJs: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/js-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [{type: 'message', text: 'Solidity'}]
                }
            ],
            label: 'Solidity'
        }),
        avatarNode: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/node-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'DeFi Game Theory'}
                    ]
                }
            ],
            label: 'DeFi Game Theory'
        }),
        avatarGit: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/git-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [
                        {type: 'message', text: `MEV`},
                    ]
                }
            ],
            label: 'MEV'
        }),
        avatarDocker: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/docker-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Python'}
                    ]
                }
            ],
            label: 'Python'
        }),
        avatarReact: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/react-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'SQL'}
                    ]
                }
            ],
            label: 'SQL'
        }),
        avatarDevtools: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/chromedev-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Ethereum'}
                    ]
                }
            ],
            label: 'Ethereum'
        }),
        avatarCss: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/css-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Cosmos'}
                    ]
                }
            ],
            label: 'Cosmos'
        }),
        avatarTypescript: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/typescript-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'EVM & Rollups'}
                    ]
                }
            ],
            label: 'EVM & Rollups'
        }),
        avatarWebpack: new GameObject({
            x: getGridPosition(2),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/webpack-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Tokenomics'}
                    ]
                }
            ],
            label: 'Tokenomics'
        }),
        avatarJest: new GameObject({
            x: getGridPosition(6),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/jest-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Onchain Analytics'}
                    ]
                }
            ],
            label: 'Onchain Analytics'
        }),
        avatarPerformance: new GameObject({
            x: getGridPosition(10),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/performance-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Governance Systems'}
                    ]
                }
            ],
            label: 'Governance Systems'
        }),
    },
    limits: {
        xMin: getGridPosition(6),
        yMin: getGridPosition(4),
        xMax: getGridPosition(6),
        yMax: getGridPosition(12) 
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(6,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
        [getGridCoord(7,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
};

createLinearWall({coord: 'y', x: 0, y: -1, n: 17, map: techskills});
createLinearWall({coord: 'y', x: 13, y: -1, n: 17, map: techskills});
createLinearWall({coord: 'x', x: 0, y: 16, n: 13, map: techskills});
createLinearWall({coord: 'x', x: 0, y: 17, n: 13, map: techskills});
createLinearWall({coord: 'x', x: 0, y: 1, n: 13, map: techskills});


createLinearWall({coord: 'x', x: 1, y: 5, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 5, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 1, y: 7, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 7, n: 5, map: techskills});

createLinearWall({coord: 'x', x: 1, y: 11, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 11, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 1, y: 13, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 13, n: 5, map: techskills});

