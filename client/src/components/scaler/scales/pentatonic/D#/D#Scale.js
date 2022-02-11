const DSharpScaleData = {

    highE: [
        { isDot: false },
        { isDot: false },
        { isDot: '2e' },
        { isDot: false },
        { isDot: '4e' },
        { isDot: false },
        { isDot: '6e' },
        { isDot: false },
        { isDot: false },
        { isDot: '9e' },
        { isDot: false },
        { isDot: '11e' },
        { isDot: false }
    ],

    B: [
        { isDot: false },
        { isDot: false },
        { isDot: '2B' },
        { isDot: false },
        { isDot: '4B' },
        { isDot: false },
        { isDot: false },
        { isDot: '7B' },
        { isDot: false },
        { isDot: '9B' },
        { isDot: false },
        { isDot: '11B' },
        { isDot: false }
    ],

    G: [
        { isDot: false },
        { isDot: '1G' },
        { isDot: false },
        { isDot: '3G' },
        { isDot: false },
        { isDot: false },
        { isDot: '6G' },
        { isDot: false },
        { isDot: '8G' },
        { isDot: false },
        { isDot: false },
        { isDot: '11G' },
        { isDot: false }
    ], 

    D: [
        { isDot: false },
        { isDot: '1D' },
        { isDot: false },
        { isDot: false },
        { isDot: '4D' },
        { isDot: false },
        { isDot: '6D' },
        { isDot: false },
        { isDot: '8D' },
        { isDot: false },
        { isDot: false },
        { isDot: '11D' },
        { isDot: false }
    ],

    A: [
        { isDot: false },
        { isDot: '1A' },
        { isDot: false },
        { isDot: false },
        { isDot: '4A' },
        { isDot: false },
        { isDot: '6A' },
        { isDot: false },
        { isDot: false },
        { isDot: '9A' },
        { isDot: false },
        { isDot: '11A' },
        { isDot: false },
    ],

    E: [
        { isDot: false },
        { isDot: false },
        { isDot: '2E' },
        { isDot: false },
        { isDot: '4E' },
        { isDot: false },
        { isDot: '6E' },
        { isDot: false },
        { isDot: false },
        { isDot: '9E' },
        { isDot: false },
        { isDot: '11E' },
        { isDot: false }
    ],
    sectionLines: {
        section1: [
        //    { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '12e' , end: '11e' },
           { start: '11e' , end: '11B' },
           { start: '11B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '11A' },
           { start: '11A' , end: '11E' },
           { start: '11E' , end: '12E' },
           { start: '0E' , end: '2E' },
           { start: '2E' , end: '1A' },
           { start: '1A' , end: '1D' },
           { start: '1D' , end: '1G' },
           { start: '1G' , end: '2B' },
           { start: '2B' , end: '2e' },
           { start: '2e' , end: '0e' },



       ],
       section2: [
        //    { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '2B' , end: '2e' },
           { start: '2e' , end: '4e' },
           { start: '4e' , end: '4B' },
           { start: '4B' , end: '3G' },
           { start: '3G' , end: '4D' },
           { start: '4D' , end: '4A' },
           { start: '4A' , end: '4E' },
           { start: '4E' , end: '2E' },
           { start: '2E' , end: '1A' },
           { start: '1A' , end: '1D' },
           { start: '1D' , end: '1G' },
           { start: '1G' , end: '2B' },
           { start: '2B' , end: '2e' }

       ],
       section3: [
        //    { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '4B' , end: '4e' },
           { start: '4e' , end: '6e' },
           { start: '6e' , end: '7B' },
           { start: '7B' , end: '6G' },
           { start: '6G' , end: '6D' },
           { start: '6D' , end: '6A' },
           { start: '6A' , end: '6E' },
           { start: '6E' , end: '4E' },
           { start: '4E' , end: '4A' },
           { start: '4A' , end: '4D' },
           { start: '4D' , end: '3G' },
           { start: '3G' , end: '4B' }

       ],        
       section4: [
        //    { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '6e' , end: '9e' },
           { start: '9e' , end: '9B' },
           { start: '9B' , end: '8G' },
           { start: '8G' , end: '8D' },
           { start: '8D' , end: '9A' },
           { start: '9A' , end: '9E' },
           { start: '9E' , end: '6E' },
           { start: '6E' , end: '6A' },
           { start: '6A' , end: '6D' },
           { start: '6D' , end: '6G' },
           { start: '6G' , end: '7B' },
           { start: '7B' , end: '6e' }

       ],
       section5: [
        //    { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '9e' , end: '11e' },
           { start: '11e' , end: '11B' }, 
           { start: '11B' , end: '11G' }, 
           { start: '11G' , end: '11D' }, 
           { start: '11D' , end: '11A' }, 
           { start: '11A' , end: '11E' }, 
           { start: '11E' , end: '9E' }, 
           { start: '9E' , end: '9A' }, 
           { start: '9A' , end: '8D' },
           { start: '8D' , end: '8G' },
           { start: '8G' , end: '9B' },
           { start: '9B' , end: '9e' }
           
       ]
    }
}

export default DSharpScaleData;