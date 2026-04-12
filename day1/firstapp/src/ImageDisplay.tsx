import './item.css';
import type { CartItem } from './Types';
 

 //component to get the image detail from Item component and display it

 //Controlled Component 
export default function ImageDisplay(props:CartItem) {
    const {imgitem} = props;
    return (
        <div className="imagedetail">
            <h4> Item Display </h4>
            <h2>{imgitem.name}</h2>
            <p>{imgitem.description}</p>
        </div>
    );
} 