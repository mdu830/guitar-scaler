
const FScaleData = [
    {
        highE: ['1e', '4e', '6e', '8e', '11e'],
        B: ['1B', '4B', '6B', '9B', '11B'],
        G: ['1G', '3G', '5G', '8G', '10G'],
        D: ['1D', '3D', '6D', '8D', '10D'],
        A: ['1A', '3A', '6A', '8A', '11A'],
        E: ['1E', '4E', '6E', '8E', '11E']
    },
    {
        highE: ['1e', '4e'],
        B: ['1B', '4B'],
        G: ['1G', '3G'],
        D: ['1D', '3D'],
        A: ['1A', '3A'],
        E: ['1E', '4E']
    },
    {
        highE: ['4e', '6e'],
        B: ['4B', '6B'],
        G: ['3G', '5G'],
        D: ['3D', '6D'],
        A: ['3A', '6A'],
        E: ['4E', '6E']
    },
    {
        highE: ['6e', '8e'],
        B: ['6B', '9B'],
        G: ['5G', '8G'],
        D: ['6D', '8D'],
        A: ['6A', '8A'],
        E: ['6E', '8E']
    },
    {
        highE: ['8e', '11e'],
        B: ['9B', '11B'],
        G: ['8G', '10G'],
        D: ['8D', '10D'],
        A: ['8A', '11A'],
        E: ['8E', '11E']
    },
    {
        highE: ['1e', '11e'],
        B: ['1B', '11B'],
        G: ['1G', '10G'],
        D: ['1D', '10D'],
        A: ['1A', '11A'],
        E: ['1E', '11E']
    },
    {
        sectionLines: [
            {
                section1: [
                    { start: '0e', end: '3e' },
                    { start: '3e', end: '3B' },
                    { start: '3B', end: '2G' },
                    { start: '2G', end: '2D' },
                    { start: '2D', end: '2A' },
                    { start: '2A', end: '3E' },
                    { start: '3E', end: '0E' },
                    { start: '0E', end: '0A' },
                    { start: '0A', end: '0D' },
                    { start: '0D', end: '0G' },
                    { start: '0G', end: '0B' },
                    { start: '0B', end: '0e' }
                ],
                sectionLineColor: { color: 'rgba(255, 0, 0, 0.841)' }
            },
            {
                section2: [
                    { start: '3e', end: '3B' },
                    { start: '3B', end: '2G' },
                    { start: '2G', end: '2D' },
                    { start: '2D', end: '2A' },
                    { start: '2A', end: '3E' },
                    { start: '3e', end: '5e' },
                    { start: '5e', end: '5B' },
                    { start: '5B', end: '4G' },
                    { start: '4G', end: '5D' },
                    { start: '5D', end: '5A' },
                    { start: '5A', end: '5E' },
                    { start: '5E', end: '3E' }
                ],
                sectionLineColor: { color: 'rgba(255, 138, 42, 0.671)' }
            },
            {
                section3: [
                    { start: '5e', end: '5B' },
                    { start: '5B', end: '4G' },
                    { start: '4G', end: '5D' },
                    { start: '5D', end: '5A' },
                    { start: '5A', end: '5E' },
                    { start: '5e', end: '7e' },
                    { start: '7e', end: '8B' },
                    { start: '8B', end: '7G' },
                    { start: '7G', end: '7D' },
                    { start: '7D', end: '7A' },
                    { start: '7A', end: '7E' },
                    { start: '7E', end: '5E' }
                ],
                sectionLineColor: { color: 'rgba(251, 255, 42, 0.671)' }
            },
            {
                section4: [
                    { start: '7e', end: '8B' },
                    { start: '8B', end: '7G' },
                    { start: '7D', end: '7A' },
                    { start: '7A', end: '7E' },
                    { start: '7e', end: '10e' },
                    { start: '10e', end: '10B' },
                    { start: '10B', end: '9G' },
                    { start: '9G', end: '9D' },
                    { start: '9D', end: '10A' },
                    { start: '10A', end: '10E' },
                    { start: '10E', end: '7E' }
                ],
                sectionLineColor: { color: 'rgba(85, 255, 42, 0.671)' }
            },
            {
                section5: [
                    { start: '10e', end: '10B' },
                    { start: '10B', end: '9G' },
                    { start: '9G', end: '9D' },
                    { start: '9D', end: '10A' },
                    { start: '10A', end: '10E' },
                    { start: '10e', end: '12e' },
                    { start: '12e', end: '12B' },
                    { start: '12B', end: '12G' },
                    { start: '12G', end: '12D' },
                    { start: '12D', end: '12A' },
                    { start: '12A', end: '12E' },
                    { start: '12E', end: '10E' }
                ],
                sectionLineColor: { color: 'rgba(42, 255, 202, 0.671)' }

            }

        ]
    }

]

export default FScaleData;