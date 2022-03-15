const AScaleData = [
    {
        highE: ['0e' ,'3e' ,'5e' ,'8e' ,'10e','12e'],
        B: ['1B' ,'3B' ,'5B' ,'8B' ,'10B'],
        G: ['0G' ,'2G' ,'5G' ,'7G' ,'9G' ,'12G'], 
        D: ['0D' ,'2D' ,'5D' ,'7D' ,'10D','12D'],
        A: ['0A' ,'3A' ,'5A' ,'7A' ,'10A','12A'],
        E: ['0E' ,'3E' ,'5E' ,'8E' ,'10E','12E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['5e', '8e'],
        B: ['5B', '8B'],
        G: ['5G', '7G'],
        D: ['5D','7D'],
        A: ['5A', '7A'],
        E: ['5E', '8E'],
        hoverArrows: {
            highE: {'5e': '8e'},
            B: {'5B': '8B', '8B': '5e'},
            G: {'5G': '7G', '7G': '5B'},
            D: {'5D': '7D', '7D': '5G'},
            A: {'5A': '7A', '7A': '5D'},
            E: {'5E': '8E', '8E': '5A'}
        },
        section: [true, false, false, false, false]
    },
    {
        highE: ['8e', '10e'],
        B: ['8B', '10B'],
        G: ['7G', '9G'],
        D: ['7D', '10D'],
        A: ['7A', '10A'],
        E: ['8E', '10E'],
        hoverArrows: {
            highE: {'8e': '10e'},
            B: {'8B': '10B', '10B': '8e'},
            G: {'7G': '9G', '9G': '8B'},
            D: {'7D': '10D', '10D': '7G'},
            A: {'7A': '10A', '10A': '7D'},
            E: {'8E': '10E', '10E': '7A'}
        },
        section: [false, true, false, false, false]
    },
    {
        highE: ['10e', '12e'],
        B: ['10B', '1B'],
        G: ['9G', '12G'],
        D: ['10D', '12D'],
        A: ['10A', '12A'],
        E: ['10E', '12E'],
        // hoverArrows: {
        //     highE: {'10e': '12e'},
        //     B: {'10B': '1B', '1B': '10e'},
        //     G: {'9G': '12G', '12G': '10B'},
        //     D: {'10D': '12D', '12D': '9G'},
        //     A: {'10A': '12A', '12A': '10D'},
        //     E: {'10E': '12E', '12E': '10A'}
        // },
        section: [false, false, true, false, false]
    },
    {
        highE: ['0e', '12e', '3e'],
        B: ['1B', '3B'],
        G: ['12G', '2G', '0G'],
        D: ['12D', '2D', '0D'],
        A: ['12A', '3A', '0A'],
        E: ['12E', '3E', '0E'],
        hoverArrows: {
            highE: {'0e': '3e'},
            B: {'1B': '3B', '3B': '0e'},
            G: {'0G': '2G', '2G': '1B'},
            D: {'0D': '2D', '2D': '0G'},
            A: {'0A': '3A', '3A': '0D'},
            E: {'0E': '3E', '3E': '0A'}
        },
        section: [false, false, false, true, false]
    },
    {
        highE: ['5e', '3e'],
        B: ['5B', '3B'],
        G: ['5G', '2G'],
        D: ['5D', '2D'],
        A: ['5A', '3A'],
        E: ['5E', '3E'],
        hoverArrows: {
            highE: {'3e': '5e'},
            B: {'3B': '5B', '5B': '3e'},
            G: {'2G': '5G', '5G': '3B'},
            D: {'2D': '5D', '5D': '2G'},
            A: {'3A': '5A', '5A': '2D'},
            E: {'3E': '5E', '5E': '3A'}
        },
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '5e' , end: '8e' }, { start: '8e' , end: '8B' }, { start: '8B' , end: '7G' },
                    { start: '7G' , end: '7D' }, { start: '7D' , end: '7A' }, { start: '7A' , end: '8E' },
                    { start: '8E' , end: '5E' }, { start: '5E' , end: '5A' }, { start: '5A' , end: '5D' },
                    { start: '5D' , end: '5G' }, { start: '5G' , end: '5B' }, { start: '5B' , end: '5e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '8e' , end: '8B' }, { start: '8B' , end: '7G' }, { start: '7G' , end: '7D' },
                    { start: '7D' , end: '7A' }, { start: '7A' , end: '8E' }, { start: '8e' , end: '10e' },
                    { start: '10e' , end: '10B' }, { start: '10B' , end: '9G' }, { start: '9G' , end: '10D' },
                    { start: '10D' , end: '10A' }, { start: '10A' , end: '10E' }, { start: '10E' , end: '8E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '10e' , end: '10B' }, { start: '10B' , end: '9G' }, { start: '9G' , end: '10D' },
                    { start: '10D' , end: '10A' }, { start: '10A' , end: '10E' }, { start: '10e' , end: '12e' },
                    { start: '10E' , end: '12E' }, { start: '12E' , end: '12A' }, { start: '12A' , end: '12D' },
                    { start: '12D' , end: '12G' }, { start: '0e' , end: '1B' }, { start: '1B' , end: '0G' },
                    { start: '0G' , end: '0D' }, { start: '0D' , end: '0A' }, { start: '0A' , end: '0E' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '0e' , end: '3e' }, { start: '3e' , end: '3B' }, { start: '3B' , end: '2G' },
                    { start: '2G' , end: '2D' }, { start: '2D' , end: '3A' }, { start: '3A' , end: '3E' },
                    { start: '3E' , end: '0E' }, { start: '0E' , end: '0A' }, { start: '0A' , end: '0D' },
                    { start: '0D' , end: '0G' }, { start: '0G' , end: '1B' }, { start: '1B' , end: '0e' },
                    { start: '12G' , end: '12D' }, { start: '12D' , end: '12A' }, { start: '12A' , end: '12E' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '3e' , end: '5e' }, { start: '5e' , end: '5B' }, { start: '5B' , end: '5G' }, 
                    { start: '5G' , end: '5D' }, { start: '5D' , end: '5A' }, { start: '5A' , end: '5E' }, 
                    { start: '5E' , end: '3E' }, { start: '3E' , end: '3A' }, { start: '3A' , end: '2D' },
                    { start: '2D' , end: '2G' }, { start: '2G' , end: '3B' }, { start: '3B' , end: '3e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default AScaleData;