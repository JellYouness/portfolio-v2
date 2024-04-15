class Particle {
  x: number;
  y: number;

  xVector: number;
  yVector: number;

  xLimit: number;
  yLimit: number;

  constructor(
    x: number,
    y: number,
    xVector: number,
    yVector: number,
    xLimit: number,
    yLimit: number
  ) {
    this.x = x;
    this.y = y;

    this.xVector = xVector;
    this.yVector = yVector;

    this.xLimit = xLimit;
    this.yLimit = yLimit;
  }

  move(): void {
    this.x += this.xVector;
    this.y += this.yVector;

    // if it hits the left/right wall
    this.xVector =
      this.x < 1 || this.x > this.xLimit - 1 ? this.xVector * -1 : this.xVector;

    // if it hits the top/bottom wall
    this.yVector =
      this.y < 1 || this.y > this.yLimit - 1 ? this.yVector * -1 : this.yVector;
  }
}

let particles: Particle[] = [];

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

const init = (maxWidth: number, maxHeight: number) => {
  const amountOfParticles = (maxWidth * maxHeight) / 6000;

  particles = Array.from(
    { length: amountOfParticles },
    () =>
      new Particle(
        getRandomNumber(0, maxWidth),
        getRandomNumber(0, maxHeight),

        (getRandomNumber(0, 100) - 50) / 100.0,
        (getRandomNumber(0, 100) - 50) / 100.0,

        maxWidth,
        maxHeight
      )
  );
};

export { particles, init, Particle, calculateDistance };
