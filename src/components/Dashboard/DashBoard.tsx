import { useState } from "react";

const DashBoard: React.FC<{}> = () => {
    const [color , setColor] = useState("red");
    return (
        <>
        <button type ="button" onClick={() => setColor("blue")}>Blue</button>
        <button type ="button" onClick={() => setColor("red")}>Red</button>
        <button type ="button" onClick={() => setColor("gray")}>Gray</button>
        <button type ="button" onClick={() => setColor("yellow")}>Yellow</button>
        </>
    )
}
export default DashBoard;
