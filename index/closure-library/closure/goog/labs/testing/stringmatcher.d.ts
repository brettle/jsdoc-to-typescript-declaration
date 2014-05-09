/// <reference path="../../../../globals.d.ts" />
/// <reference path="./matcher.d.ts" />

declare module goog.labs.testing {

    class ContainsStringMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The ContainsString matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class EndsWithMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The EndsWith matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class EqualToIgnoringWhitespaceMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The EqualToIgnoringWhitespace matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class EqualsMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The Equals matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class RegexMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The MatchesRegex matcher.
         *
         * @param {!RegExp} regex The expected regex.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(regex: RegExp);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class StartsWithMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The StartsWith matcher.
         *
         * @param {string} value The expected string.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(value: string);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }

    class StringContainsInOrderMatcher implements goog.labs.testing.Matcher {
    
        /**
         * The StringContainsInOrdermatcher.
         *
         * @param {Array.<string>} values The expected string values.
         *
         * @constructor
         * @struct
         * @implements {goog.labs.testing.Matcher}
         * @final
         */
        constructor(values: string[]);
    
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
    
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }
}