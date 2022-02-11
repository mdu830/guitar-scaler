const FSharpScaleData = {

    highE: [
        { isDot: '0e' },
        { isDot: false },
        { isDot: '2e' },
        { isDot: false },
        { isDot: false },
        { isDot: '5e' },
        { isDot: false },
        { isDot: '7e' },
        { isDot: false },
        { isDot: '9e' },
        { isDot: false },
        { isDot: false },
        { isDot: '12e' }
    ],

    B: [
        { isDot: '0B' },
        { isDot: false },
        { isDot: '2B' },
        { isDot: false },
        { isDot: false },
        { isDot: '5B' },
        { isDot: false },
        { isDot: '7B' },
        { isDot: false },
        { isDot: false },
        { isDot: '10B' },
        { isDot: false },
        { isDot: '12B' }
    ],

    G: [
        { isDot: false },
        { isDot: false },
        { isDot: '2G' },
        { isDot: false },
        { isDot: '4G' },
        { isDot: false },
        { isDot: '6G' },
        { isDot: false },
        { isDot: false },
        { isDot: '9G' },
        { isDot: false },
        { isDot: '11G' },
        { isDot: false }

    ], 

    D: [
        { isDot: false },
        { isDot: false },
        { isDot: '2D' },
        { isDot: false },
        { isDot: '4D' },
        { isDot: false },
        { isDot: false },
        { isDot: '7D' },
        { isDot: false },
        { isDot: '9D' },
        { isDot: false },
        { isDot: '11D' },
        { isDot: false }
    ],

    A: [
        { isDot: '0A' },
        { isDot: false },
        { isDot: '2A' },
        { isDot: false },
        { isDot: '4A' },
        { isDot: false },
        { isDot: false },
        { isDot: '7A' },
        { isDot: false },
        { isDot: '9A' },
        { isDot: false },
        { isDot: false },
        { isDot: '12A' }
    ],

    E: [
        { isDot: '0E' },
        { isDot: false },
        { isDot: '2E' },
        { isDot: false },
        { isDot: false },
        { isDot: '5E' },
        { isDot: false },
        { isDot: '7E' },
        { isDot: false },
        { isDot: '9E' },
        { isDot: false },
        { isDot: false },
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