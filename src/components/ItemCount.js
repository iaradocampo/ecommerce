import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount ({stock, initial, onAdd}) {

    const [count, setCount] = useState (parseInt(initial));

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > initial){
            setCount(count - 1);
        }
    }

    const add = () => {
        if (stock > 0){
            onAdd(count);
        }
    }

    return <>
        <div className="i">
            <ButtonGroup style={{boxShadow: "none"}} variant="contained" aria-label="outlined primary button group">
                <Button onClick={decrease} 
                    style={{
                        width: "4rem",
                        height: "3rem",
                        fontSize: "1.6em",
                        backgroundColor: "#361d64", 
                        color: "#00dbafda", 
                        border: "none"
                    }}>
                    -
                </Button>
                <input readonly="readonly" value={count}/>
                <Button onClick={increase} 
                    style={{
                        width: "4rem",
                        height: "3rem",
                        fontSize: "1.6em",
                        backgroundColor: "#361d64", 
                        color: "#00dbafda", 
                        border: "none"
                    }}>
                    +
                </Button>
            </ButtonGroup>
            <Link className="a" to='/cart'>
                <Button onClick={add}
                    style={{
                        color: "#00dbafda", 
                        fontWeight: "600",
                        letterSpacing: "1px",
                        border: "1px solid #00dbafda", 
                        '&:hover':{
                            backgroundColor: "rgba(6, 190, 161, 0.04)"
                        },
                        width: "20rem",
                        height: "3rem", 
                        marginTop: "3rem"
                    }}>
                    comprar
                </Button>
            </Link>
        </div>
    </>
}

export default ItemCount;