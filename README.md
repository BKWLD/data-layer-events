# data-layer-events

This package pushes [Google Analytics type events](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) onto [Google Tag Manager's dataLayer variable](https://developers.google.com/tag-manager/devguide#datalayer).  It cleans up after each push by `null`-ing keys that aren't used and supports `nonInteraction` events.

## Setup

Setup Google Tag Manager Variables for:

  - `genericCategory`
	- `genericAction`
	- `genericLabel`
	- `genericValue`
	- `genericNonInteraction`

For example:

![Variable configuration example](http://yo.bkwld.com/201D0Z0i1d0a/Image%202016-08-19%20at%204.29.50%20PM.png)

Then create a Trigger for `genericEvent`.  Like this:

![Trigger configuration example](http://yo.bkwld.com/1S3X2h3Z0a3e/Image%202016-08-19%20at%204.30.53%20PM.png)

Finally create Tag that combines all of these.  Like this:

![Tag configuration example](http://yo.bkwld.com/0A3123240C1r/Image%202016-08-19%20at%204.32.04%20PM.png)


## Usage

```js
dataLayer = require('data-layer-events');

// Fire a normal, interaction event
dataLayer.event('Category', 'Action', 'Label', 'Value');

// Fire a non-interaction event
dataLayer.nonInteractionEvent('Category', 'Action', 'Label', 'Value');
```
