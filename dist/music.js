const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "我愛你卻不能拯救你",
        artist: '好樂團',
        url: 'https://drive.google.com/uc?export=download&id=1hUoNua8jwpGAnEUcUTRBdIc6QCSNScCy',

      },
      {
        name: 'Chill Lo-fi Hip-Hop Beats',
        artist: 'GEMN',
        url: 'https://drive.google.com/uc?export=download&id=1DQZ8lrLvPQVc55QGixu7cTgjq1xrvJ_I',
      }
    ]
});