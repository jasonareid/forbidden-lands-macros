(async() => {
    CONFIG.Canvas.maxZoom = 4;
    let token = canvas.tokens.placeables.filter(t => t.name==='Rowak')[0];
    if(token) {
        await canvas.animatePan({x: token.x, y: token.y, scale: CONFIG.Canvas.maxZoom, duration: 1000});
        canvas.stage.pivot.x += 40;
        canvas.stage.pivot.y += 40;
    }
})()