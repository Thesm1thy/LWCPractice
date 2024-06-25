import { LightningElement, track } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountDisplayController.getAccountsByName';

export default class DisplayAccount2 extends LightningElement {
    //searchKey = '';
    accountName = '';
    accounts;
    error;

    handleInputChange(event) {
        this.accountName = event.target.value;
        //this.searchKey = event.target.value;
    }

    async handleSearch() {
        try {
            const result = await getAccountsByName({ accountName: this.accountName });
            this.accounts = result;
            this.error = undefined;
        } catch (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

}