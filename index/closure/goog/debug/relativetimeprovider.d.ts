// Generated Wed Apr 30 22:44:37 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.debug.RelativeTimeProvider {

    /**
     * @return {goog.debug.RelativeTimeProvider} The default instance.
     */
    function getDefaultInstance(): goog.debug.RelativeTimeProvider;
}

declare module goog.debug {

    /**
     * A simple object to keep track of a timestamp considered the start of
     * something. The main use is for the logger system to maintain a start time
     * that is occasionally reset. For example, in Gmail, we reset this relative
     * time at the start of a user action so that timings are offset from the
     * beginning of the action. This class also provides a singleton as the default
     * behavior for most use cases is to share the same start time.
     *
     * @constructor
     * @final
     */
    class RelativeTimeProvider {
        /**
         * A simple object to keep track of a timestamp considered the start of
         * something. The main use is for the logger system to maintain a start time
         * that is occasionally reset. For example, in Gmail, we reset this relative
         * time at the start of a user action so that timings are offset from the
         * beginning of the action. This class also provides a singleton as the default
         * behavior for most use cases is to share the same start time.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Sets the start time to the specified time.
         * @param {number} timeStamp The start time.
         */
        set(timeStamp: number): void;
    
        /**
         * Resets the start time to now.
         */
        reset(): void;
    
        /**
         * @return {number} The start time.
         */
        get(): number;
    }
}
