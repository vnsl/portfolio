import React from "react";
import Card from "../Card";
import DetailedCard from "../DetailedCard";
import './index.scss';

function ProjectLayout() {
    return (
        <div className="ProjectLayout">
            <div className="PhotoMontage">
                <Card></Card>
            </div>
            <div className="CardSeparator"></div>
            <DetailedCard></DetailedCard>
        </div>
    )
}

export default ProjectLayout;