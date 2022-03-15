const FScaleData = [
    {
        highE: ['1e', '4e', '6e', '8e', '11e'],
        B: ['1B', '4B', '6B', '9B', '11B'],
        G: ['1G', '3G', '5G', '8G', '10G'],
        D: ['1D', '3D', '6D', '8D', '10D'],
        A: ['1A', '3A', '6A', '8A', '11A'],
        E: ['1E', '4E', '6E', '8E', '11E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['1e', '4e'],
        B: ['1B', '4B'],
        G: ['1G', '3G'],
        D: ['1D', '3D'],
        A: ['1A', '3A'],
        E: ['1E', '4E'],
        hoverArrows: {
            highE: {'1e': '4e'},
            B: {'1B': '4B', '4B': '1e'},
            G: {'1G': '3G', '3G': '1B'},
            D: {'1D': '3D', '3D': '1G'},
            A: {'1A': '3A', '3A': '1D'},
            E: {'1E': '4E', '4E': '1A'}
        },
        section: [true, false, false, false, false]
    },
    {
        highE: ['4e', '6e'],
        B: ['4B', '6B'],
        G: ['3G', '5G'],
        D: ['3D', '6D'],
        A: ['3A', '6A'],
        E: ['4E', '6E'],
        hoverArrows: {
            highE: {'4e': '6e'},
            B: {'4B': '6B', '6B': '4e'},
            G: {'3G': '5G', '5G': '4B'},
            D: {'3D': '6D', '6D': '3G'},
            A: {'3A': '6A', '6A': '3D'},
            E: {'4E': '6E', '6E': '3A'}
        },
        section: [false, true, false, false, false]
    },
    {
        highE: ['6e', '8e'],
        B: ['6B', '9B'],
        G: ['5G', '8G'],
        D: ['6D', '8D'],
        A: ['6A', '8A'],
        E: ['6E', '8E'],
        hoverArrows: {
            highE: {'6e': '8e'},
            B: {'6B': '9B', '9B': '6e'},
            G: {'5G': '8G', '8G': '6B'},
            D: {'6D': '8D', '8D': '5G'},
            A: {'6A': '8A', '8A': '6D'},
            E: {'6E': '8E', '8E': '6A'}
        },
        section: [false, false, true, false, false]
    },
    {
        highE: ['8e', '11e'],
        B: ['9B', '11B'],
        G: ['8G', '10G'],
        D: ['8D', '10D'],
        A: ['8A', '11A'],
        E: ['8E', '11E'],
        hoverArrows: {
            highE: {'8e': '11e'},
            B: {'9B': '11B', '11B': '8e'},
            G: {'8G': '10G', '10G': '9B'},
            D: {'8D': '10D', '10D': '8G'},
            A: {'8A': '11A', '11A': '8D'},
            E: {'8E': '11E', '11E': '8A'}
        },
        section: [false, false, false, true, false]
    },
    {
        highE: ['1e', '11e'],
        B: ['1B', '11B'],
        G: ['1G', '10G'],
        D: ['1D', '10D'],
        A: ['1A', '11A'],
        E: ['1E', '11E'],
        // hoverArrows: {
        //     highE: {'11e': '1e'},
        //     B: {'11B': '1B', '1B': '11e'},
        //     G: {'10G': '1G', '1G': '11B'},
        //     D: {'10D': '1D', '1D': '10G'},
        //     A: {'11A': '1A', '1A': '10D'},
        //     E: {'11E': '1E', '1E': '11A'}
        // },
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '1e', end: '4e' }, { start: '4e', end: '4B' }, { start: '4B', end: '3G' },
                    { start: '3G', end: '3D' }, { start: '3D', end: '3A' }, { start: '3A', end: '4E' },
                    { start: '4E', end: '1E' }, { start: '1E', end: '1A' }, { start: '1A', end: '1D' },
                    { start: '1D', end: '1G' }, { start: '1G', end: '1B' }, { start: '1B', end: '1e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '4e' , end: '4B' }, { start: '4B' , end: '3G' }, { start: '3G' , end: '3D' },
                    { start: '3D' , end: '3A' }, { start: '3A' , end: '4E' }, { start: '4e' , end: '6e' },
                    { start: '6e' , end: '6B' }, { start: '6B' , end: '5G' }, { start: '5G' , end: '6D' },
                    { start: '6D' , end: '6A' },{ start: '6A' , end: '6E' }, { start: '6E' , end: '4E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '6e' , end: '6B' }, { start: '6B' , end: '5G' }, { start: '5G' , end: '6D' },
                    { start: '6D' , end: '6A' }, { start: '6A' , end: '6E' }, { start: '6e' , end: '8e' },
                    { start: '8e' , end: '9B' }, { start: '9B' , end: '8G' }, { start: '8G' , end: '8D' },
                    { start: '8D' , end: '8A' }, { start: '8A' , end: '8E' }, { start: '8E' , end: '6E' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '8e' , end: '9B' }, { start: '9B' , end: '8G' }, { start: '8D' , end: '8A' },
                    { start: '8A' , end: '8E' }, { start: '8e' , end: '11e' }, { start: '11e' , end: '11B' },
                    { start: '11B' , end: '10G' }, { start: '10G' , end: '10D' }, { start: '10D' , end: '11A' }, 
                    { start: '11A' , end: '11E' }, { start: '11E' , end: '8E' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '11e' , end: '12e' }, { start: '11e' , end: '11B' }, { start: '11B' , end: '10G' },
                    { start: '10G' , end: '10D' }, { start: '10D' , end: '11A' }, { start: '11A' , end: '11E' },
                    { start: '11E' , end: '12E' }, { start: '0E' , end: '1E' }, { start: '1E' , end: '1A' },
                    { start: '1A' , end: '1D' }, { start: '1D' , end: '1G' }, { start: '1G' , end: '1B' },
                    { start: '1B' , end: '1e' }, { start: '1e' , end: '0e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default FScaleData;