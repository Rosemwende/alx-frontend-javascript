export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }



  get sqft() {
    return this._sqft;
  }
  static evacuationWarningMessage() {
    throw new Error('This method must be overridden by subclasses');
  }
}
