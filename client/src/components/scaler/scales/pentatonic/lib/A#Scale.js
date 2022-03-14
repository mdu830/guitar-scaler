const ASharpScale = [
    {
        highE: ['1e' ,'4e' ,'6e' ,'9e' ,'11e'],
        B: ['2B' ,'4B' ,'6B' ,'9B' ,'11B'],
        G: ['1G' ,'3G' ,'6G' ,'8G' ,'10G'], 
        D: ['1D' ,'3D' ,'6D' ,'8D' ,'11D'],
        A: ['1A' ,'4A' ,'6A' ,'8A' ,'11A'],
        E: ['1E' ,'4E' ,'6E' ,'9E' ,'11E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['6e', '9e'],
        B: ['6B', '9B'],
        G: ['6G', '8G'],
        D: ['6D','8D'],
        A: ['6A', '8A'],
        E: ['6E', '9E'],
        section: [true, false, false, false, false]
    },
    {
        highE: ['9e', '11e'],
        B: ['9B', '11B'],
        G: ['8G', '10G'],
        D: ['8D', '11D'],
        A: ['8A', '11A'],
        E: ['9E', '11E'],
        section: [false, true, false, false, false]
    },
    {
        highE: ['11e', '1e'],
        B: ['11B', '2B'],
        G: ['10G', '1G'],
        D: ['11D', '1D'],
        A: ['11A', '1A'],
        E: ['11E', '1E'],
        section: [false, false, true, false, false]
    },
    {
        highE: ['1e', '4e'],
        B: ['2B', '4B'],
        G: ['1G', '3G'],
        D: ['1D', '3D'],
        A: ['1A', '4A'],
        E: ['1E', '4E'],
        section: [false, false, false, true, false]
    },
    {
        highE: ['6e', '4e'],
        B: ['6B', '4B'],
        G: ['6G', '3G'],
        D: ['6D', '3D'],
        A: ['6A', '4A'],
        E: ['6E', '4E'],
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '6e' , end: '9e' }, { start: '9e' , end: '9B' }, { start: '9B' , end: '8G' },
                    { start: '8G' , end: '8D' }, { start: '8D' , end: '8A' }, { start: '8A' , end: '9E' },
                    { start: '9E' , end: '6E' }, { start: '6E' , end: '6A' }, { start: '6A' , end: '6D' },
                    { start: '6D' , end: '6G' }, { start: '6G' , end: '6B' }, { start: '6B' , end: '6e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '9e' , end: '9B' }, { start: '9B' , end: '8G' }, { start: '8G' , end: '8D' },
                    { start: '8D' , end: '8A' }, { start: '8A' , end: '9E' }, { start: '9e' , end: '11e' },
                    { start: '11e' , end: '11B' }, { start: '11B' , end: '10G' }, { start: '10G' , end: '11D' },
                    { start: '11D' , end: '11A' }, { start: '11A' , end: '11E' }, { start: '11E' , end: '9E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '12e' , end: '11e' }, { start: '11e' , end: '11B' }, { start: '11B' , end: '10G' },
                    { start: '10G' , end: '11D' }, { start: '11D' , end: '11A' }, { start: '11E' , end: '12E' },
                    { start: '11A' , end: '11E' }, { start: '0e' , end: '1e' }, { start: '1e' , end: '2B' },
                    { start: '2B' , end: '1G' }, { start: '1G' , end: '1D' }, { start: '1D' , end: '1A' },
                    { start: '1A' , end: '1E' }, { start: '1E' , end: '0E' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '1e' , end: '4e' }, { start: '4e' , end: '4B' }, { start: '4B' , end: '3G' },
                    { start: '3G' , end: '3D' }, { start: '3D' , end: '4A' }, { start: '4A' , end: '4E' },
                    { start: '4E' , end: '1E' }, { start: '1E' , end: '1A' }, { start: '1A' , end: '1D' },
                    { start: '1D' , end: '1G' }, { start: '1G' , end: '2B' }, { start: '2B' , end: '1e' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '4e' , end: '6e' }, { start: '6e' , end: '6B' }, { start: '6B' , end: '6G' }, 
                    { start: '6G' , end: '6D' }, { start: '6D' , end: '6A' }, { start: '6A' , end: '6E' }, 
                    { start: '6E' , end: '4E' }, { start: '4E' , end: '4A' }, { start: '4A' , end: '3D' },
                    { start: '3D' , end: '3G' }, { start: '3G' , end: '4B' }, { start: '4B' , end: '4e' }
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default ASharpScale;