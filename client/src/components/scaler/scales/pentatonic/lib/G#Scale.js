const GSharpScale = [
    {
        highE: ['2e', '4e', '7e', '9e', '11e'],
        B: ['0B', '2B', '4B', '7B', '9B', '12B'],
        G: ['1G', '4G', '6G', '8G', '11G'], 
        D: ['1D', '4D', '6D', '9D', '11D'],
        A: ['2A', '4A', '6A' , '9A', '11A'],
        E: ['2E', '4E', '7E', '9E', '11E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['4e', '7e'],
        B: ['4B', '7B'],
        G: ['4G', '6G'],
        D: ['4D','6D'],
        A: ['4A', '6A'],
        E: ['4E', '7E'],
        section: [true, false, false, false, false]
    },
    {
        highE: ['7e', '9e'],
        B: ['7B', '9B'],
        G: ['6G', '8G'],
        D: ['6D', '9D'],
        A: ['6A', '9A'],
        E: ['7E', '9E'],
        section: [false, true, false, false, false]
    },
    {
        highE: ['9e', '11e'],
        B: ['9B', '12B'],
        G: ['8G', '11G'],
        D: ['9D', '11D'],
        A: ['9A', '11A'],
        E: ['9E', '11E'],
        section: [false, false, true, false, false]
    },
    {
        highE: ['11e', '2e'],
        B: ['12B', '2B', '0B'],
        G: ['11G', '1G'],
        D: ['11D', '1D'],
        A: ['11A', '2A'],
        E: ['11E', '2E'],
        section: [false, false, false, true, false]
    },
    {
        highE: ['4e', '2e'],
        B: ['4B', '2B'],
        G: ['4G', '1G'],
        D: ['4D', '1D'],
        A: ['4A', '2A'],
        E: ['4E', '2E'],
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '4e' , end: '7e' }, { start: '7e' , end: '7B' }, { start: '7B' , end: '6G' },
                    { start: '6G' , end: '6D' }, { start: '6D' , end: '6A' }, { start: '6A' , end: '7E' },
                    { start: '7E' , end: '4E' }, { start: '4E' , end: '4A' }, { start: '4A' , end: '4D' },
                    { start: '4D' , end: '4G' }, { start: '4G' , end: '4B' }, { start: '4B' , end: '4e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '7e' , end: '7B' }, { start: '7B' , end: '6G' }, { start: '6G' , end: '6D' },
                    { start: '6D' , end: '6A' }, { start: '6A' , end: '7E' }, { start: '7e' , end: '9e' },
                    { start: '9e' , end: '9B' }, { start: '9B' , end: '8G' }, { start: '8G' , end: '9D' },
                    { start: '9D' , end: '9A' }, { start: '9A' , end: '9E' }, { start: '9E' , end: '7E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '9e' , end: '9B' }, { start: '9B' , end: '8G' }, { start: '8G' , end: '9D' },
                    { start: '9D' , end: '9A' }, { start: '9A' , end: '9E' }, { start: '9e' , end: '11e' },
                    { start: '11e' , end: '12B' }, { start: '12B' , end: '11G' }, { start: '11G' , end: '11D' },
                    { start: '11D' , end: '11A' }, { start: '11A' , end: '11E' }, { start: '11E' , end: '9E' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '12e' , end: '11e' }, { start: '11e' , end: '12B' }, { start: '12B' , end: '11G' },
                    { start: '11G' , end: '11D' }, { start: '11D' , end: '11A' }, { start: '11A' , end: '11E' },
                    { start: '11E' , end: '12E' }, { start: '0e' , end: '2e' }, { start: '2e' , end: '2B' },
                    { start: '2B' , end: '1G' }, { start: '1G' , end: '1D' }, { start: '1D' , end: '2A' },
                    { start: '2A' , end: '2E' }, { start: '2E' , end: '0E' },
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '2e' , end: '4e' }, { start: '4e' , end: '4B' }, { start: '4B' , end: '4G' }, 
                    { start: '4G' , end: '4D' }, { start: '4D' , end: '4A' }, { start: '4A' , end: '4E' }, 
                    { start: '4E' , end: '2E' }, { start: '2E' , end: '2A' }, { start: '2A' , end: '1D' },
                    { start: '1D' , end: '1G' }, { start: '1G' , end: '2B' }, { start: '2B' , end: '2e' },
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default GSharpScale;