import Board from "./board.tsx";
import Workshop from "./Workshop.tsx";

const UIController = () => {
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'70%'}} >
                <h3>This should be the board</h3>
                <Board width={400} height={300}/>
            </div>
            <div style={{width:'30%'}}>
                <h3>This is the workshop</h3>
                <Workshop width={150} height={300}/>
            </div>
        </div>
    )
}

export default  UIController;