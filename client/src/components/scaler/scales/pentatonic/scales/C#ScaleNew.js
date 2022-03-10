const CSharpScale = [
    {
        highE: ['0e', '2e', '4e', '7e', '9e', '12e'],
        B: ['0B', '2B', '5B', '7B', '9B', '12B'],
        G: ['1G', '4G', '6G', '9G', '11G'],
        D: ['2D', '4D', '6D', '9D', '11D'],
        A: ['2A', '4A', '7A', '9A', '11A'],
        E: ['0E', '2E', '4E', '7E', '9E', '12E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['9e', '12e', '0e'],
        B: ['9B', '12B', '0B'],
        G: ['9G', '11G'],
        D: ['9D', '11D'],
        A: ['9A', '11A'],
        E: ['9E', '12E', '0E'],
        section: [true, false, false, false, false]
    },
    {
        highE: ['12e', '2e', '0e'],
        B: ['12B', '2B', '0B'],
        G: ['11G', '1G'],
        D: ['11D', '2D'],
        A: ['11A', '2A'],
        E: ['12E', '2E', '0E'],
        section: [false, true, false, false, false]
    },
    {
        highE: ['2e', '4e'],
        B: ['2B', '5B'],
        G: ['1G', '4G'],
        D: ['2D', '4D'],
        A: ['2A', '4A'],
        E: ['2E', '4E'],
        section: [false, false, true, false, false]
    },
    {
        highE: ['4e', '7e'],
        B: ['5B', '7B'],
        G: ['4G', '6G'],
        D: ['4D', '6D'],
        A: ['4A', '7A'],
        E: ['4E', '7E'],
        section: [false, false, false, true, false]
    },
    {
        highE: ['9e', '7e'],
        B: ['9B', '7B'],
        G: ['9G', '6G'],
        D: ['9D', '6D'],
        A: ['9A', '7A'],
        E: ['9E', '7E'],
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '9e' , end: '12e' }, { start: '12e' , end: '12B' }, { start: '12B' , end: '11G' },
                    { start: '11G' , end: '11D' }, { start: '11D' , end: '11A' }, { start: '11A' , end: '12E' },
                    { start: '12E' , end: '9E' }, { start: '9E' , end: '9A' }, { start: '9A' , end: '9D' },
                    { start: '9D' , end: '9G' }, { start: '9G' , end: '9B' }, { start: '9B' , end: '9e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '0B' , end: '0e' }, { start: '0e' , end: '2e' }, { start: '2e' , end: '2B' },
                    { start: '2B' , end: '1G' }, { start: '1G' , end: '2D' }, { start: '2D' , end: '2A' },
                    { start: '2A' , end: '2E' }, { start: '2E' , end: '0E' }, { start: '12e' , end: '12B' },
                    { start: '12B' , end: '11G' }, { start: '11G' , end: '11D' }, { start: '11G' , end: '11D' },
                    { start: '11D' , end: '11A' }, { start: '11A' , end: '12E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '2B' , end: '2e' }, { start: '2e' , end: '4e' }, { start: '4e' , end: '5B' },
                    { start: '5B' , end: '4G' }, { start: '4G' , end: '4D' }, { start: '4D' , end: '4A' },
                    { start: '4A' , end: '4E' }, { start: '4E' , end: '2E' }, { start: '2E' , end: '2A' },
                    { start: '2A' , end: '2D' }, { start: '2D' , end: '1G' }, { start: '1G' , end: '2B' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '4e' , end: '7e' }, { start: '7e' , end: '7B' }, { start: '7B' , end: '6G' },
                    { start: '6G' , end: '6D' }, { start: '6D' , end: '7A' }, { start: '7A' , end: '7E' },
                    { start: '7E' , end: '4E' }, { start: '4E' , end: '4A' }, { start: '4A' , end: '4D' },
                    { start: '4D' , end: '4G' }, { start: '4G' , end: '5B' }, { start: '5B' , end: '4e' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '7e' , end: '9e' }, { start: '9e' , end: '9B' }, { start: '9B' , end: '9G' }, 
                    { start: '9G' , end: '9D' }, { start: '9D' , end: '9A' }, { start: '9A' , end: '9E' }, 
                    { start: '9E' , end: '7E' }, { start: '7E' , end: '7A' }, { start: '7A' , end: '6D' },
                    { start: '6D' , end: '6G' }, { start: '6G' , end: '7B' }, { start: '7B' , end: '7e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default CSharpScale;