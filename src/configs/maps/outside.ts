import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';
import carAnimations from '../sprites/car';
import billboard from '../sprites/billboard';
import fountain from '../sprites/fountain';
import globe from '../sprites/globe';
import buildingBillboard from '../sprites/buildingBillboard';
import techskillsBillboard from '../sprites/techskillsBillboard';
import { addActions } from '../../utils/actions';
import * as interactions from '../interactions/index'; 
import bugAnimations from '../sprites/bug';

export const outside = {
    lowerImageSrc: "../images/backgrounds/exterior.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(41), //x: getGridPosition(10),
            y: getGridPosition(24), //y: getGridPosition(10),
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
            },
            isHidden: true,
        }),
        car: new Character({
            x: getGridPosition(7), //x: getGridPosition(10),
            y: getGridPosition(24), //y: getGridPosition(10),
            isPlayer: false,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/characters/car.png',
                    width: getGridPosition(4),
                    height: getGridPosition(3),
                    animations: carAnimations
                },
            },
            isCameraView: true,
            speedMultiplier: 2,
        }),
        bug: new Character({
            x: getGridPosition(55), //x: getGridPosition(10),
            y: getGridPosition(20), //y: getGridPosition(10),
            isPlayer: false,
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/bug.png',
                    width: getGridPosition(1),
                    height: getGridPosition(1),
                    animations: bugAnimations
                },
            },
            isHidden: true,
        }),
        house: new GameObject({
            x: getGridPosition(64),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/house.png',
                    width: getGridPosition(4),
                    height: getGridPosition(5),
                    imageWidth: 128,
                    imageHeight: 160
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(3),
                src: '../images/doors/door-house.png',
                width: getGridPosition(1),
                height: getGridPosition(2),
            }
        }),
        // TECH SKILLS Building
        techSkillsMuseum: new GameObject({
            x: getGridPosition(44),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(8),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/museum2.png',
                    width: getGridPosition(8),
                    height: getGridPosition(6),
                },
            },
            door: {
                offsetX: getGridPosition(0),
                offsetY: getGridPosition(4),
                src: '../images/doors/door-techskills.png',
                width: getGridPosition(3),
                height: getGridPosition(2),
            }
        }),
        techskillsBillboard: new GameObject({
            x: getGridPosition(47),
            y: getGridPosition(12.5),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/techskills-billboard.png',
                    width: getGridPosition(5),
                    height: getGridPosition(3),
                    animations: techskillsBillboard
                },
            },
        }),
        signEduExp: new GameObject({
            x: getGridPosition(44),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/sign-outside.png',
                    width: getGridPosition(3),
                    height: getGridPosition(3),
                },
            },
        }),
        // Education Building
        college: new GameObject({
            x: getGridPosition(43),
            y: getGridPosition(-1),
            hasShadow: false,
            width: getGridPosition(12),
            height: getGridPosition(9),
            sprite: {
                object: {
                    src: '../images/objects/college.png',
                    width: getGridPosition(13),
                    height: getGridPosition(13),
                    imageWidth: getGridPosition(13),
                    imageHeight: getGridPosition(13)
                },
            },
        }),
        signCollege: new GameObject({
            x: getGridPosition(45.5),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/sign-college.png',
                    width: getGridPosition(8),
                    height: getGridPosition(3),
                },
            },
        }),
        professor: new Character({
            x: getGridPosition(49),
            y: getGridPosition(8),
            isPlayer: false,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/professor.png',
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
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:`Professor: Ah, Shivom, back again! Let's see what you've built this time...`
                        },
                        {
                            type: 'message',
                            text:`Professor: Impressive as always. Here's your credential!`
                        },
                        {
                            type: 'interactionBox',
                            title: 'Bachelor of Science in Computer Science',
                            textLines:  [
                                `- Blockchain Fundamentals`,
                                `- Data Structures and Algorithms`,
                                `- Distributed Systems`,
                                `- Cryptography`,
                                `- Machine Learning`,
                            ],
                        },
                    ]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
        }),
        //PROFESSIONAL EXPERIENCE BUILDINGS
        lemniscapBillboard: new GameObject({
            x: getGridPosition(33),
            y: getGridPosition(17.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/arkadium-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        lemniscapBuilding: new GameObject({
            x: getGridPosition(33),
            y: getGridPosition(13),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(6),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/arkadium.png',
                    width: getGridPosition(6),
                    height: getGridPosition(9),
                },
            },
        }),
        lemniscapInfo: new GameObject({
            x: getGridPosition(39),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Lemniscap (Jun 2023 – Sep 2024)',
                            textLines: [
                                `Lemniscap is a research-driven crypto investment firm focused on early-stage blockchain startups.`,
                                `As Research Lead, I led thesis creation, market analysis, and protocol deep-dives to support high-conviction investments.`,
                                `Collaborated with founders and analysts to shape tokenomics, product strategy, and incentive design.`
                            ],
                        },
                    ]
                }
            ],
        }),
        nethermindBillboard: new GameObject({
            x: getGridPosition(25),
            y: getGridPosition(15.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/emma-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        nethermindBuilding: new GameObject({
            x: getGridPosition(25),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/emma.png',
                    width: 96,
                    height: 176
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(8.5),
                width: getGridPosition(2),
                height: getGridPosition(2),
                src: '../images/doors/door-building.png',
            }
        }),
        nethermindInfo: new GameObject({
            x: getGridPosition(31),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Nethermind (Jun 2022 – Jun 2023)',
                            textLines: [
                                `Nethermind is an Ethereum infrastructure company working with top-tier protocols like Lido and Flashbots.`,
                                `At Nethermind, I conducted deep research into DeFi protocols, designed validator incentive structures, and analyzed staking mechanics.`,
                                `Worked with internal and external stakeholders to inform development of DeFi products and strategy.`
                            ],
                        },
                    ]
                }
            ],
        }),
        degenDaoBillboard: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(15.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/farfetch-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        degenDaoBuilding: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/farfetch.png',
                    width: 96,
                    height: 176
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(8.5),
                width: getGridPosition(2),
                height: getGridPosition(2),
                src: '../images/doors/door-building.png',
            }
        }),
        degenDaoInfo: new GameObject({
            x: getGridPosition(23),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'DegenDAO (Dec 2021 – Sep 2022)',
                            textLines: [
                                `DegenDAO is a crypto-native investment collective supporting early projects through capital and strategy.`,
                                `I sourced high-potential protocols, contributed to token design, and optimized yield farming strategies.`,
                                `Also assisted projects with UI/UX testing and DAO governance mechanics.`
                            ],
                        },
                    ]
                }
            ],
        }),
        mondoveBillboard: new GameObject({
            x: getGridPosition(9),
            y: getGridPosition(16.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/dotlogic-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        mondoveBuilding: new GameObject({
            x: getGridPosition(9),
            y: getGridPosition(14),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(4),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/dotlogic.png',
                    width: 96,
                    height: 144,
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(4.5),
                src: '../images/doors/door-building.png',
                width: getGridPosition(2),
                height: getGridPosition(2),
            }
        }),
        mondoveInfo: new GameObject({
            x: getGridPosition(15),
            y: getGridPosition(18),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Mondove Biotech (Jul 2021 – Nov 2021)',
                            textLines: [
                                `At Mondove, I worked as a blockchain consultant designing a pharma supply chain solution on Corda.`,
                                `The system enabled traceability and transparency for inventory management in medical logistics.`
                            ],
                        },
                    ]
                }
            ],
        }),
        leapxBuilding: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(9),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(10),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/blip2.png',
                    width: getGridPosition(6),
                    height: getGridPosition(13),
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(10.5),
                src: '../images/doors/door-building.png',
                width: getGridPosition(2),
                height: getGridPosition(2),
            }
        }),
        leapxInfo: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Leapx Infotech (Apr 2021 – Jul 2021)',
                            textLines:  [
                                `Leapx is an EdTech company focused on technical upskilling.`,
                                `I designed a full blockchain course suite—covering Bitcoin, Ethereum, NFTs, DAOs, and the Metaverse.`
                            ],
                        },
                    ]
                }
            ],
        }),
        coffeeShop: new GameObject({
            x: getGridPosition(19),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(8),
            sprite: {
                object: {
                    src: '../images/objects/coffee.png',
                    width: getGridPosition(5),
                    height: getGridPosition(9),
                },
            },
        }),
        iceCreamShop: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(7),
            height: getGridPosition(3),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/ice-cream.png',
                    width: getGridPosition(7),
                    height: getGridPosition(5),
                },
            },
        }),
        pizzaShop: new GameObject({
            x: getGridPosition(10),
            y: getGridPosition(2),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/pizza.png',
                    width: getGridPosition(6),
                    height: getGridPosition(6),
                },
            },
        }),
        // SOFT SKILLS BUILDING
        softSkills: new GameObject({
            x: getGridPosition(27),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(9),
            sprite: {
                object: {
                    src: '../images/objects/soft-skills.png',
                    width: 96,
                    height: 160,
                },
            },
            door: {
                offsetX: getGridPosition(0),
                offsetY: getGridPosition(8),
                src: '../images/doors/door-softskills.png',
                width: getGridPosition(3),
                height: getGridPosition(2),
            }
        }),
        // SOCIAL BILLBOARDS
        socialBillboard: new GameObject({
            x: getGridPosition(35),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/billboard-social.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                    animations: billboard
                },
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message', 
                            text: `https://github.com/sheeki03`,
                            isLink: true
                        },
                        {
                            type: 'message', 
                            text: `https://twitter.com/sheeki03`,
                            isLink: true
                        }
                    ],
                }
            ],
        }),
        awardsBillboard: new GameObject({
            x: getGridPosition(56),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/billboard-awards.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                    animations: billboard
                },
            },
            collisionOffset: {
                width: 0,
                height: getGridPosition(1)
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:'Ranked #4 on the DegenScore v1 leaderboard — heavy on-chain usage'
                        },
                        {
                            type: 'message',
                            text:'Early contributor to validator decentralization efforts at Lido'
                        },
                        {
                            type: 'message',
                            text:'https://degenscore.com',
                            isLink: true
                        },
                    ]
                }
            ],
        }),
        signAndroid: new GameObject({
            x: getGridPosition(63),
            y: getGridPosition(15),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/sign-android.png',
                    width: getGridPosition(1),
                    height: getGridPosition(3)
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Education & Courses',
                            textLines:  [
                                `Bachelor of Science in Computer Science, GGSIPU`,
                                `Completed courses from INSEAD, Coursera, DataCamp, Frankfurt School`
                            ]
                        },
                    ]
                }
            ],
        }),
        campervan: new GameObject({
            x: getGridPosition(58),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            collisionOffset: {
                height: getGridPosition(1),
                width: 0
            },
            sprite: {
                object: {
                    src: '../images/objects/campervan.png',
                    width: getGridPosition(6),
                    height: getGridPosition(4),
                },
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:'Born too late to explore the earth. Born too early to explore the universe. But born just in time to explore the chain`"'
                        },
                    ]
                }
            ],
        }),
        thinkGlobe: new GameObject({
            x: getGridPosition(61),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/interfaces/globe.png',
                    width: getGridPosition(1),
                    height: getGridPosition(2),
                    animations: globe
                },
            }
        }),
        volunteer: new GameObject({
            x: getGridPosition(57),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(3),
            collisionOffset: {
                height: getGridPosition(1),
                width: 0
            },
            sprite: {
                object: {
                    src: '../images/objects/volunteer.png',
                    width: getGridPosition(4),
                    height: getGridPosition(5),
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Community Contributor',
                            textLines:  [
                                `Actively shared insights and frameworks via Twitter, Notion, and writeups`,
                                `Mentored early-stage founders on token design and governance`,
                                `Frequent contributor to DAO discussions and research forums`
                            ],
                        },
                    ],
                }
            ],
        }),

        //TREES
        fountain: new GameObject({
            x: getGridPosition(50),
            y: getGridPosition(20.5),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/fountain.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    animations: fountain
                },
            },
        }),
        bench: new GameObject({
            x: getGridPosition(50),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/bench-down.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                },
            },
            type: 'bench',
            interactions: interactions.bench
        }),
        benchLeft: new GameObject({
            x: getGridPosition(53),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/bench-left.png',
                    width: getGridPosition(1),
                    height: getGridPosition(3),
                },
            },
            type: 'bench',
            interactions: interactions.bench
        }),
        benchRight: new GameObject({
            x: getGridPosition(48),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/bench-right.png',
                    width: getGridPosition(1),
                    height: getGridPosition(3),
                },
            },
            type: 'bench',
            interactions: interactions.bench
        }),

        beer: new GameObject({
            x: getGridPosition(67),
            y: getGridPosition(14),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/beer.png',
                    width: getGridPosition(3),
                    height: getGridPosition(4),
                },
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text: `You grab a cold beer and chat about rollup decentralization 🍻`,
                        },
                        {
                            type: 'beer',
                            who: 'miniMe'
                        },
                    ],
                }
            ],
            collisionOffset: {
                width: 0,
                height: getGridPosition(1)
            }
        }),
    },
    walls: {
        // [getGridCoord(42,25)]: true,
        // [getGridCoord(70,17)]: true,
        // [getGridCoord(70,18)]: true
    },
    limits: {
        xMin: getGridPosition(11),
        yMin: getGridPosition(6.5),
        xMax: getGridPosition(59),
        yMax: getGridPosition(20)
    },
    actionSpaces: {
        // Interactions for coffe
        [getGridCoord(21,9)]: interactions.coffee,
        // Interactions for pizza
        [getGridCoord(11,7)]: interactions.pizza,
        // Interactions for iceCream
        [getGridCoord(3,7)]: interactions.iceCream,
        [getGridCoord(55,20)]: [
            {
                triggerOnce: true,
                events: [
                    {type: 'message', text: `A wild exploit appeared!!`},
                    {type: 'show', who: 'bug', direction: 'down' },
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'hide', who: 'bug' },
                    {type: 'message', text: `Patched and deployed! Next audit inbound.`},
                ]
            }
        ],
        [getGridCoord(66,6)]: [
            {
                events: [
                    { type: 'changeMap', map: 'house'},
                ]
            }
        ],
        [getGridCoord(69,17)]: [
            {
                events: [
                    { type: 'changeMap', map: 'basket'},
                ]
            }
        ],
        [getGridCoord(69,18)]: [
            {
                events: [
                    { type: 'changeMap', map: 'basket'},
                ]
            }
        ],
        [getGridCoord(41,0)]: [
            {
                events: [
                    { type: 'changeMap', map: 'beach'},
                ]
            }
        ],
        [getGridCoord(42,0)]: [
            {
                events: [
                    { type: 'changeMap', map: 'beach'},
                ]
            }
        ],
        [getGridCoord(28,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'softSkills'},
                ]
            }
        ],
        [getGridCoord(28,19)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(27,19)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(19,19)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(20,19)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(12,18)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(11,18)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(3,19)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(4,19)]: [
            {
                events: [
                    {type: 'message', text: `This protocol is sunsetted... for now.`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        // [getGridCoord(35,19)]: [
        //     {
        //         events: [
        //             { type: 'changeMap', map: 'farfetch'},
        //         ]
        //     }
        // ],
        // [getGridCoord(36,19)]: [
        //     {
        //         events: [
        //             { type: 'changeMap', map: 'farfetch'},
        //         ]
        //     }
        // ],
        [getGridCoord(45,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'techskills'},
                ]
            }
        ],
    },
    initialInteractions: [
        ...addActions({type: 'walk', who: 'car', direction: 'right'}, 17),
        {type: 'idle', who: 'car', direction: 'down', time: 200},
        {type: 'changeCameraView', who: 'miniMe'},
        {type: 'show', who: 'miniMe', direction: 'down' },
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'idle', who: 'miniMe', direction: 'down', time: 200},
        {type: 'message', text: 'Hey, welcome to my world of onchain exploration 👋', showNote: true},
        {type: 'message', text: `I'm Shivom, a crypto-native researcher and investor`},
        {type: 'message', text: (isMobile: boolean) => {
                return `Feel free to explore — many protocols, no permissions needed.`
            }
        }
    ]
};

createLinearWall({coord: 'x', x: 0, y: 3, n: 41, map: outside});
createLinearWall({coord: 'x', x: 43, y: 3, n: 30, map: outside});
createLinearWall({coord: 'y', x: 62, y: 3, n: 6, map: outside});
createLinearWall({coord: 'y', x: 40, y: -1, n: 4, map: outside});
createLinearWall({coord: 'x', x: 62, y: 8, n: 3, map: outside});
createLinearWall({coord: 'x', x: 67, y: 8, n: 3, map: outside});
createLinearWall({coord: 'y', x: 0, y: 0, n: 28, map: outside});
createLinearWall({coord: 'y', x: 69, y: 0, n: 28, map: outside});
createLinearWall({coord: 'x', x: 0, y: 25, n: 70, map: outside});
createLinearWall({coord: 'x', x: 40, y: -1, n: 4, map: outside});
createLinearWall({coord: 'y', x: 70, y: 17, n: 2, map: outside});

