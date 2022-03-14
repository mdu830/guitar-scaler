const FSharpScale = [
    {
        highE: ['0e', '2e', '5e', '7e', '9e', '12e'],
        B: ['0B', '2B', '5B', '7B', '10B', '12B' ],
        G: ['2G', '4G', '6G', '9G', '11G'],
        D: ['2D', '4D', '7D', '9D', '11D'],
        A: ['0A', '2A', '4A', '7A', '9A', '12A'],
        E: ['0E', '2E', '5E', '7E', '9E', '12E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['2e', '5e'],
        B: ['2B', '5B'],
        G: ['2G', '4G'],
        D: ['2D', '4D'],
        A: ['2A', '4A'],
        E: ['2E', '5E'],
        section: [true, false, false, false, false]
    },
    {
        highE: ['5e', '7e'],
        B: ['5B', '7B'],
        G: ['4G', '6G'],
        D: ['4D', '7D'],
        A: ['4A', '7A'],
        E: ['5E', '7E'],
        section: [false, true, false, false, false]
    },
    {
        highE: ['7e', '9e'],
        B: ['7B', '10B'],
        G: ['6G', '9G'],
        D: ['7D', '9D'],
        A: ['7A', '9A'],
        E: ['7E', '9E'],
        section: [false, false, true, false, false]
    },
    {
        highE: ['9e', '12e'],
        B: ['10B', '12B'],
        G: ['9G', '11G'],
        D: ['9D', '11D'],
        A: ['9A', '12A'],
        E: ['9E', '12E'],
        section: [false, false, false, true, false]
    },
    {
        highE: ['2e', '12e'],
        B: ['2B', '12B'],
        G: ['2G', '11G'],
        D: ['2D', '11D'],
        A: ['2A', '12A'],
        E: ['2E', '12E'],
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '2e' , end: '5e' }, { start: '5e' , end: '5B' }, { start: '5B' , end: '4G' },
                    { start: '4G' , end: '4D' }, { start: '4D' , end: '4A' }, { start: '4A' , end: '5E' },
                    { start: '5E' , end: '2E' }, { start: '2E' , end: '2A' }, { start: '2A' , end: '2D' },
                    { start: '2D' , end: '2G' }, { start: '2G' , end: '2B' }, { start: '2B' , end: '2e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '5e' , end: '5B' }, { start: '5B' , end: '4G' }, { start: '4G' , end: '4D' },
                    { start: '4D' , end: '4A' }, { start: '4A' , end: '5E' }, { start: '5e' , end: '7e' },
                    { start: '7e' , end: '7B' }, { start: '7B' , end: '6G' }, { start: '6G' , end: '7D' },
                    { start: '7D' , end: '7A' }, { start: '7A' , end: '7E' }, { start: '7E' , end: '5E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '7e' , end: '7B' }, { start: '7B' , end: '6G' }, { start: '6G' , end: '7D' },
                    { start: '7D' , end: '7A' }, { start: '7A' , end: '7E' }, { start: '7e' , end: '9e' },
                    { start: '9e' , end: '10B' }, { start: '10B' , end: '9G' }, { start: '9G' , end: '9D' },
                    { start: '9D' , end: '9A' }, { start: '9A' , end: '9E' }, { start: '9E' , end: '7E' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '9e' , end: '10B' }, { start: '10B' , end: '9G' }, { start: '9D' , end: '9A' },
                    { start: '9A' , end: '9E' }, { start: '9e' , end: '12e' }, { start: '12e' , end: '12B' },
                    { start: '12B' , end: '11G' }, { start: '11G' , end: '11D' }, { start: '11D' , end: '12A' },
                    { start: '12A' , end: '12E' }, { start: '12E' , end: '9E' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '12e' , end: '12B' }, { start: '12B' , end: '11G' }, { start: '11G' , end: '11D' },
                    { start: '11D' , end: '12A' }, { start: '12A' , end: '12E' }, { start: '0A' , end: '0E' },
                    { start: '0E' , end: '2E' }, { start: '2E' , end: '2A' }, { start: '2A' , end: '2D' },
                    { start: '2D' , end: '2G' }, { start: '2G' , end: '2B' }, { start: '2B' , end: '2e' },
                    { start: '2e' , end: '0e' }, { start: '0e' , end: '0B' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default FSharpScale;