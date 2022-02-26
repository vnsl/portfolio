import React from "react";
import Card from "../Card";
import DetailedCard from "../DetailedCard";
import './index.scss';

function ProjectLayout() {
    return (
        <div className="ProjectLayout">
            <div className="PhotoMontage">
                <Card className="Photo1"></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="CardSeparator"></div>
            <DetailedCard></DetailedCard>
        </div>
    )
}

export default ProjectLayout;