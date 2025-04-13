import React from "react";
import VirtualPet from "./Pet";

export function Dashboard() {
    return (
        <>
            <VirtualPet />
            <div className="pet-container mt-10 mx-auto w-100 md:w-160 lg:w-200 bg-surface rounded-md">
                {/* Image of pet will go here */}
                {/* Display of current stats will go here (will need to pull data from supabase) */}
                <h3>Hunger</h3>
                <p>3/5</p>
                <h3>Happiness</h3>
                <p>4/5</p>
            </div>
        </>
    );
}