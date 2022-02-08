const GSharpScaleData = {

    highE: [
        { isDot: '2e' },
        { isDot: '4e' },
        { isDot: '7e' },
        { isDot: '9e' },
        { isDot: '11e' }
    ],

    B: [
        { isDot: '0B' },
        { isDot: '2B' },
        { isDot: '4B' },
        { isDot: '7B' },
        { isDot: '9B' },
        { isDot: '12B' }
    ],

    G: [
        { isDot: '1G' },
        { isDot: '4G' },
        { isDot: '6G' },
        { isDot: '8G' },
        { isDot: '11G' }
    ], 

    D: [
        { isDot: '1D' },
        { isDot: '4D' },
        { isDot: '6D' },
        { isDot: '9D' },
        { isDot: '11D' }
    ],

    A: [
        { isDot: '2A' },
        { isDot: '4A' },
        { isDot: '6A' },
        { isDot: '9A' },
        { isDot: '11A' }
    ],

    E: [
        { isDot: '2E' },
        { isDot: '4E' },
        { isDot: '7E' },
        { isDot: '9E' },
        { isDot: '11E' }
    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '4e' , end: '7e' },
           { start: '7e' , end: '7B' },
           { start: '7B' , end: '6G' },
           { start: '6G' , end: '6D' },
           { start: '6D' , end: '6A' },
           { start: '6A' , end: '7E' },
           { start: '7E' , end: '4E' },
           { start: '4E' , end: '4A' },
           { start: '4A' , end: '4D' },
           { start: '4D' , end: '4G' },
           { start: '4G' , end: '4B' },
           { start: '4B' , end: '4e' }
       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '7e' , end: '7B' },
           { start: '7B' , end: '6G' },
           { start: '6G' , end: '6D' },
           { start: '6D' , end: '6A' },
           { start: '6A' , end: '7E' },
           { start: '7e' , end: '9e' },
           { start: '9e' , end: '9B' },
           { start: '9B' , end: '8G' },
           { start: '8G' , end: '9D' },
           { start: '9D' , end: '9A' },
           { start: '9A' , end: '9E' },
           { start: '9E' , end: '7E' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '9e' , end: '9B' },
           { start: '9B' , end: '8G' },
           { start: '8G' , end: '9D' },
           { start: '9D' , end: '9A' },
           { start: '9A' , end: '9E' },
           { start: '9e' , end: '11e' },
           { start: '11e' , end: '12B' },
           { start: '12B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '11A' },
           { start: '11A' , end: '11E' },
           { start: '11E' , end: '9E' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '12e' , end: '11e' },
           { start: '11e' , end: '12B' },
           { start: '12B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '11A' },
           { start: '11A' , end: '11E' },
           { start: '11E' , end: '12E' },
           { start: '0e' , end: '2e' },
           { start: '2e' , end: '2B' },
           { start: '2B' , end: '1G' },
           { start: '1G' , end: '1D' },
           { start: '1D' , end: '2A' },
           { start: '2A' , end: '2E' },
           { start: '2E' , end: '0E' },

       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '2e' , end: '4e' },
           { start: '4e' , end: '4B' }, 
           { start: '4B' , end: '4G' }, 
           { start: '4G' , end: '4D' }, 
           { start: '4D' , end: '4A' }, 
           { start: '4A' , end: '4E' }, 
           { start: '4E' , end: '2E' }, 
           { start: '2E' , end: '2A' }, 
           { start: '2A' , end: '1D' },
           { start: '1D' , end: '1G' },
           { start: '1G' , end: '2B' },
           { start: '2B' , end: '2e' },

       ]
    }
}

export default GSharpScaleData;