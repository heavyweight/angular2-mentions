/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './app.component.css.shim.ngstyle';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../mention/mention.directive.ngfactory';
import * as import11 from './tinymce.component';
import * as import12 from './tinymce.component.ngfactory';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '@angular/core/src/zone/ng_zone';
import * as import16 from '../mention/mention.directive';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.AppComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-root',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent();
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('app-root',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [import8.styles];
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  /*private*/ _vc_15:import9.ViewContainer;
  _MentionDirective_15_5:import10.Wrapper_MentionDirective;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  /*private*/ _vc_20:import9.ViewContainer;
  _MentionDirective_20_5:import10.Wrapper_MentionDirective;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  /*private*/ _vc_25:import9.ViewContainer;
  _MentionDirective_25_5:import10.Wrapper_MentionDirective;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  compView_30:import1.AppView<import11.TinyMCE>;
  _TinyMCE_30_3:import12.Wrapper_TinyMCE;
  _text_31:any;
  _el_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _el_38:any;
  _el_39:any;
  _text_40:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Angular 2 Mentions',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Simple Angular2 mentions inspired by ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'a',new import3.InlineArray2(2,'href','http://jeff-collins.github.io/ment.io/#/'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Ment.io',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'.',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,parentRenderNode,'p',new import3.InlineArray2(2,'style','color:grey'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Supports auto-complete for mentions in text input fields, text areas,\nand content editable fields. Try entering some @names below.',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,parentRenderNode,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Minimal',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,parentRenderNode,'input',new import3.InlineArray4(4,'class','form-control','type','text'),(null as any));
    this._vc_15 = new import9.ViewContainer(15,(null as any),this,this._el_15);
    this._MentionDirective_15_5 = new import10.Wrapper_MentionDirective(new import13.ElementRef(this._el_15),this.parentView.injectorGet(import14.ComponentFactoryResolver,this.parentIndex),this._vc_15.vcRef);
    this._text_16 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,parentRenderNode,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'Textarea',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,parentRenderNode,'textarea',new import3.InlineArray8(6,'class','form-control','cols','60','rows','4'),(null as any));
    this._vc_20 = new import9.ViewContainer(20,(null as any),this,this._el_20);
    this._MentionDirective_20_5 = new import10.Wrapper_MentionDirective(new import13.ElementRef(this._el_20),this.parentView.injectorGet(import14.ComponentFactoryResolver,this.parentIndex),this._vc_20.vcRef);
    this._text_21 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,parentRenderNode,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'Content Editable',(null as any));
    this._text_24 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray8(6,'class','form-control','contenteditable','true','style','border:1px lightgrey solid;min-height:88px'),(null as any));
    this._vc_25 = new import9.ViewContainer(25,(null as any),this,this._el_25);
    this._MentionDirective_25_5 = new import10.Wrapper_MentionDirective(new import13.ElementRef(this._el_25),this.parentView.injectorGet(import14.ComponentFactoryResolver,this.parentIndex),this._vc_25.vcRef);
    this._text_26 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,parentRenderNode,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'Embedded Editor',(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,parentRenderNode,'tinymce',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_30 = new import12.View_TinyMCE0(this.viewUtils,this,30,this._el_30);
    this._TinyMCE_30_3 = new import12.Wrapper_TinyMCE(new import13.ElementRef(this._el_30),this.parentView.injectorGet(import15.NgZone,this.parentIndex));
    this.compView_30.create(this._TinyMCE_30_3.context);
    this._text_31 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,parentRenderNode,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,parentRenderNode,'p',new import3.InlineArray2(2,'style','color:grey'),(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'angular2-mentions on ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_33,'a',new import3.InlineArray2(2,'href',''),(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'Github',(null as any));
    this._text_37 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,parentRenderNode,'a',new import3.InlineArray2(2,'href','https://github.com/dmacfarlane/angular2-mentions'),(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_38,'img',new import3.InlineArray8(8,'alt','Fork me on GitHub','data-canonical-src','https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png','src','https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67','style','position: absolute; top: 0; right: 0; border: 0;'),(null as any));
    this._text_40 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_15,new import3.InlineArray4(4,'keydown',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_15));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_20,new import3.InlineArray4(4,'keydown',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_20));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_25,new import3.InlineArray4(4,'keydown',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_25));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._el_38,
      this._el_39,
      this._text_40
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.MentionDirective) && (15 === requestNodeIndex))) { return this._MentionDirective_15_5.context; }
    if (((token === import16.MentionDirective) && (20 === requestNodeIndex))) { return this._MentionDirective_20_5.context; }
    if (((token === import16.MentionDirective) && (25 === requestNodeIndex))) { return this._MentionDirective_25_5.context; }
    if (((token === import11.TinyMCE) && (30 === requestNodeIndex))) { return this._TinyMCE_30_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_15_0_0:any = this.context.items;
    this._MentionDirective_15_5.check_mention(currVal_15_0_0,throwOnChange,false);
    this._MentionDirective_15_5.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_20_0_0:any = this.context.items;
    this._MentionDirective_20_5.check_mention(currVal_20_0_0,throwOnChange,false);
    this._MentionDirective_20_5.ngDoCheck(this,this._el_20,throwOnChange);
    const currVal_25_0_0:any = this.context.items;
    this._MentionDirective_25_5.check_mention(currVal_25_0_0,throwOnChange,false);
    this._MentionDirective_25_5.ngDoCheck(this,this._el_25,throwOnChange);
    this._TinyMCE_30_3.ngDoCheck(this,this._el_30,throwOnChange);
    this._vc_15.detectChangesInNestedViews(throwOnChange);
    this._vc_20.detectChangesInNestedViews(throwOnChange);
    this._vc_25.detectChangesInNestedViews(throwOnChange);
    this.compView_30.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._TinyMCE_30_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._vc_15.destroyNestedViews();
    this._vc_20.destroyNestedViews();
    this._vc_25.destroyNestedViews();
    this.compView_30.destroy();
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MentionDirective_15_5.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_20(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MentionDirective_20_5.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_25(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MentionDirective_25_5.handleEvent(eventName,$event) && result);
    return result;
  }
}