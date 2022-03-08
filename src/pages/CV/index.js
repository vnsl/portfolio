import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import HeaderPDF from '../../components/HeaderPDF';

import './index.scss';

function CV() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <div className="CV">
            <HeaderPDF/>
            <div className="CV__Container">
                <Document file="ViniciusNattan-CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}>
                        <button className="CV__Download"><a href="../../assets/data/ViniciusNattan-CV.pdf" download>[ Download CV ]</a></button>
                    </Page>
                    <p>{numPages}</p>
                </Document>
                
            </div>
        </div>
    )
}

export default CV;