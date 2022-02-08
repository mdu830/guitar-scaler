const AScaleData = {

    highE: [
        { isDot: '0e' },
        { isDot: '3e' },
        { isDot: '5e' },
        { isDot: '8e' },
        { isDot: '10e' },
        { isDot: '12e' }
    ],

    B: [
        { isDot: '1B' },
        { isDot: '3B' },
        { isDot: '5B' },
        { isDot: '8B' },
        { isDot: '10B' }
    ],

    G: [
        { isDot: '0G' },
        { isDot: '2G' },
        { isDot: '5G' },
        { isDot: '7G' },
        { isDot: '9G' },
        { isDot: '12G' }
    ], 

    D: [
        { isDot: '0D' },
        { isDot: '2D' },
        { isDot: '5D' },
        { isDot: '7D' },
        { isDot: '10D' },
        { isDot: '12D' }
    ],

    A: [
        { isDot: '0A' },
        { isDot: '3A' },
        { isDot: '5A' },
        { isDot: '7A' },
        { isDot: '10A' },
        { isDot: '12A' }
    ],

    E: [
        { isDot: '0E' },
        { isDot: '3E' },
        { isDot: '5E' },
        { isDot: '8E' },
        { isDot: '10E' },
        { isDot: '12E' }
    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '5e' , end: '8e' },
           { start: '8e' , end: '8B' },
           { start: '8B' , end: '7G' },
           { start: '7G' , end: '7D' },
           { start: '7D' , end: '7A' },
           { start: '7A' , end: '8E' },
           { start: '8E' , end: '5E' },
           { start: '5E' , end: '5A' },
           { start: '5A' , end: '5D' },
           { start: '5D' , end: '5G' },
           { start: '5G' , end: '5B' },
           { start: '5B' , end: '5e' }
       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '8e' , end: '8B' },
           { start: '8B' , end: '7G' },
           { start: '7G' , end: '7D' },
           { start: '7D' , end: '7A' },
           { start: '7A' , end: '8E' },
           { start: '8e' , end: '10e' },
           { start: '10e' , end: '10B' },
           { start: '10B' , end: '9G' },
           { start: '9G' , end: '10D' },
           { start: '10D' , end: '10A' },
           { start: '10A' , end: '10E' },
           { start: '10E' , end: '8E' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '10e' , end: '10B' },
           { start: '10B' , end: '9G' },
           { start: '9G' , end: '10D' },
           { start: '10D' , end: '10A' },
           { start: '10A' , end: '10E' },
           { start: '10e' , end: '12e' },
           { start: '10E' , end: '12E' },
           { start: '12E' , end: '12A' },
           { start: '12A' , end: '12D' },
           { start: '12D' , end: '12G' },
           { start: '0e' , end: '1B' },
           { start: '1B' , end: '0G' },
           { start: '0G' , end: '0D' },
           { start: '0D' , end: '0A' },
           { start: '0A' , end: '0E' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '0e' , end: '3e' },
           { start: '3e' , end: '3B' },
           { start: '3B' , end: '2G' },
           { start: '2G' , end: '2D' },
           { start: '2D' , end: '3A' },
           { start: '3A' , end: '3E' },
           { start: '3E' , end: '0E' },
           { start: '0E' , end: '0A' },
           { start: '0A' , end: '0D' },
           { start: '0D' , end: '0G' },
           { start: '0G' , end: '1B' },
           { start: '1B' , end: '0e' }

       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '3e' , end: '5e' },
           { start: '5e' , end: '5B' }, 
           { start: '5B' , end: '5G' }, 
           { start: '5G' , end: '5D' }, 
           { start: '5D' , end: '5A' }, 
           { start: '5A' , end: '5E' }, 
           { start: '5E' , end: '3E' }, 
           { start: '3E' , end: '3A' }, 
           { start: '3A' , end: '2D' },
           { start: '2D' , end: '2G' },
           { start: '2G' , end: '3B' },
           { start: '3B' , end: '3e' }
           
       ]
    }
}

export default AScaleData;