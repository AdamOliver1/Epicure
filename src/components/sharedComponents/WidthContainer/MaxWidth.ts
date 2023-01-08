import style from './WidthContainer.module.scss';

export interface IMaxWidth {
    getWidth(): any;
}

export class DesktopWidth implements IMaxWidth {
    getWidth() {
        return style.xLarge;
    }
}

