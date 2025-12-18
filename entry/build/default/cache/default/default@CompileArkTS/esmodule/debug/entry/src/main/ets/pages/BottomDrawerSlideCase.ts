if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BottomDrawerSlideCase_Params {
    bottomAvoidHeight?: number;
    listHeight?: number;
    windowHeight?: number;
    statusBarHeight?: number;
    isScroll?: boolean;
    isUp?: boolean;
    isShow?: boolean;
    listItem?: SettingItem[];
    firstListItemHeight?: number;
    secondListItemHeight?: number;
    itemNumber?: number;
    positionY?: number;
    yStart?: number;
    windowModel?: WindowModel;
    listScroller?;
}
import type window from "@ohos:window";
import JSON from "@ohos:util.json";
import { HomeTop, ImageMapView, ItemHead, SettingItemView, StatusHead } from "@bundle:com.example.bottomdrawerslidecase/entry/ets/view/ComComponent";
import { CommonConstants } from "@bundle:com.example.bottomdrawerslidecase/entry/ets/constants/CommonConstants";
import { GlobalContext } from "@bundle:com.example.bottomdrawerslidecase/entry/ets/utils/GlobalContext";
import type { SettingItem } from '../utils/SettingItem';
import WindowModel from "@bundle:com.example.bottomdrawerslidecase/entry/ets/utils/WindowModel";
import Logger from "@bundle:com.example.bottomdrawerslidecase/entry/ets/utils/Logger";
class BottomDrawerSlideCase extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomAvoidHeight = new ObservedPropertySimplePU(0, this, "bottomAvoidHeight");
        this.__listHeight = new ObservedPropertySimplePU(0, this, "listHeight");
        this.__windowHeight = new ObservedPropertySimplePU(0, this, "windowHeight");
        this.__statusBarHeight = new ObservedPropertySimplePU(0, this, "statusBarHeight");
        this.__isScroll = new ObservedPropertySimplePU(false, this, "isScroll");
        this.__isUp = new ObservedPropertySimplePU(true, this, "isUp");
        this.__isShow = new ObservedPropertySimplePU(false, this, "isShow");
        this.__listItem = new ObservedPropertyObjectPU(CommonConstants.LIST_IMAGE_DATA, this, "listItem");
        this.__firstListItemHeight = new ObservedPropertySimplePU(CommonConstants.FIRST_LIST_ITEM_HEIGHT, this, "firstListItemHeight");
        this.__secondListItemHeight = new ObservedPropertySimplePU(this.bottomAvoidHeight + 150, this, "secondListItemHeight");
        this.__itemNumber = new ObservedPropertySimplePU(0, this, "itemNumber");
        this.__positionY = new ObservedPropertySimplePU(0, this, "positionY");
        this.yStart = 0;
        this.windowModel = WindowModel.getInstance();
        this.listScroller = new ListScroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BottomDrawerSlideCase_Params) {
        if (params.bottomAvoidHeight !== undefined) {
            this.bottomAvoidHeight = params.bottomAvoidHeight;
        }
        if (params.listHeight !== undefined) {
            this.listHeight = params.listHeight;
        }
        if (params.windowHeight !== undefined) {
            this.windowHeight = params.windowHeight;
        }
        if (params.statusBarHeight !== undefined) {
            this.statusBarHeight = params.statusBarHeight;
        }
        if (params.isScroll !== undefined) {
            this.isScroll = params.isScroll;
        }
        if (params.isUp !== undefined) {
            this.isUp = params.isUp;
        }
        if (params.isShow !== undefined) {
            this.isShow = params.isShow;
        }
        if (params.listItem !== undefined) {
            this.listItem = params.listItem;
        }
        if (params.firstListItemHeight !== undefined) {
            this.firstListItemHeight = params.firstListItemHeight;
        }
        if (params.secondListItemHeight !== undefined) {
            this.secondListItemHeight = params.secondListItemHeight;
        }
        if (params.itemNumber !== undefined) {
            this.itemNumber = params.itemNumber;
        }
        if (params.positionY !== undefined) {
            this.positionY = params.positionY;
        }
        if (params.yStart !== undefined) {
            this.yStart = params.yStart;
        }
        if (params.windowModel !== undefined) {
            this.windowModel = params.windowModel;
        }
        if (params.listScroller !== undefined) {
            this.listScroller = params.listScroller;
        }
    }
    updateStateVars(params: BottomDrawerSlideCase_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomAvoidHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__listHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__windowHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__statusBarHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isScroll.purgeDependencyOnElmtId(rmElmtId);
        this.__isUp.purgeDependencyOnElmtId(rmElmtId);
        this.__isShow.purgeDependencyOnElmtId(rmElmtId);
        this.__listItem.purgeDependencyOnElmtId(rmElmtId);
        this.__firstListItemHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__secondListItemHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__itemNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__positionY.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomAvoidHeight.aboutToBeDeleted();
        this.__listHeight.aboutToBeDeleted();
        this.__windowHeight.aboutToBeDeleted();
        this.__statusBarHeight.aboutToBeDeleted();
        this.__isScroll.aboutToBeDeleted();
        this.__isUp.aboutToBeDeleted();
        this.__isShow.aboutToBeDeleted();
        this.__listItem.aboutToBeDeleted();
        this.__firstListItemHeight.aboutToBeDeleted();
        this.__secondListItemHeight.aboutToBeDeleted();
        this.__itemNumber.aboutToBeDeleted();
        this.__positionY.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // Height of the bottom navigation bar.
    private __bottomAvoidHeight: ObservedPropertySimplePU<number>;
    get bottomAvoidHeight() {
        return this.__bottomAvoidHeight.get();
    }
    set bottomAvoidHeight(newValue: number) {
        this.__bottomAvoidHeight.set(newValue);
    }
    // List height.
    private __listHeight: ObservedPropertySimplePU<number>;
    get listHeight() {
        return this.__listHeight.get();
    }
    set listHeight(newValue: number) {
        this.__listHeight.set(newValue);
    }
    // Window height.
    private __windowHeight: ObservedPropertySimplePU<number>;
    get windowHeight() {
        return this.__windowHeight.get();
    }
    set windowHeight(newValue: number) {
        this.__windowHeight.set(newValue);
    }
    // Height of the status bar at the top.
    private __statusBarHeight: ObservedPropertySimplePU<number>;
    get statusBarHeight() {
        return this.__statusBarHeight.get();
    }
    set statusBarHeight(newValue: number) {
        this.__statusBarHeight.set(newValue);
    }
    // Whether the list can be scrolled.
    private __isScroll: ObservedPropertySimplePU<boolean>;
    get isScroll() {
        return this.__isScroll.get();
    }
    set isScroll(newValue: boolean) {
        this.__isScroll.set(newValue);
    }
    // Whether the list is sliding up.
    private __isUp: ObservedPropertySimplePU<boolean>;
    get isUp() {
        return this.__isUp.get();
    }
    set isUp(newValue: boolean) {
        this.__isUp.set(newValue);
    }
    // Whether to display the top masked navigation bar area
    private __isShow: ObservedPropertySimplePU<boolean>;
    get isShow() {
        return this.__isShow.get();
    }
    set isShow(newValue: boolean) {
        this.__isShow.set(newValue);
    }
    // List content items.
    private __listItem: ObservedPropertyObjectPU<SettingItem[]>;
    get listItem() {
        return this.__listItem.get();
    }
    set listItem(newValue: SettingItem[]) {
        this.__listItem.set(newValue);
    }
    // height of the first item in the list.
    private __firstListItemHeight: ObservedPropertySimplePU<number>;
    get firstListItemHeight() {
        return this.__firstListItemHeight.get();
    }
    set firstListItemHeight(newValue: number) {
        this.__firstListItemHeight.set(newValue);
    }
    // Height of the second item in the list.
    private __secondListItemHeight: ObservedPropertySimplePU<number>;
    get secondListItemHeight() {
        return this.__secondListItemHeight.get();
    }
    set secondListItemHeight(newValue: number) {
        this.__secondListItemHeight.set(newValue);
    }
    // Display the first item in the list.
    private __itemNumber: ObservedPropertySimplePU<number>;
    get itemNumber() {
        return this.__itemNumber.get();
    }
    set itemNumber(newValue: number) {
        this.__itemNumber.set(newValue);
    }
    // Y-axis offset of the list.
    private __positionY: ObservedPropertySimplePU<number>;
    get positionY() {
        return this.__positionY.get();
    }
    set positionY(newValue: number) {
        this.__positionY.set(newValue);
    }
    // list Start vertical coordinate of the touch event.
    private yStart: number;
    // Window management model.
    private windowModel: WindowModel;
    // list scroll controller.
    private listScroller;
    aboutToAppear(): void {
        // list scroll controller.
        let windowStage: window.WindowStage = GlobalContext.getContext().getObject('windowStage') as window.WindowStage;
        // The following logic cannot be performed without a windowStage.
        if (!windowStage) {
            Logger.warn('windowStage init error!');
            return;
        }
        this.windowModel.setWindowStage(windowStage);
        // Set Immersive Mode.
        this.windowModel.setMainWindowImmersive(true);
        // Obtains the height of the top navigation bar.
        this.windowModel.getStatusBarHeight((statusBarHeight) => {
            this.statusBarHeight = this.getUIContext().px2vp(statusBarHeight);
        });
        // Obtains the height of the bottom navigation bar.
        this.windowModel.getBottomAvoidHeight((bottomAvoidHeight) => {
            this.bottomAvoidHeight = this.getUIContext().px2vp(bottomAvoidHeight) / 2;
        });
        // Obtains the window height.
        this.windowModel.getWindowHeight().then(s => {
            this.windowHeight = s;
        });
        // Initial display height of the list at the bottom.
        this.listHeight = this.firstListItemHeight;
    }
    aboutToDisappear(): void {
        // Turn off immersive mode.
        this.windowModel.setMainWindowImmersive(false);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.width(CommonConstants.FULL_PERCENT);
            Stack.height(CommonConstants.FULL_PERCENT);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create(true);
            __Common__.id('map');
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Image map.
                    ImageMapView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/BottomDrawerSlideCase.ets", line: 101, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ImageMapView" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.alignRules(CommonConstants.HOME_TOP_ALIGN_RULES);
            __Common__.id('title_bar');
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Title bar at the top of the map.
                    HomeTop(this, { statusBarHeight: this.__statusBarHeight }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/BottomDrawerSlideCase.ets", line: 105, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            statusBarHeight: this.statusBarHeight
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "HomeTop" });
        }
        __Common__.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Title bar at the top of the list.
                    ItemHead(this, { headerContent: { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/BottomDrawerSlideCase.ets", line: 110, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            headerContent: { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        headerContent: { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                }
            }, { name: "ItemHead" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Bottom Variable Staging Sliding List.
            List.create({ scroller: this.listScroller });
            Context.animation({
                duration: CommonConstants.PANEL_ANIMATION_DURATION,
                curve: Curve.Friction,
                iterations: CommonConstants.ANIMATION_PLAY_TIMES,
                playMode: PlayMode.Normal
            });
            // Bottom Variable Staging Sliding List.
            List.id('scrollPart');
            // Bottom Variable Staging Sliding List.
            List.alignRules(CommonConstants.LIST_ALIGN_RULES);
            // Bottom Variable Staging Sliding List.
            List.enableScrollInteraction(this.isScroll);
            // Bottom Variable Staging Sliding List.
            List.width(CommonConstants.FULL_PERCENT);
            // Bottom Variable Staging Sliding List.
            List.edgeEffect(EdgeEffect.None);
            // Bottom Variable Staging Sliding List.
            List.scrollBar(BarState.Off);
            // Bottom Variable Staging Sliding List.
            List.sticky(StickyStyle.None);
            // Bottom Variable Staging Sliding List.
            List.backgroundColor(Color.White);
            // Bottom Variable Staging Sliding List.
            List.height(this.listHeight);
            // Bottom Variable Staging Sliding List.
            List.offset({ y: this.positionY });
            // Bottom Variable Staging Sliding List.
            List.borderRadius(this.isShow ? { "id": 16777237, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" } : { "id": 16777221, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
            Context.animation(null);
            // Bottom Variable Staging Sliding List.
            List.onReachStart(() => {
                this.itemNumber = 0;
            });
            // Bottom Variable Staging Sliding List.
            List.onScrollIndex((start: number) => {
                this.itemNumber = start;
            });
            // Bottom Variable Staging Sliding List.
            List.onTouch((event: TouchEvent) => {
                switch (event.type) {
                    // Finger press touch screen.
                    case TouchType.Down: {
                        this.yStart = event.touches[0].y;
                        break;
                    }
                    // Swipe your finger on the screen.
                    case TouchType.Move: {
                        // vertical coordinate of the finger leaving the screen.
                        const yEnd = event.touches[0].y;
                        //vertical coordinate of the finger leaving the screen.
                        const height = Math.abs(Math.abs(yEnd) - Math.abs(this.yStart));
                        // Sets the maximum height of the list.
                        const maxHeight = this.windowHeight - this.statusBarHeight - CommonConstants.LIST_HEADER_HEIGHT;
                        // Determine to swipe up, and the list slides with the gesture.
                        if (yEnd <= this.yStart) {
                            this.isUp = true;
                            const temHeight = this.listHeight + height;
                            if (temHeight >= maxHeight) {
                                this.isScroll = true;
                                this.isShow = true;
                                this.listHeight = maxHeight;
                            }
                            else {
                                this.isScroll = false;
                                this.listHeight = temHeight;
                            }
                        }
                        // Decide to slide down, and the list slides along with the gesture.
                        else {
                            this.isUp = false;
                            const temHeight = this.listHeight - height;
                            if (this.itemNumber === 0) {
                                if (temHeight < CommonConstants.FIRST_LIST_ITEM_HEIGHT) {
                                    this.listHeight = CommonConstants.FIRST_LIST_ITEM_HEIGHT;
                                }
                                else {
                                    // The list height changes with the sliding height.
                                    this.listHeight = temHeight;
                                }
                            }
                            else {
                                this.listHeight = maxHeight;
                            }
                        }
                        this.yStart = event.touches[0].y;
                        break;
                    }
                    // Fingers off the screen
                    case TouchType.Up: {
                        // The list height changes with the sliding height.
                        let maxHeight = this.windowHeight - this.statusBarHeight - CommonConstants.LIST_HEADER_HEIGHT;
                        // Phased sliding when sliding up the list.
                        if (this.isUp) {
                            // phased sliding.
                            // When the list height is between the first item and the second item, slide to the second item.
                            if (this.listHeight > this.firstListItemHeight &&
                                this.listHeight <= this.firstListItemHeight + this.bottomAvoidHeight + this.secondListItemHeight) {
                                this.listHeight = +this.firstListItemHeight + this.secondListItemHeight;
                                this.isScroll = false;
                                this.isShow = false;
                                return;
                            }
                            // phased sliding.
                            // When the list height is between the top and the second item, slide to the top of the page.
                            else if (this.firstListItemHeight + this.bottomAvoidHeight + this.secondListItemHeight <
                                this.listHeight && this.listHeight <= maxHeight) {
                                this.listHeight = maxHeight;
                                this.isScroll = true;
                                this.isShow = true;
                                return;
                            }
                        }
                        // Sliding in stages when the list slides down.
                        else {
                            if (this.listHeight === maxHeight) {
                                this.isShow = true;
                                this.listHeight = maxHeight;
                            }
                            // Sliding in stages.
                            // When the list height is between the top and the second item, slide to the second item.
                            else if (this.listHeight >= this.firstListItemHeight + this.secondListItemHeight &&
                                this.listHeight <= maxHeight) {
                                this.listHeight = this.firstListItemHeight + this.secondListItemHeight;
                                this.isShow = false;
                                this.isScroll = false;
                                return;
                            }
                            // Sliding by stage.When the list height is between the first item and the second item,
                            // the list slides to the first item.
                            else if (this.listHeight <= this.firstListItemHeight + this.secondListItemHeight +
                                this.bottomAvoidHeight || this.listHeight <= this.firstListItemHeight) {
                                this.listHeight = this.firstListItemHeight;
                                this.isShow = false;
                                this.isScroll = false;
                                return;
                            }
                        }
                    }
                }
            });
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.width(CommonConstants.FULL_PERCENT);
                ListItem.height(this.firstListItemHeight);
                ListItem.backgroundColor(Color.White);
                ListItem.borderRadius({
                    topLeft: { "id": 16777223, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                    topRight: { "id": 16777223, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                });
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height(CommonConstants.SLIDE_DOWN_LIST_HEIGHT);
                    Column.justifyContent(FlexAlign.Center);
                    Column.borderRadius({ "id": 16777220, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Column.margin({
                        left: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                        right: { "id": 16777231, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                    Column.shadow({
                        radius: { "id": 16777222, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                        color: { "id": 16777253, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                        offsetY: { "id": 16777238, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.height({ "id": 16777228, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.width({ "id": 16777235, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.height({ "id": 16777235, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.borderRadius({ "id": 16777224, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.backgroundColor({ "id": 16777251, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.margin({
                        left: { "id": 16777230, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                        right: { "id": 16777230, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create();
                    Text.fontSize({ "id": 16777225, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                }, Text);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Span.create({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Span.fontColor({ "id": 16777257, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                }, Span);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Span.create({ "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                }, Span);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Image.width({ "id": 16777229, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                }, Image);
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.height({ "id": 16777228, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.width({ "id": 16777235, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.height({ "id": 16777235, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.borderRadius({ "id": 16777224, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.backgroundColor({ "id": 16777252, "type": 10001, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Blank.margin({
                        left: { "id": 16777230, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" },
                        right: { "id": 16777230, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" }
                    });
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777243, "type": 10003, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Text.fontSize({ "id": 16777227, "type": 10007, params: [], "bundleName": "com.example.bottomdrawerslidecase", "moduleName": "entry" });
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
                Row.pop();
                Column.pop();
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.backgroundColor(Color.White);
                        ListItem.width(CommonConstants.FULL_PERCENT);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new SettingItemView(this, { bottomAvoidHeight: this.__bottomAvoidHeight }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/BottomDrawerSlideCase.ets", line: 180, col: 15 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            bottomAvoidHeight: this.bottomAvoidHeight
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "SettingItemView" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.listItem, forEachItemGenFunction, (item: SettingItem, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        // Bottom Variable Staging Sliding List.
        List.pop();
        RelativeContainer.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // When the list slides to the third stage and then swipes up, the top navigation bar appears in the masked area.
                    StatusHead(this, {
                        statusBarHeight: this.__statusBarHeight,
                        topHeaderHeight: CommonConstants.PAGE_HEADER_HEIGHT,
                        isShow: this.__isShow
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/BottomDrawerSlideCase.ets", line: 311, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            statusBarHeight: this.statusBarHeight,
                            topHeaderHeight: CommonConstants.PAGE_HEADER_HEIGHT,
                            isShow: this.isShow
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "StatusHead" });
        }
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "BottomDrawerSlideCase";
    }
}
registerNamedRoute(() => new BottomDrawerSlideCase(undefined, {}), "", { bundleName: "com.example.bottomdrawerslidecase", moduleName: "entry", pagePath: "pages/BottomDrawerSlideCase", pageFullPath: "entry/src/main/ets/pages/BottomDrawerSlideCase", integratedHsp: "false" });
