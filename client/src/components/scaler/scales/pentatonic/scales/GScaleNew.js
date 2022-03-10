const GScaleData = [
    {
        highE: ['1e', '3e', '6e', '8e', '10e'],
        B: ['1B', '3B', '6B', '8B', '11B'],
        G: ['0G', '3G', '5G', '7G', '10G', '12G'],
        D: ['0D','3D','5D','8D','10D','12D'],
        A: ['1A', '3A', '5A', '8A', '10A'],
        E: ['1E', '3E', '6E', '8E', '10E'],
        section: [true, true, true, true, true]
    },
    {
        highE: ['3e', '6e'],
        B: ['3B', '6B'],
        G: ['3G', '5G'],
        D: ['3D','5D'],
        A: ['3A', '5A'],
        E: ['3E', '6E'],
        section: [true, false, false, false, false]
    },
    {
        highE: ['6e', '8e'],
        B: ['6B', '8B'],
        G: ['5G', '7G'],
        D: ['5D', '8D'],
        A: ['5A', '8A'],
        E: ['6E', '8E'],
        section: [false, true, false, false, false]
    },
    {
        highE: ['8e', '10e'],
        B: ['8B', '11B'],
        G: ['7G', '10G'],
        D: ['8D', '10D'],
        A: ['8A', '10A'],
        E: ['8E', '10E'],
        section: [false, false, true, false, false]
    },
    {
        highE: ['10e', '1e'],
        B: ['11B', '1B'],
        G: ['10G', '12G', '0G'],
        D: ['10D', '12D', '0D'],
        A: ['10A', '1A'],
        E: ['10E', '1E'],
        section: [false, false, false, true, false]
    },
    {
        highE: ['3e', '1e'],
        B: ['3B', '1B'],
        G: ['3G', '12G', '0G'],
        D: ['3D', '12D', '0D'],
        A: ['3A', '1A'],
        E: ['3E', '1E'],
        section: [false, false, false, false, true]
    },
    {
        sectionLines: [
            {
                section: [
                    { start: '3e' , end: '6e' }, { start: '6e' , end: '6B' }, { start: '6B' , end: '5G' },
                    { start: '5G' , end: '5D' }, { start: '5D' , end: '5A' }, { start: '5A' , end: '6E' },
                    { start: '6E' , end: '3E' }, { start: '3E' , end: '3A' }, { start: '3A' , end: '3D' },
                    { start: '3D' , end: '3G' }, { start: '3G' , end: '3B' }, { start: '3B' , end: '3e' }
                ],
                color: 'rgba(255, 0, 0, 0.841)'
            },
            {
                section: [
                    { start: '6e' , end: '6B' }, { start: '6B' , end: '5G' }, { start: '5G' , end: '5D' },
                    { start: '5D' , end: '5A' }, { start: '5A' , end: '6E' }, { start: '6e' , end: '8e' },
                    { start: '8e' , end: '8B' }, { start: '8B' , end: '7G' }, { start: '7G' , end: '8D' },
                    { start: '8D' , end: '8A' }, { start: '8A' , end: '8E' }, { start: '8E' , end: '6E' }
                ],
                color: 'rgba(255, 138, 42, 0.671)'
            },
            {
                section: [
                    { start: '8e' , end: '8B' }, { start: '8B' , end: '7G' }, { start: '7G' , end: '8D' },
                    { start: '8D' , end: '8A' }, { start: '8A' , end: '8E' }, { start: '8e' , end: '10e' },
                    { start: '10e' , end: '11B' }, { start: '11B' , end: '10G' }, { start: '10G' , end: '10D' },
                    { start: '10D' , end: '10A' }, { start: '10A' , end: '10E' }, { start: '10E' , end: '8E' }
                ],
                color: 'rgba(251, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '12e' , end: '10e' }, { start: '10e' , end: '11B' }, { start: '11B' , end: '10G' }, 
                    { start: '10G' , end: '10D' }, { start: '10D' , end: '10A' }, { start: '10A' , end: '10E' }, 
                    { start: '10E' , end: '12E' }, { start: '12G' , end: '12D' }, { start: '0e' , end: '1e' }, 
                    { start: '1e' , end: '1B' }, { start: '1B' , end: '0G' }, { start: '0G' , end: '0D' }, 
                    { start: '0D' , end: '1A' }, { start: '1A' , end: '1E' }, { start: '1E' , end: '0E' }
                ],
                color: 'rgba(85, 255, 42, 0.671)'
            },
            {
                section: [
                    { start: '1e' , end: '1B' }, { start: '1B' , end: '0G' }, { start: '0G' , end: '0D' }, 
                    { start: '0D' , end: '1A' }, { start: '1A' , end: '1E' }, { start: '1E' , end: '3E' }, 
                    { start: '3E' , end: '3A' }, { start: '3A' , end: '3D' }, { start: '3D' , end: '3G' },           
                    { start: '3G' , end: '3B' }, { start: '3B' , end: '3e' }, { start: '3e' , end: '1e' },
                    { start: '12G', end: '12D'} 
                ],
                color: 'rgba(42, 255, 202, 0.671)'
            }
        ]
    }
]

export default GScaleData;