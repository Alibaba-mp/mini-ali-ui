function store() {
  let _windowWidth;
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
