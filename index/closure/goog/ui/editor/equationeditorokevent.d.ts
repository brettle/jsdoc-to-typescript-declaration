// Generated Wed Apr 30 22:41:18 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/fx/dragger.d.ts" />
/// <reference path="../../../goog/i18n/bidi.d.ts" />
/// <reference path="../../../goog/string/typedstring.d.ts" />
/// <reference path="../../../goog/string/const.d.ts" />
/// <reference path="../../../goog/html/safeurl.d.ts" />
/// <reference path="../../../goog/dom/tags.d.ts" />
/// <reference path="../../../goog/html/safestyle.d.ts" />
/// <reference path="../../../goog/html/safehtml.d.ts" />
/// <reference path="../../../goog/dom/safe.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/iframe.d.ts" />
/// <reference path="../../../goog/events/focushandler.d.ts" />
/// <reference path="../../../goog/ui/modalpopup.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../../goog/ui/dialog.d.ts" />
/// <reference path="../../../goog/ui/editor/abstractdialog.d.ts" />

declare module goog.ui.editor {

    /**
     * OK event object for the equation editor dialog.
     * @param {string} equationHtml html containing the equation to put in the
     *     editable field.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class EquationEditorOkEvent extends goog.events.Event {
        /**
         * OK event object for the equation editor dialog.
         * @param {string} equationHtml html containing the equation to put in the
         *     editable field.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(equationHtml: string);
    
        /**
         * HTML containing the equation to put in the editable field.
         * @type {string}
         */
        equationHtml: string;
    }
}

