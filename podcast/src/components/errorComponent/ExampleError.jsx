import React, {Component} from 'react';
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

function ExampleError() {
    return (
        <div>
            <ErrorBoundary>
                <BuggyCounter/>
            </ErrorBoundary>
        </div>
    );
}

export default ExampleError;
