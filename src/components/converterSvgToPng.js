import Canvg from 'canvg';

let vector = null;

async function pngFromURL(url, width, height, ogWidth = 72, ogHeight = 72) {
    // Create canvas with original SVG
    const canvas = new OffscreenCanvas(ogWidth, ogHeight);
    const ctx = canvas.getContext('2d');
    vector = await Canvg.from(ctx, url);

    // Rezise and render
    vector.resize(width, height, 'xMidYMid meet');
    await vector.render();

    // Get URL (pngUrl) for png
    const blob = await canvas.convertToBlob();
    const pngUrl = URL.createObjectURL(blob);
    return pngUrl;
}

export default pngFromURL