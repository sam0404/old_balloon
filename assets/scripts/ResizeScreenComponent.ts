import { _decorator, Component, screen, Size, UITransform } from 'cc';
const { ccclass, property } = _decorator;

const MIN_HEIGHT = 200

@ccclass('ResizeScreenComponent')
export class ResizeScreenComponent extends Component {
    @property(UITransform)
    readonly uiTransform: UITransform

    protected start() {
        screen.on('window-resize', this.resize, this);
    }

    private resize(width: number, height: number) {
        let previousPosition = this.node.worldPosition.clone()

        if (height <= MIN_HEIGHT) {
            this.uiTransform.contentSize = new Size(this.uiTransform.width, MIN_HEIGHT * 0.9)
        } else {
            this.uiTransform.contentSize = new Size(this.uiTransform.width, height * 0.9)
        }

        this.node.worldPosition = previousPosition
    }
}