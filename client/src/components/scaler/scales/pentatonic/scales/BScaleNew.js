const BScaleData = [
    {
        highE: ['0e', '2e', '5e', '7e', '10e', '12e'],
        B: ['0B', '3B', '5B', '7B', '10B', '12B'],
        G: ['2G', '4G', '7G', '9G', '11G'], 
        D: ['0D', '2D', '4D', '7D', '9D', '12D'],
        A: ['0A' ,'2A' ,'5A' ,'7A' ,'9A' ,'12A'],
        E: ['0E' ,'2E' ,'5E' ,'7E' ,'10E', '12E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['7e', '10e'],
        B: ['7B', '10B'],
        G: ['7G', '9G'],
        D: ['7D','9D'],
        A: ['7A', '9A'],
        E: ['7E', '10E'],
        section: [true, false, false, false, false]
    },
    {
        highE: ['10e', '12e', '0e'],
        B: ['10B', '12B', '0B'],
        G: ['9G', '11G'],
        D: ['9D', '12D', '0D'],
        A: ['9A', '12A', '0A'],
        E: ['10E', '12E', '0E'],
        section: [false, true, false, false, false]
    },
    {
        highE: ['12e', '2e', '0e'],
        B: ['12B', '3B', '0B'],
        G: ['11G', '2G'],
        D: ['12D', '2D', '0D'],
        A: ['12A', '2A', '0A'],
        E: ['12E', '2E', '0E'],
        section: [false, false, true, false, false]
    },
    {
        highE: ['2e', '5e'],
        B: ['3B', '5B'],
        G: ['2G', '4G'],
        D: ['2D', '4D'],
        A: ['2A', '5A'],
        E: ['2E', '5E'],
        section: [false, false, false, true, false]
    },
    {
        highE: ['7e', '5e'],
        B: ['7B', '5B'],
        G: ['7G', '4G'],
        D: ['7D', '4D'],
        A: ['7A', '5A'],
        E: ['7E', '5E'],
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '7e' , end: '10e' }, { start: '10e' , end: '10B' }, { start: '10B' , end: '9G' },
                    { start: '9G' , end: '9D' }, { start: '9D' , end: '9A' }, { start: '9A' , end: '10E' },
                    { start: '10E' , end: '7E' }, { start: '7E' , end: '7A' }, { start: '7A' , end: '7D' },
                    { start: '7D' , end: '7G' }, { start: '7G' , end: '7B' }, { start: '7B' , end: '7e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '10e' , end: '10B' }, { start: '10B' , end: '9G' }, { start: '9G' , end: '9D' },
                    { start: '9D' , end: '9A' }, { start: '9A' , end: '10E' }, { start: '10e' , end: '12e' },
                    { start: '12e' , end: '12B' }, { start: '12B' , end: '11G' }, { start: '11G' , end: '12D' },
                    { start: '12D' , end: '12A' }, { start: '12A' , end: '12E' }, { start: '12E' , end: '10E' },
                    { start: '0E' , end: '0A' }, { start: '0A' , end: '0D' }, { start: '0B' , end: '0e' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '0B' , end: '0e' }, { start: '0e' , end: '2e' }, { start: '2e' , end: '3B' },
                    { start: '3B' , end: '2G' }, { start: '2G' , end: '2D' }, { start: '2D' , end: '2A' },
                    { start: '2A' , end: '2E' }, { start: '2E' , end: '0E' }, { start: '0E' , end: '0A' },
                    { start: '0A' , end: '0D' }, { start: '12e' , end: '12B' }, { start: '12B' , end: '11G' },
                    { start: '11G' , end: '12D' }, { start: '12D' , end: '12A' }, { start: '12A' , end: '12E' },
                    { start: '12D' , end: '12A' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '2e' , end: '5e' }, { start: '5e' , end: '5B' }, { start: '5B' , end: '4G' },
                    { start: '4G' , end: '4D' }, { start: '4D' , end: '5A' }, { start: '5A' , end: '5E' },
                    { start: '5E' , end: '2E' }, { start: '2E' , end: '2A' }, { start: '2A' , end: '2D' },
                    { start: '2D' , end: '2G' }, { start: '2G' , end: '3B' }, { start: '3B' , end: '2e' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '5e' , end: '7e' }, { start: '7e' , end: '7B' }, { start: '7B' , end: '7G' }, 
                    { start: '7G' , end: '7D' }, { start: '7D' , end: '7A' }, { start: '7A' , end: '7E' }, 
                    { start: '7E' , end: '5E' }, { start: '5E' , end: '5A' }, { start: '5A' , end: '4D' },
                    { start: '4D' , end: '4G' }, { start: '4G' , end: '5B' }, { start: '5B' , end: '5e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default BScaleData;