import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import styles from "./Button.module.css"

const data = [
    {
        id:1,
        no: "1",
        symbol:". , !"
    },
    {
        id:2,
        no: "2",
        symbol:"a b c"
    },
    {
        id:3,
        no: "3",
        symbol:"d e f"
    },
    {
        id:4,
        no: "4",
        symbol:"g h i"
    },
    {
        id:5,
        no: "5",
        symbol:"j k l"
    },
    {
        id:6,
        no: "6",
        symbol:"m n o"
    },
    {
        id:7,
        no: "7",
        symbol:"p q r s"
    },
    {
        id:8,
        no: "8",
        symbol:"t u v"
    },
    {
        id:9,
        no: "9",
        symbol:" w x y z"
    },
    {
        id:10,
        no: "*",
        symbol:""
    },
    {
        id:11,
        no: "0",
        symbol:""
    },
    {
        id:12,
        no: "#",
        symbol:""
    },
]
export const Home = () => {
    const [state, setState] = useState("");
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(prev=>prev+1);
        if (count > 2)
        {
            setCount(count % 2);
        }      
    }
    console.log(count)
    const handleClick = ({ id }) => {      
        
        for (let i = 0; i<data.length; i++)
        {
            if (data[i].id === id)
            {                 
                    let da = data[i].symbol.split(" ");
                    setState(state + da[count]);
                    setCount(0);           
            }
        }
    }

    return (
        <>
            <div style={{ width: "50vw", margin: "auto",marginTop:"10vh" }}>
                <Input state={state}/>
                <div className={styles.container}>
                    {
                        data.map((el) => {
                            return <Button handleCount={handleCount} handleClick={handleClick} key={el.id} data={el}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}