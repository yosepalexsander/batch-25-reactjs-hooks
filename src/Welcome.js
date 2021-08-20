import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Welcome Component Did Mounted");

    return () => {
      console.log("Welcome Component Will Unmount");
    };
  });
  return <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">Welcome</div>;
}
