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

![Variable configuration for category](https://user-images.githubusercontent.com/2195815/31870598-76725210-b7fa-11e7-999d-e1e48a12c5f6.png)

![Variable configuration for action](https://user-images.githubusercontent.com/2195815/31870578-5aca8244-b7fa-11e7-86d2-29d011643295.png)

Then create a Trigger for `genericEvent`.  Like this:

![Trigger configuration example](https://user-images.githubusercontent.com/2195815/31870614-8fb5b0e6-b7fa-11e7-83ea-1968ffc7328c.png)

Finally create Tag that combines all of these.  Like this:

![Tag configuration example](https://user-images.githubusercontent.com/2195815/31870519-2c0fd5e4-b7fa-11e7-8531-0fcd726c5532.png)


## Usage

```js
dataLayer = require('data-layer-events');

// Fire a normal, interaction event
dataLayer.event('Category', 'Action', 'Label', 'Value');

// Fire a non-interaction event
dataLayer.nonInteractionEvent('Category', 'Action', 'Label', 'Value');
```

A React Component example:

![A React Component example](https://user-images.githubusercontent.com/2195815/31870518-2bbde11c-b7fa-11e7-9d88-f5f19d961e92.png)