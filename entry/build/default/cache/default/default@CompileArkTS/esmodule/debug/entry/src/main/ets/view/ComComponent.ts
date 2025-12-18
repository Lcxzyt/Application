if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface StatusHead_Params {
    statusBarHeight?: number;
    topHeaderHeight?: number;
    isShow?: boolean;
}
interface SettingItemView_Params {
    bottomAvoidHeight?: number;
}
interface ItemHead_Params {
    headerContent?: Resource;
}
interface ImageMapView_Params {
    imagePositionX?: number;
    imagePositionY?: number;
    offsetX?: number;
    offsetY?: number;
}
interface HomeTop_Params {
    statusBarHeight?: number;
}
interface CommonIconButton_Params {
    commonIcon?: Resource;
    triggerMethod?: () => void;
}
import type common from "@ohos:app.ability.common";
import { CommonConstants } from "@bundle:com.example.bottomdrawerslidecase/entry/ets/constants/CommonConstants";
export class CommonIconButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__commonIcon = new SynchedPropertyObjectOneWayPU(params.commonIcon, this, "commonIcon");
        this.triggerMethod = () => {
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommonIconButton_Params) {
        if (params.triggerMethod !== undefined) {
            this.triggerMethod = params.triggerMethod;
        }
    }
    updateStateVars(params: CommonIconButton_Params) {
        this.__commonIcon.reset(params.commonIcon);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__commonIcon.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__commonIcon.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __commonIcon: SynchedPropertySimpleOneWayPU<Resource>;
    get commonIcon() {
        return this.__commonIcon.get();
    }
    set commonIcon(newValue: Resource) {
        this.__commonIcon.set(newValue);
    }
    private triggerMethod: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding({
                left: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width({ "id": 16777240, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.height({ "id": 16777240, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.backgroundColor({ "id": 16777250, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.borderRadius({ "id": 16777239, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.commonIcon);
            Image.width({ "id": 16777236, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Image.height({ "id": 16777236, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Image.onClick(() => this.triggerMethod());
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Text.fontColor(Color.Black);
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize({ "id": 16777226, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Text.margin({
                left: { "id": 16777230, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class HomeTop extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__statusBarHeight = new SynchedPropertySimpleTwoWayPU(params.statusBarHeight, this, "statusBarHeight");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomeTop_Params) {
    }
    updateStateVars(params: HomeTop_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__statusBarHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__statusBarHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // Status bar height.
    private __statusBarHeight: SynchedPropertySimpleTwoWayPU<number>;
    get statusBarHeight() {
        return this.__statusBarHeight.get();
    }
    set statusBarHeight(newValue: number) {
        this.__statusBarHeight.set(newValue);
    }
    triggerMethod(): void {
        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
        context.terminateSelf();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(CommonConstants.PAGE_HEADER_HEIGHT);
            Row.margin({
                top: this.statusBarHeight
            });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommonIconButton(this, {
                        commonIcon: { "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                        triggerMethod: this.triggerMethod
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/ComComponent.ets", line: 71, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commonIcon: { "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                            triggerMethod: this.triggerMethod
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        commonIcon: { "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                }
            }, { name: "CommonIconButton" });
        }
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class ImageMapView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__imagePositionX = new ObservedPropertySimplePU(0, this, "imagePositionX");
        this.__imagePositionY = new ObservedPropertySimplePU(0, this, "imagePositionY");
        this.__offsetX = new ObservedPropertySimplePU(0, this, "offsetX");
        this.__offsetY = new ObservedPropertySimplePU(0, this, "offsetY");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ImageMapView_Params) {
        if (params.imagePositionX !== undefined) {
            this.imagePositionX = params.imagePositionX;
        }
        if (params.imagePositionY !== undefined) {
            this.imagePositionY = params.imagePositionY;
        }
        if (params.offsetX !== undefined) {
            this.offsetX = params.offsetX;
        }
        if (params.offsetY !== undefined) {
            this.offsetY = params.offsetY;
        }
    }
    updateStateVars(params: ImageMapView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__imagePositionX.purgeDependencyOnElmtId(rmElmtId);
        this.__imagePositionY.purgeDependencyOnElmtId(rmElmtId);
        this.__offsetX.purgeDependencyOnElmtId(rmElmtId);
        this.__offsetY.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__imagePositionX.aboutToBeDeleted();
        this.__imagePositionY.aboutToBeDeleted();
        this.__offsetX.aboutToBeDeleted();
        this.__offsetY.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // X-axis position of the image in the parent component.
    private __imagePositionX: ObservedPropertySimplePU<number>;
    get imagePositionX() {
        return this.__imagePositionX.get();
    }
    set imagePositionX(newValue: number) {
        this.__imagePositionX.set(newValue);
    }
    // Y-axis position of the image in the parent component.
    private __imagePositionY: ObservedPropertySimplePU<number>;
    get imagePositionY() {
        return this.__imagePositionY.get();
    }
    set imagePositionY(newValue: number) {
        this.__imagePositionY.set(newValue);
    }
    // X-axis position of the image after the drag event ends.
    private __offsetX: ObservedPropertySimplePU<number>;
    get offsetX() {
        return this.__offsetX.get();
    }
    set offsetX(newValue: number) {
        this.__offsetX.set(newValue);
    }
    // Y-axis position of the image after the drag event ends.
    private __offsetY: ObservedPropertySimplePU<number>;
    get offsetY() {
        return this.__offsetY.get();
    }
    set offsetY(newValue: number) {
        this.__offsetY.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.clip(true);
            Gesture.create(GesturePriority.Low);
            PanGesture.create({ direction: PanDirection.All, fingers: CommonConstants.PAN_GESTURE_FINGERS });
            PanGesture.onActionUpdate((event: GestureEvent) => {
                this.offsetX = event.offsetX + this.imagePositionX;
                this.offsetY = event.offsetY + this.imagePositionY;
            });
            PanGesture.onActionEnd(() => {
                this.imagePositionX = this.offsetX;
                this.imagePositionY = this.offsetY;
            });
            PanGesture.pop();
            Gesture.pop();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Background map image.
            Image.create({ "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            // Background map image.
            Image.id('bg_img');
            // Background map image.
            Image.width({ "id": 16777219, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            // Background map image.
            Image.height({ "id": 16777219, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            // Background map image.
            Image.objectFit(ImageFit.Contain);
            // Background map image.
            Image.draggable(true);
            // Background map image.
            Image.translate({
                x: this.offsetX,
                y: this.offsetY
            });
        }, Image);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class ItemHead extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__headerContent = new SynchedPropertyObjectOneWayPU(params.headerContent, this, "headerContent");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ItemHead_Params) {
    }
    updateStateVars(params: ItemHead_Params) {
        this.__headerContent.reset(params.headerContent);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__headerContent.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__headerContent.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __headerContent: SynchedPropertySimpleOneWayPU<Resource>;
    get headerContent() {
        return this.__headerContent.get();
    }
    set headerContent(newValue: Resource) {
        this.__headerContent.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.id('listHeader');
            Column.borderRadius({ "id": 16777220, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Column.alignRules(CommonConstants.LIST_TITLE_ALIGN_RULES);
            Column.height(CommonConstants.LIST_HEADER_HEIGHT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.shadow({
                radius: { "id": 16777220, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                color: { "id": 16777255, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
            });
            Row.height({ "id": 16777228, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.margin({ left: { "id": 16777232, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" } });
            Row.backgroundColor({ "id": 16777254, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.borderRadius({ "id": 16777220, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Row.padding({
                right: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                left: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.headerContent);
            Text.fontSize({ "id": 16777225, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Text.fontColor({ "id": 16777256, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class SettingItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomAvoidHeight = new SynchedPropertySimpleTwoWayPU(params.bottomAvoidHeight, this, "bottomAvoidHeight");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingItemView_Params) {
    }
    updateStateVars(params: SettingItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomAvoidHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomAvoidHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // Avoidance Height of Bottom Navigation Bar.
    private __bottomAvoidHeight: SynchedPropertySimpleTwoWayPU<number>;
    get bottomAvoidHeight() {
        return this.__bottomAvoidHeight.get();
    }
    set bottomAvoidHeight(newValue: number) {
        this.__bottomAvoidHeight.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777218, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Image.draggable(false);
            Image.height({ "id": 16777234, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Image.width(CommonConstants.FULL_PERCENT);
            Image.borderRadius({ "id": 16777220, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Image.padding({
                top: { "id": 16777233, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                right: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                bottom: { "id": 16777233, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                left: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
            });
        }, Image);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class StatusHead extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__statusBarHeight = new SynchedPropertySimpleTwoWayPU(params.statusBarHeight, this, "statusBarHeight");
        this.__topHeaderHeight = new ObservedPropertySimplePU(0, this, "topHeaderHeight");
        this.__isShow = new SynchedPropertySimpleTwoWayPU(params.isShow, this, "isShow");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: StatusHead_Params) {
        if (params.topHeaderHeight !== undefined) {
            this.topHeaderHeight = params.topHeaderHeight;
        }
    }
    updateStateVars(params: StatusHead_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__statusBarHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__topHeaderHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isShow.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__statusBarHeight.aboutToBeDeleted();
        this.__topHeaderHeight.aboutToBeDeleted();
        this.__isShow.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __statusBarHeight: SynchedPropertySimpleTwoWayPU<number>;
    get statusBarHeight() {
        return this.__statusBarHeight.get();
    }
    set statusBarHeight(newValue: number) {
        this.__statusBarHeight.set(newValue);
    }
    private __topHeaderHeight: ObservedPropertySimplePU<number>;
    get topHeaderHeight() {
        return this.__topHeaderHeight.get();
    }
    set topHeaderHeight(newValue: number) {
        this.__topHeaderHeight.set(newValue);
    }
    private __isShow: SynchedPropertySimpleTwoWayPU<boolean>;
    get isShow() {
        return this.__isShow.get();
    }
    set isShow(newValue: boolean) {
        this.__isShow.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Context.animation({
                duration: CommonConstants.STATUS_HEAD_ANIMATION_DURATION,
                curve: Curve.Smooth,
                iterations: CommonConstants.ANIMATION_PLAY_TIMES,
                playMode: PlayMode.Normal
            });
            Column.visibility(this.isShow ? Visibility.Visible : Visibility.None);
            Context.animation(null);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.width(CommonConstants.FULL_PERCENT);
            Blank.backgroundColor(Color.White);
            Blank.height(this.statusBarHeight);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor(Color.White);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(this.topHeaderHeight);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommonIconButton(this, {
                        commonIcon: { "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/ComComponent.ets", line: 202, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commonIcon: { "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        commonIcon: { "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                }
            }, { name: "CommonIconButton" });
        }
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
