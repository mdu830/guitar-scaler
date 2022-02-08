const CScaleData = {

    highE: [
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ],

    B: [
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ],

    G: [
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false }
    ], 

    D: [
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true }
    ],

    A: [
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true }
    ],

    E: [
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: false },
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ],
    sectionLines: {
        section1: [
           { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '8e' , end: '11e' },
           { start: '11e' , end: '11B' },
           { start: '11B' , end: '10G' },
           { start: '10G' , end: '10D' },
           { start: '10D' , end: '10A' },
           { start: '10A' , end: '11E' },
           { start: '11E' , end: '8E' },
           { start: '8E' , end: '8A' },
           { start: '8A' , end: '8D' },
           { start: '8D' , end: '8G' },
           { start: '8G' , end: '8B' },
           { start: '8B' , end: '8e' }
       ],
       section2: [
           { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '12e' , end: '11e' },
           { start: '11e' , end: '11B' },
           { start: '11B' , end: '10G' },
           { start: '10G' , end: '10D' },
           { start: '10D' , end: '10A' },
           { start: '10A' , end: '11E' },
           { start: '11E' , end: '12E' },
           { start: '0e' , end: '1e' },
           { start: '1e' , end: '1B' },
           { start: '1B' , end: '0G' },
           { start: '0G' , end: '1D' },
           { start: '1D' , end: '1A' },
           { start: '1A' , end: '1E' },
           { start: '1E' , end: '0E' }

       ],
       section3: [
           { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '1B' , end: '1e' },
           { start: '1e' , end: '3e' },
           { start: '3e' , end: '4B' },
           { start: '4B' , end: '3G' },
           { start: '3G' , end: '3D' },
           { start: '3D' , end: '3A' },
           { start: '3A' , end: '3E' },
           { start: '3E' , end: '1E' },
           { start: '1E' , end: '1A' },
           { start: '1A' , end: '1D' },
           { start: '1D' , end: '0G' },
           { start: '0G' , end: '1B' }

       ],        
       section4: [
           { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '3e' , end: '6e' },
           { start: '6e' , end: '6B' },
           { start: '6B' , end: '5G' },
           { start: '5G' , end: '5D' },
           { start: '5D' , end: '6A' },
           { start: '6A' , end: '6E' },
           { start: '6E' , end: '3E' },
           { start: '3E' , end: '3A' },
           { start: '3A' , end: '3D' },
           { start: '3D' , end: '3G' },
           { start: '3G' , end: '4B' },
           { start: '4B' , end: '3e' }

       ],
       section5: [
           { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '6e' , end: '8e' },
           { start: '8e' , end: '8B' }, 
           { start: '8B' , end: '8G' }, 
           { start: '8G' , end: '8D' }, 
           { start: '8D' , end: '8A' }, 
           { start: '8A' , end: '8E' }, 
           { start: '8E' , end: '6E' }, 
           { start: '6E' , end: '6A' }, 
           { start: '6A' , end: '5D' },
           { start: '5D' , end: '5G' },
           { start: '5G' , end: '6B' },
           { start: '6B' , end: '6e' }
           
       ]
    }
}

export default CScaleData;