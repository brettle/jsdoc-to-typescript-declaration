/// <reference path="../../../globals.d.ts" />
/// <reference path="./promise.d.ts" />

declare module goog {

    interface Thenable<TYPE> extends IThenable<TYPE> {
    
        /**
          * Adds callbacks that will operate on the result of the Thenable, returning a
          * new child Promise.
          *
          * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
          * invoked with the fulfillment value as argument, and the child Promise will
          * be fulfilled with the return value of the callback. If the callback throws
          * an exception, the child Promise will be rejected with the thrown value
          * instead.
          *
          * If the Thenable is rejected, the {@code onRejected} callback will be invoked
          * with the rejection reason as argument, and the child Promise will be rejected
          * with the return value of the callback or thrown value.
          *
          * @param {?(function(this:THIS, TYPE):
          *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
          *     function that will be invoked with the fulfillment value if the Promise
          *     is fullfilled.
          * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
          *     be invoked with the rejection reason if the Promise is rejected.
          * @param {THIS=} opt_context An optional context object that will be the
          *     execution context for the callbacks. By default, functions are executed
          *     with the default this.
          * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
          *     of the fulfillment or rejection callback.
          * @template RESULT,THIS
          */
        then<RESULT,THIS>(opt_onFulfilled?: (_0: TYPE) => RESULT, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
        /**
          * Adds callbacks that will operate on the result of the Thenable, returning a
          * new child Promise.
          *
          * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
          * invoked with the fulfillment value as argument, and the child Promise will
          * be fulfilled with the return value of the callback. If the callback throws
          * an exception, the child Promise will be rejected with the thrown value
          * instead.
          *
          * If the Thenable is rejected, the {@code onRejected} callback will be invoked
          * with the rejection reason as argument, and the child Promise will be rejected
          * with the return value of the callback or thrown value.
          *
          * @param {?(function(this:THIS, TYPE):
          *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
          *     function that will be invoked with the fulfillment value if the Promise
          *     is fullfilled.
          * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
          *     be invoked with the rejection reason if the Promise is rejected.
          * @param {THIS=} opt_context An optional context object that will be the
          *     execution context for the callbacks. By default, functions are executed
          *     with the default this.
          * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
          *     of the fulfillment or rejection callback.
          * @template RESULT,THIS
          */
        then<RESULT,THIS>(opt_onFulfilled?: (_0: TYPE) => IThenable<RESULT>, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
        /**
         * Adds callbacks that will operate on the result of the Thenable, returning a
         * new child Promise.
         *
         * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
         * invoked with the fulfillment value as argument, and the child Promise will
         * be fulfilled with the return value of the callback. If the callback throws
         * an exception, the child Promise will be rejected with the thrown value
         * instead.
         *
         * If the Thenable is rejected, the {@code onRejected} callback will be invoked
         * with the rejection reason as argument, and the child Promise will be rejected
         * with the return value of the callback or thrown value.
         *
         * @param {?(function(this:THIS, TYPE):
         *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
         *     function that will be invoked with the fulfillment value if the Promise
         *     is fullfilled.
         * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
         *     be invoked with the rejection reason if the Promise is rejected.
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     with the default this.
         * @return {!goog.Promise.<RESULT>} A new Promise that will receive the result
         *     of the fulfillment or rejection callback.
         * @template RESULT,THIS
         */
        then<RESULT,THIS>(opt_onFulfilled?: (_0: TYPE) => Thenable<RESULT>, opt_onRejected?: (_0: any) => any, opt_context?: THIS): goog.Promise<RESULT>;
    }
}

declare module goog.Thenable {

    /**
     * An expando property to indicate that an object implements
     * {@code goog.Thenable}.
     *
     * {@see addImplementation}.
     *
     * @const
     */
    var IMPLEMENTED_BY_PROP: any /*missing*/;

    /**
     * Marks a given class (constructor) as an implementation of Thenable, so
     * that we can query that fact at runtime. The class must have already
     * implemented the interface.
     * Exports a 'then' method on the constructor prototype, so that the objects
     * also implement the extern {@see goog.Thenable} interface for interop with
     * other Promise implementations.
     * @param {function(new:goog.Thenable,...[?])} ctor The class constructor. The
     *     corresponding class must have already implemented the interface.
     */
    function addImplementation(ctor: (_0: any[][]) => any /*missing*/): void;

    /**
     * @param {*} object
     * @return {boolean} Whether a given instance implements {@code goog.Thenable}.
     *     The class/superclass of the instance must call {@code addImplementation}.
     */
    function isImplementedBy(object: any): boolean;
}
