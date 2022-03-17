const DSharpScale = [
    {
        highE: ['2e', '4e', '6e', '9e', '11e'],
        B: ['2B', '4B', '7B', '9B', '11B'],
        G: ['1G', '3G', '6G', '8G', '11G'],
        D: ['1D', '4D', '6D', '8D', '11D'],
        A: ['1A', '4A', '6A', '9A', '11A'],
        E: ['2E', '4E', '6E', '9E', '11E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['11e', '2e'],
        B: ['11B', '2B'],
        G: ['11G', '1G'],
        D: ['11D', '1D'],
        A: ['11A', '1A'],
        E: ['11E', '2E'],
        // hoverArrows: {
        //     highE: { '11e': '2e' },
        //     B: { '11B': '2B', '2B': '11e' },
        //     G: { '11G': '1G', '1G': '11B' },
        //     D: { '11D': '1D', '1D': '11G' },
        //     A: { '11A': '1A', '1A': '11D' },
        //     E: { '11E': '2E', '2E': '11A' }
        // },
        section: [true, false, false, false, false]
    },
    {
        highE: ['2e', '4e'],
        B: ['2B', '4B'],
        G: ['1G', '3G'],
        D: ['1D', '4D'],
        A: ['1A', '4A'],
        E: ['2E', '4E'],
        hoverArrows: {
            highE: { '2e': '4e' },
            B: { '2B': '4B', '4B': '2e' },
            G: { '1G': '3G', '3G': '2B' },
            D: { '1D': '4D', '4D': '1G' },
            A: { '1A': '4A', '4A': '1D' },
            E: { '2E': '4E', '4E': '1A' }
        },
        section: [false, true, false, false, false]
    },
    {
        highE: ['4e', '6e'],
        B: ['4B', '7B'],
        G: ['3G', '6G'],
        D: ['4D', '6D'],
        A: ['4A', '6A'],
        E: ['4E', '6E'],
        hoverArrows: {
            highE: {'4e': '6e'},
            B: {'4B': '7B', '7B': '4e'},
            G: {'3G': '6G', '6G': '4B'},
            D: {'4D': '6D', '6D': '3G'},
            A: {'4A': '6A', '6A': '4D'},
            E: {'4E': '6E', '6E': '4A'}
        },
        section: [false, false, true, false, false]
    },
    {
        highE: ['6e', '9e'],
        B: ['7B', '9B'],
        G: ['6G', '8G'],
        D: ['6D', '8D'],
        A: ['6A', '9A'],
        E: ['6E', '9E'],
        hoverArrows: {
            highE: {'6e': '9e'},
            B: {'7B': '9B', '9B': '6e'},
            G: {'6G': '8G', '8G': '7B'},
            D: {'6D': '8D', '8D': '6G'},
            A: {'6A': '9A', '9A': '6D'},
            E: {'6E': '9E', '9E': '6A'}
        },
        section: [false, false, false, true, false]
    },
    {
        highE: ['11e', '9e'],
        B: ['11B', '9B'],
        G: ['11G', '8G'],
        D: ['11D', '8D'],
        A: ['11A', '9A'],
        E: ['11E', '9E'],
        hoverArrows: {
            highE: {'9e': '11e'},
            B: {'9B': '11B', '11B': '9e'},
            G: {'8G': '11G', '11G': '9B'},
            D: {'8D': '11D', '11D': '8G'},
            A: {'9A': '11A', '11A': '8D'},
            E: {'9E': '11E', '11E': '9A'}
        },
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '12e', end: '11e' }, { start: '11e', end: '11B' }, { start: '11B', end: '11G' },
                    { start: '11G', end: '11D' }, { start: '11D', end: '11A' }, { start: '11A', end: '11E' },
                    { start: '11E', end: '12E' }, { start: '0E', end: '2E' }, { start: '2E', end: '1A' },
                    { start: '1A', end: '1D' }, { start: '1D', end: '1G' }, { start: '1G', end: '2B' },
                    { start: '2B', end: '2e' }, { start: '2e', end: '0e' },
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '2B', end: '2e' }, { start: '2e', end: '4e' }, { start: '4e', end: '4B' },
                    { start: '4B', end: '3G' }, { start: '3G', end: '4D' }, { start: '4D', end: '4A' },
                    { start: '4A', end: '4E' }, { start: '4E', end: '2E' }, { start: '2E', end: '1A' },
                    { start: '1A', end: '1D' }, { start: '1D', end: '1G' }, { start: '1G', end: '2B' },
                    { start: '2B', end: '2e' }

                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '4B', end: '4e' }, { start: '4e', end: '6e' }, { start: '6e', end: '7B' },
                    { start: '7B', end: '6G' }, { start: '6G', end: '6D' }, { start: '6D', end: '6A' },
                    { start: '6A', end: '6E' }, { start: '6E', end: '4E' }, { start: '4E', end: '4A' },
                    { start: '4A', end: '4D' }, { start: '4D', end: '3G' }, { start: '3G', end: '4B' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '6e', end: '9e' }, { start: '9e', end: '9B' }, { start: '9B', end: '8G' },
                    { start: '8G', end: '8D' }, { start: '8D', end: '9A' }, { start: '9A', end: '9E' },
                    { start: '9E', end: '6E' }, { start: '6E', end: '6A' }, { start: '6A', end: '6D' },
                    { start: '6D', end: '6G' }, { start: '6G', end: '7B' }, { start: '7B', end: '6e' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '9e', end: '11e' }, { start: '11e', end: '11B' }, { start: '11B', end: '11G' },
                    { start: '11G', end: '11D' }, { start: '11D', end: '11A' }, { start: '11A', end: '11E' },
                    { start: '11E', end: '9E' }, { start: '9E', end: '9A' }, { start: '9A', end: '8D' },
                    { start: '8D', end: '8G' }, { start: '8G', end: '9B' }, { start: '9B', end: '9e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default DSharpScale;