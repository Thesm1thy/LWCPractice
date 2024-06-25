import { LightningElement, track, wire } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountDisplayController.getAccountsByName';

export default class AccountSearch extends LightningElement {
    @track accountName = '';
    @track searchKey = '';
    @track accounts;
    @track error;

    @wire(getAccountsByName, { accountName: '$searchKey' })
    wiredAccounts(result) {
        console.log('Wire service called with result:', result);
        if (result.data) {
            this.accounts = result.data;
            this.error = undefined;
            console.log('Accounts retrieved:', result.data);
        } else if (result.error) {
            this.accounts = undefined;
            this.error = result.error;
            console.error('Error retrieving accounts:', result.error);
            this.displayError(result.error);
        }
    }

    handleInputChange(event) {
        this.accountName = event.target.value;
        console.log('Account Name Input:', this.accountName);
    }

    handleSearch() {
        this.searchKey = this.accountName;
        console.log('Search Key Set:', this.searchKey);
        console.log('Current Account Name:', this.accountName);
    }

}
