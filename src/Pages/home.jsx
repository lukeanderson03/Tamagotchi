import { Link } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard";
import { Button } from "../Components/Buttons";

export function Home() {
    return (
        <div className="text-text font-medium font-primary">
            <h1 className="text-5xl font-heading w-fit pt-2.5 m-auto">Your Study Pal</h1>
            <Dashboard />
            <div className="w-60 md:w-120 lg:w-160 my-10 mx-auto flex justify-around">
                <Button variant="primary" size="lg">Feed</Button>
                <Button variant="primary" size="lg">Pet</Button>
            </div>
        </div>
    );
}