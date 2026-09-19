
// ============================================================
// Runtime engine - vygenerovano z Claude Design (.dc.html) exportu.
// Cileny binding (data-b) drzi stav <input> poli pri prekreslovani.
// ============================================================
(function () {
  "use strict";

  var BINDINGS = [{"id": 0, "attrs": [{"name": "style", "tpl": "width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: {{accent}}; display: flex; align-items: center; justify-content: center;"}], "text": null}, {"id": 2, "attrs": [{"name": "class", "tpl": "cam {{flyCls}}"}, {"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; transform: scale({{zoomS}}) translate({{zoomTX}}px, {{zoomTY}}px); transform-origin: {{zoomX}}px {{zoomY}}px; pointer-events: {{mapPe}}; transition: transform 1250ms cubic-bezier(0.62, 0, 0.2, 1);"}], "text": null}, {"id": 3, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; pointer-events: none; background: #0A2029; opacity: {{veil}}; transition: opacity 700ms cubic-bezier(0.4, 0.02, 0.18, 1);"}], "text": null}, {"id": 4, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; clip-path: polygon(159px 433px, 304px 406px, 444px 455px, 534px 465px, 574px 493px, 624px 553px, 664px 673px, 274px 683px, 189px 643px, 149px 543px); opacity: {{op.yard}}; transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 5, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; pointer-events: none; opacity: {{op.yard}}; transition: opacity 300ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 6, "attrs": [{"name": "style", "tpl": "stroke-width: {{sw.yard}}px; transition: stroke-width 560ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 7, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; clip-path: polygon(0px 436px, 88px 446px, 86px 552px, 40px 570px, 0px 575px); opacity: {{op.office}}; transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 8, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; pointer-events: none; opacity: {{op.office}}; transition: opacity 300ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 9, "attrs": [{"name": "style", "tpl": "stroke-width: {{sw.office}}px; transition: stroke-width 560ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 10, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; clip-path: polygon(18px 280px, 21px 356px, 28px 366px, 35px 366px, 106px 405px, 110px 410px, 140px 424px, 144px 429px, 149px 429px, 152px 436px, 174px 437px, 302px 402px, 322px 240px, 196px 248px, 97px 236px, 60px 270px); opacity: {{op.west}}; transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 11, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; pointer-events: none; opacity: {{op.west}}; transition: opacity 300ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 12, "attrs": [{"name": "style", "tpl": "stroke-width: {{sw.west}}px; transition: stroke-width 560ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 13, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; clip-path: polygon(322px 240px, 400px 246px, 480px 262px, 560px 283px, 608px 293px, 628px 318px, 620px 462px, 565px 493px, 557px 495px, 553px 480px, 547px 476px, 536px 476px, 532px 464px, 500px 466px, 469px 458px, 465px 453px, 438px 457px, 422px 448px, 413px 447px, 412px 444px, 390px 438px, 389px 435px, 382px 435px, 309px 404px, 302px 404px); opacity: {{op.hall}}; transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 14, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; pointer-events: none; opacity: {{op.hall}}; transition: opacity 300ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 15, "attrs": [{"name": "style", "tpl": "stroke-width: {{sw.hall}}px; transition: stroke-width 560ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 16, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; clip-path: polygon(626px 340px, 700px 326px, 740px 317px, 740px 518px, 648px 516px, 600px 498px, 596px 448px, 626px 440px); opacity: {{op.annex}}; transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 17, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; pointer-events: none; opacity: {{op.annex}}; transition: opacity 300ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 18, "attrs": [{"name": "style", "tpl": "stroke-width: {{sw.annex}}px; transition: stroke-width 560ms cubic-bezier(0.22, 1, 0.36, 1);"}], "text": null}, {"id": 24, "attrs": [{"name": "class", "tpl": "{{halo.yard}}"}, {"name": "style", "tpl": "position: absolute; left: -21px; top: -21px; width: 42px; height: 42px; border-radius: 50%; border: 2px solid {{accent}}; opacity: 0;"}], "text": null}, {"id": 25, "attrs": [{"name": "style", "tpl": "position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; border-radius: 50%; box-sizing: border-box; border: 3px solid #ffffff; background: {{pin.yard}}; box-shadow: 0 2px 6px rgba(9, 38, 48, 0.45); transition: background 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1); transform: scale({{pinS.yard}});"}], "text": null}, {"id": 26, "attrs": [{"name": "class", "tpl": "{{halo.office}}"}, {"name": "style", "tpl": "position: absolute; left: -21px; top: -21px; width: 42px; height: 42px; border-radius: 50%; border: 2px solid {{accent}}; opacity: 0;"}], "text": null}, {"id": 27, "attrs": [{"name": "style", "tpl": "position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; border-radius: 50%; box-sizing: border-box; border: 3px solid #ffffff; background: {{pin.office}}; box-shadow: 0 2px 6px rgba(9, 38, 48, 0.45); transition: background 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1); transform: scale({{pinS.office}});"}], "text": null}, {"id": 28, "attrs": [{"name": "class", "tpl": "{{halo.west}}"}, {"name": "style", "tpl": "position: absolute; left: -21px; top: -21px; width: 42px; height: 42px; border-radius: 50%; border: 2px solid {{accent}}; opacity: 0;"}], "text": null}, {"id": 29, "attrs": [{"name": "style", "tpl": "position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; border-radius: 50%; box-sizing: border-box; border: 3px solid #ffffff; background: {{pin.west}}; box-shadow: 0 2px 6px rgba(9, 38, 48, 0.45); transition: background 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1); transform: scale({{pinS.west}});"}], "text": null}, {"id": 30, "attrs": [{"name": "class", "tpl": "{{halo.hall}}"}, {"name": "style", "tpl": "position: absolute; left: -21px; top: -21px; width: 42px; height: 42px; border-radius: 50%; border: 2px solid {{accent}}; opacity: 0;"}], "text": null}, {"id": 31, "attrs": [{"name": "style", "tpl": "position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; border-radius: 50%; box-sizing: border-box; border: 3px solid #ffffff; background: {{pin.hall}}; box-shadow: 0 2px 6px rgba(9, 38, 48, 0.45); transition: background 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1); transform: scale({{pinS.hall}});"}], "text": null}, {"id": 32, "attrs": [{"name": "class", "tpl": "{{halo.annex}}"}, {"name": "style", "tpl": "position: absolute; left: -21px; top: -21px; width: 42px; height: 42px; border-radius: 50%; border: 2px solid {{accent}}; opacity: 0;"}], "text": null}, {"id": 33, "attrs": [{"name": "style", "tpl": "position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; border-radius: 50%; box-sizing: border-box; border: 3px solid #ffffff; background: {{pin.annex}}; box-shadow: 0 2px 6px rgba(9, 38, 48, 0.45); transition: background 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1); transform: scale({{pinS.annex}});"}], "text": null}, {"id": 34, "attrs": [{"name": "style", "tpl": "position: absolute; left: 481px; top: 44px; width: 190px; height: 190px; border-radius: 50%; background: radial-gradient(circle at 32% 26%, color-mix(in srgb, {{accent}} 100%, #FFFFFF 32%), {{accent}} 62%); border: 3px solid rgba(255, 255, 255, 0.55); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; text-align: center; pointer-events: none; box-shadow: 0 16px 34px rgba(7, 120, 154, 0.4), inset 0 -10px 20px rgba(6, 43, 54, 0.1); opacity: {{chromeOp}}; transition: opacity 240ms ease; animation: {{badgeAnim}} 380ms cubic-bezier(0.34, 1.4, 0.64, 1);"}], "text": null}, {"id": 35, "attrs": [], "text": "{{badge.name}}"}, {"id": 36, "attrs": [], "text": "{{badge.price}}"}, {"id": 37, "attrs": [{"name": "style", "tpl": "position: absolute; left: 24px; bottom: 24px; display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-radius: 999px; background: rgba(9, 32, 41, 0.82); opacity: {{hintOp}}; transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1); pointer-events: none;"}], "text": null}, {"id": 38, "attrs": [{"name": "style", "tpl": "position: absolute; right: 24px; bottom: 24px; display: flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 999px; border: 0; background: #0F2A33; color: #FFFFFF; font-family: 'Geist', system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; opacity: {{chromeOp}}; pointer-events: {{chromePe}}; box-shadow: 0 8px 22px rgba(9, 38, 48, 0.4); transition: opacity 240ms ease, background 180ms ease;"}], "text": null}, {"id": 39, "attrs": [], "text": "{{insideTarget}}"}, {"id": 40, "attrs": [{"name": "aria-hidden", "tpl": "{{insideHidden}}"}, {"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; opacity: {{inOp}}; transform: translateY({{inShiftY}}px) scale({{inScale}}); filter: blur({{inBlur}}px); pointer-events: {{inPe}}; transition: opacity 520ms cubic-bezier(0.34, 0, 0.16, 1) {{inDelay}}, transform 980ms cubic-bezier(0.34, 0, 0.16, 1) {{inDelay}}, filter 680ms cubic-bezier(0.34, 0, 0.16, 1) {{inDelay}};"}], "text": null}, {"id": 41, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; display: block; opacity: {{scene.schemaOp}}; transition: opacity 300ms ease;"}], "text": null}, {"id": 42, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; display: block; opacity: {{scene.gateOp}}; transition: opacity 300ms ease;"}], "text": null}, {"id": 43, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; display: block; opacity: {{scene.skyOp}}; transition: opacity 300ms ease;"}], "text": null}, {"id": 44, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; overflow: hidden; opacity: {{scene.panoOp}}; pointer-events: {{panoPe}}; cursor: {{panCursor}}; touch-action: none; transition: opacity 300ms ease;"}], "text": null}, {"id": 45, "attrs": [{"name": "style", "tpl": "position: absolute; left: 0; top: 0; width: 740px; height: 690px; transform: translate3d({{panShift}}px, {{panShiftY}}px, 0); will-change: transform; backface-visibility: hidden;"}], "text": null}, {"id": 46, "attrs": [{"name": "class", "tpl": "pano-img pano-spin {{spinPause}}"}], "text": null}, {"id": 47, "attrs": [{"name": "style", "tpl": "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 999px; background: rgba(6, 30, 38, 0.72); opacity: {{panoHintOp}}; pointer-events: none; transition: opacity 420ms ease;"}], "text": null}, {"id": 48, "attrs": [{"name": "style", "tpl": "display: {{ico.warehouse}}; line-height: 0;"}], "text": null}, {"id": 49, "attrs": [{"name": "stroke", "tpl": "{{accent}}"}], "text": null}, {"id": 50, "attrs": [{"name": "style", "tpl": "display: {{ico.yard}}; line-height: 0;"}], "text": null}, {"id": 51, "attrs": [{"name": "stroke", "tpl": "{{accent}}"}], "text": null}, {"id": 52, "attrs": [{"name": "style", "tpl": "display: {{ico.office}}; line-height: 0;"}], "text": null}, {"id": 53, "attrs": [{"name": "stroke", "tpl": "{{accent}}"}], "text": null}, {"id": 54, "attrs": [], "text": "{{viewed.name}} · pohled dovnitř"}, {"id": 56, "attrs": [{"name": "class", "tpl": "{{slideCls}}"}], "text": null}, {"id": 57, "attrs": [], "text": "{{viewed.area}}"}, {"id": 58, "attrs": [], "text": "{{viewed.height}}"}, {"id": 59, "attrs": [], "text": "{{viewed.gate}}"}, {"id": 60, "attrs": [], "text": "{{viewed.floor}}"}, {"id": 61, "attrs": [{"name": "style", "tpl": "flex-shrink: 0; padding: 12px 20px; border-radius: 12px; background: {{accent}}; color: #062B36; font-size: 14px; font-weight: 700; text-decoration: none; white-space: nowrap;"}], "text": null}, {"id": 63, "attrs": [{"name": "style", "tpl": "flex-grow: 1; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: {{listLabelFg}}; white-space: nowrap;"}], "text": "{{listLabel}}"}, {"id": 64, "attrs": [{"name": "style", "tpl": "display: {{resetShow}}; align-items: center; padding: 8px 8px; border-radius: 8px; border: 1px solid #DDE7EC; background: #FFFFFF; color: #54707E; font-family: 'Geist', system-ui, sans-serif; font-size: 11px; font-weight: 700; cursor: pointer;"}], "text": null}, {"id": 65, "attrs": [{"name": "aria-pressed", "tpl": "{{modeTotalOn}}"}, {"name": "style", "tpl": "padding: 8px 12px; border-radius: 8px; border: 1px solid {{modeTotalBc}}; background: {{modeTotalBg}}; color: {{modeTotalFg}}; font-family: 'Geist', system-ui, sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: background 180ms ease, border-color 180ms ease;"}], "text": null}, {"id": 66, "attrs": [{"name": "aria-pressed", "tpl": "{{modePerOn}}"}, {"name": "style", "tpl": "padding: 8px 12px; border-radius: 8px; border: 1px solid {{modePerBc}}; background: {{modePerBg}}; color: {{modePerFg}}; font-family: 'Geist', system-ui, sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: background 180ms ease, border-color 180ms ease;"}], "text": null}, {"id": 67, "attrs": [], "text": "{{chosen.line}}"}, {"id": 68, "attrs": [], "text": "{{chosen.name}}"}, {"id": 69, "attrs": [], "text": "{{chosen.area}} · {{chosen.price}} Kč měsíčně"}, {"id": 70, "attrs": [{"name": "style", "tpl": "margin-top: 4px; font-size: 13px; font-weight: 600; color: {{accent}}; text-decoration: none;"}], "text": null}, {"id": 71, "attrs": [], "text": "{{spec.unit}}"}, {"id": 72, "attrs": [{"name": "style", "tpl": "position: absolute; left: 24px; bottom: 24px; display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 12px; background: {{accent}}; color: #062B36; font-size: 13px; font-weight: 700; text-decoration: none;"}], "text": null}, {"id": 73, "attrs": [{"name": "style", "tpl": "font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{accent}};"}], "text": null}, {"id": 74, "attrs": [{"name": "style", "tpl": "padding: 14px 24px; border-radius: 12px; background: {{accent}}; color: #062B36; font-size: 15px; font-weight: 700; text-decoration: none; white-space: nowrap;"}], "text": null}, {"id": 75, "attrs": [{"name": "style", "tpl": "width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: {{accent}}; display: flex; align-items: center; justify-content: center;"}], "text": null}, {"id": 76, "attrs": [], "text": " · Čas · {{dayLabel}}"}, {"id": 77, "attrs": [{"name": "style", "tpl": "display: flex; flex-direction: column; gap: 14px; padding: 16px; border-radius: 16px; background: {{barBg}}; border: 1px solid {{barBc}}; transition: background 260ms ease, border-color 260ms ease;"}], "text": null}, {"id": 78, "attrs": [{"name": "style", "tpl": "width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: {{barDot}}; display: flex; align-items: center; justify-content: center;"}], "text": null}, {"id": 79, "attrs": [{"name": "style", "tpl": "display: {{barCheck}};"}], "text": null}, {"id": 80, "attrs": [{"name": "style", "tpl": "flex-grow: 1; font-size: 14px; line-height: 1.4; font-weight: 600; color: {{barFg}};"}], "text": "{{summary}}"}, {"id": 81, "attrs": [{"name": "disabled", "tpl": "{{cantBook}}"}, {"name": "style", "tpl": "box-sizing: border-box; width: 100%; padding: 13px 24px; border-radius: 12px; border: 0; background: {{bookBg}}; color: {{bookFg}}; font-family: 'Geist', system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: {{bookCursor}}; transition: background 220ms ease;"}], "text": null}, {"id": 82, "attrs": [{"name": "style", "tpl": "width: 52px; height: 52px; border-radius: 50%; background: {{accent}}; display: flex; align-items: center; justify-content: center;"}], "text": null}, {"id": 83, "attrs": [], "text": "{{summary}}"}];
  var EVENTS = [{"id": 1, "event": "mouseleave", "path": "clearHover"}, {"id": 19, "event": "click", "path": "h.yard.pick"}, {"id": 19, "event": "mouseenter", "path": "h.yard.enter"}, {"id": 19, "event": "focus", "path": "h.yard.enter"}, {"id": 20, "event": "click", "path": "h.office.pick"}, {"id": 20, "event": "mouseenter", "path": "h.office.enter"}, {"id": 20, "event": "focus", "path": "h.office.enter"}, {"id": 21, "event": "click", "path": "h.west.pick"}, {"id": 21, "event": "mouseenter", "path": "h.west.enter"}, {"id": 21, "event": "focus", "path": "h.west.enter"}, {"id": 22, "event": "click", "path": "h.hall.pick"}, {"id": 22, "event": "mouseenter", "path": "h.hall.enter"}, {"id": 22, "event": "focus", "path": "h.hall.enter"}, {"id": 23, "event": "click", "path": "h.annex.pick"}, {"id": 23, "event": "mouseenter", "path": "h.annex.enter"}, {"id": 23, "event": "focus", "path": "h.annex.enter"}, {"id": 38, "event": "click", "path": "enterInside"}, {"id": 38, "event": "mouseenter", "path": "clearHover"}, {"id": 38, "event": "focus", "path": "clearHover"}, {"id": 44, "event": "pointerdown", "path": "panDown"}, {"id": 44, "event": "pointermove", "path": "panMove"}, {"id": 44, "event": "pointerup", "path": "panUp"}, {"id": 44, "event": "pointercancel", "path": "panUp"}, {"id": 44, "event": "keydown", "path": "panKey"}, {"id": 55, "event": "click", "path": "exitInside"}, {"id": 62, "event": "mouseleave", "path": "clearHover"}, {"id": 64, "event": "click", "path": "clearSel"}, {"id": 65, "event": "click", "path": "setModeTotal"}, {"id": 66, "event": "click", "path": "setModePer"}, {"id": 81, "event": "click", "path": "book"}, {"id": 84, "event": "click", "path": "reset"}];
  var TEMPLATES = {"rows": {"kind": "for", "html": "<button type=\"button\" aria-label=\"{{aria}}\" aria-pressed=\"{{pressed}}\"    style=\"display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; padding: 12px 16px; border-radius: 16px; border: 1px solid {{bc}}; background: {{bg}}; cursor: pointer; text-align: left; font-family: 'Geist', system-ui, sans-serif; box-shadow: {{shadow}}; transition: background 260ms cubic-bezier(0.22, 1, 0.36, 1), border-color 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);\" data-idx=\"{{__idx}}\">\n<span aria-hidden=\"true\" style=\"width: 19px; height: 19px; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; background: {{boxBg}}; border: 2px solid {{boxBc}}; display: flex; align-items: center; justify-content: center; transition: background 220ms ease, border-color 220ms ease;\">\n<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#062B36\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"display: {{check}};\"><path d=\"m5 12.5 4.5 4.5L19 7.5\"></path></svg>\n</span>\n<span style=\"display: flex; flex-direction: column; gap: 4px; flex-grow: 1; min-width: 0;\">\n<span style=\"font-size: 15px; font-weight: 600; color: #0F2A33;\">{{name}}</span>\n<span style=\"display: flex; align-items: center; gap: 8px;\">\n<span style=\"font-size: 12px; font-weight: 500; color: #54707E; white-space: nowrap;\">{{area}}</span>\n<span style=\"padding: 2px 8px; border-radius: 999px; background: {{availBg}}; color: {{availFg}}; font-size: 11px; font-weight: 700; white-space: nowrap;\">{{avail}}</span>\n</span>\n</span>\n<span style=\"font-size: 14px; font-weight: 700; color: #07789A; white-space: nowrap;\">{{price}}</span>\n</button>", "path": "rows", "itemEvents": [{"event": "click", "field": "pick"}, {"event": "mouseenter", "field": "enter"}, {"event": "focus", "field": "enter"}]}, "spec_rows": {"kind": "for", "html": "<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 16px; border-bottom: 1px solid #EEF3F6;\" data-idx=\"{{__idx}}\">\n<span style=\"font-size: 13px; font-weight: 500; color: #54707E; white-space: nowrap;\">{{k}}</span>\n<span style=\"font-size: 13px; font-weight: 600; color: #0F2A33; white-space: nowrap;\">{{v}}</span>\n</div>", "path": "spec.rows", "itemEvents": []}, "days": {"kind": "for", "html": "<button class=\"pickable\" type=\"button\" {{DISABLED:off}} aria-label=\"{{aria}}\" aria-pressed=\"{{pressed}}\"  style=\"display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 12px 8px; border-radius: 12px; border: 1px solid {{bc}}; background: {{bg}}; color: {{fg}}; cursor: {{cursor}}; font-family: 'Geist', system-ui, sans-serif;\" data-idx=\"{{__idx}}\">\n<span style=\"font-size: 12px; font-weight: 600; opacity: 0.75;\">{{dow}}</span>\n<span style=\"font-size: 16px; font-weight: 700;\">{{date}}</span>\n<span style=\"font-size: 11px; font-weight: 600; color: {{freeFg}};\">{{free}}</span>\n</button>", "path": "days", "itemEvents": [{"event": "click", "field": "pick"}]}, "slots": {"kind": "for", "html": "<button class=\"pickable\" type=\"button\" {{DISABLED:off}} aria-label=\"{{aria}}\" aria-pressed=\"{{pressed}}\"  style=\"padding: 12px 8px; border-radius: 12px; border: 1px solid {{bc}}; background: {{bg}}; color: {{fg}}; cursor: {{cursor}}; font-family: 'Geist', system-ui, sans-serif; font-size: 15px; font-weight: 600; text-decoration: {{deco}};\" data-idx=\"{{__idx}}\">{{label}}</button>", "path": "slots", "itemEvents": [{"event": "click", "field": "pick"}]}, "notBooked": {"kind": "if", "html": "\n<div style=\"flex-grow: 1; display: flex; flex-direction: column; gap: 16px;\">\n\n<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n<span style=\"font-size: 13px; font-weight: 600; color: #0F2A33;\"><span style=\"color: #07789A;\">1</span> · Datum</span>\n<div class=\"days-grid\" style=\"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px;\">\n<div data-list=\"days\" id=\"list-days\"></div>\n</div>\n</div>\n\n<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n<span style=\"font-size: 13px; font-weight: 600; color: #0F2A33;\"><span style=\"color: #07789A;\">2</span><span data-b=\"76\"></span></span>\n<div class=\"slots-grid\" style=\"display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px;\">\n<div data-list=\"slots\" id=\"list-slots\"></div>\n</div>\n</div>\n\n<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n<span style=\"font-size: 13px; font-weight: 600; color: #0F2A33;\"><span style=\"color: #07789A;\">3</span> · Kontakt</span>\n<div style=\"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px;\">\n<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n<label for=\"bk-jmeno\" style=\"font-size: 12px; font-weight: 600; color: #54707E;\">Jméno a firma</label>\n<input id=\"bk-jmeno\" name=\"jmeno\" type=\"text\" placeholder=\"Jan Novák, Firma s.r.o.\" style=\"box-sizing: border-box; width: 100%; padding: 12px 16px; border-radius: 12px; border: 1px solid #DDE7EC; background: #FFFFFF; color: #0F2A33; font-family: 'Geist', system-ui, sans-serif; font-size: 14px; font-weight: 500;\">\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n<label for=\"bk-email\" style=\"font-size: 12px; font-weight: 600; color: #54707E;\">E-mail</label>\n<input id=\"bk-email\" name=\"email\" type=\"email\" placeholder=\"jmeno@firma.cz\" style=\"box-sizing: border-box; width: 100%; padding: 12px 16px; border-radius: 12px; border: 1px solid #DDE7EC; background: #FFFFFF; color: #0F2A33; font-family: 'Geist', system-ui, sans-serif; font-size: 14px; font-weight: 500;\">\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n<label for=\"bk-tel\" style=\"font-size: 12px; font-weight: 600; color: #54707E;\">Telefon</label>\n<input id=\"bk-tel\" name=\"telefon\" type=\"tel\" placeholder=\"+420\" style=\"box-sizing: border-box; width: 100%; padding: 12px 16px; border-radius: 12px; border: 1px solid #DDE7EC; background: #FFFFFF; color: #0F2A33; font-family: 'Geist', system-ui, sans-serif; font-size: 14px; font-weight: 500;\">\n</div>\n</div>\n</div>\n\n<div style=\"display: flex; flex-direction: column; gap: 14px; padding: 16px; border-radius: 16px; background: {{barBg}}; border: 1px solid {{barBc}}; transition: background 260ms ease, border-color 260ms ease;\" data-b=\"77\">\n<div style=\"display: flex; align-items: center; gap: 12px;\">\n<span aria-hidden=\"true\" style=\"width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: {{barDot}}; display: flex; align-items: center; justify-content: center;\" data-b=\"78\">\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#062B36\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"display: {{barCheck}};\" data-b=\"79\"><path d=\"m5 12.5 4.5 4.5L19 7.5\"></path></svg>\n</span>\n<span style=\"flex-grow: 1; font-size: 14px; line-height: 1.4; font-weight: 600; color: {{barFg}};\" data-b=\"80\"></span>\n</div>\n<button class=\"btn-acc\" type=\"button\" disabled=\"{{cantBook}}\"  style=\"box-sizing: border-box; width: 100%; padding: 13px 24px; border-radius: 12px; border: 0; background: {{bookBg}}; color: {{bookFg}}; font-family: 'Geist', system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: {{bookCursor}}; transition: background 220ms ease;\" data-b=\"81\">Rezervovat termín</button>\n</div>\n\n</div>\n", "path": "notBooked"}, "booked": {"kind": "if", "html": "\n<div class=\"ok\" style=\"flex-grow: 1; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 12px; padding: 32px; border-radius: 16px; background: #E7F5FA; border: 1px solid #9FD8E8;\">\n<span aria-hidden=\"true\" style=\"width: 52px; height: 52px; border-radius: 50%; background: {{accent}}; display: flex; align-items: center; justify-content: center;\" data-b=\"82\">\n<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#062B36\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5 12.5 4.5 4.5L19 7.5\"></path></svg>\n</span>\n<span style=\"font-family: 'Geist', system-ui, sans-serif; font-size: 30px; font-weight: 700; letter-spacing: -0.01em;\">Termín je rezervovaný</span>\n<span style=\"font-size: 16px; font-weight: 600; color: #0F2A33;\" data-b=\"83\"></span>\n<span style=\"font-size: 14px; line-height: 1.6; font-weight: 500; color: #54707E; max-width: 520px;\">Potvrzení pošleme e-mailem do jednoho pracovního dne. Pokud se termín nehodí, ozvěte se nám a domluvíme jiný.</span>\n<button class=\"btn-ghost\" type=\"button\"  style=\"margin-top: 4px; padding: 12px 20px; border-radius: 12px; border: 1px solid #9FD8E8; background: #FFFFFF; color: #0F2A33; font-family: 'Geist', system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer;\" data-b=\"84\">Vybrat jiný termín</button>\n</div>\n", "path": "booked"}};

  function getPath(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) { return undefined; }
      cur = cur[parts[i]];
    }
    return cur;
  }

  function mustache(tpl, vals) {
    return tpl.replace(/\{\{([\w.]+)\}\}/g, function (m, path) {
      var v = getPath(vals, path);
      return v == null ? "" : String(v);
    });
  }

  function applyAttr(el, name, tpl, vals) {
    if (name === "disabled") {
      var raw = tpl.replace(/\{\{([\w.]+)\}\}/g, function (m, path) {
        return String(!!getPath(vals, path));
      });
      if (raw.trim() === "true") { el.setAttribute("disabled", ""); }
      else { el.removeAttribute("disabled"); }
      return;
    }
    var out = mustache(tpl, vals);
    if (name === "class") { el.className = out; }
    else { el.setAttribute(name, out); }
  }

  // ---- DCLogic zakladni trida (setState + planovany render) ----
  function DCLogic(props) {
    this.props = props || {};
    this.state = {};
    this._scheduled = false;
  }
  DCLogic.prototype.setState = function (patch) {
    var s = this.state || {};
    for (var k in patch) { if (Object.prototype.hasOwnProperty.call(patch, k)) { s[k] = patch[k]; } }
    this.state = s;
    scheduleRender();
  };
  window.DCLogic = DCLogic;

  
class Component extends DCLogic {
  componentWillUnmount() {
    if (this._raf) { cancelAnimationFrame(this._raf); this._raf = 0; }
  }
  constructor(props) {
    super(props);
    this._drag = null;
    this._pend = null;
    this._raf = 0;
    this.state = { picked: ['hall'], priceMode: 'total', hover: null, tick: 0, touched: false, inside: false, viewUnit: 'hall', panX: 0, panY: 598, dragging: false, panned: false, dayIdx: 0, slot: null, booked: false };
  }
  renderVals() {
    var self = this;
    var st = this.state || {};
    var accent = this.props.accent || '#10C6E7';
    var dim = (this.props.dim == null ? 26 : this.props.dim) / 100;

    // Ukázková data. Upravte názvy, plochy a ceny zde:
    var units = [
      { id: 'hall',   name: 'Sklad',            m2: 60,  price: 6800,  x: 469, y: 360, height: '4,2\u00A0m', gate: '3\u00A0×\u00A03,5\u00A0m', floor: 'beton', open: false,
        avail: 'Ihned',      term: '12 měsíců', load: '5\u00A0t/m²', power: '3× 25\u00A0A', park: '2 stání' },
      { id: 'west',   name: 'Hala A',           m2: 220, price: 24500, x: 176, y: 329, height: '6,0\u00A0m', gate: '4\u00A0×\u00A04,5\u00A0m', floor: 'beton', open: false,
        avail: 'Ihned',      term: '12 měsíců', load: '5\u00A0t/m²', power: '3× 63\u00A0A', park: '4 stání' },
      { id: 'annex',  name: 'Přístavba',        m2: 115, price: 12900, x: 679, y: 426, height: '3,6\u00A0m', gate: '3\u00A0×\u00A03\u00A0m',   floor: 'beton', open: false,
        avail: 'od 1. 12.',  term: '12 měsíců', load: '3\u00A0t/m²', power: '3× 32\u00A0A', park: '2 stání' },
      { id: 'yard',   name: 'Venkovní plocha',  m2: 450, price: 9000,  x: 384, y: 559, height: 'bez\u00A0střechy', gate: 'brána\u00A06\u00A0m', floor: 'asfalt', open: true,
        avail: 'Ihned',      term: '6 měsíců',  load: '—',       power: '—',         park: '6 stání' },
      { id: 'office', name: 'Kancelář',         m2: 42,  price: 8400,  x: 42,  y: 504, height: '2,8\u00A0m', gate: 'dveře\u00A01,2\u00A0m', floor: 'vinyl',  open: false,
        avail: 'od 1. 11.',  term: '12 měsíců', load: '—',       power: '3× 16\u00A0A', park: '2 stání' }
    ];    // Časy prohlídek:
    var times = ['09:00', '09:30', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

    function czk(n) {
      return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    // Deterministická ukázková obsazenost
    function isTaken(d, i) {
      var x = Math.sin((d + 1) * 12.9898 + (i + 1) * 78.233) * 43758.5453;
      return (x - Math.floor(x)) < 0.38;
    }

    var picked = (st.picked && st.picked.length) ? st.picked : ['hall'];
    var primary = picked[picked.length - 1];
    var cur = st.hover || primary;
    var mode = st.priceMode || 'total';

    // Kliknutí jednotku přidá nebo odebere. Poslední vybraná se nedá odebrat,
    // aby výběr nikdy nebyl prázdný.
    function go(id, fix) {
      var s = self.state || {};
      var was = s.hover || (s.picked && s.picked[s.picked.length - 1]) || 'hall';
      var next = { hover: id, touched: true };
      // Vybírá se vždy jen jedna jednotka, klik tu předchozí nahradí.
      if (fix) { next.picked = [id]; }
      if (id !== was) { next.tick = (s.tick || 0) + 1; }
      self.setState(next);
    }

    var op = {}, pin = {}, pinS = {}, sw = {}, halo = {}, h = {};
    var ids = ['west', 'hall', 'annex', 'yard', 'office'];
    ids.forEach(function (id) {
      var on = id === cur;                       // pod myší nebo naposledy vybraná
      var sel = picked.indexOf(id) >= 0;         // ve výběru
      var lit = on || sel;
      op[id] = lit ? 1 : 0;
      sw[id] = on ? 3 : (sel ? 4 : 8);
      pin[id] = lit ? accent : 'rgba(15, 42, 51, 0.55)';
      pinS[id] = on ? 1.3 : (sel ? 1.15 : 1);
      halo[id] = on ? 'halo' : '';               // pulzuje jen jedna, jinak je to neklidné
      h[id] = {
        enter: function () { go(id, false); },
        pick: function () { go(id, true); }
      };
    });

    var active = units.filter(function (u) { return u.id === cur; })[0] || units[0];
    var chosenUnit = units.filter(function (u) { return u.id === primary; })[0] || units[0];
    var selUnits = units.filter(function (u) { return picked.indexOf(u.id) >= 0; });
    var selM2 = 0, selPrice = 0;
    selUnits.forEach(function (u) { selM2 += u.m2; selPrice += u.price; });
    var selName = (selUnits.length === 1)
      ? selUnits[0].name
      : (selUnits.length + (selUnits.length < 5 ? ' jednotky' : ' jednotek'));

    var rows = units.map(function (u) {
      var on = u.id === cur;
      var fixed = picked.indexOf(u.id) >= 0;
      var now = u.avail === 'Ihned';
      return {
        name: u.name,
        area: u.m2 + ' m\u00B2',
        avail: u.avail,
        availBg: now ? '#E0F2F8' : '#F6EEE0',
        availFg: now ? '#06657F' : '#7A5A2C',
        boxBg: fixed ? accent : '#FFFFFF',
        boxBc: fixed ? accent : (on ? '#9FD8E8' : '#C7D6DD'),
        price: (mode === 'per') ? (czk(u.price / u.m2) + ' Kč/m\u00B2') : (czk(u.price) + ' Kč'),
        aria: u.name + ', ' + u.m2 + ' metrů čtverečních, ' + czk(u.price) + ' korun měsíčně, dostupnost ' + u.avail,
        pressed: fixed ? 'true' : 'false',
        check: fixed ? 'block' : 'none',
        bg: on ? '#E7F5FA' : '#FFFFFF',
        bc: (on || fixed) ? '#9FD8E8' : '#DDE7EC',
        shadow: on ? '0 8px 20px rgba(9, 60, 76, 0.14)' : '0 0 0 rgba(9, 60, 76, 0)',
        enter: h[u.id].enter,
        pick: h[u.id].pick
      };
    });

    // Nejbližší pracovní dny
    var dowNames = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
    var base = new Date();
    base.setHours(0, 0, 0, 0);
    var all = [];
    var step = 1;
    while (all.length < 5 && step < 20) {
      var t = new Date(base.getTime() + step * 86400000);
      var w = t.getDay();
      if (w !== 0 && w !== 6) {
        all.push({ dow: dowNames[w], date: t.getDate() + '. ' + (t.getMonth() + 1) + '.' });
      }
      step++;
    }

    var freeCount = all.map(function (d, di) {
      var n = 0;
      for (var i = 0; i < times.length; i++) { if (!isTaken(di, i)) { n++; } }
      return n;
    });

    var dayIdx = st.dayIdx || 0;
    var days = all.map(function (d, i) {
      var on = i === dayIdx;
      var full = freeCount[i] === 0;
      return {
        dow: d.dow, date: d.date,
        free: full ? 'obsazeno' : (freeCount[i] + ' volné'),
        freeFg: on ? '#8FD9EC' : (full ? '#9FB2BC' : '#07789A'),
        aria: d.dow + ' ' + d.date + ', ' + (full ? 'obsazeno' : freeCount[i] + ' volných termínů'),
        pressed: on ? 'true' : 'false',
        off: full,
        cursor: full ? 'not-allowed' : 'pointer',
        bg: on ? '#0F2A33' : (full ? '#F1F5F7' : '#FFFFFF'),
        bc: on ? '#0F2A33' : '#DDE7EC',
        fg: on ? '#FFFFFF' : (full ? '#9FB2BC' : '#0F2A33'),
        pick: function () { if (!full) { self.setState({ dayIdx: i, slot: null }); } }
      };
    });

    var slots = times.map(function (label, i) {
      var off = isTaken(dayIdx, i);
      var on = st.slot === label;
      return {
        label: label,
        off: off,
        aria: off ? (label + ', obsazeno') : (label + ', volný termín'),
        pressed: on ? 'true' : 'false',
        bg: off ? '#F1F5F7' : (on ? '#0F2A33' : '#FFFFFF'),
        bc: off ? '#E3EBEF' : (on ? '#0F2A33' : '#DDE7EC'),
        fg: off ? '#9FB2BC' : (on ? '#FFFFFF' : '#0F2A33'),
        deco: off ? 'line-through' : 'none',
        cursor: off ? 'not-allowed' : 'pointer',
        pick: function () { if (!off) { self.setState({ slot: label }); } }
      };
    });

    var day = all[dayIdx] || all[0] || { dow: '', date: '' };
    var ready = !!st.slot;
    var summary = ready
      ? (selName + '  ·  ' + day.dow + ' ' + day.date + '  ·  ' + st.slot)
      : 'Vyberte datum a čas prohlídky';

    // Kamera: přiblížení s posunem tak, aby jednotka skončila uprostřed rámu,
    // ale nikdy se neodkryl okraj fotky.
    var CAM = 2.35;   // hlubší nálet, aby to působilo jako dolet, ne přiblížení
    function camT(c, size, mid) {
      var want = (mid - c) / CAM;
      var max = c * (CAM - 1) / CAM;
      var min = -(size - c) * (CAM - 1) / CAM;
      // 1 px rezerva dovnitř, aby se ani při zaokrouhlení neodkryl okraj fotky
      return Math.round(Math.max(min + 1, Math.min(max - 1, want)) * 10) / 10;
    }

    // Panorama: jedna otáčka je 2804 px, obrázek je v pásu dvakrát za sebou,
    // takže posun se jen zacyklí a přechod dokola není vidět.
    // Jedna otáčka je 3100 px a obrázek je v pásu dvakrát, takže se posun zacyklí.
    // Svisle se nezacykluje, jen dojede na kraj: 1070 px obrázku proti 690 px okna.
    var PANO_W = 3100;
    var PANO_MAX_Y = 1935 - 690;
    var PANO_Y0 = 598;
    function wrapPan(x) { var v = x % PANO_W; return v < 0 ? v + PANO_W : v; }
    function clampY(y) { return y < 0 ? 0 : (y > PANO_MAX_Y ? PANO_MAX_Y : y); }

    var inside = !!st.inside;
    var viewUnit = units.filter(function (u) { return u.id === (st.viewUnit || 'hall'); })[0] || units[0];
    var hasPano = viewUnit.id === 'hall';
    var panX = st.panX || 0;
    var panY = (st.panY === undefined) ? PANO_Y0 : st.panY;

    return {
      accent: accent,
      veil: inside ? 0.5 : (st.hover ? dim : 0),
      hintOp: (st.touched || inside) ? 0 : 1,
      zoomS: inside ? CAM : 1,
      zoomX: viewUnit.x,
      zoomY: viewUnit.y,
      zoomTX: inside ? camT(viewUnit.x, 740, 370) : 0,
      zoomTY: inside ? camT(viewUnit.y, 690, 345) : 0,
      flyCls: st.everInside ? (inside ? 'fly-in' : 'fly-out') : '',
      mapPe: inside ? 'none' : 'auto',
      chromeOp: inside ? 0 : 1,
      insideTarget: chosenUnit.name,
      chromePe: inside ? 'none' : 'auto',
      inOp: inside ? 1 : 0,
      inScale: inside ? 1 : 1.34,
      inShiftY: inside ? 0 : -22,
      inBlur: inside ? 0 : 3.5,
      inPe: inside ? 'auto' : 'none',
      inDelay: inside ? '620ms' : '0ms',
      insideHidden: inside ? 'false' : 'true',
      slideCls: inside ? 'slide-up' : '',
      viewed: {
        name: viewUnit.name,
        area: viewUnit.m2 + ' m\u00B2',
        height: viewUnit.height,
        gate: viewUnit.gate,
        floor: viewUnit.floor
      },
      scene: {
        schemaOp: hasPano ? 0 : 1,
        panoOp: hasPano ? 1 : 0,
        gateOp: (!hasPano && !viewUnit.open) ? 1 : 0,
        skyOp: (!hasPano && viewUnit.open) ? 1 : 0
      },
      ico: {
        warehouse: (viewUnit.id === 'yard' || viewUnit.id === 'office') ? 'none' : 'block',
        yard: (viewUnit.id === 'yard') ? 'block' : 'none',
        office: (viewUnit.id === 'office') ? 'block' : 'none'
      },
      panoPe: (inside && hasPano) ? 'auto' : 'none',
      panoHintOp: (hasPano && !st.panned) ? 1 : 0,
      panShift: -panX,
      panShiftY: -panY,
      panCursor: st.dragging ? 'grabbing' : 'grab',
      spinPause: st.panned ? 'is-paused' : '',
      panDown: function (e) {
        var s2 = self.state || {};
        self._drag = {
          x: e.clientX, y: e.clientY,
          px: (s2.panX || 0),
          py: (s2.panY === undefined ? PANO_Y0 : s2.panY)
        };
        // záchyt kurzoru: tažení pokračuje, i když myš vyjede mimo rámeček
        try {
          if (e.pointerId !== undefined && e.currentTarget.setPointerCapture) {
            e.currentTarget.setPointerCapture(e.pointerId);
          }
        } catch (err) {}
        self.setState({ dragging: true, panned: true });
      },
      panMove: function (e) {
        var d = self._drag;
        if (!d) { return; }
        // Poloha se jen odloží a překreslí se nejvýš jednou za snímek.
        // Myš umí posílat pohyb rychleji, než stačí prohlídka překreslit.
        self._pend = {
          x: wrapPan(d.px - (e.clientX - d.x)),
          y: clampY(d.py - (e.clientY - d.y))
        };
        if (!self._raf) {
          self._raf = requestAnimationFrame(function () {
            self._raf = 0;
            var p = self._pend;
            if (!p) { return; }
            self._pend = null;
            self.setState({ panX: p.x, panY: p.y });
          });
        }
      },
      panUp: function (e) {
        if (!self._drag) { return; }
        self._drag = null;
        try {
          if (e && e.pointerId !== undefined && e.currentTarget.releasePointerCapture) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        } catch (err) {}
        self.setState({ dragging: false });
      },
      panKey: function (e) {
        var s2 = self.state || {};
        var x = s2.panX || 0;
        var y = (s2.panY === undefined ? PANO_Y0 : s2.panY);
        if (e.key === 'ArrowLeft') { self.setState({ panX: wrapPan(x - 130), panned: true }); }
        else if (e.key === 'ArrowRight') { self.setState({ panX: wrapPan(x + 130), panned: true }); }
        else if (e.key === 'ArrowUp') { self.setState({ panY: clampY(y - 95), panned: true }); }
        else if (e.key === 'ArrowDown') { self.setState({ panY: clampY(y + 95), panned: true }); }
        else { return; }
        if (e.preventDefault) { e.preventDefault(); }
      },
      enterInside: function () { self.setState({ inside: true, everInside: true, viewUnit: (self.state.hover || primary), touched: true }); },
      exitInside: function () { self.setState({ inside: false, hover: null }); },
      op: op, pin: pin, pinS: pinS, sw: sw, halo: halo, h: h, rows: rows,
      badge: st.hover
        ? { name: active.name, price: czk(active.price) }
        : { name: selName, price: czk(selPrice) },
      badgeAnim: (st.tick || 0) % 2 === 0 ? 'badgePopA' : 'badgePopB',
      chosen: {
        name: selName,
        area: selM2 + ' m²',
        price: czk(selPrice),
        line: selName + ' · ' + selM2 + ' m² · ' + czk(selPrice) + ' Kč'
      },
      spec: {
        unit: chosenUnit.name,
        rows: [
          { k: 'Dostupnost',      v: chosenUnit.avail },
          { k: 'Min. doba nájmu', v: chosenUnit.term },
          { k: 'Světlá výška',    v: chosenUnit.height },
          { k: 'Vjezd',           v: chosenUnit.gate },
          { k: 'Nosnost podlahy', v: chosenUnit.load },
          { k: 'Elektro',         v: chosenUnit.power },
          { k: 'Parkování',       v: chosenUnit.park }
        ]
      },
      listLabel: 'Volné jednotky',
      listLabelFg: '#54707E',
      resetShow: 'none',
      clearSel: function () { self.setState({ picked: [primary], hover: null }); },
      modeTotalOn: mode === 'total' ? 'true' : 'false',
      modePerOn: mode === 'per' ? 'true' : 'false',
      modeTotalBg: mode === 'total' ? '#0F2A33' : '#FFFFFF',
      modeTotalBc: mode === 'total' ? '#0F2A33' : '#DDE7EC',
      modeTotalFg: mode === 'total' ? '#FFFFFF' : '#54707E',
      modePerBg: mode === 'per' ? '#0F2A33' : '#FFFFFF',
      modePerBc: mode === 'per' ? '#0F2A33' : '#DDE7EC',
      modePerFg: mode === 'per' ? '#FFFFFF' : '#54707E',
      setModeTotal: function () { self.setState({ priceMode: 'total' }); },
      setModePer: function () { self.setState({ priceMode: 'per' }); },
      days: days, slots: slots, summary: summary,
      dayLabel: day.dow + ' ' + day.date,
      booked: !!st.booked, notBooked: !st.booked,
      cantBook: !ready,
      barBg: ready ? '#0F2A33' : '#F5F9FB',
      barBc: ready ? '#0F2A33' : '#DDE7EC',
      barFg: ready ? '#FFFFFF' : '#54707E',
      barDot: ready ? accent : '#D4E0E6',
      barCheck: ready ? 'block' : 'none',
      bookBg: ready ? accent : '#E3EBEF',
      bookFg: ready ? '#062B36' : '#9FB2BC',
      bookCursor: ready ? 'pointer' : 'not-allowed',
      book: function () { if (ready) { self.setState({ booked: true }); } },
      reset: function () { self.setState({ booked: false, slot: null }); },
      clearHover: function () {
        var s = self.state || {};
        var was = s.hover || (s.picked && s.picked[s.picked.length - 1]) || 'hall';
        var back = (s.picked && s.picked[s.picked.length - 1]) || 'hall';
        self.setState({ hover: null, tick: (was !== back) ? (s.tick || 0) + 1 : (s.tick || 0) });
      }
    };
  }
}


  var comp = new Component({ accent: "#10C6E7", dim: 26 });
  var root = document.getElementById("page");
  var _raf2 = 0;

  function scheduleRender() {
    if (_raf2) { return; }
    _raf2 = requestAnimationFrame(function () { _raf2 = 0; render(); });
  }

  function renderDynamicText(vals) {
    BINDINGS.forEach(function (b) {
      var el = root.querySelector('[data-b="' + b.id + '"]');
      if (!el) { return; }
      b.attrs.forEach(function (a) { applyAttr(el, a.name, a.tpl, vals); });
      if (b.text != null) {
        var t = mustache(b.text, vals);
        if (el.textContent !== t) { el.textContent = t; }
      }
    });
  }

  function renderList(key, vals) {
    var tpl = TEMPLATES[key];
    var container = root.querySelector("#list-" + key.replace(/\./g, "_"));
    if (!container) { return; }
    var list = getPath(vals, tpl.path) || [];
    var need = list.length;
    while (container.children.length < need) {
      var wrap = document.createElement("div");
      wrap.innerHTML = tpl.html;
      container.appendChild(wrap.firstElementChild);
    }
    while (container.children.length > need) {
      container.removeChild(container.lastElementChild);
    }
    for (var i = 0; i < need; i++) {
      var item = list[i];
      var el = container.children[i];
      var html = tpl.html.replace(/\{\{DISABLED:(\w+)\}\}/g, function (m, f) {
        return item[f] ? "disabled" : "";
      });
      html = html.replace(/\{\{__idx\}\}/g, String(i));
      html = html.replace(/\{\{([\w.]+)\}\}/g, function (m, path) {
        var v = getPath(item, path);
        return v == null ? "" : String(v);
      });
      if (el.__lastHtml !== html) {
        var w = document.createElement("div");
        w.innerHTML = html;
        var newEl = w.firstElementChild;
        newEl.__lastHtml = html;
        container.replaceChild(newEl, el);
        el = newEl;
      }
    }
  }

  function bindListDelegation() {
    Object.keys(TEMPLATES).forEach(function (key) {
      var tpl = TEMPLATES[key];
      if (tpl.kind !== "for" || !tpl.itemEvents || !tpl.itemEvents.length) { return; }
      var container = root.querySelector("#list-" + key.replace(/\./g, "_"));
      if (!container || container.__delegated) { return; }
      container.__delegated = true;
      tpl.itemEvents.forEach(function (ie) {
        var domEvent = ie.event === "mouseenter" ? "mouseover" : (ie.event === "focus" ? "focusin" : ie.event);
        container.addEventListener(domEvent, function (e) {
          var itemEl = e.target.closest("[data-idx]");
          if (!itemEl || !container.contains(itemEl)) { return; }
          var idx = parseInt(itemEl.getAttribute("data-idx"), 10);
          var vals = comp.renderVals();
          var list = getPath(vals, tpl.path) || [];
          var item = list[idx];
          if (item && typeof item[ie.field] === "function") { item[ie.field](e); }
        });
      });
    });
  }

  function renderIfBlocks(vals) {
    Object.keys(TEMPLATES).forEach(function (key) {
      var tpl = TEMPLATES[key];
      if (tpl.kind !== "if") { return; }
      var holder = root.querySelector("#if-" + key.replace(/\./g, "_"));
      if (!holder) { return; }
      var on = !!getPath(vals, tpl.path);
      var mounted = holder.__mounted;
      if (on && !mounted) {
        holder.innerHTML = tpl.html;
        holder.style.display = "";
        holder.__mounted = true;
      } else if (!on && mounted) {
        holder.innerHTML = "";
        holder.style.display = "none";
        holder.__mounted = false;
      }
    });
  }

  function bindStaticEvents(vals) {
    EVENTS.forEach(function (ev) {
      var el = root.querySelector('[data-b="' + ev.id + '"]');
      if (!el) { return; }
      var domEvent = ev.event === "mouseenter" ? "mouseover" : (ev.event === "focus" ? "focusin" : ev.event);
      var flagKey = "__bound_" + domEvent;
      if (el[flagKey]) { return; }
      el[flagKey] = true;
      el.addEventListener(domEvent, function (e) {
        var curVals = comp.renderVals();
        var fn = getPath(curVals, ev.path);
        if (typeof fn === "function") { fn(e); }
      });
    });
  }

  function fitMapStages() {
    var wraps = root.querySelectorAll(".map-stage-wrap");
    wraps.forEach(function (wrap) {
      var inner = wrap.querySelector(".map-stage-inner");
      if (!inner) { return; }
      var scale = wrap.clientWidth / 740;
      inner.style.transform = "scale(" + scale + ")";
    });
  }

  function bindMobileMenu() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    if (!toggle || !menu || toggle.__bound) { return; }
    toggle.__bound = true;
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function render() {
    var vals = comp.renderVals();
    renderIfBlocks(vals);
    renderDynamicText(vals);
    Object.keys(TEMPLATES).forEach(function (key) {
      if (TEMPLATES[key].kind === "for") { renderList(key, vals); }
    });
    bindListDelegation();
    bindStaticEvents(vals);
    bindMobileMenu();
    fitMapStages();
  }

  if (comp.setup) { comp.setup(); }
  render();
  window.addEventListener("resize", fitMapStages);
})();
