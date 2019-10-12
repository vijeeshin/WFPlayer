var art = new Artplayer({
    container: '.artplayer',
    url: './your-name.mp4',
    autoSize: true,
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
});

var wf = new WFPlayer({
    container: '.waveform',
});

art.on('ready', function() {
    wf.load(art.template.$video);
});
