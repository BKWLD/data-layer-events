###
# A lil' util to push stuff to the dataLayer while unsetting previous values
###

# String prepended to Google Analytics event properties
eventPrefix = 'generic'
eventName = eventPrefix + 'Event';

# Create the config for an event-type dataLayer object
createInteractionEvent = (category, action, label, value) ->
	event: eventName
	"#{eventPrefix}Category": category
	"#{eventPrefix}Action": action
	"#{eventPrefix}Label": label
	"#{eventPrefix}Value": value
	"#{eventPrefix}nonInteraction": false

# Push an event onto the dataLayer
push = (config) -> window.dataLayer.push config

# The API
module.exports =

	# Add event onto the dataLayer while nulling all existing
	event: (category, action, label = null, value = null, nonInteraction) ->
		push createInteractionEvent.apply null, arguments

	# Same as event,
	nonInteractionEvent: (category, action, label = null, value = null) ->
		config = createInteractionEvent.apply null, arguments
		config["#{eventPrefix}nonInteraction"] = true
		push config
