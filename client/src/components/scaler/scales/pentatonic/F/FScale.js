const FScaleData = {

    highE: [
        { isDot: '1e' },
        { isDot: '4e' },
        { isDot: '6e' },
        { isDot: '8e' },
        { isDot: '11e' },
        // { isDot: true }
    ],

    B: [
        { isDot: '1B' },
        { isDot: '4B' },
        { isDot: '6B' },
        { isDot: '9B' },
        { isDot: '11B' }
        // { isDot: true }
    ],

    G: [
        { isDot: '1G' },
        { isDot: '3G' },
        { isDot: '5G' },
        { isDot: '8G' },
        { isDot: '10G' }
        // { isDot: true }
    ], 

    D: [
        { isDot: '1D' },
        { isDot: '3D' },
        { isDot: '6D' },
        { isDot: '8D' },
        { isDot: '10D' }
        // { isDot: true }
    ],

    A: [
        { isDot: '1A' },
        { isDot: '3A' },
        { isDot: '6A' },
        { isDot: '8A' },
        { isDot: '11A' }
        // { isDot: true }
    ],

    E: [
        { isDot: '1E' },
        { isDot: '4E' },
        { isDot: '6E' },
        { isDot: '8E' },
        { isDot: '11E' },
        // { isDot: true }

    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '1e' , end: '4e' },
           { start: '4e' , end: '4B' },
           { start: '4B' , end: '3G' },
           { start: '3G' , end: '3D' },
           { start: '3D' , end: '3A' },
           { start: '3A' , end: '4E' },
           { start: '4E' , end: '1E' },
           { start: '1E' , end: '1A' },
           { start: '1A' , end: '1D' },
           { start: '1D' , end: '1G' },
           { start: '1G' , end: '1B' },
           { start: '1B' , end: '1e' }
       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '4e' , end: '4B' },
           { start: '4B' , end: '3G' },
           { start: '3G' , end: '3D' },
           { start: '3D' , end: '3A' },
           { start: '3A' , end: '4E' },
           { start: '4e' , end: '6e' },
           { start: '6e' , end: '6B' },
           { start: '6B' , end: '5G' },
           { start: '5G' , end: '6D' },
           { start: '6D' , end: '6A' },
           { start: '6A' , end: '6E' },
           { start: '6E' , end: '4E' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '6e' , end: '6B' },
           { start: '6B' , end: '5G' },
           { start: '5G' , end: '6D' },
           { start: '6D' , end: '6A' },
           { start: '6A' , end: '6E' },
           { start: '6e' , end: '8e' },
           { start: '8e' , end: '9B' },
           { start: '9B' , end: '8G' },
           { start: '8G' , end: '8D' },
           { start: '8D' , end: '8A' },
           { start: '8A' , end: '8E' },
           { start: '8E' , end: '6E' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '8e' , end: '9B' },
           { start: '9B' , end: '8G' },
           { start: '8D' , end: '8A' },
           { start: '8A' , end: '8E' },
           { start: '8e' , end: '11e' },
           { start: '11e' , end: '11B' },
           { start: '11B' , end: '10G' },
           { start: '10G' , end: '10D' },
           { start: '10D' , end: '11A' },
           { start: '11A' , end: '11E' },
           { start: '11E' , end: '8E' }

       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '11e' , end: '12e' },
           { start: '11e' , end: '11B' },
           { start: '11B' , end: '10G' },
           { start: '10G' , end: '10D' },
           { start: '10D' , end: '11A' },
           { start: '11A' , end: '11E' },
           { start: '11E' , end: '12E' },
           { start: '0E' , end: '1E' },
           { start: '1E' , end: '1A' },
           { start: '1A' , end: '1D' },
           { start: '1D' , end: '1G' },
           { start: '1G' , end: '1B' },
           { start: '1B' , end: '1e' },
           { start: '1e' , end: '0e' }
           
       ]
    }
}

export default FScaleData;