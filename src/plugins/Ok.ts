import Konva from 'konva'
import Plugin from './Plugin'
import { DrawEventParams } from '../common/type'

export default class Ok extends Plugin {
  name = 'ok';
  iconfont = 'iconfont icon-check';
  title = 'OK';
  disappearImmediately = true;

  onEnter = (drawEventParams: DrawEventParams) => {
    const { ok, drawLayer } = drawEventParams
    console.log('ok', ok)
    if (ok) {
      ok()
    }

    // drawLayer.draw();
  };
}
