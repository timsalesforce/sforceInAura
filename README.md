# W-13090382 - Need to allow Sfdc and sforce.one namespaces

When customers use Visualforce to host Lightning, the Lightning code is running inside an iframe. The Visualforce page loads some special javascript code to help it communicate with its parent (Lightning in the main window). That code relies on a few namespaces to help it work, and they are Sfdc, sforce, and sforce.one. So these namepsaces need to be allowed into the sandbox, like $A is.

## Repro steps
1. Clone this repository
2. Deploy to a scratch org
3. Create an Account
4. On the Account Record page, click on the "click me" button under the "auraWrapper" heading in the right panel.

Observe an error in the page itself saying that sforce is not defined.
