import './index.less';
import loading from './loading.png';

class Loading {
  static id = 0;

  static getId() {
    this.id += 0;
    return `loading_${this.id}`;
  }

  constructor() {
    this.id = Loading.getId();
    const html = `
        <div class="loading">
            <div class="gray"></div>
            <div class="mask"></div>
            <img class="shapeImg" src="${loading}"/>
        </div>`;
    const dom = document.createElement('div');
    dom.id = this.id;
    dom.className = 'loading-mask';
    dom.innerHTML = html;
    document.getElementsByTagName('body')[0].appendChild(dom);
  }

  hide() {
    const { id } = this;
    const dom = document.getElementById(id);
    if (dom) {
      dom.className = 'loading-mask hide';
    }
  }

  show() {
    const { id } = this;
    const dom = document.getElementById(id);
    if (dom) {
      dom.className = 'loading-mask';
    }
  }
}
window.sysLoading = new Loading();
window.sysLoading.show();
