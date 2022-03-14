// future custom hook for hover arrows

import { useState, useEffect } from "react";


const useArrows = (sliderValue) => {

    const calc = (number) => {
        let sum = number + sliderValue
        return  sum
    }

    const arrowData = [
        {
            highE: {'0e': '3e'},
            B: {'0B': '3B', '3B': '0e'},
            G: {'0G': '2G', '2G': '0B'},
            D: {'0D': '2D', '2D': '0G'},
            A: {'0A': '2A', '2A': '0D'},
            E: {'0E': '3E', '3E': '0A'}
        },
        {
            highE: {'3e': '5e'},
            B: {'3B': '5B', '5B': '3e'},
            G: {'2G': '4G', '4G': '3B'},
            D: {'2D': '5D', '5D': '2G'},
            A: {'2A': '5A', '5A': '2D'},
            E: {'3E': '5E', '5E': '2A'}
        },
        {
            highE: {'5e': '7e'},
            B: {'5B': '8B', '8B': '5e'},
            G: {'4G': '7G', '7G': '5B'},
            D: {'5D': '7D', '7D': '4G'},
            A: {'5A': '7A', '7A': '5D'},
            E: {'5E': '7E', '7E': '5A'}
        },
        {
            highE: {'7e': '10e'},
            B: {'8B': '10B', '10B': '7e'},
            G: {'7G': '9G', '9G': '8B'},
            D: {'7D': '9D', '9D': '7G'},
            A: {'7A': '10A', '10A': '7D'},
            E: {'7E': '10E', '10E': '7A'}
        },
        {
            highE: {'10e': '12e'},
            B: {'10B': '12B', '12B': '10e'},
            G: {'9G': '12G', '12G': '10B'},
            D: {'9D': '12D', '12D': '9G'},
            A: {'10A': '12A', '12A': '9D'},
            E: {'10E': '12E', '12E': '10A'}
        }
    ]

    const [arrow, setArrow] = useState(arrowData)

    useEffect(() => {
        setArrow(arrowData)
    }, [sliderValue])

    return (arrow)
}

export default useArrows;