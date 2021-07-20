function store() {
  let _windowWidth: number;
  return {
    getWindowWidth(): number {
      return _windowWidth;
    },
    setWindowWidth(windowWidth: number): void {
      _windowWidth = windowWidth;
    },
  };
}

export default store();
