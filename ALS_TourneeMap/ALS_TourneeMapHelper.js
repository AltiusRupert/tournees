({
	// Get at least 2 places to display side list of addresses
 	initialize2Places : function(component) {        
        component.set('v.mapMarkers', [
            {
                location: {
                    City: 'Cap-d\'Ail',
                    Country: 'France',
                },

                icon: 'custom:custom26',
                title: 'Cap-d\'Ail'
            },
            {
                location: {
                    City: 'Beaulieu-sur-Mer',
                    Country: 'France',
                },

                icon: 'custom:custom96',
                title: 'Beaulieu-sur-Mer'
            },
        ]);
    },

    // Get all accounts from Salesforce
 	findPlaces : function(component) {        
        var action = component.get('c.findPlaces');
        action.setCallback(this, function(response) {
	        console.log(response.getState());
            if (response.getState() === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set('v.mapMarkers', JSON.parse(response.getReturnValue()));
                console.log(component.get('v.mapMarkers'));

            } else if (response.getState() === "ERROR") {
                console.log('error');
                $A.log("Errors", response.getError());
            }
        });
        
        $A.enqueueAction(action);
    }
})
