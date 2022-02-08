const FSharpScaleData = {

    highE: [
        { isDot: '0e' },
        { isDot: '2e' },
        { isDot: '5e' },
        { isDot: '7e' },
        { isDot: '9e' },
        { isDot: '12e' }
    ],

    B: [
        { isDot: '0B' },
        { isDot: '2B' },
        { isDot: '5B' },
        { isDot: '7B' },
        { isDot: '10B' },
        { isDot: '12B' }
    ],

    G: [
        { isDot: '2G' },
        { isDot: '4G' },
        { isDot: '6G' },
        { isDot: '9G' },
        { isDot: '11G' }
    ], 

    D: [
        { isDot: '2D' },
        { isDot: '4D' },
        { isDot: '7D' },
        { isDot: '9D' },
        { isDot: '11D' }
    ],

    A: [
        { isDot: '0A' },
        { isDot: '2A' },
        { isDot: '4A' },
        { isDot: '7A' },
        { isDot: '9A' },
        { isDot: '12A' }
    ],

    E: [
        { isDot: '0E' },
        { isDot: '2E' },
        { isDot: '5E' },
        { isDot: '7E' },
        { isDot: '9E' },
        { isDot: '12E' }
    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '2e' , end: '5e' },
           { start: '5e' , end: '5B' },
           { start: '5B' , end: '4G' },
           { start: '4G' , end: '4D' },
           { start: '4D' , end: '4A' },
           { start: '4A' , end: '5E' },
           { start: '5E' , end: '2E' },
           { start: '2E' , end: '2A' },
           { start: '2A' , end: '2D' },
           { start: '2D' , end: '2G' },
           { start: '2G' , end: '2B' },
           { start: '2B' , end: '2e' }
       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '5e' , end: '5B' },
           { start: '5B' , end: '4G' },
           { start: '4G' , end: '4D' },
           { start: '4D' , end: '4A' },
           { start: '4A' , end: '5E' },
           { start: '5e' , end: '7e' },
           { start: '7e' , end: '7B' },
           { start: '7B' , end: '6G' },
           { start: '6G' , end: '7D' },
           { start: '7D' , end: '7A' },
           { start: '7A' , end: '7E' },
           { start: '7E' , end: '5E' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '7e' , end: '7B' },
           { start: '7B' , end: '6G' },
           { start: '6G' , end: '7D' },
           { start: '7D' , end: '7A' },
           { start: '7A' , end: '7E' },
           { start: '7e' , end: '9e' },
           { start: '9e' , end: '10B' },
           { start: '10B' , end: '9G' },
           { start: '9G' , end: '9D' },
           { start: '9D' , end: '9A' },
           { start: '9A' , end: '9E' },
           { start: '9E' , end: '7E' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '9e' , end: '10B' },
           { start: '10B' , end: '9G' },
           { start: '9D' , end: '9A' },
           { start: '9A' , end: '9E' },
           { start: '9e' , end: '12e' },
           { start: '12e' , end: '12B' },
           { start: '12B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '12A' },
           { start: '12A' , end: '12E' },
           { start: '12E' , end: '9E' }

       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '12e' , end: '12B' },
           { start: '12B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '12A' },
           { start: '12A' , end: '12E' },
           { start: '0A' , end: '0E' },
           { start: '0E' , end: '2E' },
           { start: '2E' , end: '2A' },
           { start: '2A' , end: '2D' },
           { start: '2D' , end: '2G' },
           { start: '2G' , end: '2B' },
           { start: '2B' , end: '2e' },
           { start: '2e' , end: '0e' },
           { start: '0e' , end: '0B' }
           
       ]
    }
}

export default FSharpScaleData;