/** Class representing a scoreboard component. */
export default class ScoreboardComponent {

  /**
   * Create a scoreboard component.
   * @param {string} selector - selector of element where scoreboard will be created.
   */
  constructor(selector = 'body') {
    this._el = document.querySelector(selector);
  }

  /**
   * Get the scoreboard data.
   * @return {Object} The data value.
   */
  get data() {
    return this._data;
  }

  /**
   * Set the scoreboard data.
   * @param {Object} data - The data value.
   */
  set data(data = {}) {
    this._data = data;
  }

  /**
   * Clear HTML component's body.
   */
  clear() {
    this._el.innerHTML = '';
  }

  /**
   * Render scoreboard data template in HTML component's body.
   */
  renderTmpl() {
    if (!this._data) {
      return;
    }
    const data = {'data' : this._data};
    const template = window.scoreboardContainerTmplTemplate(data);
    this._el.innerHTML = template;
  }

}