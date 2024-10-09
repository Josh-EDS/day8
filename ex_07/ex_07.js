new Vue({
  el: '#app',
  data: {
    imageSrc: 'https://imgs.search.brave.com/JuSo0n9W-zEC3t61zRtQGMsFmMcG5BD42DW-iIUQ51U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzMwL0No/dWNrX05vcnJpc19N/YXlfMjAxNS5qcGcv/NTEycHgtQ2h1Y2tf/Tm9ycmlzX01heV8y/MDE1LmpwZw',
    x: 0,
    y: 0,
    score: 0
  },
  mounted() {
    this.teleportImage();
    this.updateTitle();
  },
  methods: {
    teleportImage() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imageWidth = 200;
      const imageHeight = 200;
      const offset = 100;

      let newX = Math.random() * (windowWidth - imageWidth);
      let newY = Math.random() * (windowHeight - imageHeight);

      while (Math.abs(newX - this.x) < offset && Math.abs(newY - this.y) < offset) {
        newX = Math.random() * (windowWidth - imageWidth);
        newY = Math.random() * (windowHeight - imageHeight);
      }

      this.x = newX;
      this.y = newY;
    },
    handleMouseOver() {
      this.increaseScore();
      this.teleportImage();
    },
    increaseScore() {
      this.score++;
      this.updateTitle();
    },
    updateTitle() {
      document.title = `Fun Score: ${this.score}`;
    }
  }
});