const GScaleData = {

    highE: [
        { isDot: '1e' },
        { isDot: '3e' },
        { isDot: '6e' },
        { isDot: '8e' },
        { isDot: '10e' }
    ],

    B: [
        { isDot: '1B' },
        { isDot: '3B' },
        { isDot: '6B' },
        { isDot: '8B' },
        { isDot: '11B' }
    ],

    G: [
        { isDot: '0G' },
        { isDot: '3G' },
        { isDot: '5G' },
        { isDot: '7G' },
        { isDot: '10G' },
        { isDot: '12G' }
    ], 

    D: [
        { isDot: '0D' },
        { isDot: '3D' },
        { isDot: '5D' },
        { isDot: '8D' },
        { isDot: '10D' },
        { isDot: '12D' }
    ],

    A: [
        { isDot: '1A' },
        { isDot: '3A' },
        { isDot: '5A' },
        { isDot: '8A' },
        { isDot: '10A' }
    ],

    E: [
        { isDot: '1E' },
        { isDot: '3E' },
        { isDot: '6E' },
        { isDot: '8E' },
        { isDot: '10E' }
    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '3e' , end: '6e' },
           { start: '6e' , end: '6B' },
           { start: '6B' , end: '5G' },
           { start: '5G' , end: '5D' },
           { start: '5D' , end: '5A' },
           { start: '5A' , end: '6E' },
           { start: '6E' , end: '3E' },
           { start: '3E' , end: '3A' },
           { start: '3A' , end: '3D' },
           { start: '3D' , end: '3G' },
           { start: '3G' , end: '3B' },
           { start: '3B' , end: '3e' }
       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '6e' , end: '6B' },
           { start: '6B' , end: '5G' },
           { start: '5G' , end: '5D' },
           { start: '5D' , end: '5A' },
           { start: '5A' , end: '6E' },
           { start: '6e' , end: '8e' },
           { start: '8e' , end: '8B' },
           { start: '8B' , end: '7G' },
           { start: '7G' , end: '8D' },
           { start: '8D' , end: '8A' },
           { start: '8A' , end: '8E' },
           { start: '8E' , end: '6E' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '8e' , end: '8B' },
           { start: '8B' , end: '7G' },
           { start: '7G' , end: '8D' },
           { start: '8D' , end: '8A' },
           { start: '8A' , end: '8E' },
           { start: '8e' , end: '10e' },
           { start: '10e' , end: '11B' },
           { start: '11B' , end: '10G' },
           { start: '10G' , end: '10D' },
           { start: '10D' , end: '10A' },
           { start: '10A' , end: '10E' },
           { start: '10E' , end: '8E' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '12e' , end: '10e' }, 
           { start: '10e' , end: '11B' }, 
           { start: '11B' , end: '10G' }, 
           { start: '10G' , end: '10D' }, 
           { start: '10D' , end: '10A' }, 
           { start: '10A' , end: '10E' }, 
           { start: '10E' , end: '12E' },
           { start: '12G' , end: '12D' },
           { start: '0e' , end: '1e' }, 
           { start: '1e' , end: '1B' },
           { start: '1B' , end: '0G' }, 
           { start: '0G' , end: '0D' }, 
           { start: '0D' , end: '1A' },
           { start: '1A' , end: '1E' },
           { start: '1E' , end: '0E' }, 
 
       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '1e' , end: '1B' }, 
           { start: '1B' , end: '0G' },           
           { start: '0G' , end: '0D' }, 
           { start: '0D' , end: '1A' },           
           { start: '1A' , end: '1E' },
           { start: '1E' , end: '3E' },           
           { start: '3E' , end: '3A' },
           { start: '3A' , end: '3D' },           
           { start: '3D' , end: '3G' },           
           { start: '3G' , end: '3B' },           
           { start: '3B' , end: '3e' },           
           { start: '3e' , end: '1e' }           

       ]
    }
}

export default GScaleData;