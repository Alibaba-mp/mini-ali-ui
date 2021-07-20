class Store {
    private windowWidth: number

    constructor() {
      this.windowWidth = 0;
    }

    getWindowWidth(): number {
      return this.windowWidth;
    }

    setWindowWidth(windowWidth: number): void{
      this.windowWidth = windowWidth;
    }
}

export default new Store();
