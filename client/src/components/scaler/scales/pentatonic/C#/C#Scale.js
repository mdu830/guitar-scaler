const CSharpScaleData = {

    highE: [
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
        { isDot: true },
        { isDot: false }
    ],

    B: [
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
        { isDot: true },
        { isDot: false }
    ],

    G: [
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
        { isDot: true },
        { isDot: false },
        { isDot: true }
    ], 

    D: [
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
        { isDot: true },
        { isDot: false },
        { isDot: false }
    ],

    A: [
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
        { isDot: false },
        { isDot: false }
    ],

    E: [
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
        { isDot: true },
        { isDot: false }
    ],
    sectionLines: {
        section1: [
           { color: 'rgba(255, 0, 0, 0.841)'},
           { start: '9e' , end: '12e' },
           { start: '12e' , end: '12B' },
           { start: '12B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '11A' },
           { start: '11A' , end: '12E' },
           { start: '12E' , end: '9E' },
           { start: '9E' , end: '9A' },
           { start: '9A' , end: '9D' },
           { start: '9D' , end: '9G' },
           { start: '9G' , end: '9B' },
           { start: '9B' , end: '9e' }

       ],
       section2: [
           { color: 'rgba(255, 138, 42, 0.671)'},
           { start: '12e' , end: '12B' },
           { start: '12B' , end: '11G' },
           { start: '11G' , end: '11D' },
           { start: '11G' , end: '11D' },
           { start: '11D' , end: '11A' },
           { start: '11A' , end: '12E' },
           { start: '0B' , end: '0e' },
           { start: '0e' , end: '2e' },
           { start: '2e' , end: '2B' },
           { start: '2B' , end: '1G' },
           { start: '1G' , end: '2D' },
           { start: '2D' , end: '2A' },
           { start: '2A' , end: '2E' },
           { start: '2E' , end: '0E' }

       ],
       section3: [
           { color: 'rgba(251, 255, 42, 0.671)'},
           { start: '2B' , end: '2e' },
           { start: '2e' , end: '4e' },
           { start: '4e' , end: '5B' },
           { start: '5B' , end: '4G' },
           { start: '4G' , end: '4D' },
           { start: '4D' , end: '4A' },
           { start: '4A' , end: '4E' },
           { start: '4E' , end: '2E' },
           { start: '2E' , end: '2A' },
           { start: '2A' , end: '2D' },
           { start: '2D' , end: '1G' },
           { start: '1G' , end: '2B' }

       ],        
       section4: [
           { color: 'rgba(85, 255, 42, 0.671)'},
           { start: '4e' , end: '7e' },
           { start: '7e' , end: '7B' },
           { start: '7B' , end: '6G' },
           { start: '6G' , end: '6D' },
           { start: '6D' , end: '7A' },
           { start: '7A' , end: '7E' },
           { start: '7E' , end: '4E' },
           { start: '4E' , end: '4A' },
           { start: '4A' , end: '4D' },
           { start: '4D' , end: '4G' },
           { start: '4G' , end: '5B' },
           { start: '5B' , end: '4e' }

       ],
       section5: [
           { color: 'rgba(42, 255, 202, 0.671)'},
           { start: '7e' , end: '9e' },
           { start: '9e' , end: '9B' }, 
           { start: '9B' , end: '9G' }, 
           { start: '9G' , end: '9D' }, 
           { start: '9D' , end: '9A' }, 
           { start: '9A' , end: '9E' }, 
           { start: '9E' , end: '7E' }, 
           { start: '7E' , end: '7A' }, 
           { start: '7A' , end: '6D' },
           { start: '6D' , end: '6G' },
           { start: '6G' , end: '7B' },
           { start: '7B' , end: '7e' }
           
       ]
    }
}

export default CSharpScaleData;