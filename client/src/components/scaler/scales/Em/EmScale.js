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
            { start: '0E' , end: '0A' },
            { start: '0A' , end: '0D' },
            { start: '0D' , end: '0G' },
            { start: '0G' , end: '0B' },
            { start: '0B' , end: '0e' }
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
            { start: '5D' , end: '5A' },
            { start: '5A' , end: '5E' },
            { start: '5E' , end: '3E' }
        ],
        section3: [
            { start: '5e' , end: '5B' },
            { start: '5B' , end: '4G' },
            { start: '4G' , end: '5D' },
            { start: '5D' , end: '5A' },
            { start: '5A' , end: '5E' },
            { start: '5e' , end: '7e' },
            { start: '7e' , end: '8B' },
            { start: '8B' , end: '7G' },
            { start: '7G' , end: '7D' },
            { start: '7D' , end: '7A' },
            { start: '7A' , end: '7E' },
            { start: '7E' , end: '5E' }
        ],        
        section4: [
            { start: '7e' , end: '8B' },
            { start: '8B' , end: '7G' },
            { start: '7D' , end: '7A' },
            { start: '7A' , end: '7E' },
            { start: '7e' , end: '10e' },
            { start: '10e' , end: '10B' },
            { start: '10B' , end: '9G' },
            { start: '9G' , end: '9D' },
            { start: '9D' , end: '10A' },
            { start: '10A' , end: '10E' },
            { start: '10E' , end: '7E' }
        ],
        section5: [
            { start: '10e' , end: '10B' },
            { start: '10B' , end: '9G' },
            { start: '9G' , end: '9D' },
            { start: '9D' , end: '10A' },
            { start: '10A' , end: '10E' },
            { start: '10e' , end: '12e' },
            { start: '12e' , end: '12B' },
            { start: '12B' , end: '12G' },
            { start: '12G' , end: '12D' },
            { start: '12D' , end: '12A' },
            { start: '12A' , end: '12E' },
            { start: '12E' , end: '10E' }
        ]
    }
}

export default scaleData;