import { useEffect } from "react";

export default function GuestGreeting() {
  useEffect(() => {
    console.log("Guest Greeting Component Did Mounted");

    return () => {
      console.log("Guest Component Will Unmount");
    };
  }, []);
  return <div className="text-center h1 bg-secondary text-light py-5">Please Login !</div>;
}
