// New Data model being tested

const EmScaleData = {
    section1: [
        {
            highE: [{ isDot: '0e' }, { isDot: false }, { isDot: false }, { isDot: '3e' }],
            B: [{ isDot: '0B' }, { isDot: false }, { isDot: false }, { isDot: '3B' }],
            G: [{ isDot: '0G' }, { isDot: false }, { isDot: '2G' }],
            D: [{ isDot: '0D' }, { isDot: false }, { isDot: '2D' }],
            A: [{ isDot: '0A' }, { isDot: false }, { isDot: '2A' }],
            E: [{ isDot: '0E' }, { isDot: false }, { isDot: false }, { isDot: '3E' }]
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
            highE: [{ isDot: '3e' }, { isDot: false }, { isDot: '5e' }],
            B: [{ isDot: '3B' }, { isDot: false }, { isDot: '5B' }],
            G: [{ isDot: '2G' }, { isDot: false }, { isDot: '4G' }],
            D: [{ isDot: '2D' }, { isDot: false }, { isDot: false }, { isDot: '5D' }],
            A: [{ isDot: '2A' }, { isDot: false }, { isDot: false }, { isDot: '5A' }],
            E: [{ isDot: '3E' }, { isDot: false }, { isDot: '5E' }]
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
    ]
        
}

export default EmScaleData;