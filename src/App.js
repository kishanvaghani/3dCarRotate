import './App.css';
import Rotation from 'react-rotation';
import i1 from "./upload/0001.png";
import i2 from "./upload/0002.png";
import i3 from "./upload/0003.png";
import i4 from "./upload/0004.png";
import i5 from "./upload/0005.png";
import i6 from "./upload/0006.png";
import i7 from "./upload/0007.png";
import i8 from "./upload/0008.png";


function App() {
    return (<>

            <div style={{position: 'absolute', color: 'white', margin: '40px 0 0 100px', zIndex: '1'}}>
                <h4>Model:- GT-360</h4>
                <h4>Engine:- 765HP</h4>
                <h4>Color:- mat-black</h4>
            </div>
            <Rotation>
                <img src={i1}/>
                <img src={i2}/>
                <img src={i3}/>
                <img src={i4}/>
                <img src={i5}/>
                <img src={i6}/>
                <img src={i7}/>
                <img src={i8}/>
            </Rotation>
        </>
    );
}

export default App;
