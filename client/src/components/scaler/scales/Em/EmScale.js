const scaleData = {

    highE: [
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false},
        { isDot: true }
    ],

    B: [
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ],

    G: [
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true }
    ], 

    D: [
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true }
    ],

    A: [
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ],

    E: [
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ],

    sectionLines: {
         section1: [
            { start: '0e' , end: '3e' },
            { start: '3e' , end: '3B' },
            { start: '3B' , end: '2G' },
            { start: '2G' , end: '2D' },
            { start: '2D' , end: '2A' },
            { start: '2A' , end: '3E' },
            { start: '3E' , end: '0E' },
            { start: '0E' , end: '0e' },
        ],
        section2: [
            { start: '3e' , end: '3B' },
            { start: '3B' , end: '2G' },
            { start: '2G' , end: '2D' },
            { start: '2D' , end: '2A' },
            { start: '2A' , end: '3E' },
            { start: '3e' , end: '5e' },
            { start: '5e' , end: '5B' },
            { start: '5B' , end: '4G' },
            { start: '4G' , end: '5D' },
            { start: '5D' , end: '5E' },
            { start: '5E' , end: '3E' },
        ],
        section3: [
            { start: '5e' , end: '5B' },
            { start: '5B' , end: '4G' },
            { start: '4G' , end: '5D' },
            { start: '5D' , end: '5E' },
            { start: '5e' , end: '7e' },
            { start: '7e' , end: '8B' },
            { start: '8B' , end: '7G' },
            { start: '7G' , end: '7E' },
            { start: '7E' , end: '5E' }
        ]
    }
}

export default scaleData;