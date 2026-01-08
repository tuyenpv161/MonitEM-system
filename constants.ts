// Base URL for the images extracted from the PDF provided in the prompt
export const IMG_BASE_URL = "https://raw.githubusercontent.com/tuyenpv161/MonitEM/img/Gia%CC%89i%20pha%CC%81p%20gia%CC%81m%20sa%CC%81t%20khu%20vu%CC%9B%CC%A3c%20lie%CC%82n%20tu%CC%A3c%20MonitEM.fld";

// Mapping images based on the PDF context. 
// Note: Extensions are assumed based on typical Word exports (jpg/png). 
// In a real scenario, these would be exact filenames.
export const IMAGES = {
    hero: `${IMG_BASE_URL}/image001.png`, // Pole with unit
    logoWavecontrol: `${IMG_BASE_URL}/image002.jpg`, // Wavecontrol Logo area
    overviewUnit: `${IMG_BASE_URL}/image005.jpg`, // Unit on roof
    featuresDiagram: `${IMG_BASE_URL}/image006.jpg`, // Annotated unit
    systemArchitecture: `${IMG_BASE_URL}/image004.png`, // Diagram buildings
    probes: `${IMG_BASE_URL}/image007.jpg`, // Probes collection
    software: `${IMG_BASE_URL}/image008.jpg`, // Web interface map
    caseTelecom: `${IMG_BASE_URL}/image009.png`, // Car drive test
    caseTunisia: `${IMG_BASE_URL}/image012.jpg`, // Tunisia building
    caseQatar: `${IMG_BASE_URL}/image013.jpg`, // Qatar Stadium
    caseSerbia: `${IMG_BASE_URL}/image015.jpg`, // Serbia Roof
    caseBrazil: `${IMG_BASE_URL}/image017.jpg`, // Rio Statue
    caseColombia: `${IMG_BASE_URL}/image021.png`, // Colombia Map
    caseTurkey: `${IMG_BASE_URL}/image023.jpg`, // Turkey Map
};

export const SECTIONS = [
    { id: "intro", title: "Giới thiệu" },
    { id: "solution", title: "Tổng quan Giải pháp" },
    { id: "features", title: "Tính năng nổi bật" },
    { id: "specs", title: "Thông số kỹ thuật" },
    { id: "cases", title: "Dự án tiêu biểu" },
];