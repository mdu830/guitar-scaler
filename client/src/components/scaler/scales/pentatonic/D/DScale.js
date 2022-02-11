const DScaleData = {

    highE: [
        { isDot: false },
        { isDot: '1e' },
        { isDot: false },
        { isDot: '3e' },
        { isDot: false },
        { isDot: '5e' },
        { isDot: false },
        { isDot: false },
        { isDot: '8e' },
        { isDot: false },
        { isDot: '10e' },
        { isDot: false },
        { isDot: false }
    ],

    B: [
        { isDot: false },
        { isDot: '1B' },
        { isDot: false },
        { isDot: '3B' },
        { isDot: false },
        { isDot: false },
        { isDot: '6B' },
        { isDot: false },
        { isDot: '8B' },
        { isDot: false },
        { isDot: '10B' },
        { isDot: false },
        { isDot: false }
    ],

    G: [
        { isDot: '0G' },
        { isDot: false },
        { isDot: '2G' },
        { isDot: false },
        { isDot: false },
        { isDot: '5G' },
        { isDot: false },
        { isDot: '7G' },
        { isDot: false },
        { isDot: false },
        { isDot: '10G' },
        { isDot: false },
        { isDot: '12G' }
    ], 

    D: [
        { isDot: '0D' },
        { isDot: false },
        { isDot: false },
        { isDot: '3D' },
        { isDot: false },
        { isDot: '5D' },
        { isDot: false },
        { isDot: '7D' },
        { isDot: false },
        { isDot: false },
        { isDot: '10D' },
        { isDot: false },
        { isDot: '12D' }
    ],

    A: [
        { isDot: '0A' },
        { isDot: false },
        { isDot: false },
        { isDot: '3A' },
        { isDot: false },
        { isDot: '5A' },
        { isDot: false },
        { isDot: false },
        { isDot: '8A' },
        { isDot: false },
        { isDot: '10A' },
        { isDot: false },
        { isDot: '12A' }
    ],

    E: [
        { isDot: false },
        { isDot: '1E' },
        { isDot: false },
        { isDot: '3E' },
        { isDot: false },
        { isDot: '5E' },
        { isDot: false },
        { isDot: false },
        { isDot: '8E' },
        { isDot: false },
        { isDot: '10E' },
        { isDot: false },
        { isDot: false }
    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '12e' , end: '10e' },
           { start: '10e' , end: '10B' },
           { start: '10B' , end: '10G' },
           { start: '10G' , end: '10D' },
           { start: '10D' , end: '10A' },
           { start: '10A' , end: '10E' },
           { start: '10E' , end: '12E' },
           { start: '12G' , end: '12D' },
           { start: '12D' , end: '12A' },
           { start: '0e' , end: '1e' },
           { start: '1e' , end: '1B' },
           { start: '1B' , end: '0G' },
           { start: '0G' , end: '0D' },
           { start: '0D' , end: '0A' },
           { start: '0A' , end: '1E' },
           { start: '1E' , end: '0E' }

       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '1B' , end: '1e' },
           { start: '1e' , end: '3e' },
           { start: '3e' , end: '3B' },
           { start: '3B' , end: '2G' },
           { start: '2G' , end: '3D' },
           { start: '3D' , end: '3A' },
           { start: '3A' , end: '3E' },
           { start: '3E' , end: '1E' },
           { start: '1E' , end: '0A' },
           { start: '0A' , end: '0D' },
           { start: '0D' , end: '0G' },
           { start: '0G' , end: '1B' },
           { start: '1B' , end: '1e' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '3B' , end: '3e' },
           { start: '3e' , end: '5e' },
           { start: '5e' , end: '6B' },
           { start: '6B' , end: '5G' },
           { start: '5G' , end: '5D' },
           { start: '5D' , end: '5A' },
           { start: '5A' , end: '5E' },
           { start: '5E' , end: '3E' },
           { start: '3E' , end: '3A' },
           { start: '3A' , end: '3D' },
           { start: '3D' , end: '2G' },
           { start: '2G' , end: '3B' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '5e' , end: '8e' },
           { start: '8e' , end: '8B' },
           { start: '8B' , end: '7G' },
           { start: '7G' , end: '7D' },
           { start: '7D' , end: '8A' },
           { start: '8A' , end: '8E' },
           { start: '8E' , end: '5E' },
           { start: '5E' , end: '5A' },
           { start: '5A' , end: '5D' },
           { start: '5D' , end: '5G' },
           { start: '5G' , end: '6B' },
           { start: '6B' , end: '5e' }

       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '8e' , end: '10e' },
           { start: '10e' , end: '10B' }, 
           { start: '10B' , end: '10G' }, 
           { start: '10G' , end: '10D' }, 
           { start: '10D' , end: '10A' }, 
           { start: '10A' , end: '10E' }, 
           { start: '10E' , end: '8E' }, 
           { start: '8E' , end: '8A' }, 
           { start: '8A' , end: '7D' },
           { start: '7D' , end: '7G' },
           { start: '7G' , end: '8B' },
           { start: '8B' , end: '8e' }
           
       ]
    }
}

export default DScaleData;