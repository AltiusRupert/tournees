({
    init : function(component, event, helper) {
		helper.initialize2Places(component);

        component.set('v.center', 		{ location: { City: 'Paris' } });
        component.set('v.zoomLevel', 	4);
        component.set('v.markersTitle', 'Some people');
        component.set('v.showFooter', 	true);
    },
    
    loadData : function(component, event, helper) {
		helper.findPlaces(component);
    },

})
