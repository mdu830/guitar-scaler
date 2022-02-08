const EmScaleData = {

    highE: [
        { isDot: '0e' },
        { isDot: '3e' },
        { isDot: '5e' },
        { isDot: '7e' },
        { isDot: '10e' },
        { isDot: '12e' }
    ],

    B: [
        { isDot: '0B' },
        { isDot: '3B' },
        { isDot: '5B' },
        { isDot: '8B' },
        { isDot: '10B' },
        { isDot: '1B' }
    ],

    G: [
        { isDot: '0G' },
        { isDot: '2G' },
        { isDot: '4G' },
        { isDot: '7G' },
        { isDot: '9G' },
        { isDot: '12G' }
    ], 

    D: [
        { isDot: '0D' },
        { isDot: '2D' },
        { isDot: '5D' },
        { isDot: '7D' },
        { isDot: '9D' },
        { isDot: '12D' }
    ],

    A: [
        { isDot: '0A' },
        { isDot: '2A' },
        { isDot: '5A' },
        { isDot: '7A' },
        { isDot: '10A' },
        { isDot: '12A' }
    ],

    E: [
        { isDot: '0E' },
        { isDot: '3E' },
        { isDot: '5E' },
        { isDot: '7E' },
        { isDot: '10E' },
        { isDot: '12E' }
    ],

    sectionLines: {
         section1: [
            // { color: 'rgba(255, 0, 0, 0.841)'},
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
            // { color: 'rgba(255, 138, 42, 0.671)'},
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
            // { color: 'rgba(251, 255, 42, 0.671)'},
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
            // { color: 'rgba(85, 255, 42, 0.671)'},
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
            // { color: 'rgba(42, 255, 202, 0.671)'},
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

export default EmScaleData;