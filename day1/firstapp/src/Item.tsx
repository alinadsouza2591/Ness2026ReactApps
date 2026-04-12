import React from 'react'
import { cartlist } from './util';
import './item.css'
import { useState } from 'react';
import type {CartItem} from './Types';
import ImageDisplay from './ImageDisplay';
import Dashboard from './clients/Dashboard';

export default function Item() {
  const [count, setCount] = useState<number>(0);
  const imagelist: CartItem[] = cartlist;
  const imagesize: number = imagelist.length;
 
  const imgitem: CartItem = imagelist[count];
  const companyname:string ="NESS";
  return (
    <div className="divitem">
      <h1> Item - Data </h1>
      <button onClick={() => {
        if (count < imagesize - 1) {
          setCount(count + 1);
        } else {
          setCount(0);
        }
      }}>
 
        Change
 
      </button>

      <ImageDisplay imgitem={imgitem} /> 
      <Dashboard company={companyname} />
 
    </div>
  );
}
