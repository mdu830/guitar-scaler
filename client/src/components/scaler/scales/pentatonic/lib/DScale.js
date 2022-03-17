const DScaleData = [
    {
        highE: ['1e', '3e', '5e', '8e', '10e'],
        B: ['1B', '3B', '6B', '8B', '10B'],
        G: ['0G', '2G', '5G', '7G', '10G', '12G'],
        D: ['0D', '3D', '5D', '7D', '10D', '12D'],
        A: ['0A', '3A', '5A', '8A', '10A', '12A'],
        E: ['1E', '3E', '5E', '8E', '10E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['10e', '1e'],
        B: ['10B', '1B'],
        G: ['10G', '12G', '0G'],
        D: ['10D', '12D', '0D'],
        A: ['10A', '12A', '0A'],
        E: ['10E', '1E'],
        // hoverArrows: {
        //     highE: { '10e': '1e' },
        //     B: { '10B': '1B', '1B': '10e' },
        //     G: { '10G': '12G', '12G': '10B' },
        //     D: { '10D': '12D', '12D': '10G' },
        //     A: { '10A': '12A', '12A': '10D' },
        //     E: { '10E': '1E', '1E': '10A' }
        // },
        section: [true, false, false, false, false]
    },
    {
        highE: ['1e', '3e'],
        B: ['1B', '3B'],
        G: ['12G', '2G', '0G'],
        D: ['12D', '3D', '0D'],
        A: ['12A', '3A', '0A'],
        E: ['1E', '3E'],
        hoverArrows: {
            highE: { '1e': '3e' },
            B: { '1B': '3B', '3B': '1e' },
            G: { '0G': '2G', '2G': '1B' },
            D: { '0D': '3D', '3D': '0G' },
            A: { '0A': '3A', '3A': '0D' },
            E: { '1E': '3E', '3E': '0A' }
        },
        section: [false, true, false, false, false]
    },
    {
        highE: ['3e', '5e'],
        B: ['3B', '6B'],
        G: ['2G', '5G'],
        D: ['3D', '5D'],
        A: ['3A', '5A'],
        E: ['3E', '5E'],
        hoverArrows: {
            highE: {'3e': '5e'},
            B: {'3B': '6B', '6B': '3e'},
            G: {'2G': '5G', '5G': '3B'},
            D: {'3D': '5D', '5D': '2G'},
            A: {'3A': '5A', '5A': '3D'},
            E: {'3E': '5E', '5E': '3A'}
        },
        section: [false, false, true, false, false]
    },
    {
        highE: ['5e', '8e'],
        B: ['6B', '8B'],
        G: ['5G', '7G'],
        D: ['5D', '7D'],
        A: ['5A', '8A'],
        E: ['5E', '8E'],
        hoverArrows: {
            highE: {'5e': '8e'},
            B: {'6B': '8B', '8B': '5e'},
            G: {'5G': '7G', '7G': '6B'},
            D: {'5D': '7D', '7D': '5G'},
            A: {'5A': '8A', '8A': '5D'},
            E: {'5E': '8E', '8E': '5A'}
        },
        section: [false, false, false, true, false]
    },
    {
        highE: ['10e', '8e'],
        B: ['10B', '8B'],
        G: ['10G', '7G'],
        D: ['10D', '7D'],
        A: ['10A', '8A'],
        E: ['10E', '8E'],
        hoverArrows: {
            highE: {'8e': '10e'},
            B: {'8B': '10B', '10B': '8e'},
            G: {'7G': '10G', '10G': '8B'},
            D: {'7D': '10D', '10D': '7G'},
            A: {'8A': '10A', '10A': '7D'},
            E: {'8E': '10E', '10E': '8A'}
        },
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '12e', end: '10e' }, { start: '10e', end: '10B' }, { start: '10B', end: '10G' },
                    { start: '10G', end: '10D' }, { start: '10D', end: '10A' }, { start: '10A', end: '10E' },
                    { start: '10E', end: '12E' }, { start: '12G', end: '12D' }, { start: '12D', end: '12A' },
                    { start: '0e', end: '1e' }, { start: '1e', end: '1B' }, { start: '1B', end: '0G' },
                    { start: '0G', end: '0D' }, { start: '0D', end: '0A' }, { start: '0A', end: '1E' },
                    { start: '1E', end: '0E' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '1B', end: '1e' }, { start: '1e', end: '3e' }, { start: '3e', end: '3B' },
                    { start: '3B', end: '2G' }, { start: '2G', end: '3D' }, { start: '3D', end: '3A' },
                    { start: '3A', end: '3E' }, { start: '3E', end: '1E' }, { start: '1E', end: '0A' },
                    { start: '0A', end: '0D' }, { start: '0D', end: '0G' }, { start: '0G', end: '1B' },
                    { start: '1B', end: '1e' }, { start: '12G', end: '12D' }, { start: '12D', end: '12A' }

                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '3B', end: '3e' }, { start: '3e', end: '5e' }, { start: '5e', end: '6B' },
                    { start: '6B', end: '5G' }, { start: '5G', end: '5D' }, { start: '5D', end: '5A' },
                    { start: '5A', end: '5E' }, { start: '5E', end: '3E' }, { start: '3E', end: '3A' },
                    { start: '3A', end: '3D' }, { start: '3D', end: '2G' }, { start: '2G', end: '3B' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '5e', end: '8e' }, { start: '8e', end: '8B' }, { start: '8B', end: '7G' },
                    { start: '7G', end: '7D' }, { start: '7D', end: '8A' }, { start: '8A', end: '8E' },
                    { start: '8E', end: '5E' }, { start: '5E', end: '5A' }, { start: '5A', end: '5D' },
                    { start: '5D', end: '5G' }, { start: '5G', end: '6B' }, { start: '6B', end: '5e' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '8e', end: '10e' }, { start: '10e', end: '10B' }, { start: '10B', end: '10G' },
                    { start: '10G', end: '10D' }, { start: '10D', end: '10A' }, { start: '10A', end: '10E' },
                    { start: '10E', end: '8E' }, { start: '8E', end: '8A' }, { start: '8A', end: '7D' },
                    { start: '7D', end: '7G' }, { start: '7G', end: '8B' }, { start: '8B', end: '8e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default DScaleData;