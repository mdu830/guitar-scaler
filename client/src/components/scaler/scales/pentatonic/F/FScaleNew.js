// New Data model being tested

const FScaleData = {
    section1: [
        {
            highE: [{ isDot: false }, { isDot: '1e' }, { isDot: false }, { isDot: false },{ isDot: '4e' }],
            B: [],
            G: [],
            D: [],
            A: [],
            E: []
        },
        {
            highE: [{ isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }],
            B: [{ isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }],
            G: [{ isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }],
            D: [{ isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }],
            A: [{ isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }],
            E: [{ isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }, { isDot: 'false' }]
        },
        {
            sectionLines: [
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
            sectionLineColor: { color: 'rgba(255, 0, 0, 0.841)'}
        }
    ],
    section2: [
        {
            highE: [{ isDot: '4e' }, { isDot: false }, { isDot: '6e' }],
            B: [],
            G: [],
            D: [],
            A: [],
            E: []
        },
        {
            sectionLines: [
                { start: '3e' , end: '3B' },
                { start: '3B' , end: '2G' },
                { start: '2G' , end: '2D' },
                { start: '2D' , end: '2A' },
                { start: '2A' , end: '3E' },
                { start: '3e' , end: '5e' },
                { start: '5e' , end: '5B' },
                { start: '5B' , end: '4G' },
                { start: '4G' , end: '5D' },
                { start: '5D' , end: '5A' },
                { start: '5A' , end: '5E' },
                { start: '5E' , end: '3E' }
            ],
            sectionLineColor: { color: 'rgba(255, 138, 42, 0.671)'}
        }
    ],
    section3: [
        {
            highE: [{ isDot: '6e' }, { isDot: false }, { isDot: '8e' }],
            B: [],
            G: [],
            D: [],
            A: [],
            E: []
        },
        {
            // sectionLines: [
            //     { start: '3e' , end: '3B' },
            //     { start: '3B' , end: '2G' },
            //     { start: '2G' , end: '2D' },
            //     { start: '2D' , end: '2A' },
            //     { start: '2A' , end: '3E' },
            //     { start: '3e' , end: '5e' },
            //     { start: '5e' , end: '5B' },
            //     { start: '5B' , end: '4G' },
            //     { start: '4G' , end: '5D' },
            //     { start: '5D' , end: '5A' },
            //     { start: '5A' , end: '5E' },
            //     { start: '5E' , end: '3E' }
            // ],
            // sectionLineColor: { color: 'rgba(255, 138, 42, 0.671)'}
        }
    ],
    section4: [
        {
            highE: [{ isDot: false }, { isDot: false }, { isDot: '11e' }],
            B: [],
            G: [],
            D: [],
            A: [],
            E: []
        },
        {
            // sectionLines: [
            //     { start: '3e' , end: '3B' },
            //     { start: '3B' , end: '2G' },
            //     { start: '2G' , end: '2D' },
            //     { start: '2D' , end: '2A' },
            //     { start: '2A' , end: '3E' },
            //     { start: '3e' , end: '5e' },
            //     { start: '5e' , end: '5B' },
            //     { start: '5B' , end: '4G' },
            //     { start: '4G' , end: '5D' },
            //     { start: '5D' , end: '5A' },
            //     { start: '5A' , end: '5E' },
            //     { start: '5E' , end: '3E' }
            // ],
            // sectionLineColor: { color: 'rgba(255, 138, 42, 0.671)'}
        }
    ],
    section5: [
        {
            highE: [{ isDot: '11e' }, { isDot: false }],
            B: [],
            G: [],
            D: [],
            A: [],
            E: []
        },
        {
            // sectionLines: [
            //     { start: '3e' , end: '3B' },
            //     { start: '3B' , end: '2G' },
            //     { start: '2G' , end: '2D' },
            //     { start: '2D' , end: '2A' },
            //     { start: '2A' , end: '3E' },
            //     { start: '3e' , end: '5e' },
            //     { start: '5e' , end: '5B' },
            //     { start: '5B' , end: '4G' },
            //     { start: '4G' , end: '5D' },
            //     { start: '5D' , end: '5A' },
            //     { start: '5A' , end: '5E' },
            //     { start: '5E' , end: '3E' }
            // ],
            // sectionLineColor: { color: 'rgba(255, 138, 42, 0.671)'}
        }
    ]

        
}

export default FScaleData;