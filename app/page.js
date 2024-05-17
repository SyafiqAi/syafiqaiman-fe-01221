'use client';
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice'
export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => { dispatch(increment()) }}
      >Increment
      </button>
      <span>{count}</span>
    </div>
  );
}
