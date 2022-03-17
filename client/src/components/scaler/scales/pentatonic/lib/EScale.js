const EScaleData = [
    {
        highE: ['0e', '3e', '5e', '7e', '10e', '12e'],
        B: ['0B', '3B', '5B', '8B', '10B', '12B'],
        G: ['0G', '2G', '4G', '7G', '9G', '12G'],
        D: ['0D', '2D', '5D', '7D', '9D', '12D'],
        A: ['0A', '2A', '5A', '7A', '10A', '12A'],
        E: ['0E', '3E', '5E', '7E', '10E', '12E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['0e', '3e'],
        B: ['0B', '3B'],
        G: ['0G', '2G'],
        D: ['0D', '2D'],
        A: ['0A', '2A'],
        E: ['0E', '3E'],
        hoverArrows: {
            highE: {'0e': '3e'},
            B: {'0B': '3B', '3B': '0e'},
            G: {'0G': '2G', '2G': '0B'},
            D: {'0D': '2D', '2D': '0G'},
            A: {'0A': '2A', '2A': '0D'},
            E: {'0E': '3E', '3E': '0A'}
        },
        section: [true, false, false, false, false]
    },
    {
        highE: ['3e', '5e'],
        B: ['3B', '5B'],
        G: ['2G', '4G'],
        D: ['2D', '5D'],
        A: ['2A', '5A'],
        E: ['3E', '5E'],
        hoverArrows: {
            highE: {'3e': '5e'},
            B: {'3B': '5B', '5B': '3e'},
            G: {'2G': '4G', '4G': '3B'},
            D: {'2D': '5D', '5D': '2G'},
            A: {'2A': '5A', '5A': '2D'},
            E: {'3E': '5E', '5E': '2A'}
        },
        section: [false, true, false, false, false]
    },
    {
        highE: ['5e', '7e'],
        B: ['5B', '8B'],
        G: ['4G', '7G'],
        D: ['5D', '7D'],
        A: ['5A', '7A'],
        E: ['5E', '7E'],
        hoverArrows: {
            highE: {'5e': '7e'},
            B: {'5B': '8B', '8B': '5e'},
            G: {'4G': '7G', '7G': '5B'},
            D: {'5D': '7D', '7D': '4G'},
            A: {'5A': '7A', '7A': '5D'},
            E: {'5E': '7E', '7E': '5A'}
        },
        section: [false, false, true, false, false]
    },
    {
        highE: ['7e', '10e'],
        B: ['8B', '10B'],
        G: ['7G', '9G'],
        D: ['7D', '9D'],
        A: ['7A', '10A'],
        E: ['7E', '10E'],
        hoverArrows: {
            highE: {'7e': '10e'},
            B: {'8B': '10B', '10B': '7e'},
            G: {'7G': '9G', '9G': '8B'},
            D: {'7D': '9D', '9D': '7G'},
            A: {'7A': '10A', '10A': '7D'},
            E: {'7E': '10E', '10E': '7A'}
        },
        section: [false, false, false, true, false]
    },
    {
        highE: ['10e', '12e'],
        B: ['10B', '12B'],
        G: ['9G', '12G'],
        D: ['9D', '12D'],
        A: ['10A', '12A'],
        E: ['10E', '12E'],
        hoverArrows: {
            highE: {'10e': '12e'},
            B: {'10B': '12B', '12B': '10e'},
            G: {'9G': '12G', '12G': '10B'},
            D: {'9D': '12D', '12D': '9G'},
            A: {'10A': '12A', '12A': '9D'},
            E: {'10E': '12E', '12E': '10A'}
        },
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '0e', end: '3e' }, { start: '3e', end: '3B' }, { start: '3B', end: '2G' },
                    { start: '2G', end: '2D' }, { start: '2D', end: '2A' }, { start: '2A', end: '3E' },
                    { start: '3E', end: '0E' }, { start: '0E', end: '0A' }, { start: '0A', end: '0D' },
                    { start: '0D', end: '0G' }, { start: '0G', end: '0B' }, { start: '0B', end: '0e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '3e', end: '3B' }, { start: '3B', end: '2G' }, { start: '2G', end: '2D' },
                    { start: '2D', end: '2A' }, { start: '2A', end: '3E' }, { start: '3e', end: '5e' },
                    { start: '5e', end: '5B' }, { start: '5B', end: '4G' }, { start: '4G', end: '5D' },
                    { start: '5D', end: '5A' }, { start: '5A', end: '5E' }, { start: '5E', end: '3E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '5e', end: '5B' }, { start: '5B', end: '4G' }, { start: '4G', end: '5D' },
                    { start: '5D', end: '5A' }, { start: '5A', end: '5E' }, { start: '5e', end: '7e' },
                    { start: '7e', end: '8B' }, { start: '8B', end: '7G' }, { start: '7G', end: '7D' },
                    { start: '7D', end: '7A' }, { start: '7A', end: '7E' }, { start: '7E', end: '5E' },
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '7e', end: '8B' }, { start: '8B', end: '7G' }, { start: '7G', end: '7D' }, 
                    { start: '7D', end: '7A' }, { start: '7A', end: '7E' }, { start: '7e', end: '10e' }, 
                    { start: '10e', end: '10B' }, { start: '10B', end: '9G' }, { start: '9G', end: '9D' }, 
                    { start: '9D', end: '10A' }, { start: '10A', end: '10E' }, { start: '10E', end: '7E' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '10e', end: '10B' }, { start: '10B', end: '9G' }, { start: '9G', end: '9D' },
                    { start: '9D', end: '10A' }, { start: '10A', end: '10E' }, { start: '10e', end: '12e' },
                    { start: '12e', end: '12B' }, { start: '12B', end: '12G' }, { start: '12G', end: '12D' },
                    { start: '12D', end: '12A' }, { start: '12A', end: '12E' }, { start: '12E', end: '10E' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default EScaleData;