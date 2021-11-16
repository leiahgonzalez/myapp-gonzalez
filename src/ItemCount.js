import React, { useEffect, useState } from "react";

export const ItemCount = () => {

    const [ clicks, setClicks] = useState(0)

    const handleClicks = () => {
        setClicks( clicks + 1)
    }

    useEffect(( => () {
        console.log("me monte")

        return () => {
            console.log("me desmonte")
        }
    }))
    useEffect(() => {
        console.log("Clicks actualizados")
    }, [clicks])


}