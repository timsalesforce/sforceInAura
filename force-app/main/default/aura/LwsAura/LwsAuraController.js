({
    onClick : function(_component, _event, _helper) {
        sforce.one.back(true);
    },
    navToRecord : function(component, event, _helper) {
        debugger;
        var navService = component.find("navService");
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '0010500000Z1GyzAAF',
                objectApiName: 'Account',
                actionName: 'view'
            }
     }
        event.preventDefault();
        navService.navigate(pageReference);
    }
})
