/// <reference path="../../../globals.d.ts" />
/// <reference path="./animation.d.ts" />
/// <reference path="../events/eventhandler.d.ts" />

declare module goog.fx.dom {

    class PredefinedEffect extends PredefinedEffect.__Class { }
    module PredefinedEffect {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.Animation.__Class {
    
            /**
             * Abstract class that provides reusable functionality for predefined animations
             * that manipulate a single DOM element
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start Array for start coordinates.
             * @param {Array.<number>} end Array for end coordinates.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.Animation}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
            /**
             * DOM Node that will be used in the animation
             * @type {Element}
             */
            element: Element;
    
            /**
             * Called to update the style of the element.
             * @protected
             */
            updateStyle: any /*missing*/;
    
            /**
             * Whether the DOM element being manipulated is rendered right-to-left.
             * @return {boolean} True if the DOM element is rendered right-to-left, false
             *     otherwise.
             */
            isRightToLeft(): boolean;
        }
    }

    class Slide extends Slide.__Class { }
    module Slide {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that will slide an element from A to B.  (This
             * in effect automatically sets up the onanimate event for an Animation object)
             *
             * Start and End should be 2 dimensional arrays
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start 2D array for start coordinates (X, Y).
             * @param {Array.<number>} end 2D array for end coordinates (X, Y).
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
        }
    }

    class SlideFrom extends SlideFrom.__Class { }
    module SlideFrom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.Slide.__Class {
    
            /**
             * Slides an element from its current position.
             *
             * @param {Element} element DOM node to be used in the animation.
             * @param {Array.<number>} end 2D array for end coordinates (X, Y).
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.Slide}
             * @constructor
             */
            constructor(element: Element, end: number[], time: number, opt_acc?: Function);
        }
    }

    class Swipe extends Swipe.__Class { }
    module Swipe {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that will slide an element into its final size.
             * Requires that the element is absolutely positioned.
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start 2D array for start size (W, H).
             * @param {Array.<number>} end 2D array for end size (W, H).
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
        }
    }

    class Scroll extends Scroll.__Class { }
    module Scroll {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that will scroll an element from A to B.
             *
             * Start and End should be 2 dimensional arrays
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start 2D array for start scroll left and top.
             * @param {Array.<number>} end 2D array for end scroll left and top.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
        }
    }

    class Resize extends Resize.__Class { }
    module Resize {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that will resize an element between two widths
             * and heights.
             *
             * Start and End should be 2 dimensional arrays
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start 2D array for start width and height.
             * @param {Array.<number>} end 2D array for end width and height.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
        }
    }

    class ResizeWidth extends ResizeWidth.__Class { }
    module ResizeWidth {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that will resize an element between two widths
             *
             * Start and End should be numbers
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {number} start Start width.
             * @param {number} end End width.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
        }
    }

    class ResizeHeight extends ResizeHeight.__Class { }
    module ResizeHeight {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that will resize an element between two heights
             *
             * Start and End should be numbers
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {number} start Start height.
             * @param {number} end End height.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
        }
    }

    class Fade extends Fade.__Class { }
    module Fade {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Creates an animation object that fades the opacity of an element between two
             * limits.
             *
             * Start and End should be floats between 0 and 1
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>|number} start 1D Array or Number with start opacity.
             * @param {Array.<number>|number} end 1D Array or Number for end opacity.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
            /**
             * Creates an animation object that fades the opacity of an element between two
             * limits.
             *
             * Start and End should be floats between 0 and 1
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>|number} start 1D Array or Number with start opacity.
             * @param {Array.<number>|number} end 1D Array or Number for end opacity.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number, time: number, opt_acc?: Function);
            /**
             * Creates an animation object that fades the opacity of an element between two
             * limits.
             *
             * Start and End should be floats between 0 and 1
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>|number} start 1D Array or Number with start opacity.
             * @param {Array.<number>|number} end 1D Array or Number for end opacity.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number, end: number[], time: number, opt_acc?: Function);
            /**
             * Creates an animation object that fades the opacity of an element between two
             * limits.
             *
             * Start and End should be floats between 0 and 1
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>|number} start 1D Array or Number with start opacity.
             * @param {Array.<number>|number} end 1D Array or Number for end opacity.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
    
            /**
             * Animation event handler that will show the element.
             */
            show(): void;
    
            /**
             * Animation event handler that will hide the element
             */
            hide(): void;
        }
    }

    class FadeOut extends FadeOut.__Class { }
    module FadeOut {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.Fade.__Class {
    
            /**
             * Fades an element out from full opacity to completely transparent.
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.Fade}
             * @constructor
             */
            constructor(element: Element, time: number, opt_acc?: Function);
        }
    }

    class FadeIn extends FadeIn.__Class { }
    module FadeIn {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.Fade.__Class {
    
            /**
             * Fades an element in from completely transparent to fully opacity.
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.Fade}
             * @constructor
             */
            constructor(element: Element, time: number, opt_acc?: Function);
        }
    }

    class FadeOutAndHide extends FadeOutAndHide.__Class { }
    module FadeOutAndHide {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.Fade.__Class {
    
            /**
             * Fades an element out from full opacity to completely transparent and then
             * sets the display to 'none'
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.Fade}
             * @constructor
             */
            constructor(element: Element, time: number, opt_acc?: Function);
        }
    }

    class FadeInAndShow extends FadeInAndShow.__Class { }
    module FadeInAndShow {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.Fade.__Class {
    
            /**
             * Sets an element's display to be visible and then fades an element in from
             * completely transparent to fully opaque.
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.Fade}
             * @constructor
             */
            constructor(element: Element, time: number, opt_acc?: Function);
        }
    }

    class BgColorTransform extends BgColorTransform.__Class { }
    module BgColorTransform {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Provides a transformation of an elements background-color.
             *
             * Start and End should be 3D arrays representing R,G,B
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start 3D Array for RGB of start color.
             * @param {Array.<number>} end 3D Array for RGB of end color.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @extends {goog.fx.dom.PredefinedEffect}
             * @constructor
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
            /**
             * Animation event handler that will set the background-color of an element
             */
            setColor(): void;
        }
    }

    class ColorTransform extends ColorTransform.__Class { }
    module ColorTransform {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.fx.dom.PredefinedEffect.__Class {
    
            /**
             * Provides a transformation of an elements color.
             *
             * @param {Element} element Dom Node to be used in the animation.
             * @param {Array.<number>} start 3D Array representing R,G,B.
             * @param {Array.<number>} end 3D Array representing R,G,B.
             * @param {number} time Length of animation in milliseconds.
             * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
             * @constructor
             * @extends {goog.fx.dom.PredefinedEffect}
             */
            constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
        }
    }

    /**
     * Fade elements background color from start color to the element's current
     * background color.
     *
     * Start should be a 3D array representing R,G,B
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 3D Array for RGB of start color.
     * @param {number} time Length of animation in milliseconds.
     * @param {goog.events.EventHandler=} opt_eventHandler Optional event handler
     *     to use when listening for events.
     */
    function bgColorFadeIn(element: Element, start: number[], time: number, opt_eventHandler?: goog.events.EventHandler<any>): void;
}
